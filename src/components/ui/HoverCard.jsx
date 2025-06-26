import React, { useState } from "react";

const HoverCard = ({
  height = "h-[28rem]",
  width = "w-[20rem]",
  bgImage = "",
  buttonLabel = "Explore",
  hoverText = "Some description text",
  learnMoreLabel = "Learn More",
  overlayColor = "bg-black",
  overlayRounded = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 cursor-pointer ${height} ${width}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image layer */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-transform duration-700 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Custom overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isHovered ? "opacity-60" : "opacity-0"
        } ${overlayColor} ${overlayRounded ? "rounded-xl" : ""}`}
      />

      {/* Main Button */}
      <button
        className={`absolute left-1/2 -translate-x-1/2 px-10 py-3 transition-all duration-500 z-20 font-bold rounded-2xl text-center bg-primary text-white uppercase whitespace-nowrap ${
          isHovered ? "bottom-[16rem]" : "bottom-6"
        }`}
      >
        {buttonLabel}
      </button>

      {/* Hover Text */}
      <div
        className={`absolute flex flex-col items-center justify-center w-full text-white text-center left-1/2 -translate-x-1/2 px-6 transition-all duration-800 z-10 ${
          isHovered ? "bottom-6 opacity-100" : "bottom-0 opacity-0"
        }`}
      >
        <p className="text-sm font-medium mb-4 max-w-[90%] mx-auto">
          {hoverText}
        </p>

        {/* Learn More button */}
        <button className="px-6 py-2 text-sm font-bold uppercase border border-white rounded-full bg-transparent text-white hover:bg-white hover:text-black transition duration-1000">
          {learnMoreLabel}
        </button>
      </div>
    </div>
  );
};

export default HoverCard;
