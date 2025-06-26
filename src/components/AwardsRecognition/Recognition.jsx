import React from "react";
import AwardsCard from "../ui/AwardsCard";
import award1 from "../../assets/Awards/bharat-csr-sustainability-summit-4thedition-banner2.jpg";
import award2 from "../../assets/Awards/Southern-Gujarat-Chamber-of-Commerce-and-Industry.png";
import award3 from "../../assets/Awards/Jumane-D.Williams.png";
import award4 from "../../assets/Awards/indian-social-impact-awards-300x155.jpg";
import award5 from "../../assets/Awards/foundation-logo-300x155.jpg";
import award6 from "../../assets/Awards/clinton-visits-df-300x155.jpg";
import award7 from "../../assets/Awards/csr-award-logo-300x155.jpg";
import award8 from "../../assets/Awards/IMG_8588-scaled-1-768x511.jpeg";
import award9 from "../../assets/Awards/csr-universe-social-impact-awards-300x155.jpg";
import award10 from "../../assets/Awards/indian-achievers-awards-logo-300x155.jpg";
import award11 from "../../assets/Awards/bridgestone-logo-300x155.jpg";

const awards = [
  {
    image: award1,
    title: "Best NGO-Healthcare Award",
  },
  {
    image: award2,
    title: "Award for Social Welfare Program by NGO",
  },
  {
    image: award3,
    title: "The Public Advocate For the City of New York",
  },
  {
    image: award4,
    title: "Top 20 Best NGO’s of the Year 2024",
  },
  {
    image:  award5,
    title: "Economic Empowerment Excellence Award",
  },
  {
    image: award6,
    title: "Secretary Clinton Visits Desai Foundation!",
  },
  {
    image: award7,
    title: "Indian CSR Awards 2023",
  },
  {
    image: award8,
    title: "Gujarat Women Empowerment Award 2023-24",
  },
  {
    image: award9,
    title: "The CSR Universe Social Impact Awards 2023",
  },
  {
    image: award10,
    title: "Indian Achievers’ Award 2021-22",
  },
  {
    image: award11,
    title: "Bridgestone Mobility Social Impact Awards 2021",
  },
];

const Recognition = () => {
  return (
    <section className="md:max-w-7xl mx-auto py-20">
      {/* heading and decription */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-center text-primary mb-12 uppercase">
          Awards & Recognition
        </h1>
        <p className="text-center">
          We are humbled and honored to showcase some of the awards we have
          received for our work. Each recognition serves as a testament to the
          dedication and impact of our mission – empowering women and girls in
          rural India. These accolades not only celebrate our past successes but
          also fuel our relentless commitment to creating positive change and
          cultivating dignity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <AwardsCard key={index} image={award.image} title={award.title} />
        ))}
      </div>
    </section>
  );
};

export default Recognition;
