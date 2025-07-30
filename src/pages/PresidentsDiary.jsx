import React from "react";
import PresidentCard from "../components/PresidentCard";

const PresidentsDiary = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-white px-4 sm:px-6 md:px-10 py-10 gap-6 sm:gap-8 md:gap-10">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold anton-regular text-black tracking-wider uppercase text-center">
        PRESIDENT'S DESK
      </h1>

      <div className="flex flex-col justify-between items-center w-full bg-white">
        <PresidentCard />
      </div>
    </div>
  );
};

export default PresidentsDiary;
