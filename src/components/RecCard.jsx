import React from "react";

const RecCard = () => {
  const CardData = [
    {
      id: 1,
      title: "Non-Formal Education",
      description:
        "To promote education, AICURD has undertaken Condensed Courses of Education for women in Delhi, Non-formal Education at Jammu (J&K).",
      color: "bg-amber-500",
    },
    {
      id: 2,
      title: "Youth Welfare",
      description:
        "AICURD undertook various programmes ensuring the participation of youth in different parts of the country which include National Service Volunteer Scheme at Adilabad (A.P), Jalpaiguri (W.B.)",
      color: "bg-lime-500",
    },
    {
      id: 3,
      title: "Yamuna Action Plan",
      description:
        "AICURD has been assigned the task of developing a Pilot Scale Model on Participatory Waste Management in Bhalaswa Resettlement Colony",
      color: "bg-gray-500",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {CardData.map((card) => (
          <div
            key={card.id}
            className={`${card.color} h-55 p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-start text-start items-start text-white`}
          >
            <div className="outline outline-2 outline-gray-100 p-5  w-full h-full flex flex-col justify-start">
              <h2 className="text-3xl poppins-regular font-bold mb-2 tracking-wider uppercase">
                {card.title}
              </h2>
              <p className="text-neutral-200 poppins-regular">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecCard;
