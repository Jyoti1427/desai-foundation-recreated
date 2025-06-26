import React from "react";

const GiftCard = ({
  image,
  amount = "$0",
  description = "Support our cause.",
}) => {
  return (
    <div className="w-[290px] h-[360px] rounded-xl overflow-hidden shadow-md mx-auto">
      {/* Top Image */}
      <div className="h-1/2 w-full">
        <img
          src={image}
          alt="Donation Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Content */}
      <div className="bg-pink-300 h-1/2 p-4">
        <h3 className="text-pink-900 text-center text-[29px] font-bold mb-2">
          {amount}
        </h3>
        <p className="text-center text-[17px] font-medium mb-8">{description}</p>
      </div>
    </div>
  );
};

export default GiftCard;
