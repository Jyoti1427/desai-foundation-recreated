import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute rounded-full -left-16 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-white  bg-primary hover:text-primary hover:scale-105 hover:bg-white hover:border hover:border-primary"
  >
    <MdOutlineKeyboardArrowLeft size={32} />
  </div>
);

export default PrevArrow
