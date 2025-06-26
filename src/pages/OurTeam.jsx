import React from "react";
import HeroTeam from "../components/OurTeam/TeamHero";
import Team from "../components/OurTeam/Team";
import DirectorsBoard from "../components/OurTeam/DirectorsBoard";
import LeadershipCouncil from "../components/OurTeam/LeadershipCouncil";
import Advisors from "../components/OurTeam/Advisors";

const OueTeam = () => {
  return (
    <>
      <HeroTeam />
      <Team />
      <DirectorsBoard/>
      <LeadershipCouncil/>
      <Advisors/>
    </>
  );
};

export default OueTeam;
