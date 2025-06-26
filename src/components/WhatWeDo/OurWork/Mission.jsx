import React from "react";
import ButtonRect from "../../ui/ButtonRect";

const Mission = () => {
  return (
    <div className="w-full py-12">
      <div className="md:max-w-7xl my-12 flex md:flex-row flex-col mx-auto justify-center items-center gap-16">
        {/* left mission */}
        <div className="w-1/2 mt-6 ">
          <h1 className="text-primary font-extrabold text-[28px] mb-6">
            Our Mission
          </h1>
          <h3 className="font-extrabold text-[26px] mb-6">
            Our dynamic and holistic programming spans across health,
            livelihood, and menstrual equity
          </h3>
        </div>
        {/* right para */}
        <div className="w-1/2">
          <p className="text-left">
            <strong>
              At the Desai Foundation, our commitment to fostering meaningful
              impact drives us to design and implement a diverse range of
              programs that touch the lives of individuals and communities. We
              do this by ensuring that our programs cultivate dignity and create
              impact for the people we serve. Through collaborative efforts and
              innovative solutions, we create lasting change that resonates far
              beyond our projects’ boundaries.
            </strong>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:w-4/5 mx-auto">
        <a href="#health" className="block w-full">
          <ButtonRect className="w-full text-lg font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
            Health
          </ButtonRect>
        </a>

        <a href="#livelihood" className="block w-full">
          <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
            Livelihood
          </ButtonRect>
        </a>

        <a href="#menstrual-equity" className="block w-full">
          <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
            Menstrual equity
          </ButtonRect>
        </a>
        <a href="#climate" className="block w-full">
          <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
            climate
          </ButtonRect>
        </a>
      </div>
    </div>
  );
};

export default Mission;
