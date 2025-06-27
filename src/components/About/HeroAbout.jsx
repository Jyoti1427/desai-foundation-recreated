import React from "react";
import heroImage from "../../assets/about/aboutus-headerbg.jpg";

const HeroAbout = () => {
  return (
   <section className="relative w-full mb-12 h-[40vh] md:h-[70vh]">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-rose-950 bg-opacity-20"></div>
    </section>
  );
};

export default HeroAbout;
