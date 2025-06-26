import React from "react";
import Slider from "react-slick";
import GiftCard from "../../ui/GiftCard";
import NextArrow from "../../ui/NextArrow";
import PrevArrow from "../../ui/PrevArrow";
import img1 from "../../../assets/TakeAction/15.jpg";
import img2 from "../../../assets/TakeAction/70.jpg";
import img3 from "../../../assets/TakeAction/100.jpg";
import img4 from "../../../assets/TakeAction/300.png";
import img5 from "../../../assets/TakeAction/500.jpg";
import img6 from "../../../assets/TakeAction/1000.png";
import img7 from "../../../assets/TakeAction/1800.jpg";
import img8 from "../../../assets/TakeAction/2500.jpg";
import img9 from "../../../assets/TakeAction/3100.jpg";
import img10 from "../../../assets/TakeAction/5000.jpg";
import img11 from "../../../assets/TakeAction/1200.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const donations = [
  {
    image: img1,
    amount: "$15",
    description: "Empowering women through skill training.",
  },
  {
    image: img2,
    amount: "$70",
    description: "Providing clean drinking water in villages.",
  },
  {
    image: img3,
    amount: "$100",
    description: "Supporting menstrual hygiene awareness.",
  },
  {
    image: img4,
    amount: "$300",
    description: "Sponsoring healthcare for rural families.",
  },
  {
    image: img5,
    amount: "$500",
    description: "Educational aid for underprivileged children.",
  },
  {
    image: img6,
    amount: "$1000",
    description: "Disaster relief for flood-affected regions.",
  },
  {
    image: img7,
    amount: "$1800",
    description: "Nutritional support for expecting mothers.",
  },
  {
    image: img8,
    amount: "$2500",
    description: "Safe housing for domestic abuse survivors.",
  },
  {
    image: img9,
    amount: "$3100",
    description: "Digital literacy programs for rural youth.",
  },
  {
    image: img10,
    amount: "$5000",
    description: "Vaccination drives for remote communities.",
  },
  {
    image: img11,
    amount: "$1200",
    description: "Job placement training for unemployed youth.",
  },
];

const GiftImpact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-[28px] text-center mb-8 font-bold">
        HOW YOUR GIFT CREATES IMPACT
      </h1>
      <Slider {...settings}>
        {donations.map((donation, index) => (
          <div key={index} className="px-3">
            <GiftCard {...donation} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GiftImpact;
