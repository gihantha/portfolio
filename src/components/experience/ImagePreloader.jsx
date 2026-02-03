// components/experience/ImagePreloader.jsx
import { useEffect, useState } from "react";

export const useImagePreloader = (imageUrls) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    let isMounted = true;
    const loadedImages = new Set();
    const erroredImages = new Set();

    const preloadImage = (url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        
        img.onload = () => {
          if (isMounted && !loadedImages.has(url)) {
            loadedImages.add(url);
            setLoadedCount(loadedImages.size);
          }
          resolve();
        };
        
        img.onerror = () => {
          if (isMounted && !erroredImages.has(url)) {
            erroredImages.add(url);
            setErrorCount(erroredImages.size);
          }
          resolve();
        };
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage));

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return { loadedCount, errorCount };
};