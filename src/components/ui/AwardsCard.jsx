import React from "react";

const AwardsCard = ({ image, title, onClick }) => {
  return (
    <div className="border-b-2 border-primary p-3 rounded-md shadow-sm bg-white hover:shadow-md transition duration-300">
      {/* Image */}
      <div className="w-full md:h-48 overflow-hidden rounded-md mb-4 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover p-2"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-4 leading-snug line-clamp-2">
        {title}
      </h2>

      {/* Button */}
      <button
        onClick={onClick}
        className="uppercase bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide hover:bg-pink-700 transition"
      >
        View More &gt;
      </button>
    </div>
  );
};

export default AwardsCard;
