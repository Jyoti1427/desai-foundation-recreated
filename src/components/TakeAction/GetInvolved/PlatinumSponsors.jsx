import React from "react";
import img1 from "../../../assets/TakeAction/img1.jpg";
import img2 from "../../../assets/TakeAction/img2.jpg";
import img3 from "../../../assets/TakeAction/img3.jpg";
import img4 from "../../../assets/TakeAction/img4.jpg";
import img5 from "../../../assets/TakeAction/img5.jpg";
import img6 from "../../../assets/TakeAction/img6.jpg";
import img7 from "../../../assets/TakeAction/img7.jpg";
import img8 from "../../../assets/TakeAction/img8.jpg";
import img9 from "../../../assets/TakeAction/img9.jpg";
import img10 from "../../../assets/TakeAction/Lexus_2D_Tag_Black_HR_RGB-768x180 (1).png";

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const sponsors = [
  "Mir Arif, Blue Cloud Ventures",
  "Neil Aronson",
  "Akamai Technologies",
  "The Bachelder Group, Morgan Stanley",
  "Brown Brothers Harriman & Co.",
  "Richard and Rose Byrne",
  "Mitesh & Minesh Patel",
  "Mukesh & Priti Chatter, Chatter Foundation",
  "Erin Cox",
  "Ankit Gupta, Nandansons Charitable Foundation",
  "Guru Krupa Foundation",
  "Nish & Jacinta Nistala",
  "Gaugarin & Madavi Oliver",
  "Jignesh Pachani",
  "Kay Cannon",
  "Jay Patel",
  "Michelle Ranavat, Ranavat",
  "Amar & Deepika Sawhney, Sawhney Family Foundation",
  "Romit & Tanya Shah",
  "Yash & Jigna Shah Family Foundation",
  "Raj Sharma, Merrill Lynch",
  "Reza Zanjani",
  "Tribe Bohemian",
  "LEXUS",
];

const PlatinumSponsors = () => {
  return (
    <div className="md:max-w-7xl mx-auto flex md:flex-row flex-col gap-8 px-6 py-20">
      {/* left platinum sponsors*/}
      <div>
        <h2 className="text-[26px] font-bold mb-8 text-primary ">
          Platinum Sponsors
        </h2>
        <ul className="list-disc space-y-2 px-3 font-bold">
          {sponsors.map((sponsor, index) => (
            <li key={index}>{sponsor}</li>
          ))}
        </ul>
      </div>
      {/* right sponsors logo */}
      <div className="md:max-w-4xl mx-auto mt-16 rounded-2xl bg-white">
        <div className="grid sm:grid-cols-2 space-y-12 md:grid-cols-3 gap-4">
          {imageList.map((img, idx) => (
            <div
              key={idx}
              className="w-ful h-full flex justify-center items-center"
            >
              <img
                src={img}
                alt={`grid-${idx}`}
                className="px-16 md:w-full  w-2/3 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlatinumSponsors;
