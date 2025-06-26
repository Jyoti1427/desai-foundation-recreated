import React from "react";
import missionImage from "../../assets/images/mission-circle.png";
const OurMission = () => {
  return (
    <section className="bg-gray-100 mt-16 py-20 w-full">
      <div className=" flex md:flex-row flex-col justify-center max-w-7xl mx-auto px-4 gap-10">
        {/* left text */}
        <div className="md:w-3/5 w-full space-y-4">
          <h1 className="text-primary text-left font-extrabold text-[28px]">
            Our Mission
          </h1>
          <p className="text-left">
            The Desai Foundation is a nonprofit organization dedicated to
            empowering women and children through community programs and
            initiatives. Our mission is simple yet powerful: to create lasting
            change and provide opportunities for growth and development.
          </p>

          <p className="text-left">
            We focus on empowering women by providing vocational skills training
            and support to help them become self-reliant. From vocational skill
            training to entrepreneurship programs, we aim to foster independence
            and create a sustainable future.
          </p>

          <p className="text-left">
            We believe in action. We believe in making a difference, one step at
            a time. Through our various projects, we strive to improve access to
            health, livelihood, and menstrual equity for those who need it most.
          </p>

          <p className="text-left">
            But we don’t stop there. Our commitment extends to children as well.
            We believe that every child deserves a chance to succeed. That’s why
            we provide educational support which includes real time exposure and
            foundational building blocks, alongside health support and mentoring
            programs to help them cultivate dignity and reach their full
            potential.
          </p>

          <p className="text-left">
            We are driven by a sense of purpose and guided by our core values:
            compassion, integrity, and collaboration. Our dedicated team works
            tirelessly to create a real, tangible impact in the communities we
            serve.
          </p>
        </div>
        {/* right img */}
        <div>
          <img src={missionImage} className="w-[90%]" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
