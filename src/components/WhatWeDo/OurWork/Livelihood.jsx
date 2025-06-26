import React from "react";
import HoverCard from "../../ui/HoverCard";
import img1 from "../../../assets/OurWrok/Asani.jpeg";
import img2 from "../../../assets/OurWrok/heros-community.jpeg";
import img3 from "../../../assets/OurWrok/sewing-skill-train.jpeg";
import img4 from "../../../assets/OurWrok/banking.jpeg";
import img5 from "../../../assets/OurWrok/help-desk.jpeg";
import img6 from "../../../assets/OurWrok/candle-diya-making.jpeg";
import img7 from "../../../assets/OurWrok/english.jpeg";
import img8 from "../../../assets/OurWrok/career-education.jpeg";
import img9 from "../../../assets/OurWrok/personality.jpeg";
import img10 from "../../../assets/OurWrok/computer.jpeg";
import img11 from "../../../assets/OurWrok/entreprenurship.jpeg";
import img12 from "../../../assets/OurWrok/chocolate.jpeg";



const cardData = [
  {
    bgImage: img1,
    buttonLabel: "Asani Sanitary Napkin Program",
    hoverText:
      "Asani Sanitary Napkin Program: By Women For Women Job Access INITIATIVE BY THE Educatión Advocacy Dignity The Challenge Menstruation is...",
  },
  {
    bgImage: img2,
    buttonLabel: "Heroes for Humanity",
    hoverText:
      "Heroes for Humanity 500 Heroes, Millions of Lives Uplifted During her visit...",
  },
  {
    bgImage: img3,
    buttonLabel: "Sewing Skill Training",
    hoverText:
      "Sewing Skill Training Vocational Empowerment for Sustainable Livelihoods Economic Empowerment Jobs Entrepreneurship The Challenge In rural...",
  },
  {
    bgImage: img4,
    buttonLabel: "Banking & Saving Education Program",
    hoverText:
      "Health & Hygiene Awareness Empowering Communities Through Health Education and Practices Health Education Accéss...",
  },
  {
    bgImage: img5,
    buttonLabel: "Help Desk Streamline Access",
    hoverText:
      "Help Desk Streamlining Access to Financial and Government Services Access & Awareness Education Economic...",
  },
  {
    bgImage: img6,
    buttonLabel: "Candle & Diya Making Training",
    hoverText:
      "Candle & Diya Making Training Fostering Artisanal Entrepreneurship and Community Economic Empowerment Jobs Entrepreneurship The...",
  },
  {
    bgImage: img7,
    buttonLabel: "Spoken English program",
    hoverText:
      "Spoken English Program Bridging Communication Gaps for Global Engagement Economic Empowerment Jobs Education The Challenge In...",
  },
  {
    bgImage: img8,
    buttonLabel: "Career Guidance and Development Program",
    hoverText:
      "Career Guidance and Development Program Strategically Navigating Career Pathways for Youth..",
  },
  {
    bgImage: img9,
    buttonLabel: "Personality Development Training",
    hoverText:
      "Personality Development Training Shaping Confident and Competent Leaders of Tomorrow Education Dignity, Economic Empowerment The...",
  },
  {
    bgImage: img10,
    buttonLabel: "Computer Skill Training",
    hoverText:
      "Computer Skill Training Empowering Rural Communities with Digital Literacy Economic Empowerment Jobs Entrepreneurship Education The Challenge In...",
  },
  {
    bgImage: img11,
    buttonLabel: "Entrepreneurship Development Training ",
    hoverText:
      "Entrepreneurship Development Training & Awareness Program Empowering Aspiring Entrepreneurs with Essential..",
  },
  {
    bgImage: img12,
    buttonLabel: "Chocolate Making Training",
    hoverText:
      "Chocolate Making Training Fostering Culinary Excellence and Business Skills Economic Empowerment Jobs Entrepreneurship The Challenge In...",
  },
];

const Livelihood = () => {
  return (
    <section id="#livelihood" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center pb-12">
          {/* section heading */}
          <div className="h-1 w-full bg-pink-950"></div>
          <h2 className="text-2xl font-extrabold text-pink-950 py-3 uppercase ">
            LIvelihood
          </h2>
          <div className="h-1 w-full bg-pink-950"></div>
        </div>

        {/* cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
          {cardData.map((card, index) => (
            <HoverCard
              key={index}
              height="h-[28rem]"
              width="w-[25rem]"
              bgImage={card.bgImage}
              buttonLabel={card.buttonLabel}
              hoverText={card.hoverText}
              learnMoreLabel="LEARN MORE"
              overlayColor="bg-black/100"
              overlayRounded={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Livelihood;
