import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import impactBg from "../../assets/images/intro-bg.png";

const VideoBanner = () => {
  return (
    <section className="flex flex-col md:flex-row justify-end w-full md:mt-6 mt-24">
      {/* Left Side: Counter with Background */}
      <div
        className="relative  flex items-center justify-center bg-contain bg-center bg-no-repeat mr-10 px-6 py-12 min-h-[300px] md:min-h-0"
        style={{
          backgroundImage: `url(${impactBg})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl md:mb-3">WE'VE IMPACTED</h2>
          <p className="text-7xl md:text-7xl font-bold">
            <CountUp
              start={0}
              end={10000000}
              duration={3}
              separator=","
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <h2 className="text-4xl md:text-5xl md:mt-3">LIVES</h2>
        </motion.div>
      </div>
      {/* Right Side: YouTube Video */}
      <div className="w-full md:w-1/2  px-4 py-6 md:py-20">
        <div className="relative  aspect-video overflow-hidden ">
          <iframe
            className="absolute top-0 left-0 md:w-[650px] w-[600px] md:h-[340px] h-[300px] md:ml-24"
            src="https://www.youtube.com/embed/JiGzZkab6JA?si=emd52MIX5BTsbZA5"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
