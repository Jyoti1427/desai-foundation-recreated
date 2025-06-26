import React from "react";
import img1 from "../../assets/Awards/gacl-logo.jpg";
import img2 from "../../assets/Awards/TE-Foundation-Tab-Logo-300x221.jpg";
import img3 from "../../assets/Awards/s-p-hinduja-logo.jpg";
import img4 from "../../assets/Awards/Britannia-Nutrition-Foundation.png";
import img5 from "../../assets/Awards/Google-Ad-Grants-Logo.jpg";
import img6 from "../../assets/Awards/gurukrupa-logo.jpg";
import img7 from "../../assets/Awards/pnb-logo.jpg";
import img8 from "../../assets/Awards/thepadproject-logo.jpg";
import img9 from "../../assets/Awards/JP-Morgan-Chase-768x432.png";
import img10 from "../../assets/Awards/Svatantra-Micro-Housing-Finance-Corporation-Limited-300x146.jpg";
import img11 from "../../assets/Awards/nandn-logo.jpg";
import img12 from "../../assets/Awards/Scor-SE-India-Logo-768x218.png";
import img13 from "../../assets/Awards/evalueserve-logo.jpg";
import img14 from "../../assets/Awards/Vista-Hermosa-Foundation_1-768x522.png";
import img15 from "../../assets/Awards/MNGL_1-300x80.png";
import img16 from "../../assets/Awards/Cotton-Connect-Farmer-Community-Foundation_1-768x258.png";
import img17 from "../../assets/Awards/LT_2-768x359.jpg";
import img18 from "../../assets/Awards/images-150x150.jpg";
import img19 from "../../assets/Awards/Ghanta-Family-Foundation-Logo-300x69.png";
import img20 from "../../assets/Awards/beti-bachao-150x150.png";

const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

const Grants = () => {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="md:max-w-[65rem] mx-auto px-2">
        <h1 className="text-3xl font-bold text-center mb-6 uppercase">
          Grants Awarded to the Desai Foundation
        </h1>
        <p className="text-center font-medium mb-8">
          We are proud to showcase a few of the visionary grantors who have
          partnered with us on our journey. This funding has played a pivotal
          role in fueling our mission to empower women and girls in rural India,
          fostering dignity, and driving community-led initiatives. Together, we
          are breaking barriers, fostering resilience, and shaping a brighter
          future for those who need it most. Think you would be a good fit?
          Connect with us to learn more!
        </p>
      </div>

      <div className="md:max-w-[84rem] mx-auto p-6 rounded-2xl bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-12">
          {imageList.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full flex justify-center items-center"
            >
              <img src={img} alt={`grid-${idx}`} className="h- object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grants;
