import React from "react";
import Button from "../ui/Button";
import event2 from "../../assets/images/Diwali.jpg";
import event1 from "../../assets/images/Lotus-Logo-Purple21-scaled.jpg";

const Events = () => {
  return (
    <section>
      {/* left content */}
      <div className="max-w-7xl mx-auto px-4 py-24 flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="w-1/2">
          <div className="flex justify-start items-center">
            <div className="h-[1px] w-20 mb-6 mr-3 bg-blue-700"></div>
            <h1 className="text-[25px] text-primary font-extrabold text-left mb-4">
              Events
            </h1>
          </div>
          <h1 className="text-[28px] font-bold mb-4 uppercase">
            Upcoming Events
          </h1>
          <strong>
            Here’s all the exciting things you can expect this year:
          </strong>
          <br />
          <p className="mt-4 text-justify md:text-wrap">
            From the vibrant lights of Diwali on the Hudson in NYC to the
            cultural richness of the Lotus Festival in Boston, and the global
            charm of Cocktails and Chat, our events promise unforgettable
            moments.
          </p>
          <Button className="mt-8 text-[16px] py-4 uppercase">
            View all events
          </Button>
        </div>

        {/* right cards */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          {/* card 1 */}
          <div className="w-[20rem] h-[16rem] rounded-2xl border border-primary">
            <img
              src={event1}
              className="w-[19.8rem] h-[8rem] rounded-2xl object-cover"
            />
            <p className="mx-6 text-xl uppercase mb-4">
              <strong>Lotus festival 2025</strong>
            </p>
            <Button className="mx-6 uppercase"> Learn more</Button>
          </div>
          {/* card 2 */}
          <div className="w-[20rem] h-[16rem] rounded-2xl border border-primary">
            <img
              src={event2}
              className="w-[19.8rem] h-[8rem] rounded-2xl object-cover"
            />
            <p className="mx-6 text-xl uppercase mb-4">
              <strong>Diwali on the Hudson 2025</strong>
            </p>
            <Button className="mx-6 uppercase"> Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
