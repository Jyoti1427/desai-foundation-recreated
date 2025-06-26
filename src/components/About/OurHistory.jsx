import React from "react";
import HistoryImg from "../../assets/about/10-million-oic-1-768x768.jpg";

const OurHistory = () => {
  return (
    <section className="py-20">
      <h1 className="text-primary text-[22px] font-extrabold text-center ">
        Our History
      </h1>
      <h2 className="text-[28px] text-center font-extrabold mb-10">
        A timeline: 1997 – Present
      </h2>
      <div className="md:max-w-4xl md:h-[30rem] mx-auto px-8 flex md:flex-row flex-col justify-cenetr items-center gap-12 rounded-2xl border border-gray-100 shadow-2xl ring-1 ring-gray-300">
        <img src={HistoryImg} className="w-[23rem]" />
        <div>
          <h3 className="text-[22px] mb-8 text-primary text-left">
            2024 - A Year of Milestones and Celebrations
          </h3>
          <p className="text-left font-medium">
            In 2024, The Desai Foundation achieved a landmark milestone:
            directly impacting over 10 million lives across rural India. This
            transformative growth was powered by the support of 10+ new CSR
            partners, alongside our existing collaborations. Additionally, DFT
            India earned the prestigious Great Place to Work Award. This year
            also marked two vibrant celebrations of culture and community: the
            10th anniversary of Boston’s Lotus Festival, a decade-long tradition
            of fostering connection and global impact, and a new flagship Holi
            celebration in Miami, which grew significantly to reach new
            audiences across the United States.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
