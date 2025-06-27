import React from "react";
import img1 from "../../../assets/TakeAction/Brook37_The-Atelier_LogoWordmarkWithTrademark-768x432 (1).jpg";
import img2 from "../../../assets/TakeAction/spicewell-brand_logo_pink-300x38.png";
import img3 from "../../../assets/TakeAction/platinumsponsors-img7-300x300.jpg";
import img4 from "../../../assets/TakeAction/unnamed-768x439.jpg";
import img5 from "../../../assets/TakeAction/tribe-logo.png";
import img6 from "../../../assets/TakeAction/Lexus_2D_Tag_Black_HR_RGB-768x180.png";
import img7 from "../../../assets/TakeAction/desigalli-logo.jpg";
import img8 from "../../../assets/TakeAction/rampur-logo.jpg";
import img9 from "../../../assets/TakeAction/craftbear.jpg";
import img10 from "../../../assets/TakeAction/naidu.jpg";
import img11 from "../../../assets/TakeAction/malai-logo.jpg";
import img12 from "../../../assets/TakeAction/Brook37_The-Atelier_LogoWordmarkWithTrademark-768x432 (1).jpg";
import img13 from "../../../assets/TakeAction/tnted-live.jpg";
import img14 from "../../../assets/TakeAction/BSL-LOGO-768x467.png";
import img15 from "../../../assets/TakeAction/kk-logo-768x288.webp";
import img16 from "../../../assets/TakeAction/unnamed-768x439 (1).jpg";
import img18 from "../../../assets/TakeAction/KCC_logoblack_primary-768x252.png";
import img17 from "../../../assets/TakeAction/SAAG_Logo-Transparent-768x921.png";

const eventSponsors = [img1, img2, img3, img4, img5, img6];
const kindEventSponsors = [
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
];

const Sponsors = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="md:max-w-7xl mx-auto px-4 py-16">
        {/* event sponsors */}
        <div className="w-full h-[2px] bg-black mb-12"></div>
        <h1 className="text-primary font-extrabold text-[28px] text-center mb-10">Event Sponsors</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {eventSponsors.map((img, idx) => (
            <div key={idx} className="flex justify-center items-center pb-">
              <img
                src={img}
                alt={`event-sponsor-${idx}`}
                className="w-[18rem] h-[9rem] object-contain rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>

        {/*In-kind event sponsors */}
       <div className="w-full h-[2px] bg-black mb-12"></div>
       <h1 className="text-primary font-extrabold text-[28px] text-center mb-10">In-Kind Event Sponsors</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {kindEventSponsors.map((img, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={img}
                alt={`kind-sponsor-${idx}`}
                className="w-[18rem] h-[9rem] p-2 object-contain rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
