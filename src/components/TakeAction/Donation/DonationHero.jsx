import React from "react";
import heroImage from "../../../assets/TakeAction/donationHero.png";

const DonationHero = () => {
  return (
   <section className="relative w-full mb-12 h-[40vh] md:h-[70vh]">
             {/* Background image */}
             <img
               src={heroImage}
               alt="Hero Background"
               className="w-full h-full object-cover"
             />
          
        </section>
  );
};

export default DonationHero;
