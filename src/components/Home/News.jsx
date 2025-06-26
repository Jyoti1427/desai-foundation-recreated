// import React from "react";
// import Button from "../ui/Button";
// import LotusEvent from "../../assets/images/Desai-Lotus-2025-Photo.jpg";
// import RuralIndia from "../../assets/images/Desai-Sanitary.png";
// import GoldenAwards from "../../assets/images/goldenAward.jpg";
// import makingStories from "../../assets/images/makingStories.jpg";

// const News = () => {
//   return (
//     <section className="bg-gray-100 h-[58rem]">
//       <div className="pt-12 ml-40">
//         <h1 className="text-2xl pl-16 text-primary font-bold mb-4">News</h1>
//         <h2 className="text-2xl font-bold pl-16 mb-8 uppercase">
//           Latest News and Updates
//         </h2>
//         <div className="flex justify-center gap-16">
//           {/* left */}
//           <div className="h-[34rem] w-[40rem] rounded-2xl border border-primary">
//             <img
//               src={LotusEvent}
//               className="w-[40rem] h-[20rem] rounded-t rounded-2xl object-cover"
//             />
//             <p className="text-[23px] uppercase my-4 px-4 text-left leading-tight">
//               Desai Foundation’s 11th Annual Lotus Festival to Celebrate 10
//               Million Lives Impacted — Sept. 13 at Boston’s Omni Seaport
//             </p>
//             <Button className="text-[18.5px] uppercase mx-6 py-4">
//               {" "}
//               View all news
//             </Button>
//           </div>
//           {/* right */}
//           <div className="w-1/2 flex flex-col justify-evenly gap-6">
//             <div className="flex justify-between items-center gap-6">
//               {/* img */}
//               <div className="w-[17rem] h-[10.25rem] rounded-xl border border-primary">
//                 <img
//                   src={GoldenAwards}
//                   className="w-[17rem] h-[10rem] rounded-xl object-cover"
//                 />
//               </div>
//               {/* content */}
//               <div className="w-2/3 ">
//                 <strong className="text-left max-w-[23rem] block text-wrap leading-tight">
//                   SGCCI Honours Excellence Across 15 Categories at Grand Golden
//                   Jubilee Awards Ceremony in Surat
//                 </strong>

//                 <a href="#" className="block mt-3 uppercase">
//                   learn more
//                 </a>
//                 <div className="w-24 h-[1.5px] bg-primary mt-1"></div>
//               </div>
//             </div>

//             <div className="flex justify-start items-center gap-6">
//               {/* img */}
//               <div className="w-[17rem] h-[10.25rem] rounded-xl border border-primary">
//                 <img
//                   src={makingStories}
//                   className="w-[17rem] h-[10rem] rounded-xl object-cover"
//                 />
//               </div>
//               {/* content */}
//               <div className="w-2/3">
//                 <strong className="text-left max-w--[23rem] block text-wrap">
//                   Making Strides – 2024
//                 </strong>

//                 <a href="#" className="block mt-3 uppercase">
//                   learn more
//                 </a>
//                 <div className="w-24 h-[1.5px] bg-primary mt-1"></div>
//               </div>
//             </div>

//             <div className="flex justify-between items-center gap-4">
//               {/* img */}
//               <div className="w-[17rem] h-[10.25rem] rounded-xl border border-primary">
//                 <img
//                   src={RuralIndia}
//                   className="w-[17rem] h-[10rem] rounded-xl object-cover"
//                 />
//               </div>
//               {/* content */}
//               <div className="w-2/3">
//                 <strong className="text-left max-w-[23rem] block text-wrap">
//                   The Desai Foundation Reaches the Milestone of Impacting Over
//                   10 Million Lives in Rural India
//                 </strong>

//                 <a href="#" className="block mt-3 uppercase">
//                   learn more
//                 </a>
//                 <div className="w-24 h-[1.5px] bg-primary mt-1"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default News;

import React from "react";
import Button from "../ui/Button";
import LotusEvent from "../../assets/images/Desai-Lotus-2025-Photo.jpg";
import RuralIndia from "../../assets/images/Desai-Sanitary.png";
import GoldenAwards from "../../assets/images/goldenAward.jpg";
import makingStories from "../../assets/images/makingStories.jpg";

const News = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="px-4 md:pl-32">
        <div className="ml-12">
          <h1 className="text-2xl text-primary font-bold mb-4">News</h1>
          <h2 className="text-2xl font-bold mb-8 uppercase">
            Latest News and Updates
          </h2>
        </div>

        {/* Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-16">
          {/* Left Side: Big News Card */}
          <div className="w-full lg:w-[40rem] border border-primary rounded-2xl overflow-hidden ">
            <img
              src={LotusEvent}
              alt="Lotus Event"
              className="w-full h-[20rem] object-cover"
            />
            <p className="text-[20px] md:text-[23px] uppercase my-4 px-4 text-left leading-tight">
              Desai Foundation’s 11th Annual Lotus Festival to Celebrate 10
              Million Lives Impacted — Sept. 13 at Boston’s Omni Seaport
            </p>
            <Button className="text-[16px] md:text-[18.5px] uppercase mx-6 my-4 py-4">
              View all news
            </Button>
          </div>

          {/* Right Side: 3 Small Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img
                src={GoldenAwards}
                className="w-full md:w-[17rem] h-[10rem] rounded-xl border border-primary object-cover"
                alt="Golden Awards"
              />
              <div className="md:w-2/3 mt-2 md:mt-0">
                <strong className="block text-left max-w-[23rem] text-wrap">
                  SGCCI Honours Excellence Across 15 Categories at Grand Golden
                  Jubilee Awards Ceremony in Surat
                </strong>
                <a href="#" className="uppercase text-sm">
                  learn more
                </a>
                <div className="w-20 h-[2px] bg-primary mt-1"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img
                src={makingStories}
                className="w-full md:w-[17rem] h-[10rem] rounded-xl border border-primary object-cover"
                alt="Making Strides"
              />
              <div className="md:w-2/3 mt-2 md:mt-0">
                <strong className="block text-left max-w-[23rem] text-wrap">
                  Making Strides – 2024
                </strong>
                <a href="#" className="uppercase text-sm">
                  learn more
                </a>
                <div className="w-20 h-[2px] bg-primary mt-1"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <img
                src={RuralIndia}
                className="w-full md:w-[17rem] h-[10rem] rounded-xl border border-primary object-cover"
                alt="Rural India"
              />
              <div className="md:w-2/3 mt-2 md:mt-0">
                <strong className="block text-left max-w-[23rem] text-wrap">
                  The Desai Foundation Reaches the Milestone of Impacting Over
                  10 Million Lives in Rural India
                </strong>
                <a href="#" className="uppercase text-sm">
                  learn more
                </a>
                <div className="w-20 h-[2px] bg-primary mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
