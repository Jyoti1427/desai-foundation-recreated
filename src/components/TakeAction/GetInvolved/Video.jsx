import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";

const Video = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-20 bg-gray-100"
    >
      <div className="md:max-w-5xl mx-auto px-4">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          className="text-[26px] font-bold text-center mb-8"
        >
          Thank You to Our Incredible Donors!
        </motion.h1>

        <motion.div variants={fadeIn("up", 0.2)} className="h-[34rem] w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/iCelrmMTRR8?si=qic-KIOej5yiU-hR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>

        <motion.p
          variants={fadeIn("left", 0.3)}
          className="text-center font-bold pt-12 mb-6"
        >
          We are grateful to all of our donors – whether you supported our
          Pledge Your Period Campaign, donated to the Asani Sanitary Napkin
          Program, or attended our events to support our programming, we want to
          thank you! Your generosity has been the driving force behind our
          mission, supporting us to create a meaningful impact in the lives of
          women and children across rural India. In the fiscal year 2023, we
          were fortunate to receive overwhelming support from more than 523
          individual, corporate, and foundational donors.
        </motion.p>

        <motion.p
         variants={fadeIn("right", 0.4)} className="font-bold mb-8">
          A special acknowledgment goes to our Platinum Donors, whose
          contributions of $5,000 or more in this fiscal year have truly made a
          significant difference. Thank you so much to these incredible people,
          companies, and organizations!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Video;
