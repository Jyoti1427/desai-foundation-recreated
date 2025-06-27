import React from "react";
import FinanceImg from "../../assets/about/Women-smiling-and-laughing-e1745231989876-768x444.jpg";
import ButtonRect from "../ui/ButtonRect";

const FinancialStatement = () => {
  return (
    <section className="w-full py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={FinanceImg}
            alt="smiling women"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Text & Buttons */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-primary text-[25px] font-extrabold mb-3">
            Audited Financial Statements
          </h1>
          <p className="text-left font-medium mb-8">
            We invite you to review our financials in greater detail below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ButtonRect className="w-full bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Statement FY 2023
            </ButtonRect>
            <ButtonRect className="w-full bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              Statement FY 2022 & 2021
            </ButtonRect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStatement;
