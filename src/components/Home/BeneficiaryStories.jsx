import React from "react";
import BeneficiaryData from "../../data/BenefiaciaryData";
import NextArrow from "../../components/ui/NextArrow";
import PrevArrow from "../../components/ui/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const BeneficiaryStories = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-16 bg-gray-100">
      <div className="relative max-w-5xl mx-auto">
        <h1 className="text-primary text-2xl mb-4 font-bold text-center">
          Beneficiary Stories
        </h1>
        <h1 className="text-2xl mb-8 font-extrabold text-center uppercase">
          Stories from the ground
        </h1>

        <Slider {...settings}>
          {BeneficiaryData.map((item, index) => (
            <div key={index} className="px-4">
              <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 rounded-2xl bg-pink-950 mb-6 p-6 h-[30rem] md:h-[18rem]">
                {/* Quote Icon */}
                <FaQuoteRight className="absolute top-4 right-4 text-pink-700 text-3xl" />
                {/* img */}
                <div className="flex-shrink-0 w-44 h-44 rounded-full border-4 border-white overflow-hidden">
                  <img src={item.Img} className=" h-full w-full object-cover" />
                </div>
                {/* story */}
                <div className="flex-1 mt-4 md:mt-0 px-2 text-center md:text-left">
                  <p className="font-bold text-white text-left">
                    {item.description}
                  </p>
                </div>
                {/* side divider */}
                <div className="absolute right-6 bottom-6 w-1 h-[13.5rem] md:h-48 md:static bg-white"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BeneficiaryStories;
