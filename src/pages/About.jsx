import React from "react";
import HeroAbout from "../components/About/HeroAbout";
import AboutVideo from "../components/About/AboutVideo";
import OurMission from "../components/About/OurMission";
import Impact from "../components/Home/Impact";
import OurStory from "../components/About/OurStory";
import SocialInvites from "../components/About/SocialInvites";
import Goals from "../components/About/Goals";
import AnnualReports from "../components/About/AnnualReports";
import FinancialStatement from "../components/About/FinancialStatement";
import OurHistory from "../components/About/OurHIstory";
import OurPrograms from "../components/About/OurPrograms";

const About = () => {
  return (
    <>
      <HeroAbout />
      <AboutVideo />
      <OurMission />
      <Impact />
      <OurStory />
      <OurHistory />
      <Goals />
      <SocialInvites />
      <AnnualReports />
      <FinancialStatement />
      <OurPrograms />
    </>
  );
};

export default About;
