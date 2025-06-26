import React from "react";
import heroImage from "../../../assets/OurWrok/OurWrokHero.jpeg";

const HeroBanner = () => {
  return (
    <section className="relative w-full mb-12 h-auto mt-0 pt-0">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
    </section>
  );
};

export default HeroBanner;
