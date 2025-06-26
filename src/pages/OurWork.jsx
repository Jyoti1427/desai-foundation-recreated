import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBanner from "../components/WhatWeDo/OurWork/HeroBanner";
import Health from "../components/WhatWeDo/OurWork/Health";
import Climate from "../components/WhatWeDo/OurWork/Climate";
import MenstrualEquity from "../components/WhatWeDo/OurWork/MenstrualEquity";
import Livelihood from "../components/WhatWeDo/OurWork/Livelihood";
import Mission from "../components/WhatWeDo/OurWork/Mission";
import Testimonials from "../components/WhatWeDo/OurWork/Testimonials";

const OurWork = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="">
      <HeroBanner />
      <Mission />
      <section id="health">
        <Health />
      </section>
      <section id="livelihood">
        <Livelihood />
      </section>
      <section id="menstrual-equity">
        <MenstrualEquity />
      </section>
      <section id="climate">
        <Climate />
      </section>
      <Testimonials />
    </div>
  );
};

export default OurWork;
