import React from "react";
import DonationHero from "../components/TakeAction/Donation/DonationHero";
import DonationAmount from "../components/TakeAction/Donation/DonationAmount";
import GiftImpact from "../components/TakeAction/Donation/GiftImpact";
import WaysToDonate from "../components/TakeAction/Donation/WaysToDonate";

const Donation = () => {
  return (
    <>
      <DonationHero />
      <DonationAmount />
      <GiftImpact />
      <WaysToDonate />
    </>
  );
};

export default Donation;
