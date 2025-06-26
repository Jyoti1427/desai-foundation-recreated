import React from "react";
import img from "../../../assets/TakeAction/career-opportunities-768x512.jpg";
import ButtonRect from "../../ui/ButtonRect";

const Careeropportunities = () => {
  return (
    <section className="w-full py-16">
      <div className="md:max-w-7xl mx-auto px-4 flex md:flex-row flex-col justify-center items-center gap-12">
        {/* left */}

        <div className="w-1/2">
          <h2 className="text-[26px] font-bold uppercase mb-8">
            career opportunities
          </h2>
          <div className="flex gap-2">
            <ButtonRect className="bg-gray-200 w-[12rem] tetx-black font-bold uppercase focus:bg-primary focus:text-white">
              Admin
            </ButtonRect>
            <ButtonRect className="bg-gray-200 w-[14rem] tetx-black font-bold uppercase focus:bg-primary focus:text-white">
              Marketing
            </ButtonRect>
            <ButtonRect className="bg-gray-200 w-[12rem] tetx-black font-bold uppercase focus:bg-primary focus:text-white">
              Events
            </ButtonRect>
          </div>
          <p className="py-6 font-bold text-[16px]">
            Explore the current career opportunities the Desai Foundation has to
            offer:
          </p>
          <a
            href="#"
            className="text-primary font-bold cursor-pointer hover:text-blue-950"
          >
            Operations /Admin Intern
          </a>
          <br />
          <a
            href="#"
            className="text-primary font-bold hover:text-blue-950 cursor-pointer"
          >
            Development &Fundraising Intern
          </a>
        </div>
        {/* right */}
        <div className="w-1/2">
          <img src={img} className="" />
        </div>
      </div>
    </section>
  );
};

export default Careeropportunities;
