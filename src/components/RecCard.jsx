import React, { useState } from "react";

const RecCard = () => {
  const CardData = [
    {
      id: 1,
      title: "Environment Conservation Uttarakhand",
      description:
        "AICURD Uttarakhand has in-house workforce meant for community mobilization for creating awareness on healthy environment, environment conservation and plantation. The plantation drives are strategically planned so that they inspire various strata of the society.",
      color: "bg-amber-500",
    },
    {
      id: 2,
      title: "JAN SHIKSHAN SANSTHAN, JALPAIGURI, WEST BENGAL",
      description:
        "Jan Shikshan Sansthan is a vocational training institute under the Ministry of Skill Development, Govt. of India. The Jan Shikshan Sansthan was established in 2000 at Jalpaiguri in West Bengal for promoting quality of human life, human settlements and physical and social environments. The activities of JSS has been expanded in taking up vocational & skill development programmes for illiterate, semiliterate people of the backward communities in both urban & rural areas of the district to make themselves self dependent.",
      color: "bg-lime-500",
    },
    {
      id: 3,
      title: "Articoll – The Cultural Wing Delhi",
      description:
        "‘Articoll’ is an artistic branch of the mother tree All India Centre for Urban and Rural Development. It is a theatre group that aspires to bring in positive change with theatre as a source of healing, growth and development and mostly consists of students who study at the free computer training centre at AICURD.",
      color: "bg-gray-500",
    },
    {
      id: 4,
      title: "Computer Literacy – Delhi",
      description:
        "The Computer Training Centre at the Delhi headquarter office of AICURD, started off in February 2016 as an initiative to promote education and improve livelihoods of people from different areas of Delhi. The objective is to involve these groups in constructive activities and instill an academic bent of mind to generate and facilitate productive growth and development in the areas they represent. Since its inception, the Computer Training Course has imparted free computer training to over 2000 students aged 14 and above (focusing primarily on the Economically Weaker Section) and handed out nationally recognized certificates.",
      color: "bg-lime-500",
    },
    {
      id: 5,
      title: "Craft Development Centre –Baramulla,J&K",
      description:
        "AICURD Baramulla in J & K has implemented the following programmes during the last two years: a) Crewel and Telhi centers for ST communities, b) Embroidery for ST (sozni) beneficiaries. AICURD Baramulla has stepped in 12 years of its existence, and over each passing year, it has developed expertise necessary for the attainment of its objectives and cherished goals.",
      color: "bg-amber-500",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="poppins-regular">
      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center text-center">
        {CardData.map((card) => (
          <div
            key={card.id}
            className={`${card.color} p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-white cursor-pointer h-[200px] md:h-[300px]`}
            onClick={() => setSelectedCard(card)}
          >
            <div className="outline outline-2 outline-gray-100 p-5 w-full flex flex-col justify-start h-full">
              <h2 className="text-lg md:text-xl lg:text-2xl poppins-regular font-bold mb-2 tracking-wider uppercase">
                {card.title}
              </h2>
              <p className="text-sm md:text-base text-justify lg:text-neutral-200 poppins-regular overflow-hidden max-h-24">
                {card.description}
              </p>
              <button className="mt-auto text-xs md:text-sm underline text-white hover:text-gray-200">
                Click to view
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center text-center  justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-700 font-bold text-xl"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>
            <h2 className={`text-2xl font-bold mb-4 tracking-wider uppercase`}>
              {selectedCard.title}
            </h2>
            <p className="text-gray-800 text-justify poppins-regular">
              {selectedCard.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecCard;
