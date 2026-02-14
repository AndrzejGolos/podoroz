interface PhotoBandProps {
  src: string;
  alt: string;
  position?: string;
  height?: string;
  className?: string;
}

const PhotoBand = ({ src, alt, position = "center", height, className = "" }: PhotoBandProps) => {
  const h = height || "h-[40vh] md:h-[50vh] lg:h-[60vh]";
  return (
    <div className={`w-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full ${h} object-cover grayscale`}
        style={{ objectPosition: position }}
        loading="lazy"
      />
    </div>
  );
};

export default PhotoBand;
