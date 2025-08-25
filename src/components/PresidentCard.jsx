import React, { useState } from "react";
import img2 from "../img/Hero.jpeg";

const PresidentCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-full bg-amber-100 py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 outline outline-2 outline-orange-500 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold anton-regular text-orange-500 tracking-wider uppercase mb-6">
            Our Journey
          </h1>
          <div className="flex flex-col justify-center items-center lg:items-start py-5 text-sm sm:text-base font-base poppins-regular text-justify space-y-4">
            <p>
              <strong>
                All India Centre for Urban and Rural Development (AICURD)
              </strong>
              , a non-governmental organisation, was founded by D.P. Ray, the
              then Member of Parliament, in 1985. After sustaining its existence
              for three years through non-funded projects, it began receiving
              government-funded projects in 1988 and eventually grew into a
              national-level NGO operational in 6 states: Uttarakhand, Gujarat,
              Rajasthan, West Bengal, Jammu & Kashmir, and Delhi.
            </p>
            <p>
              <strong>1988–89:</strong> Hosted a National Seminar on prevention
              of atrocities on women (Dept. of Women and Child Development, HRD
              Ministry). Set up a Sewing-cum-Training Centre for poor women and
              girls at Rampura, Delhi. Donated hand-driven sewing machines to
              distressed women.
            </p>

            {showMore && (
              <>
                <p>
                  <strong>1989–90:</strong> Conducted socio-economic survey of
                  SC/STs in Dumka (Bihar). Launched potable drinking water and
                  awareness programs at Moradabad (UP) and Sidhi (MP), funded by
                  CAPART.
                </p>
                <p>
                  <strong>1990–91:</strong> Launched Adult Education project at
                  Golaghat (Assam) and awareness program at Jalpaiguri (West
                  Bengal).
                </p>
                <p>
                  <strong>1991–92:</strong> Youth & sports exhibitions,
                  socio-economic surveys (Purulia, Nizamabad), integration
                  camps, and skill training programs.
                </p>
                <p>
                  <strong>1994–97:</strong> A landmark nationwide awareness
                  project (Bharat Nirman Action Plan) across 110 locations,
                  promoting India’s freedom struggle from a secular, humanist
                  perspective.
                </p>
                <p>
                  <strong>1998–2001:</strong> Continued implementation of
                  shorthand, typing, and computer-based skill development
                  projects with a focus on empowerment through education.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto rounded-xl shadow-md"
            src={img2}
            alt="About AICURD"
          />
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More..."}
      </button>
    </div>
  );
};

export default PresidentCard;
