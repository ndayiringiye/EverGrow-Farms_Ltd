import React, { useEffect } from "react";
import "flowbite";

const HeroSection = () => {
  useEffect(() => {}, []);

  return (
    <div className="relative w-full ">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="/Images/hero-image.png"
              className="absolute block w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Slide 1"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/Images/pork.png"
              className="absolute block w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Slide 2"
            />
          </div>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </span>
        </button>

        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
