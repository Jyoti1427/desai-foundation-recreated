import React from "react";
import AnnualReportImg from "../../assets/about/annualreports-768x434.jpg";
import ButtonRect from "../ui/ButtonRect";

const AnnualReports = () => {
  return (
    <section className="w-full py-16">
      <div className="md:max-w-7xl mx-auto flex md:flex-row flex-col justify-center gap-12">
        {/* left img */}
        <div>
          <img src={AnnualReportImg} className="md:w-[80rem] md:h-[30rem] object-cover"/>
        </div>
        {/* right report */}
        <div className="py-12">
          <h1 className="text-primary font-extrabold text-[28px] mb-4">Annual Reports</h1>
          <p className="text-left">
            This comprehensive document outlines our work, impact, objectives,
            approach, and goals in the current year and moving forward. We hope
            you take a few moments to learn about our programs in India.
          </p>

          <div className="grid grid-cols-2 gap-y-6 gap-6 mt-10">
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2024
            </ButtonRect>
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2023
            </ButtonRect>
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2022
            </ButtonRect>
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2021
            </ButtonRect>
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2020
            </ButtonRect>
            <ButtonRect className="bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Annual Report 2019
            </ButtonRect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualReports;
