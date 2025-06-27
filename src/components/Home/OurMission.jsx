import React from "react";
import missionImg from "../../assets/images/mission-circle.png";
import missionImg2 from "../../assets/images/smilingWomen.jpg";

const OurMission = () => {
  return (
    <section className="relative md:h-[64rem] h-[48rem] py-12 mb-16">
      {/* top section */}
      <div className="flex md:flex-row flex-col h-[41rem] w-full my-12">
        {/* left mission */}
        <div className="md:h-full h-[35rem] w-full py-6 bg-pink-900">
          <div className="md:w-1/2 mx-auto px-12 mt-8 md:mt-20">
            <div className="">
              <h2 className="md:text-5xl sm:text-4xl text-[32px] text-white font-bold uppercase mb-3">
                Our Mission
              </h2>
              <p className="md:text-[28px] text-[20px] text-white font-bold">
                We empower women and children through community programs to
                elevate health, livelihood, and menstrual equity in rural India.
              </p>
            </div>
          </div>
        </div>
        {/* right mission circle */}
        <div className="md:h-full w-full h-[6rem]  bg-gray-400">
          <img
            src={missionImg}
            alt="Mission Image"
            className="w-1/2 -mt-[21rem] ml-[10rem] md:mt-16"
          />
        </div>
      </div>
      {/* bottom mission banner image */}
      <div className="absolute inset-0  flex items-end justify-center pointer-events-none">
        <img
          src={missionImg2}
          className="rounded-xl md:w-3/4 md:px-0 px-2 mx-auto z-10 md:mb-10"
          style={{
            boxShadow: "10px 0px 20px 40px rgba(211, 211, 211, 0.25)",
          }}
        />
      </div>
    </section>
  );
};

export default OurMission;
