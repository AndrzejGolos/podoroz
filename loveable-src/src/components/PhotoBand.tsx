interface PhotoBandProps {
  src: string;
  alt: string;
  position?: string;
  height?: string;
  className?: string;
  fade?: string;
}

const defaultFade = "linear-gradient(to bottom, black 70%, transparent 100%)";

const PhotoBand = ({ src, alt, position = "center", height, className = "", fade }: PhotoBandProps) => {
  const h = height || "h-[40vh] md:h-[50vh] lg:h-[60vh]";
  const mask = fade ?? defaultFade;
  return (
    <div className={`w-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full ${h} object-cover grayscale`}
        style={{
          objectPosition: position,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
        loading="lazy"
      />
    </div>
  );
};

export default PhotoBand;
