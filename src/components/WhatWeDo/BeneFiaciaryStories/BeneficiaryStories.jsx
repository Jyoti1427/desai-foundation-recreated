import React from "react";
import BeneficiaryStoriesSlide from "../../Home/BeneficiaryStories";

const BeneficiaryStories = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-[55px] font-bold mb-12 text-center uppercase">
        Beneficiary Stories
      </h1>
      <div>
        <iframe
          className="h-[38rem] w-[84rem]"
          src="https://www.youtube.com/embed/m2xAPOSAHNY?si=PM-xV3NL9sf9dgWT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="py-12">
        <BeneficiaryStoriesSlide />
      </div>
    </div>
  );
};

export default BeneficiaryStories;
