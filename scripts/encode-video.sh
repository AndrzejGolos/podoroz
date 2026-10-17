#!/usr/bin/env bash
# Cut and encode the film segments used on the v2 site.
#
# Source: video-source/ciemne-srebro.mp4 (1920x1080, 30 fps, kept out of git).
# Output: site/public/video/*.mp4 and site/public/posters/*.webp
#
# Scrub segments are all-intra H.264 (every frame a keyframe) so that setting
# video.currentTime lands instantly in every browser. 12 fps + light denoise
# keep the grass texture from exploding the bitrate.
#
# Mobile variants are 9:16 crops whose horizontal centre follows the people
# in frame. Keyframes are "time:centre" pairs, centre as a fraction of the
# source width, time relative to the segment start; values in between are
# interpolated linearly.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/video-source/ciemne-srebro.mp4"
OUT_V="$ROOT/site/public/video"
OUT_P="$ROOT/site/public/posters"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$OUT_V" "$OUT_P"

FPS=12
DENOISE="hqdn3d=3:3:4:4"
X264_INTRA=(-an -c:v libx264 -preset slow -g 1 -pix_fmt yuv420p -movflags +faststart)

# Build an ffmpeg crop x-expression from "t:centre" keyframes (9:16 crop of 1080p).
crop_x_expr() {
  python3 - "$@" <<'PY'
import sys
W, CW = 1920, 608
kf = [tuple(map(float, a.split(":"))) for a in sys.argv[1:]]
def x(c): return max(0, min(W - CW, c * W - CW / 2))
expr = f"{x(kf[-1][1]):.1f}"
for (t0, c0), (t1, c1) in reversed(list(zip(kf, kf[1:]))):
    x0, x1 = x(c0), x(c1)
    seg = f"{x0:.1f}+({x1 - x0:.1f})*(t-{t0})/{t1 - t0}"
    expr = f"if(lt(t\\,{t1})\\,{seg}\\,{expr})"
expr = f"if(lt(t\\,{kf[0][0]})\\,{x(kf[0][1]):.1f}\\,{expr})"
print(expr)
PY
}

# encode_scrub NAME START END "kf..."  -> NAME-desktop.mp4, NAME-mobile.mp4
encode_scrub() {
  local name=$1 start=$2 end=$3; shift 3
  local dur; dur=$(python3 -c "print($end-$start)")
  local cx; cx=$(crop_x_expr "$@")
  ffmpeg -v error -y -ss "$start" -t "$dur" -i "$SRC" \
    -vf "fps=$FPS,$DENOISE,scale=960:-2" -crf 28 "${X264_INTRA[@]}" "$OUT_V/$name-desktop.mp4"
  ffmpeg -v error -y -ss "$start" -t "$dur" -i "$SRC" \
    -vf "setpts=PTS-STARTPTS,crop=608:1080:x='$cx':y=0,fps=$FPS,$DENOISE,scale=540:960" -crf 29 "${X264_INTRA[@]}" "$OUT_V/$name-mobile.mp4"
}

# --- Hero: drone rise (1:04.0-1:21.2) dissolving into top-down (1:25.6-1:43.4).
# The eye-level field insert at 1:22-1:25 is cut out.
hero() {
  local a_start=64.0 a_dur=17.2 b_start=85.6 b_dur=17.8 xf=0.6
  local off; off=$(python3 -c "print($a_dur-$xf)")
  local cxa cxb
  cxa=$(crop_x_expr 0:0.42 2:0.46 5:0.52 7:0.54 12:0.56 15:0.62 17.2:0.62)
  cxb=$(crop_x_expr 0:0.38 3.4:0.36 5.4:0.38 7.4:0.44 10:0.42 14:0.47 17.8:0.49)
  ffmpeg -v error -y -ss $a_start -t $a_dur -i "$SRC" -ss $b_start -t $b_dur -i "$SRC" -filter_complex \
    "[0:v]fps=$FPS,setpts=PTS-STARTPTS[a];[1:v]fps=$FPS,setpts=PTS-STARTPTS[b];[a][b]xfade=transition=fade:duration=$xf:offset=$off,$DENOISE,scale=960:-2[v]" \
    -map "[v]" -crf 31 "${X264_INTRA[@]}" "$OUT_V/hero-desktop.mp4"
  ffmpeg -v error -y -ss $a_start -t $a_dur -i "$SRC" -ss $b_start -t $b_dur -i "$SRC" -filter_complex \
    "[0:v]setpts=PTS-STARTPTS,crop=608:1080:x='$cxa':y=0,fps=$FPS[a];[1:v]setpts=PTS-STARTPTS,crop=608:1080:x='$cxb':y=0,fps=$FPS[b];[a][b]xfade=transition=fade:duration=$xf:offset=$off,$DENOISE,scale=540:960[v]" \
    -map "[v]" -crf 32 "${X264_INTRA[@]}" "$OUT_V/hero-mobile.mp4"
}

# --- Chairs: static closing shot (3:59.9-4:06.3), normal playback loop.
chairs() {
  ffmpeg -v error -y -ss 239.9 -t 6.3 -i "$SRC" -an -vf "scale=1280:-2" \
    -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT_V/chairs.mp4"
}

# poster NAME SOURCE_SECONDS [crop centre for the mobile variant]
poster() {
  local name=$1 t=$2 c=${3:-0.5}
  local x; x=$(python3 -c "print(max(0,min(1920-608,round($c*1920-304))))")
  ffmpeg -v error -y -ss "$t" -i "$SRC" -frames:v 1 -vf "$DENOISE,scale=1600:-2" "$TMP/$name-d.png"
  ffmpeg -v error -y -ss "$t" -i "$SRC" -frames:v 1 -vf "crop=608:1080:$x:0,$DENOISE,scale=720:-2" "$TMP/$name-m.png"
  cwebp -quiet -q 72 "$TMP/$name-d.png" -o "$OUT_P/$name-desktop.webp"
  cwebp -quiet -q 72 "$TMP/$name-m.png" -o "$OUT_P/$name-mobile.webp"
}

[[ "${1:-all}" == hero ]] && { hero; ls -l "$OUT_V"/hero-*; exit 0; }
hero
# Journey: woman with suitcase walks to the group, then the group with suitcases.
encode_scrub journey 52.0 62.9 0:0.66 2:0.52 4:0.34 4.6:0.40 5.4:0.60 10.9:0.62
# Ensemble close-ups, in order: Ewa Karasińska, Ewa „Mysza” Starzyk, Andrzej Gołoś, Wójciak, Amelia Pietroczuk.
encode_scrub ensemble 104.3 124.1 0:0.20 4.2:0.27 4.9:0.57 8.6:0.60 9.2:0.42 12.6:0.57 13.2:0.45 16.2:0.62 16.8:0.58 19.8:0.50
chairs

poster hero-start 64.0 0.50
poster hero-end 103.0 0.49
poster journey 58.5 0.60
poster m1 107.5 0.25
poster m2 111.8 0.60
poster m3 116.2 0.57
poster m4 120.2 0.62
poster m5 123.5 0.52
poster chairs 243.0 0.5
poster film 90.0 0.45

ls -l "$OUT_V" "$OUT_P"
