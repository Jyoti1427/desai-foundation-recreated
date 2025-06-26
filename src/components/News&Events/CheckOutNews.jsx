import React from "react";
import NewsCard from "../ui/NewsCard";
import img1 from "../../assets/images/Desai-Lotus-2025-Photo.jpg";
import img2 from "../../assets/images/menstrualCampaign.jpeg";
import img3 from "../../assets/images/goldenAward.jpg";
import img4 from "../../assets/images/makingStories.jpg";
import img5 from "../../assets/images/Rural-milestone.jpeg";
import img6 from "../../assets/images/siliconIndia.png";
import Button from "../ui/Button";

const cardData = [
  {
    image: img1,
    imgAlt: "Lotus Festival Event",
    title:
      "Desai Foundation’s 11th Annual Lotus Festival – Sept. 13 at Boston’s Omni Seaport",
    buttonLabel: "View all news",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
  {
    image: img2,
    imgAlt: "Free Health Camp",
    title: "Our Periods Are Not Your Population Solution",
    buttonLabel: "Read more",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
  {
    image: img3,
    imgAlt: "SGCCI Honours",
    title:
      "SGCCI Honours Excellence Across 15 Categories at Grand Golden Jubilee Awards Ceremony in Surat",
    buttonLabel: "See impact",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
  {
    image: img4,
    imgAlt: "Making Strides – 2024",
    title: "Making Strides – 2024",
    buttonLabel: "Explore",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
  {
    image: img5,
    imgAlt: "Rural Milestones",
    title:
      "The Desai Foundation Reaches the Milestone of Impacting Over 10 Million Lives in Rural India",
    buttonLabel: "See impact",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
  {
    image: img6,
    imgAlt: "silicon India",
    title: "The Transformative Influence of Indian-Americans in the US",
    buttonLabel: "Explore",
    width: "lg:w-[36rem]",
    height: "h-[20rem]",
  },
];

const CheckOutNews = () => {
  return (
    <section className="w-full  py-20 bg-gray-200">
      <div className="md:max-w-[85rem] mx-auto ">
        {/* top content */}
        <div>
          <h1 className="text-primary text-center mb-2 font-bold text-[28px]">
            Check Us Out In The News
          </h1>
          <h1 className=" text-center mb-5 font-bold text-[28px] uppercase">
            news + media
          </h1>
          <p className="text-center text-bold mb-10">
            We are honored to have our programming and events recognized by
            esteemed outlets like Good Morning America, Forbes, The Times of
            India, and many more. Thank you for amplifying our mission and
            helping to shine a light on the impact we’re creating together!
          </p>
        </div>
        {/* bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, idx) => (
            <NewsCard
              key={idx}
              imgSrc={card.image}
              title={card.title}
              description={card.description}
              buttonLabel={card.buttonLabel}
            />
          ))}
        </div>

        <Button className="text-[18px] py-4 mt-8">LOAD MORE</Button>
      </div>
    </section>
  );
};

export default CheckOutNews;
