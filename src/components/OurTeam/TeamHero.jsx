import React from "react";
import ButtonRect from "../ui/Button Rect";

const TeamHero = () => {
  return (
    <section>
      <div className="w-full py-12">
        <div className="md:max-w-6xl px-12 my-12 flex md:flex-row flex-col mx-auto justify-center items-center gap-16">
          {/* left mission */}
          <div className="w-1/2 mt-6 ">
            <h1 className="text-primary font-extrabold text-[28px] mb-6">
              Our Team
            </h1>
            <h3 className="font-bold text-[28px] mb-6 uppercase">
              Leadership Council
            </h3>
          </div>
          {/* right para */}
          <div className="w-1/2">
            <p className="text-left">
              <strong>
                Meet our dynamic team, spanning across the United States and
                India. United by a shared passion to make a genuine impact on
                communities in rural India, our team is a testament to our
                commitment and dedication. Get to know the individuals driving
                our mission and witness our team’s continuous growth.
              </strong>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:w-4/5 mx-auto">
          <a href="#our-team" className="block w-full">
            <ButtonRect className="w-full text-lg font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
              our team
            </ButtonRect>
          </a>

          <a href="#board-of-directors" className="block w-full">
            <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
              board of directors
            </ButtonRect>
          </a>

          <a href="#leadership-council" className="block w-full">
            <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
              leadership council
            </ButtonRect>
          </a>
          <a href="#advisors" className="block w-full">
            <ButtonRect className="w-full text-lg px-10 py-3 font-bold text-white bg-primary hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 uppercase">
              Advisors
            </ButtonRect>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
