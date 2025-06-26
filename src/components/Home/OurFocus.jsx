import React from "react";
import HoverCard from "../ui/HoverCard";
import img1 from "../../assets/images/health.jpg";
import img2 from "../../assets/images/livelihood-img1.jpg";
import img3 from "../../assets/images/menstrualequity.jpg";
import img4 from "../../assets/images/women-and-children.jpg";


const focusData = [
  {
    bgImage: img1,
    buttonLabel: "Health",
    hoverText:
      "We empower women and children to lead healthier lives. Our diverse programs provide education, awareness, resources, and opportunities to support women's health and well-being.",
    learnMoreLabel: "LEARN MORE",
  },
  {
    bgImage: img2,
    buttonLabel: "Livelihood",
    hoverText:
      "We believe in the transformative impact of education and skill-building opportunities for women and children. Our programs cultivate dignity and open doors to a brighter future",
    learnMoreLabel: "LEARN MORE",
  },
  {
    bgImage: img3,
    buttonLabel: "Menstrual Equity",
    hoverText:
      "We empower women and girls by advancing menstrual equity initiatives. Our programs reduce stigmas, increase access to essential hygiene products, supports girls to stay in school, and facilitates women's full participation in the workforce.",
    learnMoreLabel: "LEARN MORE",
  },
  {
    bgImage: img4,
    buttonLabel: "Women & child",
    hoverText:
      "We believe that women and girls have the capacity to be change agents in their villages and communities. Our programs support a variety of initiatives related to women's health, livelihood, menstrual equity, education, and climate action.",
    learnMoreLabel: "LEARN MORE",
  },
];

const OurFocus = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center py-10">
        <h1 className="text-primary text-[30px] font-bold mb-5">Our Focus</h1>
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
          Building resilient communities and cultivating dignity
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-0 gap-2 px-2">
        {focusData.map((item, index) => (
          <HoverCard
            key={index}
            bgImage={item.bgImage}
            buttonLabel={item.buttonLabel}
            hoverText={item.hoverText}
            learnMoreLabel="LEARN MORE"
            overlayColor="bg-pink-900/80"
            overlayRounded={false}
            width="w-full"
            height="h-[30rem]"
            fullWidthButton={true}
          />
        ))}
      </div>

      {/* bottom content */}
      <div className="w-full py-20 bg-pink-300">
        <div className="md:max-w-[80rem] mx-auto">
          <h1 className="text-pink-950 text-[26px] font-bold text-center mb-5 uppercase">
            Our pledge
          </h1>
          <p className="text-center font-extrabold text-[19px] text-pink-950">
            Every dollar raised goes directly to programs that change lives for
            women and girls in rural India. Our staff and infrastructure are
            supported by the founding endowment from the Desai Family and its
            Board Members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFocus;
