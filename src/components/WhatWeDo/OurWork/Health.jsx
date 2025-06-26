import React from "react";
import HoverCard from "../../ui/HoverCard";
import img1 from "../../../assets/OurWrok/heros-community.jpeg";
import img2 from "../../../assets/OurWrok/bal-mela.jpeg";
import img3 from "../../../assets/OurWrok/kids-in-park.jpeg";
import img4 from "../../../assets/OurWrok/Gynec-checup.jpeg";
import img5 from "../../../assets/OurWrok/health-camp.jpeg";
import img6 from "../../../assets/OurWrok/cancer-camp.jpeg";
import img7 from "../../../assets/OurWrok/vision-checkup.jpeg";
import img8 from "../../../assets/OurWrok/desai-gynec.jpeg";

const cardData = [
  {
    bgImage: img1,
    buttonLabel: "HEROES FOR HUMMANITY",
    hoverText:
      "Heroes for Humanity 500 Heroes, Millions of Lives Uplifted During her visit...",
    overlayRounded: false,
  },
  {
    bgImage: img2,
    buttonLabel: "Bal Health Mela",
    hoverText:
      "Bal Health Mela A Fun Filled Fair Providing Access to Health...",
    overlayRounded: false,
  },
  {
    bgImage: img3,
    buttonLabel: "Primary Health & Hygiene Education",
    hoverText:
      "Primary Health and Hygiene Education Uplifting Children to Live Healthy Lives Health Education Prevention The...",
    overlayRounded: true,
  },
  {
    bgImage: img4,
    buttonLabel: "Health & Hygiene Awareness",
    hoverText:
      "Health & Hygiene Awareness Empowering Communities Through Health Education and Practices Health Education Accéss...",
    overlayRounded: true,
  },
  {
    bgImage: img5,
    buttonLabel: "Pediatric Checkup & Awareness Camp",
    hoverText:
      "Pediatric Checkup & Awareness Camp Fostering Child Health Development: Comprehensive Pediatric...",
    overlayRounded: true,
  },
  {
    bgImage: img6,
    buttonLabel: "Cancer Checkup & Awareness Camp",
    hoverText:
      "Cancer Checkup & Awareness Camp Advancing Health by elevating Cancer Awareness...",
    overlayRounded: true,
  },
  {
    bgImage: img7,
    buttonLabel: "Vision Checkup & Awareness Camp",
    hoverText:
      "Vision Checkup & Awareness Camp Empowering Communities Through Vision Care Health Access &...",
    overlayRounded: true,
  },
  {
    bgImage: img8,
    buttonLabel: "Gynec Checkup & Awareness Camp",
    hoverText:
      "The Gynec Check-up & Awareness Camps Promoting Healthier Lives Through Comprehensive...",
    overlayRounded: true,
  },
];

const Health = () => {
  return (
    <section id="#health" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center pb-12">
          {/* section heading */}
          <div className="h-1 w-full bg-pink-950"></div>
          <h2 className="text-2xl font-extrabold text-pink-950 py-3 uppercase ">
            Health
          </h2>
          <div className="h-1 w-full bg-pink-950"></div>
        </div>

        {/* cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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
              overlayRounded={card.overlayRounded}
            />
             ))}
        </div>
      </div>
    </section>
  );
};

export default Health;
