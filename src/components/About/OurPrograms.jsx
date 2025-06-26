import React from "react";
import HoverCard from "../ui/HoverCard";
import programImg1 from "../../assets/images/goldenAward.jpg";
import programImg2 from "../../assets/about/timeline-2018.jpg";
import programImg3 from "../../assets/about/timeline-2003.jpg";
import Button from "../ui/Button";

const OurPrograms = () => {
  return (
    <section className="md:max-w-7xl mx-auto py-16">
      <h1 className="text-primary text-[25px] mb-2 font-extrabold text-center ">
        Our Programs
      </h1>
      <h2 className="text-[28px] text-center font-bold mb-12 uppercase">
        Explore Our Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 place-items-center mb-16">
        <HoverCard
          height="h-[32rem]"
          width="w-[25rem]"
          bgImage={programImg1}
          buttonLabel="HEROES FOR HUMMANITY"
          hoverText="Heroes for Humanity is a transformative COVID relief and recovery initiative launched in seven states in rural india by the Desai Foundation in partnership with S.P.|Hinduja Banque launched in June of 2021. Each of our nearly 500 Heroes have been hired,..."
          learnMoreLabel="LEARN MORE"
          overlayColor="bg-black/50"
          overlayRounded={true}
        />
        <HoverCard
          height="h-[32rem]"
          width="w-[25rem]"
          bgImage={programImg2}
          buttonLabel="ASANI SANITARY NAPKIN PROGRAM"
          hoverText="The Asani, Sanitary Napkin Program trains women in rural India to manufacture and distribute sanitary products. Due to the inaccessibility of sanitary napkins and health facilities in many rural communities, there remains a lack of information regarding menstrual hygiene-in fact..."
          learnMoreLabel="LEARN MORE"
          overlayColor="bg-black/50"
          overlayRounded={true}
        />

        <HoverCard
          height="h-[32rem]"
          width="w-[25rem]"
          bgImage={programImg3}
          buttonLabel="HEROES FOR HUMMANITY"
          hoverText="Bal Health Mela is a fun-filled health fair for children. We serve 2,000 children at a time through these fairs. Medical services and facilities are inadequate in rural India which increases the rate of health risks amongst children."
          learnMoreLabel="LEARN MORE"
          overlayColor="bg-black/50"
          overlayRounded={true}
        />
      </div>
      <div className="flex flex-col justify-center mx-32 items-center">
        <p className="text-center font-medium mb-6">
          At the Desai Foundation, our commitment to fostering meaningful impact
          drives us to design and implement a diverse range of programs that
          touch the lives of individuals and communities.
        </p>

        <p className="text-center font-medium">
          Our programming focused on health, livelihood, menstrual equity, and
          community engagement. We do this by ensuring that our programs
          cultivate dignity and create an impact for the people we serve.
          Through collaborative efforts and innovative solutions, we create
          lasting change that resonates far beyond our projects’ boundaries.
        </p>

        <Button className="px-4 py-4  mt-8 md:mb-36 text-[1rem] uppercase">
          All programs
        </Button>
      </div>
    </section>
  );
};

export default OurPrograms;
