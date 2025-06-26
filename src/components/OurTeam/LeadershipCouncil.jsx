import React from "react";
import Heading from "../ui/SectionHeading";
import img43 from "../../assets/Team/43.jpg";
import img44 from "../../assets/Team/44.jpg";
import img45 from "../../assets/Team/45.jpg";
import img46 from "../../assets/Team/46.jpg";
import img47 from "../../assets/Team/47.jpg";
import img48 from "../../assets/Team/48.jpg";
import img49 from "../../assets/Team/49.jpg";
import img50 from "../../assets/Team/50.jpg";
import img51 from "../../assets/Team/51.jpg";
import img52 from "../../assets/Team/52.jpg";

const teamMembers = [
  { img: img43, name: "Daniel Kim", designation: "Media & Communications" },
  { img: img44, name: "Sonal Verma", designation: "Regional Manager - North" },
  {
    img: img45,
    name: "Michael Carter",
    designation: "Monitoring & Evaluation Expert",
  },
  { img: img46, name: "Neha Kulkarni", designation: "Mental Health Counselor" },
  {
    img: img47,
    name: "Aliyah Singh",
    designation: "Youth Program Facilitator",
  },
  { img: img48, name: "Rahul Chatterjee", designation: "Technology Officer" },
  {
    img: img49,
    name: "Laura García",
    designation: "International Programs Advisor",
  },
  { img: img50, name: "Preeti Ghosh", designation: "Grants Manager" },
  { img: img51, name: "Nikhil Taneja", designation: "Operations Director" },
  { img: img52, name: "Anna Müller", designation: "Sustainability Consultant" },
];

const LeadershipCouncil = () => {
  return (
    <section id="leadership-council" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 bg-white">
          {/* heading */}
          <Heading title="LEADERSHIP COUNCIL" />
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

export default LeadershipCouncil;
