import React, { useState } from "react";
import Button from "./Button"; // adjust this import path if needed

const NewsCard = ({
  imgSrc,
  imgAlt = "Card Image",
  title = "Default Title",
  buttonLabel = "Learn More",
  width = "w-full",
  height = "h-[20rem]",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative border border-primary rounded-2xl overflow-hidden ${width}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with overlay */}
      <div className={`relative ${height} overflow-hidden`}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-pink-600 transition-opacity duration-500 ${
            hovered ? "opacity-40" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-[20px] md:text-[23px] uppercase my-4 px-4 text-left leading-tight">
          {title}
        </p>
        <Button className="text-[16px] md:text-[18.5px] uppercase mx-6 my-4 py-4">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
