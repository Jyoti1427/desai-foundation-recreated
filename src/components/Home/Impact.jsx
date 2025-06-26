import React from "react";
import ImpactCard from "../../components/ui/ImpactCard";
import impactData from "../../data/impactData";
import NextArrow from "../../components/ui/NextArrow";
import PrevArrow from "../../components/ui/PrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Impact = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 6,
        },
      },
    ],
  };

  return (
    <section className="md:h-[64rem] py-16">
      <div className="md:max-w-7xl mx-auto px-6">
        <h2 className="text-[28px] font-bold text-center mb-4 text-primary">
          Our Impact
        </h2>
        <h2 className="text-[24px] font-extrabold text-center mb-8 uppercase">
          creating lasting impact
        </h2>
        <div className="sm:px-6">
          <Slider {...settings}>
            {impactData.map((item, index) => (
              <ImpactCard
                key={index}
                icon={item.icon}
                count={item.count}
                title={item.title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Impact;
