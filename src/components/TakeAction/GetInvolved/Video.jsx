import React from "react";

const Video = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="md:max-w-5xl mx-auto px-4">
        <h1 className="text-[26px] font-bold text-center mb-8">
          Thank You to Our Incredible Donors!
        </h1>
        <div className="aspect-video w-full">
          <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/iCelrmMTRR8?si=qic-KIOej5yiU-hR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p className="text-center font-bold pt-12 mb-6">
          We are grateful to all of our donors – whether you supported our
          Pledge Your Period Campaign, donated to the Asani Sanitary Napkin
          Program, or attended our events to support our programming, we want to
          thank you! Your generosity has been the driving force behind our
          mission, supporting us to create a meaningful impact in the lives of
          women and children across rural India. In the fiscal year 2023, we
          were fortunate to receive overwhelming support from more than 523
          individual, corporate, and foundational donors.
        </p>
        <p className="font-bold mb-8">
          A special acknowledgment goes to our Platinum Donors, whose
          contributions of $5,000 or more in this fiscal year have truly made a
          significant difference. Thank you so much to these incredible people,
          companies, and organizations!
        </p>
      </div>
    </section>
  );
};

export default Video;
