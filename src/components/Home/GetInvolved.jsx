import React from "react";
import ButtonRect from "../ui/ButtonRect";
import Button from "../ui/Button";
import supportImg from "../../assets/images/support-image.jpg";

const GetInvolved = () => {
  return (
    <section className="w-full my-16">
      <div>
        <h1 className="text-2xl text-center font-bold text-primary mb-3">
          Get Involved
        </h1>
        <h2 className="uppercase text-3xl font-bold text-center mb-6">
          How to support
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-2">
        <ButtonRect className="hover:text-white uppercase">
          Donate to deasi foundation
        </ButtonRect>
        <ButtonRect className="hover:text-white uppercase">Sponsor a program</ButtonRect>
        <ButtonRect className="hover:text-white uppercase">
          Host an event, build a campaign
        </ButtonRect>
        <ButtonRect className="hover:text-white uppercase">corporate partnership</ButtonRect>
        <ButtonRect className="hover:text-white uppercase">volunteer opportunities</ButtonRect>
      </div>

      <div className="md:max-w-[90rem] mx-auto px-12 flex md:flex-row flex-col justify-center md:items-center gap-28 items-start mt-20">
        {/* image */}
        <div className="">
          <div className="md:w-[26rem] md:h-[26rem] w-[16rem] h-[16rem] rounded-full border-2 border-blue-500">
            <img
              src={supportImg}
              className="md:h-[25rem] md:w-[25rem] w-[15rem] h-[15rem] rounded-full"
            />
          </div>
        </div>
        {/* text */}
        <div>
          <div className="flex justify-center items-center">
            <div className="h-[1px] w-20 mb-6 mr-3 bg-blue-700"></div>
            <h1 className="text-[25px] text-primary font-extrabold mb-6">
              Empower Change: Donate Today!
            </h1>
          </div>

          <h2 className="uppercase text-[28px] mb-6 font-bold text-center">
            Donate to the Desai Foundation
          </h2>

          <div>
            <strong>Transform Lives</strong>
            <p>Empower health, education, and livelihood programs.</p>
          </div>
          <br />
          <div>
            <strong>Support Menstrual Equity</strong>
            <p>Ensure dignity for women and girls.</p>
          </div>
          <br />
          <div>
            <strong>Healthcare Heroes</strong>
            <p>Give for accessible healthcare in underserved areas.</p>
          </div>
          <br />
          <div>
            <strong>Empower Women: Give Monthly!</strong>
            <p>Champion gender equality through your support every month.</p>
          </div>

          <Button className="py-4 mt-8 text-[16px] uppercase">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
