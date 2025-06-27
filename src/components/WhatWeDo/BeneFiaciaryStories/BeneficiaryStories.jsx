import React from "react";
import BeneficiaryStoriesSlide from "../../Home/BeneficiaryStories";

const BeneficiaryStories = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-20">
      <h1 className="md:text-[53px] text-[35px] font-bold mb-12 text-center uppercase">
        Beneficiary Stories
      </h1>
      <div className="w-full max-w-7xl px-4 aspect-video">
        <iframe
         className="w-full h-full"
          src="https://www.youtube.com/embed/m2xAPOSAHNY?si=PM-xV3NL9sf9dgWT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="md:w-full w-3/4 py-12">
        <BeneficiaryStoriesSlide />
      </div>
    </div>
  );
};

export default BeneficiaryStories;
