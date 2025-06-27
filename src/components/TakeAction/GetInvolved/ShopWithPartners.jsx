import React from "react";
import img1 from "../../../assets/TakeAction/get-Involved-parttenerlogo-img1-300x134.jpg";
import img2 from "../../../assets/TakeAction/get-Involved-parttenerlogo-img2-300x134.jpg";
import img3 from "../../../assets/TakeAction/get-Involved-parttenerlogo-img3-300x134.jpg";
import img4 from "../../../assets/TakeAction/get-Involved-parttenerlogo-img4-300x134.jpg";
import img5 from "../../../assets/TakeAction/DF-Site-Get-Involved-Mockup_v5-300x134.jpg";
import img6 from "../../../assets/TakeAction/DF-Site-Get-Involved-Mockup_v6-300x134.jpg";

const imageList = [img1, img2, img3, img4, img5, img6];

const ShopWithPartners = () => {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="md:max-w-6xl mx-auto px-4 ">
        {/* top text */}
        <div>
          <h1 className="text-[28px] tetx-center  text-primary font-bold mb-6">
            Shop With Our Partners
          </h1>
          <p className="text-left font-bold">
            Check out some of the incredible partners who have played an
            important role in supporting our events, joining as 1% partners, and
            more. Their commitment and collaboration have been instrumental in
            supporting women and girls, and we extend our heartfelt gratitude to
            each one of them. We are so grateful to partner with you!
          </p>
          <p className="text-left font-bold pt-6 pb-10">
            A portion of your purchases from Ranavat, Spicewell, and Floyd
            Cardoz Legacy Masalas, produced in partnership with Burlap & Barrel
            Single Origin Spices, will be donated to The Desai Foundation. Plus,
            each ‘Bloody Fabulous’ sweater purchased from Lingua Franca will
            donate $100 to The Desai Foundation!
          </p>
        </div>
        {/* bottom partners grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {imageList.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`partner-${idx + 1}`}
              className="md:h-40 object-cover rounded-full shadow-md border border-primary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopWithPartners;
