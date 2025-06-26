// components/ui/ImpactCard.jsx
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ImpactCard = ({ icon, count, title }) => {
  return (
    <div className="w-96 h-80 mb-12 pt-2 rounded-2xl bg-primary">
      <div className="w-96 h-80 bg-white rounded-xl shadow-xl p-6 flex flex-col items-center  ">
        <IoMdArrowDropdown className=" -mt-[2.5rem] text-primary" size={40} />

        {/* Heading */}
        <h3 className="text-[28px] mb-6 font-bold">{count}</h3>

        {/* Impact icon */}
        <div className="bg-primary p-4 mb-6 rounded-full mb-2">
         <img src={icon} alt={title} className="w-16 h-16" />
        </div>

        {/* Description */}
        <p className="text-center mb-1 font-bold text-base ">{title}</p>
      </div>
    </div>
  );
};

export default ImpactCard;



