import React from "react";
import partnershipImage from "../../../assets/TakeAction/whypartnerwithus-300x200.jpg";
import Button from "../../ui/Button";

const PartnerShip = () => {
  return (
    <section id="partner-with-us" className="w-full py-20">
      <div>
        {/* top section */}
        <div className="md:max-w-[60rem] mx-auto px-4">
          <h1 className="text-[28px] text-center  text-primary font-extrabold uppercase mb-6">Partner with Us</h1>
          <p className="text-left font-bold mb-6">
            Join hands with the Desai Foundation to make a lasting impact on
            communities through our programs and initiatives. As a business or
            corporation, you have the opportunity to drive positive change and
            contribute to our mission.
          </p>
          <Button className="text-[16px] py-4 px-8 flex mx-auto uppercase mb-8">let's connect</Button>
        </div>
        <div className="md:max-w-5xl mx-auto mt-16 px-4 flex md:flex-row flex-col justify-center items-center gap-12">
          {/* bottom left */}
          <div >
            <h1 className="text-[28px] tetx-left text-primary font-bold mb-6">
              Why Partner with Us?
            </h1>
            <p className="text-left text-[16.5px] font-semibold py-2">
              <strong>Meaningful Impact:</strong>Your partnership directly
              supports health, livelihood, and menstrual equity programs that
              empower women and children to dream beyond.
            </p>
            <p className="text-left text-[16.5px] font-semibold py-2">
              <strong>CSR Alignment: </strong>Align your corporate social
              responsibility goals with our impactful initiatives.
            </p>
            <p className="text-left text-[16.5px] font-semibold py-2">
              <strong>Community Engagement: </strong>Engage your employees and
              stakeholders in purposeful initiatives.
            </p>
          </div>
          {/* bottom right */}
          <div>
            <img src={partnershipImage} alt="partnersip image" className="w-[64rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
