import React from "react";

const AboutVideo = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto mt-20 px-4">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Yf_Gd88SUho?si=xraq-iaob-atgMG2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutVideo;
