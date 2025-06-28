import React from "react";
import DonationForm from "./DonationForm";

const DonationAmount = () => {
  return (
    <section className="w-full py-16 mb-16">
      <div className="md:max-w-7xl mx-auto px-4 flex md:flex-row flex-col gap-20 ">
        {/* left text */}
        <div className="md:w-1/3 w-full mt-6">
          <h1 className="text-primary font-extrabold md:text-[28px] text-[24px] text-wrap mb-6">
            Help us cultivate dignity for women and children to Dream Beyond
            their circumstances.
          </h1>
          <p className="font-medium md:text-left text-justify">
            <strong>All individual donations are 100% matched</strong>
            propelling your impact even further.
          </p>
          <p className="font-medium text-left">
            When you support The Desai Foundation, you are investing in health,
            livelihood, and menstrual equity initiatives for millions of women
            and girls in rural India. But we cannot bring this mission to life
            without you.
          </p>
        </div>
        {/* right table */}
        <div className="md:w-1/2 w-full">
          <DonationForm />
        </div>
      </div>
    </section>
  );
};

export default DonationAmount;
