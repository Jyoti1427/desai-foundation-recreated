import React from "react";
import img1 from "../../assets/images/Lotus-Logo-Purple21-scaled.jpg";
import img2 from "../../assets/images/Diwali.jpg";
import img3 from "../../assets/images/Holi.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import Button from "../ui/Button";

const cardData = [
  {
    image: img1,
    imgAlt: "Lotus Festival Event",
    title: "LOTUS FESTIVAL 2025",
    buttonLabel: "Learn more",
  },
  {
    image: img2,
    imgAlt: "Diwali",
    title: "Diwali on the Hudson 2025",
    buttonLabel: "Learn more",
  },
];

const Celebrate = () => {
  return (
    <section className="w-full py-16">
      <div className="md:max-w-[85rem] mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] flex flex-col justify-between">
          <div>
            <h1 className="text-primary text-left mb-5 font-bold text-[28px]">
              Celebrate With Us!
            </h1>
            <h1 className="text-left mb-5 font-bold text-[28px] uppercase">
              upcoming events and gatherings
            </h1>
            <p className="text-left text-medium">
              Be part of the impact by attending one of our signature events.
              Celebrate at Diwali on the Hudson in NYC, enjoy the elegance of
              our annual Lotus Festival Gala in Boston, join the festivities at
              Holi in Miami, or connect with us at a more intimate gathering,
              Cocktails and Chaat. All proceeds from these events directly
              support our mission to empower women and children in rural India
              through health, livelihood, and menstrual equity programs. Your
              ticket/table counts as a donation, and your support makes our work
              possible. We’re so grateful for our loyal event-goers!
            </p>

            {/* Event Cards */}
            <div className="flex flex-wrap gap-6 mt-8">
              {cardData.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[23.5rem] h-[16rem] rounded-xl border border-primary overflow-hidden shadow-md"
                >
                  <img
                    src={card.image}
                    alt={card.imgAlt}
                    className="w-full h-[8rem] object-cover"
                  />
                  <div className="p-2  h-[8rem] flex flex-col justify-between">
                    <h3 className="font-bold text-[18px] uppercase mt-4">
                      {card.title}
                    </h3>
                    <button className="font-bold text-sm uppercase text-white bg-primary rounded-full px-8 py-2 mb-5 ml-4 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 w-max">
                      {card.buttonLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Button */}
          <div className="mt-10">
            <Button className="text-[18px] py-4 uppercase">
              See more events
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between">
          <div>
            <h1 className="text-left mb-3 font-bold text-[28px] uppercase">
              past events
            </h1>
            <div className="bg-primary w-full h-1 my-4"></div>

            <div className="flex flex-col gap-10">
              {/* Past Event 1 */}
              <div className="flex items-center gap-8">
                <img
                  src={img2}
                  className="w-[13rem] h-[8rem] object-cover rounded-2xl border border-primary transition-transform duration-500 hover:scale-110"
                />
                <div>
                  <strong>Diwali on the Hudson 2024</strong>
                  <br />
                  <br />
                  <a
                    href="#"
                    className="font-medium uppercase underline underline-offset-1"
                  >
                    learn more
                  </a>
                </div>
              </div>

              {/* Past Event 2 */}
              <div className="flex items-center gap-8">
                <img
                  src={img4}
                  className="w-[13rem] h-[7rem] object-cover rounded-2xl border border-primary transition-transform duration-500 hover:scale-110"
                />
                <div>
                  <strong>Lotus Festival 2024</strong>
                  <br />
                  <br />
                  <a
                    href="#"
                    className="font-medium uppercase underline underline-offset-1"
                  >
                    learn more
                  </a>
                </div>
              </div>

              {/* Past Event 3 */}
              <div className="flex items-center gap-8">
                <img
                  src={img3}
                  className="w-[13rem] h-[8rem] object-cover rounded-2xl border border-primary transition-transform duration-500 hover:scale-110"
                />
                <div>
                  <strong>Holi in Miami</strong>
                  <br />
                  <br />
                  <a
                    href="#"
                    className="font-medium uppercase underline underline-offset-1"
                  >
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <div className="mt-10">
            <Button className="py-4 uppercase">See more past events</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebrate;
