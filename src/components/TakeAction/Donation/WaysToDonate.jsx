import React, { useState } from "react";
import DonationCard from "../../ui/DonationCard";
import img1 from "../../../assets/TakeAction/customdonation-donateimg1-300x152.jpg";
import img2 from "../../../assets/TakeAction/cryptocurrency-donateimg1-300x152.jpg";
import img3 from "../../../assets/TakeAction/Jewellary-Making-Workshop_30-09-2019-26-scaled-e1715207902568-768x394.jpg";
import img4 from "../../../assets/TakeAction/supportmenstrualequity-300x152.jpg";
import img5 from "../../../assets/TakeAction/healthcareheroes-300x152.jpg";
import img6 from "../../../assets/TakeAction/empowerwomen-300x152.jpg";
import img7 from "../../../assets/TakeAction/vocational-sewing-program-768x434.jpg";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

const cards = [
  {
    image: img1,
    title: "Custom Donation",
    description: "No matter the amount, become a champion for women’s empowerment.",
  },
  {
    image: img2,
    title: "Donate in Cryptocurrency",
    description: "Donating cryptocurrency is a non-taxable event, meaning you can deduct it on your taxes. We use GivingBlock to help us accept coins!",
  },
  {
    image: img3,
    title: "Invest in Transforming Lives",
    description: "Empower the livelihood of women to gain new skills and excel in entrepreneurship.",
  },
  {
    image: img4,
    title: "Support Menstrual Equity",
    description: "Whether it's pad distribution, hygiene education, or eradicating stigmas, become a crucial part in our menstrual equity initiatives.",
  },
  {
    image: img5,
    title: "Ensure Access to Life-saving Healthcare",
    description: "Your investment can provide accessible healthcare to thousands in underserved areas.",
  },
  {
    image: img6,
    title: "Empower Women: Give Monthly!",
    description: "Champion gender equality through your support every month.",
  },
  {
    image: img7,
    title: "Donor Advised Funds",
    description: "A new, easy way to recommend a grant to The Desai Foundation through your Donor-Advised Fund.",
  },
];

const WaysToDonate = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="py-20 px-4 bg-gray-50">
      <h1 className="text-[28px] font-bold text-center mb-12 uppercase">
        WAYS YOU CAN DONATE
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {(showAll ? cards : cards.slice(0, 3)).map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <DonationCard
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button onClick={() => {
          setShowAll(!showAll);
          if (showAll) window.scrollTo({ top: 0, behavior: "smooth" });
        }} className="text-lg px-6 py-3">
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
};

export default WaysToDonate;
