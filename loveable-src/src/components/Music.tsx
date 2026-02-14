import albumCover from "@/assets/album-cover.jpg";
import { useLang } from "@/lib/language";
import { useReveal } from "@/lib/useReveal";

const tracks = [
  { num: 1, title: "Oj, ty dube-dube", duration: "3:46" },
  { num: 2, title: "Iszła wdowa", duration: "6:49" },
  { num: 3, title: "Oj, upaw snieżok", duration: "3:17" },
  { num: 4, title: "Cyhanka-worożka", duration: "3:40" },
  { num: 5, title: "Oj, ne kuj zozule", duration: "3:55" },
  { num: 6, title: "Oj, haj baťko, oj haj maty", duration: "4:52" },
  { num: 7, title: "Och, ne płacz maty", duration: "2:27" },
  { num: 8, title: "Oj, werbo-werbo", duration: "3:46" },
  { num: 9, title: "Szo ja w neńky ta j na odchodi", duration: "2:46" },
  { num: 10, title: "Oj, u poli bylyna stojała", duration: "5:34" },
  { num: 11, title: "Dy horeło kupajło", duration: "2:03" },
  { num: 12, title: "Wydno riczku zdaleka", duration: "4:24" },
  { num: 13, title: "Koły b Boh daw zweczora pohodu", duration: "3:02" },
  { num: 14, title: "Na żowtisińkim pisoczku", duration: "4:30" },
  { num: 15, title: "Iz-za hory kamjanoji", duration: "4:12" },
];

const Music = () => {
  const { lang } = useLang();
  const sectionReveal = useReveal(0.1);
  const videoReveal = useReveal(0.2);

  return (
    <section id="music" className="px-6 py-24 md:py-32">
      <div
        ref={sectionReveal.ref}
        className={`mx-auto max-w-content reveal ${sectionReveal.visible ? "visible" : ""}`}
      >
        <p className="text-muted-foreground small-caps text-sm mb-16 tracking-widest">
          {lang === "pl" ? "Muzyka" : "Music"}
        </p>

        {/* Album */}
        <div className="mb-16">
          <img
            src={albumCover}
            alt={lang === "pl" ? "Podorож – album debiutancki" : "Podorож – debut album"}
            className="w-48 md:w-56 h-auto grayscale hover:grayscale-0 transition-[filter] duration-700 mb-10"
            loading="lazy"
          />
        </div>

        {/* Tracklist */}
        <ol className="space-y-0 mb-16">
          {tracks.map((track) => (
            <li
              key={track.num}
              className="flex items-baseline justify-between text-sm md:text-base font-light border-b border-border/50 py-3 px-2 -mx-2 hover:bg-foreground/[0.03] transition-colors duration-200"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-muted-foreground tabular-nums w-6 text-right">
                  {track.num}.
                </span>
                <span className="text-foreground">{track.title}</span>
              </span>
              <span className="text-muted-foreground tabular-nums ml-4 shrink-0">
                {track.duration}
              </span>
            </li>
          ))}
        </ol>

        {/* Streaming links */}
        <div className="flex items-center gap-8">
          {["Spotify", "Bandcamp", "Apple Music", "YouTube"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>

      {/* Video */}
      <div
        ref={videoReveal.ref}
        className={`mx-auto max-w-content mt-16 reveal ${videoReveal.visible ? "visible" : ""}`}
      >
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full grayscale hover:grayscale-0 transition-[filter] duration-500"
            src="https://www.youtube.com/embed/iW5gPqvmQ70"
            title={lang === "pl" ? "Podorож — koncert" : "Podorож — live"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Music;
