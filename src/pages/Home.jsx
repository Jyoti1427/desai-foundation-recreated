import React from "react";
import Hero from "../components/Home/Hero";
import VideoBanner from "../components/Home/VideoBanner";
import OurMission from "../components/Home/OurMission";
import Awards from "../components/Home/Awards";
import Impact from "../components/Home/Impact";
import Sponsor from "../components/Home/Sponsor";
import GetInvolved from "../components/Home/GetInvolved";
import BeneficiaryStories from "../components/Home/BeneficiaryStories";
import News from "../components/Home/News";
import Events from "../components/Home/Events";
import Newsletter from "../components/Home/Newsletter";
import Instagram from "../components/Home/Instagram";
import OurFocus from "../components/Home/OurFocus";

const Home = () => {
  return (
    <>
      <Hero />
      <VideoBanner />
      <OurMission />
      <Impact />
      <Awards />
      <OurFocus />
      <Sponsor />
      <BeneficiaryStories />
      <GetInvolved />
      <News />
      <Events />
      <Newsletter />
      <Instagram />
    </>
  );
};

export default Home;
