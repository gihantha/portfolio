import { useState } from "react";

export const ImageCarousel = ({ images }) => {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {images.map((img) => (
          <CarouselItem key={img.src} img={img} />
        ))}
      </div>
    </div>
  );
};

const CarouselItem = ({ img }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-w-[85%] md:min-w-[70%] snap-center">
      <div className="h-56 md:h-72 rounded-xl overflow-hidden border border-white/10 relative bg-black/20 flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin" />
          </div>
        )}

        <img
          src={img.src}
          alt={img.alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      </div>

      {img.caption && (
        <p className="text-sm text-gray-400 mt-2">{img.caption}</p>
      )}
    </div>
  );
};
