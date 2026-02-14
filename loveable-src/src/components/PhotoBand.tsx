interface PhotoBandProps {
  src: string;
  alt: string;
  position?: string;
}

const PhotoBand = ({ src, alt, position = "center" }: PhotoBandProps) => {
  return (
    <div className="w-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover grayscale"
        style={{ objectPosition: position }}
        loading="lazy"
      />
    </div>
  );
};

export default PhotoBand;
