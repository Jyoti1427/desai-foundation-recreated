import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import InvolvedHero from "../components/TakeAction/GetInvolved/InvolvedHero";
import GetInvolvedSection from "../components/TakeAction/GetInvolved/GetInvolved";
import Careeropportunities from "../components/TakeAction/GetInvolved/Careeropportunities";
import Video from "../components/TakeAction/GetInvolved/Video";
import PlatinumSponsors from "../components/TakeAction/GetInvolved/PlatinumSponsors";
import MatchingProgram from "../components/TakeAction/GetInvolved/MatchingProgram";
import PartnerShip from "../components/TakeAction/GetInvolved/PartnerShip";
import ShopWithPartners from "../components/TakeAction/GetInvolved/ShopWithPartners";
import Sponsors from "../components/TakeAction/GetInvolved/Sponsors";

const GetInvolved = () => {
  const location = useLocation(); // 👈 Get the current location with hash

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // 👈 Delay to ensure components are rendered
      }
    }
  }, [location]);

  return (
    <section>
      <InvolvedHero />
      <GetInvolvedSection />
      <Careeropportunities />
      <Video />
      <PlatinumSponsors />
      <MatchingProgram />
      <PartnerShip />
      <ShopWithPartners />
      <Sponsors />
    </section>
  );
};

export default GetInvolved;
