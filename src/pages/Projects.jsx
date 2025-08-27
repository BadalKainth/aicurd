import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsData from "./ProjectData";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full bg-lime-400 py-10 px-4 sm:px-6 md:px-10"
      id="projects"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold anton-regular text-black tracking-wider uppercase text-center mb-5">
        PROJECTS
      </h1>
      <p className="text-center poppins-regular-italic text-sm sm:text-base tracking-wide mb-6 w-full max-w-5xl">
        AICURD Foundation undertakes holistic development projects across urban
        and rural India, focusing on education, health, women empowerment, and
        community upliftment. Through grassroots engagement and
        government-supported initiatives, it aims to improve quality of life and
        promote inclusive growth.
      </p>

      <div className="w-full md:w-11/12">
        <Slider {...settings}>
          {ProjectsData.map((project, idx) => (
            <div
              key={idx}
              className="px-4 poppins-regular mb-5 sm:px-3 overflow-visible"
            >
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 relative hover:scale-[1.05] hover:z-20">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                    {project.title.slice(0, 30)}
                    <span>...</span>
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-gray-600 mb-2">
                    <span>~</span>
                    {project.author}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {project.description.slice(0, 110)}
                    <span>...</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
