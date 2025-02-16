import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

export function ImageComponent({ src, className, alt, hash }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <Blurhash
        hash={hash}
        width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && (
        <img src={src} className={className} alt={alt} />
      )}
    </>
  );
}
