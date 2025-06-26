import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DonationCard = ({ image, title, description }) => {
  return (
    <div className="w-[27rem] h-[30rem] bg-white border-b-4 border-primary shadow-2xl rounded-lg overflow-hidden flex flex-col items-center p-4 ">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md p-2"
      />

      {/* Title */}
      <h2 className="text-[22px] font-bold text-center mt-4 mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 font-bold text-center mb-4 px-2">
        {description}
      </p>

      {/* Donate Button */}
      <button className="mt-auto bg-primary mb-3 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition-all duration-300">
        DONATE <span className="text-2xl "><MdKeyboardArrowRight size={28}/></span>
      </button>
    </div>
  );
};

export default DonationCard;
