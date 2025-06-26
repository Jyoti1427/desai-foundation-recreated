import React from "react";

const TeamCard = ({ image, name, designation }) => {
  return (
    <div
      className="w-full h-full relative flex justify-center items-end bg-cover bg-center rounded-md overflow-hidden"
      style={{ backgroundImage: `url(${image})`, height: "200px" }}
    >
      <div className="w-full bg-pink-900/60 text-white text-center py-2">
        <p className="text-sm font-bold leading-tight">{name}</p>
        <p className="text-xs">{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;