import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import BlogsData from "./BlogData";

const Blogs = () => {
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
      id="blogs"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold anton-regular text-black tracking-wider uppercase text-center mb-5">
        Our Blogs
      </h1>
      <p className="text-center poppins-regular-italic text-sm sm:text-base tracking-wide mb-6 w-full max-w-3xl">
        Explore insights, updates, and stories through our latest blogs.
      </p>

      <div className="w-full md:w-11/12">
        <Slider {...settings}>
          {BlogsData.map((blog, idx) => (
            <div
              key={idx}
              className="px-20 poppins-regular mb-5 sm:px-3 overflow-visible"
            >
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 relative hover:scale-[1.05] hover:z-20">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-3 sm:p-4 flex flex-col justify-between h-[230px]">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      {blog.title.slice(0, 31)}
                      <span>...</span>
                    </h2>
                    <p className="text-sm sm:text-base whitespace-pre-line text-justify text-gray-600">
                      {blog.metadescription.slice(0, 200)}...
                    </p>
                    {/* <p className="text-sm sm:text-base whitespace-pre-line  text-justify text-gray-600">
                      {blog.description.slice(0, 180)}...
                    </p> */}
                  </div>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="mt-4 text-sm sm:text-base text-orange-500 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
