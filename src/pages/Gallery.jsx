import React, { useState } from "react";
import g1 from "../img/g1.png";
import g2 from "../img/g2.png";
import g3 from "../img/g3.png";
import g4 from "../img/g4.png";
import g5 from "../img/g5.png";
import g6 from "../img/g6.png";
import g7 from "../img/g7.png";
import g8 from "../img/g8.png";
import g9 from "../img/g9.png";
import g10 from "../img/g10.png";
import g11 from "../img/g11.png";
import g12 from "../img/g12.png";
import g13 from "../img/g13.png";
import g14 from "../img/g14.png";
import g15 from "../img/g15.png";
import g16 from "../img/g16.png";
import g17 from "../img/g17.png";
import g18 from "../img/g18.png";
import g19 from "../img/g19.png";
import g20 from "../img/g20.png";
import g21 from "../img/g21.png";
import g22 from "../img/g22.png";
import g23 from "../img/g23.png";
import g24 from "../img/g24.png";
import g25 from "../img/g25.png";
import g26 from "../img/g26.png";
import g27 from "../img/g27.png";
import g28 from "../img/g28.png";
import g29 from "../img/g29.png";
import g30 from "../img/g30.png";
import g31 from "../img/g31.png";
import g32 from "../img/g32.png";
import g33 from "../img/g33.png";
import g34 from "../img/g34.png";
import g35 from "../img/g35.png";
import g36 from "../img/g36.png";
import g37 from "../img/g37.png";
import g38 from "../img/g38.png";
import g39 from "../img/g39.png";
import g40 from "../img/g40.png";
import g41 from "../img/g41.png";
import g42 from "../img/g42.png";
import g43 from "../img/g43.png";
import g44 from "../img/g44.png";
import g45 from "../img/g45.png";
import g46 from "../img/g46.png";
import g47 from "../img/g47.png";
import g48 from "../img/g48.png";
// import g49 from "../img/g49.png";
import g50 from "../img/g50.png";
import g51 from "../img/g51.png";

const images = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
  g14,
  g15,
  g16,
  g17,
  g18,
  g19,
  g20,
  g21,
  g22,
  g23,
  g24,
  g25,
  g26,
  g27,
  g28,
  g29,
  g30,
  g31,
  g32,
  g33,
  g34,
  g35,
  g36,
  g37,
  g38,
  g39,
  g40,
  g41,
  g42,
  g43,
  g44,
  g45,
  g46,
  g47,
  g48,
  // g49,
  g50,
  g51,
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full rounded-lg shadow-md hover:shadow-lg mb-3 break-inside-avoid-column object-cover cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            loading="lazy"
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
