import img2 from "../img/Hero.jpeg";

const PresidentCard = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-amber-100 py-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 outline outline-2 outline-orange-500 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold anton-regular text-orange-500 tracking-widest uppercase mb-6">
            Milestone
          </h1>
          <div className="flex flex-col justify-center items-center lg:items-start py-5 text-sm sm:text-base font-base poppins-regular text-justify space-y-4">
            <p>
              None can ignore the genuine desire of the Government to uplift the
              SC/ST people and the role played by its efforts in changing the
              mode of thinking and attitudes of these two segments of the
              population. Thus, the educational policies of the Government,
              provision of reservation in jobs, policies in the fields of
              agriculture, cooperation, communication, industrialization, social
              services, etc. have brought the members of the Scheduled Caste and
              Scheduled Tribe communities closer to the main stream of national
              life. Tribal markets have been linked up with urban markets
              providing greater economic opportunities to the tribals and SCs
              creating a commercial attitude in them, as a result, the concept
              of saving is gaining acceptance, and there is a definite shift in
              the consumption pattern of these two communities from need based
              to consumer durable goods. Yet, all said and done, the efforts so
              far have not helped in solving, in any significant measure, the
              problems of poverty, malnutrition and exploitation faced by the
              tribal as well as the Scheduled Castes.
            </p>
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
      <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base">
        <a href="/profile">Show More ..</a>
      </button>
    </div>
  );
};

export default PresidentCard;
