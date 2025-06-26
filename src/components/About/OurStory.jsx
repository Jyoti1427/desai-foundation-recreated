import React from "react";
import BeneficiaryStories from "../../components/Home/BeneficiaryStories";

const OurStory = () => {
  return (
    <section className="bg-gray-100 mt-16 py-20 w-full">
      <div className=" flex md:flex-row flex-col justify-center max-w-7xl mx-auto px-4 gap-10">
        {/* left text */}
        <div className="md:w-3/5 w-full space-y-4">
          <h1 className="text-primary text-left font-extrabold text-[28px]">
            Our Story
          </h1>
          <p className="text-left">
             In 1997, the Desai Foundation’s story began – ignited by the vision of Samir A. Desai and Nilima Desai. Their mission was simple yet profound: to give back to the communities that had shaped them.
          </p>

          <p className="text-left">
            Desai, a tech entrepreneur, focused their efforts in two geographic areas – the place that was home, and the place that is now home. Their efforts focused on the Metro Boston & Harlem, NY areas, as well as the rural communities of Gujarat.
          </p>

          <p className="text-left">
            In its first decade, the Desai Foundation built strong partnerships with its partners on the ground and began to build innovative, impactful, and sustainable programming.
          </p>

          <p className="text-left">
            After they tested their programs, they converted to a public non-profit to scale and expand their work. In 2014, it became a public, programmatic organization implementing 15 programs in Gujarat. Today, the Desai Foundation operates in 8 States across India, implementing over 30 programs, impacting millions of lives.
          </p>

          <p className="text-left">
           We believe that the best solutions for impact come from within the community itself. It’s why our work focuses on cultivating the dignity of the people we serve by strengthening its leadership and building sustainable programming so that everyone can dream beyond their circumstances.
          </p>
        </div>
        {/* right img */}
        <div className="md:w-1/2 w-full">
          <BeneficiaryStories className="h-80 w-52"></BeneficiaryStories>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
