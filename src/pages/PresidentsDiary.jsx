import React from "react";
import PresidentCard from "../components/PresidentCard";
import SEO from "../components/Seo";

const PresidentsDiary = () => {
  return (
    <>
      <SEO
        title="All India Centre for Urban & Rural Development (AICURD)"
        description="All India Centre for Urban & Rural Development (AICURD) – NGO working since 1985 on education, health, women empowerment, and inclusive growth in India."
        keywords="AICURD, All India Centre for Urban and Rural Development, NGO India, Rural Development, Urban Development, Women Empowerment, Education NGO, Health NGO, Community Development, Skill Training, SHG Formation, Inclusive Growth, Social Welfare Projects, Tribal Development, SC ST OBC Welfare, Child Development NGO, Holistic Development India, Grassroots NGO, Non Governmental Organisation Delhi"
        author="AICURD Foundation"
        url="https://aicurd.org"
        image="https://aicurd.org/images/cover.jpg"
      />
      <div className="flex flex-col justify-center items-center w-full h-full bg-white px-4 sm:px-6 md:px-10 py-10 gap-6 sm:gap-8 md:gap-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold anton-regular text-black tracking-wider uppercase text-center">
          PRESIDENT'S DESK
        </h1>

        <div className="flex flex-col justify-between items-center w-full bg-white">
          <PresidentCard />
        </div>
      </div>
    </>
  );
};

export default PresidentsDiary;
