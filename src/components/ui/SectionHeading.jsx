import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div className="my-8">
      <div className="h-1 w-full bg-pink-950"></div>
      <h2 className="text-2xl font-extrabold text-pink-950 py-3 uppercase text-center">
        {title}
      </h2>
      <div className="h-1 w-full bg-pink-950"></div>
    </div>
  );
};

export default SectionHeading;
