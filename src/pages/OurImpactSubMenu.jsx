import React from "react";
import Hero from "../components/OurImpact/Hero";
import ImpactcardsSlide from "../components/OurImpact/ImpactcardsSlide";
import ImpactSlides from "../components/OurImpact/ImpactSlides";

const OurImpactSubMenu = () => {
  return (
    <div>
      <Hero />
      <ImpactSlides />
      <ImpactcardsSlide />
    </div>
  );
};

export default OurImpactSubMenu;
