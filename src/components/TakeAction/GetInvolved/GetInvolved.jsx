import React from "react";
import DonationCard from "../../ui/DonationCard";
import img1 from "../../../assets/TakeAction/cocktailsandchaathosting-300x152.jpg";
import img2 from "../../../assets/TakeAction/corporatepartnerships-300x152.jpg";
import img3 from "../../../assets/TakeAction/img10.jpg";
import img4 from "../../../assets/TakeAction/birthdaycampaigns-300x152.jpg";
import img5 from "../../../assets/TakeAction/event-jointeam-300x152.jpg";
import img6 from "../../../assets/TakeAction/Resource-Guide-Thumbnail-300x153.jpg";
import img7 from "../../../assets/TakeAction/volunteer-300x152.jpg";
import img8 from "../../../assets/TakeAction/HRC_Visit_DF_HFH_Gandhinagar-486-1-1-768x432.jpg";


const cardData = [
  {
    image: img1,
    title: "Host a Cocktails & Chat",
    description: "Host a fun gathering with friends and family to raise funds while enjoying good company and great food. Get in touch to learn more!",
  },
  {
    image: img2,
    title: "Health for All",
    description: "Sponsor health checkups and hygiene awareness camps.",
  },
  {
    image: img3,
    title: "Empower Women",
    description: "Provide vocational training and job skills to women.",
  },
  {
    image: img4,
    title: "Feed a Family",
    description: "Contribute to nutrition kits for families in need.",
  },
  {
    image: img5,
    title: "Support Menstrual Equity",
    description: "Fund affordable sanitary products and awareness drives.",
  },
  {
    image: img6,
    title: "Digital Literacy",
    description: "Help youth learn essential digital and computer skills.",
  },
  {
    image: img7,
    title: "Clean Water Access",
    description: "Build water filters and clean water sources for villages.",
  },
  {
    image: img8,
    title: "COVID-19 Relief",
    description: "Distribute PPE kits, sanitizers, and awareness material.",
  },
];

const GetInvolved = () => {
  return (
    <section className="w-full py-16">
      <div className="md:max-w:7xl">
        <h2 className="text-[28px] text-primary font-extrabold text-center uppercase mb-3">
          Get Involved
        </h2>
        <p className="font-bold text-center">
          Supporting the Desai Foundation is easy and impactful. Here’s how you
          can make a difference!
        </p>
      </div>
    </section>
  );
};

export default GetInvolved;
