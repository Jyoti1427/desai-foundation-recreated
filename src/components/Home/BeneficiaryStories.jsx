import React from "react";
import BeneficiaryData from "../../data/BenefiaciaryData";
import NextArrow from "../../components/ui/NextArrow";
import PrevArrow from "../../components/ui/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

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
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 bg-gray-100"
    >
      <div className="relative max-w-5xl mx-auto px-4">
        <motion.h1
          variants={fadeIn("down", 0.1)}
          className="text-primary text-2xl mb-4 font-bold text-center"
        >
          Beneficiary Stories
        </motion.h1>

        <motion.h1
          variants={fadeIn("up", 0.2)}
          className="text-2xl mb-8 font-extrabold text-center uppercase"
        >
          Stories from the ground
        </motion.h1>

        <motion.div
          variants={fadeIn("up", 0.3)}
          className="w-full"
        >
          <Slider {...settings}>
            {BeneficiaryData.map((item, index) => (
              <div key={index} className="px-4">
                <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 rounded-2xl bg-pink-950 mb-6 p-6 h-[30rem] md:h-[18rem]">
                  <FaQuoteRight className="absolute top-0 right-8 text-pink-700 text-[3rem]" />
                  <div className="flex-shrink-0 w-44 h-44 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={item.Img}
                      className="h-full w-full object-cover"
                      alt="Beneficiary"
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0 px-2 text-center md:text-left">
                    <p className="font-bold text-white text-left">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute right-6 bottom-6 w-1 h-[13.5rem] md:h-48 md:static bg-white"></div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeneficiaryStories;
