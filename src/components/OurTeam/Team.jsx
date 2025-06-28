import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Heading from "../ui/SectionHeading";
import Button from "../ui/Button";

// Importing images...

import img1 from "../../assets/Team/1.jpg";
import img2 from "../../assets/Team/2.jpg";
import img3 from "../../assets/Team/3.jpg";
import img4 from "../../assets/Team/4.jpg";
import img5 from "../../assets/Team/5.jpg";
import img6 from "../../assets/Team/6.jpg";
import img7 from "../../assets/Team/7.jpg";
import img8 from "../../assets/Team/8.jpg";
import img9 from "../../assets/Team/9.jpg";
import img10 from "../../assets/Team/10.jpg";
import img11 from "../../assets/Team/11.jpg";
import img12 from "../../assets/Team/12.jpg";
import img13 from "../../assets/Team/13.jpg";
import img14 from "../../assets/Team/14.jpg";
import img15 from "../../assets/Team/15.jpg";
import img16 from "../../assets/Team/16.jpg";
import img17 from "../../assets/Team/17.jpg";
import img18 from "../../assets/Team/18.jpg";
import img19 from "../../assets/Team/19.jpg";
import img20 from "../../assets/Team/20.jpg";
import img21 from "../../assets/Team/21.jpg";
import img22 from "../../assets/Team/22.jpg";
import img23 from "../../assets/Team/23.jpg";
import img24 from "../../assets/Team/24.jpg";
import img25 from "../../assets/Team/25.jpg";
import img26 from "../../assets/Team/26.jpg";
import img27 from "../../assets/Team/27.jpg";
import img28 from "../../assets/Team/28.jpg";
import img29 from "../../assets/Team/29.jpg";
import img30 from "../../assets/Team/30.jpg";

const teamMembers = [
  { img: img1, name: "Aarti Sharma", designation: "Program Manager" },
  { img: img2, name: "Ravi Patel", designation: "Health Coordinator" },
  { img: img3, name: "Sneha Desai", designation: "Education Lead" },
  { img: img4, name: "Vikram Shah", designation: "Finance Officer" },
  { img: img5, name: "Meena Rao", designation: "Field Coordinator" },
  { img: img6, name: "Rahul Mehta", designation: "Project Lead" },
  { img: img7, name: "Neha Kapoor", designation: "Outreach Head" },
  { img: img8, name: "Suresh Singh", designation: "Trainer" },
  { img: img9, name: "Priya Nair", designation: "Health Worker" },
  { img: img10, name: "Anil Joshi", designation: "Youth Counselor" },
  { img: img11, name: "Shalini Verma", designation: "Digital Educator" },
  { img: img12, name: "Kiran Kumar", designation: "Skill Coach" },
  { img: img13, name: "Nisha Aggarwal", designation: "Team Lead" },
  { img: img14, name: "Aman Khan", designation: "Operations" },
  { img: img15, name: "Tanvi Bansal", designation: "Community Expert" },
  { img: img16, name: "Nikhil Soni", designation: "Analyst" },
  { img: img17, name: "Preeti Gupta", designation: "HR Executive" },
  { img: img18, name: "Rohit Das", designation: "Strategy Head" },
  { img: img19, name: "Divya Malhotra", designation: "Content Writer" },
  { img: img20, name: "Manish Rathi", designation: "Tech Support" },
  { img: img21, name: "Kavita Jain", designation: "Counselor" },
  { img: img22, name: "Yogesh Yadav", designation: "Field Officer" },
  { img: img23, name: "Sheetal Pandey", designation: "Trainer" },
  { img: img24, name: "Akhil Menon", designation: "Consultant" },
  { img: img25, name: "Pooja Sahu", designation: "Women Welfare Head" },
  { img: img18, name: "Mohit Verma", designation: "CSR Coordinator" },
  { img: img27, name: "Lavanya Reddy", designation: "Event Manager" },
  { img: img28, name: "Vivek Iyer", designation: "Development Officer" },
  { img: img29, name: "Ritika Chawla", designation: "Legal Advisor" },
  { img: img30, name: "Deepak Thakur", designation: "Assistant Manager" },
];

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 12);

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="our-team" className="py-12 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="p-4 bg-white">
          <Heading title="OUR TEAM" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
            {visibleMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>

          {/* Toggle Button */}
          {teamMembers.length > 12 && (
            <div className="mt-10 text-center">
              <Button onClick={handleToggle}>
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
