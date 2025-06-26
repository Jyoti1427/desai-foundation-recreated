import React from "react";
import FinanceImg from "../../assets/about/Women-smiling-and-laughing-e1745231989876-768x444.jpg";
import ButtonRect from "../ui/ButtonRect";

const FinancialStatement = () => {
  return (
    <section className="w-full py-28 px-4">
      <div className="md:max-w-7xl mx-auto flex md:flex-row flex-col justify-evenly gap-16">
        {/* left img */}
        <div>
          <img
            src={FinanceImg}
            alt="smiling women"
            className="md:h-[32rem] md:w-[37rem] object-cover"
          />
        </div>
        {/* right text */}
        <div className="my-auto">
          <h1 className="text-primary text-[25px] font-extrabold mb-3">
            Audited Financial Statements
          </h1>
          <p className="tetx-left font-medium mb-8">
            We invite you to review our financials in greater detail below.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <ButtonRect className=" w-[19rem] bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              statemeny fy 2023
            </ButtonRect>
            <ButtonRect className="w-[19rem] bg-primary text-white uppercase hover:border hover:border-primary hover:text-teal-700 hover:bg-white">
              statemeny fy 2022 & 2021
            </ButtonRect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStatement;
