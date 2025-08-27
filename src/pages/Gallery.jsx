import React from "react";

// Example images — use your own
const images = [
  "https://picsum.photos/id/1015/400/600",
  "https://picsum.photos/id/1021/600/400",
  "https://picsum.photos/id/1025/500/700",
  "https://picsum.photos/id/1031/700/500",
  "https://picsum.photos/id/1035/400/500",
  "https://picsum.photos/id/1041/500/400",
  "https://picsum.photos/id/1045/600/800",
  "https://picsum.photos/id/1051/800/600",
  "https://picsum.photos/id/1061/450/650",
];

const GalleryPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Masonry Image Gallery
      </h1>

      {/* Masonry Grid using Tailwind `columns` */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="w-full rounded-lg shadow-md hover:shadow-lg mb-3 break-inside-avoid object-cover cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
