import React from "react";
import heroImage from "../../assets/Awards/AwardsHero.jpg";

const AwardsHero = () => {
  return (
    <section className="relative w-full mb-12 h-auto ">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
    </section>
  );
};

export default AwardsHero;
