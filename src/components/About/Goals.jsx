import React from "react";
import Img1 from "../../assets/about/sdg1_-nopoverty_logo-768x768.png";
import Img2 from "../../assets/about/un_sdg_03-2048x2048-1-768x768.jpg";
import Img3 from "../../assets/about/un_sdg_04-2048x2048-1-768x768.jpg";
import Img4 from "../../assets/about/un_sdg_05-2048x2048-1-768x768.jpg";
import Img5 from "../../assets/about/un_sdg_08-768x768.jpg";
import Img6 from "../../assets/about/un_sdg_10-2048x2048-1-768x768.jpg";
import Img7 from "../../assets/about/sdg_climate_action-150x150.png";

const Goals = () => {
  return (
    <div className="w-full mx-auto md:max-w-7xl">
      <h1 className="text-[28px] font-extrabold text-center py-10 uppercase">
        UN Sustainable Development Goals
      </h1>
      <div className="flex md:flex-row flex-col justify-evenly items-center gap-6 mb-12">
        <img src={Img1} className="h-[10rem]" />
        <img src={Img2} className="h-[10rem]" />
        <img src={Img3} className="h-[10rem]" />
        <img src={Img4} className="h-[10rem]" />
        <img src={Img5} className="h-[10rem]" />
        <img src={Img6} className="h-[10rem]" />
        <img src={Img7} className="h-[10rem]" />
      </div>
    </div>
  );
};

export default Goals;
