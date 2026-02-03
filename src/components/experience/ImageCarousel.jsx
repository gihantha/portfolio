export const ImageCarousel = ({ images }) => {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="min-w-[85%] md:min-w-[70%] snap-center"
          >
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {img.caption && (
              <p className="text-sm text-gray-400 mt-2">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
