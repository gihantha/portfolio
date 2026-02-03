import { useState, useEffect, useRef } from "react";
import ImageErrorBoundary from "../ImageErrorBoundary";

export const ImageCarousel = ({ images }) => {
  useEffect(() => {
    const preloadPromises = images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => resolve(img.src);
        image.onerror = () => resolve(null);
      });
    });
    Promise.all(preloadPromises);
  }, [images]);

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {images.map((img, index) => (
          <ImageErrorBoundary key={index}>
            <SimpleCarouselItem img={img} />
          </ImageErrorBoundary>
        ))}
      </div>
    </div>
  );
};

const SimpleCarouselItem = ({ img }) => {
  const [status, setStatus] = useState('loading');
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    if (!image) return;

    const updateStatus = () => {
      if (image.complete) {
        setStatus('loaded');
      } else {
        setStatus('error');
      }
    };

    image.addEventListener('load', () => setStatus('loaded'));
    image.addEventListener('error', () => setStatus('error'));
    updateStatus();
    return () => {
      image.removeEventListener('load', () => setStatus('loaded'));
      image.removeEventListener('error', () => setStatus('error'));
    };
  }, []);

  return (
    <div className="min-w-[85%] md:min-w-[70%] snap-center">
      <div className="h-56 md:h-72 rounded-xl overflow-hidden border-2 border-blue-500 relative bg-linear-to-br from-purple-900/20 to-cyan-900/20">
        {status === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
        {status === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-red-900/20">
            <div className="text-3xl mb-2">⚠️</div>
            <p className="text-sm text-center">Failed to load image</p>
            <p className="text-xs text-gray-500 mt-2 truncate max-w-full">{img.src}</p>
          </div>
        )}
        <img
          ref={imgRef}
          src={img.src}
          alt={img.alt || "Carousel image"}
          className={`w-full h-full object-cover carousel-item project-image ${status === 'loaded' ? 'opacity-100 fade-in' : 'opacity-0'} transition-opacity duration-300`}
          crossOrigin="anonymous"
          style={{ display: status === 'loaded' ? 'block' : 'none' }}
        />
      </div>
      {img.caption && (
        <p className="text-sm text-gray-400 mt-2 text-center">{img.caption}</p>
      )}
    </div>
  );
};
