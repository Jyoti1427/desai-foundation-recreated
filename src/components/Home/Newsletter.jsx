import React from "react";
import Button from "../ui/Button";

const Newsletter = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col px-4 md:justify-between md:items-center py-6 gap-10">
        {/* Left Text Block */}
        <div className="md:text-left text-center md:w-1/2">
          <h1 className="md:text-[25px] text-2xl text-white font-medium mb-3">
            Sign Up for Newsletter
          </h1>
          <h2 className="md:text-[25px] text-2xl text-white font-bold uppercase">
            Join the community
          </h2>
        </div>

        {/* Right Form Block */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-col">
            <input
              type="email"
              placeholder="Email"
              className="md:w-full w-full bg-white rounded-full py-2 px-4 mb-3"
            ></input>
            <Button className="block  w-full text-[18px] py-3 uppercase">
              send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
