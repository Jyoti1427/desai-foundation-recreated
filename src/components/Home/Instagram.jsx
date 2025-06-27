import React from "react";
import Button from "../ui/Button";
import InstagramImages from "../../data/InstagramImages";
import HorizontalRule from "../ui/HorizontalRule";

const Instagram = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-center mt-4">
            <HorizontalRule className="mb-3 mr-3"/>
            <h2 className="text-[22px] text-primary font-extrabold mb-2">
              Instagram
            </h2>
          </div>

          <h2 className="text-[25px] mb-5 text-left font-extrabold uppercase">
            Follow the Desai foundation
          </h2>
          <p className="text-left mb-8">
            Connect with us on social media! We share inspiring stories from the
            ground, upcoming events, and more about the work we do.
          </p>
          <Button className="text-[18px] py-4 uppercase">follow</Button>
        </div>

        {/* Right Grid Section */}
        <div className="md:w-1/2 w-full h-full  grid md:grid-cols-3 gap-7">
          {InstagramImages.map((img, idx) => (
            <div
              key={idx}
              className="relative h-48 sm:h-[40rem] md:h-48 w-full overflow-hidden group"
            >
              <img
                src={img}
                alt={`Inspiring stories ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
