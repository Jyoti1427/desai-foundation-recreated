import React from "react";
import Heading from "../ui/SectionHeading";
import img27 from "../../assets/Team/27.jpg";
import img28 from "../../assets/Team/28.jpg";
import img29 from "../../assets/Team/29.jpg";
import img30 from "../../assets/Team/30.jpg";
import img31 from "../../assets/Team/31.jpg";
import img32 from "../../assets/Team/32.jpg";
import img33 from "../../assets/Team/33.jpg";
import img34 from "../../assets/Team/34.jpg";

const teamMembers = [
  { img: img27, name: "Aarti Sharma", designation: "Program Manager" },
  { img: img28, name: "Ravi Patel", designation: "Health Coordinator" },
  { img: img29, name: "Dr. Ananya Das", designation: "Medical Officer" },
  { img: img30, name: "Vikram Iyer", designation: "Livelihood Specialist" },
  { img: img31, name: "Emily Watson", designation: "Partnership Lead" },
  {
    img: img32,
    name: "Amanpreet Kaur",
    designation: "Community Outreach Lead",
  },
  { img: img33, name: "James Henderson", designation: "Volunteer Coordinator" },
  { img: img34, name: "Kriti Mehra", designation: "Women Empowerment Lead" },
];

const Advisors = () => {
  return (
    <section id="advisors" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 bg-white">
          {/* heading */}
          <Heading title="ADVISORS" />
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

export default Advisors;
