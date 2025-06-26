import React from "react";
import programImage from "../../../assets/TakeAction/Double-the-Donation-logo3-300x180.png";

const MatchingProgram = () => {
  return (
    <section className="w-full bg-pink-950 py-20">
      <div className="md:max-w-6xl mx-auto px-4">
        {/* top text */}
        <h1 className="text-[28px] text-white font-bold tetx-center mb-4">
          Does Your Company Have a Matching Program? We Would Love to Hear From
          You!
        </h1>
        <p className="text-white font-medium text-left mb-10">
          Want to give more without spending more? With corporate matching
          programs, your donation has the potential to be matched or tripled by
          your employer, creating a multiplier effect that goes beyond what you
          initially gave. Think of it as a way to supercharge your support
          without any additional cost to you.
        </p>
        {/* bottom img */}
        <img src={programImage} alt="programImage" className="bg-white px-5 py-10 mx-auto" />
      </div>
    </section>
  );
};

export default MatchingProgram;
