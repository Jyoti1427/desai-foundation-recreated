import React from "react";
import Heading from "../ui/SectionHeading";
import img31 from "../../assets/Team/31.jpg";
import img32 from "../../assets/Team/32.jpg";
import img33 from "../../assets/Team/33.jpg";
import img34 from "../../assets/Team/34.jpg";
import img35 from "../../assets/Team/35.jpg";
import img36 from "../../assets/Team/36.jpg";
import img37 from "../../assets/Team/37.jpg";
import img38 from "../../assets/Team/38.jpg";
import img39 from "../../assets/Team/39.jpg";
import img40 from "../../assets/Team/40.jpg";
import img41 from "../../assets/Team/41.jpg";
import img42 from "../../assets/Team/42.jpg";

const teamMembers = [
  { img: img31, name: "Emily Watson", designation: "Partnership Lead" },
  {
    img: img32,
    name: "Amanpreet Kaur",
    designation: "Community Outreach Lead",
  },
  { img: img33, name: "James Henderson", designation: "Volunteer Coordinator" },
  { img: img34, name: "Kriti Mehra", designation: "Women Empowerment Lead" },
  { img: img35, name: "Aditya Rane", designation: "Field Operations Manager" },
  { img: img36, name: "Sarah Thompson", designation: "Impact Analyst" },
  { img: img37, name: "Priya Nair", designation: "Project Coordinator" },
  { img: img38, name: "Rajeev Khanna", designation: "IT & Digital Strategist" },
  {
    img: img39,
    name: "Dr. Meenakshi Rao",
    designation: "Senior Program Advisor",
  },
  { img: img40, name: "Jessica Lee", designation: "Fundraising Manager" },
  {
    img: img41,
    name: "Tanmay Joshi",
    designation: "Climate Action Coordinator",
  },
  {
    img: img42,
    name: "Nina Banerjee",
    designation: "Education Program Officer",
  },
];

const DirectorsBoard = () => {
  return (
    <section id="board-of-directors" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 bg-white">
          {/* heading */}
          <Heading title="BOARD OF DIRECTORS" />
          {/* members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="w-full h-full relative flex justify-center items-end bg-cover bg-center"
                style={{
                  backgroundImage: `url(${member.img})`,
                  height: "220px",
                }}
              >
                <div className="w-full bg-pink-900/60 text-white text-center py-2">
                  <p className="text-sm font-bold leading-tight">
                    {member.name}
                  </p>
                  <p className="text-xs">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsBoard;
