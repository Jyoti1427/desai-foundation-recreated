import React from "react";
import heroImage from "../../assets/images/working-women.jpg";
import logo from "../../assets/images/desai_logo-white.png";
import mapGif from "../../assets/images/indiamap.gif";

const Hero = () => {
  return (
    <section className="relative py-16 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
      </div>

      {/* Foreground Content */}

      <div className="relative z-20 text-white text-center px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-10">
          {/* Left side: Logo + Heading */ }
          <div className="flex flex-col items-start mt-24">
            <img src={logo} alt="DF Logo" className="h-32 md:h-52 mb-4" />
            <h1 className="mt-6 text-2xl md:text-2xl text-left font-extrabold uppercase leading-tight">
              Building Resilient Communities and Cultivating Dignity
            </h1>
          </div>

          {/* Right side: GIF */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={mapGif}
              alt="Hero Animation"
              className="h-[500px] md:h-[500px] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
