import React from "react";
import img2 from "../img/g12.png";
import SEO from "../components/Seo";

const About = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full bg-neutral-100 py-5  px-4 sm:px-3 md:py-10 md:px-5 gap-10">
      <SEO
        title="AICURD – About AICURD"
        description="AICURD Foundation, founded in 1985, empowers rural & urban India through education, health, women empowerment, and community development projects."
        keywords="AICURD, AICURD Foundation, All India Centre for Urban and Rural Development, NGO India, Rural Development, Urban Development, Women Empowerment, Education NGO, Health NGO, Community Development, SHG Formation, Skill Training, Inclusive Growth, Social Welfare Projects, Tribal Development, SC ST OBC Welfare, Child Development NGO, Holistic Development India"
        author="AICURD Foundation"
      />

      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-11/12 gap-10">
        {/* Image Section */}
        <img
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          src={img2}
          alt="Image2"
        />

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center text-center md:items-start p-4 sm:p-6 md:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold anton-regular text-orange-500 tracking-wider uppercase text-center md:text-left">
            Our Vision
          </h1>

          <p className="py-10 text-base sm:text-lg md:text-xl font-base poppins-regular text-justify ">
            To undertake innovative and experimental welfare projects in urban
            and rural areas with the focus on upliftment of disadvantaged
            sections such as Scheduled Castes, Scheduled Tribes, Other Backward
            Classes, women and children, aged, handicapped, infirm, and mentally
            retarded.
            <br />
            <br />
            To review the functioning of delivery system for development and to
            suggest ways and means of making these more effective so as to reach
            the poor urban and rural dwellers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
