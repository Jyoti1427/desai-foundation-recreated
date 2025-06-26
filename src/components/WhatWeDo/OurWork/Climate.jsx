import React from "react";
import HoverCard from "../../ui/HoverCard";
import img1 from "../../../assets/OurWrok/EV-ricksahw.jpeg";
import img2 from "../../../assets/OurWrok/solar-skill.jpeg";

const Climate = () => {
  return (
    <section id="#climate" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center pb-12">
          {/* section heading */}
          <div className="h-1 w-full bg-pink-950"></div>
          <h2 className="text-2xl font-extrabold text-pink-950 py-3 uppercase ">
            menstrual Equity
          </h2>
          <div className="h-1 w-full bg-pink-950"></div>
        </div>

        {/* cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <HoverCard
            height="h-[28rem]"
            width="w-[25rem]"
            bgImage={img1}
            buttonLabel="Asani Sanitary Napkin Program"
            hoverText="Asani Sanitary Napkin Program: By Women For Women Job Access INITIATIVE BY THE Educatión Advocacy Dignity The Challenge Menstruation is..."
            learnMoreLabel="LEARN MORE"
            overlayColor="bg-black/100"
            overlayRounded={false}
          />
          <HoverCard
            height="h-[28rem]"
            width="w-[25rem]"
            bgImage={img2}
            buttonLabel="Heroes for Humanity"
            hoverText="Heroes for Humanity 500 Heroes, Millions of Lives Uplifted During her visit..."
            learnMoreLabel="LEARN MORE"
            overlayColor="bg-black/100"
            overlayRounded={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Climate;
