import React from "react";
import heroImage from "../../../assets/TakeAction/donationHero.png";

const DonationHero = () => {
  return (
    <section className="relative w-full mb-12 h-auto mt-0 pt-0">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full object-cover"
      />
    </section>
  );
};

export default DonationHero;
