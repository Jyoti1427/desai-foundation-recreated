import React from "react";
import { motion } from "framer-motion";
import missionImg from "../../assets/images/mission-circle.png";
import missionImg2 from "../../assets/images/smilingWomen.jpg";

const OurMission = () => {
  return (
    <section className="relative md:h-[64rem] h-[48rem] py-10 mb-16">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex md:flex-row flex-col h-full w-full"
      >
        {/* Pink Section */}
        <div className="md:w-1/2 w-full bg-pink-900 flex flex-col justify-start pt-12">
          <div className="px-10 py-12 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-2xl text-white font-semibold">
              We empower women and children through community programs to elevate health, livelihood, and menstrual equity in rural India.
            </p>

            {/* Mission Circle (sm only) */}
            <div className="flex md:hidden justify-center mt-10">
              <motion.img
                src={missionImg}
                alt="Mission Circle"
                className="w-2/3"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Gray Section */}
        <div className="md:w-1/2 w-full bg-gray-200 flex items-start justify-center pt-12">
          <div className="hidden md:flex justify-center items-center w-full">
            <motion.img
              src={missionImg}
              alt="Mission Circle"
              className="w-3/4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Banner */}
      <motion.div
        className="absolute inset-0 md:-mb-8 flex items-end justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={missionImg2}
          alt="Mission Banner"
          className="rounded-xl md:w-2/3 md:px-0 px-2 mx-auto z-10 md:mb-10"
          style={{
            boxShadow: "10px 0px 20px 40px rgba(211, 211, 211, 0.25)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default OurMission;
