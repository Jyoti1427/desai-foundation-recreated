import React from "react";
import Button from "../ui/Button";

const Newsletter = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center bg-pink-950 py-12">
      <div>
        <h1 className="text-[28px] text-white font-medium mb-1">
          Sign Up for Newsletter
        </h1>
        <h2 className="text-[29px] text-white font-bold uppercase">
          Join the community
        </h2>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-[35rem] bg-white rounded-full py-2 px-4 mb-3"
        ></input>
        <Button className="block w-[35rem] text-[18px] py-3 uppercase">send</Button>
      </div>
    </div>
  );
};

export default Newsletter;
