import React from "react";
import missionImg from "../../assets/images/mission-circle.png";
import missionImg2 from "../../assets/images/smilingWomen.jpg";

// const OurMission = () => {
//   return (
//     <section className="w-full h-[65rem]">
//       <div className="flex flex-col justify-between w-full h-full">
//         <div className="flex flex-col md:flex-row h-full">
//           {/* left part */}
//           <div className="bg-pink-950 w-1/2 ">
//             <div className="w-1/2 h-1/3 pt-12 mx-auto">
//               <h1 className="text-5xl text-white font-bold uppercase text-left pt-32 mb-3">
//                 our Mission
//               </h1>
//               <p className="text-[28px] font-bold text-white text-left ">
//                 We empower women and children through community programs to
//                 elevate health, livelihood, and menstrual equity in rural India.
//               </p>
//             </div>
//           </div>
//           {/* right part */}
//           <div className="bg-gray-200 w-1/2">
//             <img
//               src={missionImg}
//               className="w-[360px] md:w-[440px] ml-32 mt-20"
//             />
//           </div>
//         </div>

//         {/* bottom part */}
//         <div className="md:px-8 ">
//           <img
//             src={missionImg2}
//             className="rounded-xl md:w-3/4 mx-auto "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurMission;

const OurMission = () => {
  return (
    <section className="relative">
      {/* top section */}
      <div className="flex md:flex-row flex-col h-[38rem] w-full my-12">
        {/* left mission */}
        <div className="md:h-3/4 h-[90rem] w-full bg-pink-950">
          <div className="md:w-1/2 mx-auto px-12 mt-8 md:mt-20">
            <div>
              <h2 className="md:text-5xl text-[32px] text-white font-bold uppercase mb-3">
                Our Mission
              </h2>
              <p className="md:text-[28px] text-[20px] text-white font-bold">
                We empower women and children through community programs to
                elevate health, livelihood, and menstrual equity in rural India.
              </p>
            </div>
          </div>
        </div>
        {/* right mission circle */}
        <div className="h-full w-full  bg-gray-200">
          <img src={missionImg} alt="Mission Image" className="w-1/2 -mt-[24rem] ml-[10rem] md:mt-16" />
        </div>
      </div>
      {/* bottom mission banner image */}
      <div className="absolute inset-0 h-[32rem] flex items-end justify-center pointer-events-none">
        <img src={missionImg2} className="rounded-xl shadow-2xl md:w-3/4 px-6 mx-auto z-10 transform translate-y-12" />
      </div>
    </section>
  );
};

export default OurMission;
