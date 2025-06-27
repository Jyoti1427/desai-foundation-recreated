import React from "react";
import IndiaMap from "../../../assets/images/India_map_new.png";
import { BiSolidDisc } from "react-icons/bi";

const staes = [
  "Gujarat",
  "Rajasthan",
  "Maharashtra",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Ramil Nadu",
  "Odisha",
  "Karnataka",
];

const RegionalMap = () => {
  return (
    <section className="md:max-w-7xl py-20 px-6 mx-auto">
      <div className="flex md:flex-row flex-col gap-12 justify-center items-center">
        {/* left map */}
        <img src={IndiaMap} className="h-full" />
        {/* right locations */}
        <div>
          <h1 className="text-primary text-[28px] font-extrabold mb-5 text-left ">
            Where We Work
          </h1>
          <h1 className="text-[34px] font-extrabold mb-5 text-left uppercase">
            Regional Map
          </h1>
          <p className="text-medium text-left mb-4">
            The Desai Foundation is proud to work in regions all across India,
            implementing a variety of our 30 programs in health, livelihood, and
            menstrual equity.
          </p>
          <p className="mb-8">
            <strong> And we are just getting started!</strong>
          </p>
          <ul className="mb-6 space-y-3">
            {staes.map((state, idx) => (
              <li key={idx} className="flex items-center text-primary font-bold text-left text-lg">
                <BiSolidDisc className="text-primary mr-3 w-7 h-7" />
                {state}
              </li>
            ))}
          </ul>

          <p className="text-left font-medium mb-6">
            Asani Sanitary Napkin Distribution
          </p>
          <h1 className="text-[34px] font-extrabold mb-5 text-left uppercase">
            MEDICAL SUPPORT
          </h1>
          <p>
            Antigen Rapid Test Kits + Ventilators + Oxygen concentrators +BiPAP
            Machines Distribution
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegionalMap;
