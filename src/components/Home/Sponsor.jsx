import React from "react";
import Button from "../../components/ui/Button";
import sponsorImg from "../../assets/images/supporting-health-livelihood-and-menstrual-equity-programs-1024x804.jpg";

const Sponsor = () => {
  return (
    <section className="my-20 pt-16">
      <div className="flex md:flex-row flex-col items-center md:items-start md:justify-center gap-4">
        {/* Image section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sponsorImg}
            alt="sponsorImage"
            className="w-2/3 md:w-[70%]"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/3 px-4">
          <h1 className="text-2xl text-center font-extrabold mb-3 uppercase">
            Sponsor a Hero
          </h1>
          <h2 className="text-pink-600 text-2xl text-center font-extrabold mb-3 uppercase">
            Strengthen the Communityoes
          </h2>

          <p className="font-semibold text-center px-2">
            Heroes for Humanity are community health workers and local leaders
            trained to deliver the Desai Foundation’s programs directly in their
            own villages. From menstrual health and hygiene to anemia and
            diabetes screenings, banking and savings education, vocational
            training, and more, our Heroes bring critical health and livelihood
            initiatives to rural communities across India. <br />
            <br /> But their impact goes far beyond service. These Heroes are
            also empowering themselves economically through earning a
            livelihood, gaining valuable skills, and becoming respected
            changemakers in their communities. <br />
            <br />
            When you sponsor a Hero, you spark a powerful ripple effect,
            transforming one Hero’s life so they can transform thousands more.
          </p>
          <div className="flex justify-center mt-10">
            <Button className="uppercase py-3 text-lg hover:text-blue-500 hover:border hover:border-blue-500 hover:bg-white">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
