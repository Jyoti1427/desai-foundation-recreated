import React from "react";
import Img1 from "../../assets/about/digital-india-150x150.png";
import Img3 from "../../assets/about/swachh-bharat-150x150.png";
import Img2 from "../../assets/about/make-in-india-1-150x150.png";

const SocialInvites = () => {
  return (
    <div className="w-full mx-auto md:max-w-7xl">
      <h1 className="text-[28px] font-extrabold text-center -mb-4 py-2 uppercase">
        Indian Government Social Initiatives
      </h1>
      <div className="flex md:flex-row flex-col justify-evenly items-center mb-12">
        <img src={Img1} className="h-[15rem]" />
        <img src={Img2} className="h-[15rem]" />
        <img src={Img3} className="h-[15rem]" />
      </div>
    </div>
  );
};

export default SocialInvites;
