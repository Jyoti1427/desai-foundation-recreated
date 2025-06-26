import React from "react";
import awardsImg from "../../assets/images/indian-csr-awards-logo.png"

const Awards = () => {
  return (
    <section className="w-full h-48 my-6">
      <div className="flex justify-evenly items-center bg-gray-200 py-8">
        <div>
          <h2 className="text-pink-800 text-[28px] text-left font-extrabold mb-4">
            Recent Awards
          </h2>
          <p className="text-2xl yext-left font-extrabold">
            AWARDED THE “TOP 20 MOST TRUSTED NGO’S” BY <br /> THE INDIAN CSR AWARDS
          </p>
        </div>
        <div>
            <img src={awardsImg} />
        </div>
      </div>
    </section>
  );
};

export default Awards;
