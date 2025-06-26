import React from "react";
import DonationHero from "../components/TakeAction/Donation/DonationHero";
import DonationAMount from "../components/TakeAction/Donation/DonationAMount";
import GiftImpact from "../components/TakeAction/Donation/GiftImpact";
import WaysToDonate from "../components/TakeAction/Donation/WaysToDonate";

const Donation = () => {
  return (
    <>
      <DonationHero />
      <DonationAMount />
      <GiftImpact />
      <WaysToDonate />
    </>
  );
};

export default Donation;
