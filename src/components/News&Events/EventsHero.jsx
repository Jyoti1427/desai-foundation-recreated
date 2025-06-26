import React from 'react';
import heroImage from "../../assets/images/News-events-hero.png"

const EventsHero = () => {
  return (
       <section className="relative w-full mb-12 h-auto ">
          <img
            src={heroImage}
            alt="Hero Background"
            className="w-full h-auto object-cover"
          />
          
        </section>
  )
}

export default EventsHero
