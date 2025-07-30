import React from "react";
import img2 from "../img/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full bg-neutral-100 py-20 px-4 sm:px-6 md:px-10 gap-10">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-4/5 gap-10">
        {/* Image Section */}
        <img
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          src={img2}
          alt="Image2"
        />

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start p-4 sm:p-6 md:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold anton-regular text-orange-500 tracking-wider uppercase text-center md:text-left">
            Our Mission
          </h1>

          <p className="py-10 text-base sm:text-lg md:text-xl font-base poppins-regular text-center md:text-left">
            Accusantium dignissimos voluptas rem consequatur blanditiis error
            ratione illo sit quasi ut, praesentium magnam, pariatur quae,
            necessitatibus.
            <br />
            <br />
            Dolor, eligendi voluptate ducimus itaque esse autem perspiciatis
            sint! Recusandae dolor aliquid inventore sit,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
