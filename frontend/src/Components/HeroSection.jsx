import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Sustainable Farming",
      highlight: "Driven by Superior Genetics",
      subtitle: "Empowering Rural Communities",
      description:
        "At Evergrow Farms, we’re revolutionizing pork production in Rwanda through ethical practices, superior breeding, and a deep commitment to food security and community empowerment.",
      image: "../public/Images/hero-image.png",
    },
    {
      id: 2,
      title: "Delivering Quality Pork",
      highlight: "From Our Farm to Your Table",
      subtitle: "",
      description:
        "We ensure clean, safe, and nutritious pork by maintaining modern processing standards — guaranteeing freshness, quality, and trust in every cut we produce.",
      image: "../public/Images/pork.png",
    },
    {
      id: 3,
      title: "Empowering Farmers",
      highlight: "With Knowledge That Grows",
      subtitle: "",
      description:
        "Through hands-on training and expert mentorship, we equip farmers with modern, practical skills — transforming passion into productivity and knowledge into lasting success.",
      image: "../public/Images/traing.png",
    },
    {
      id: 4,
      title: "Building Stronger Breeds",
      highlight: "For a Sustainable Future",
      subtitle: "",
      description:
        "Our advanced breeding programs focus on superior genetics to enhance productivity, income, and resilience — supporting farmers in achieving long-term sustainability.",
      image: "../public/Images/semination.jpg",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
            <div className="relative h-full flex items-center ml-4 md:ml-12">
              <div className="max-w-4xl">
                <div className="mb-6 md:mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-3">
                    {slide.title}
                  </h1>
                  {slide.highlight && (
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-500 leading-[1.1] mb-3">
                      {slide.highlight}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                      {slide.subtitle}
                    </h3>
                  )}
                </div>
                <p className="text-md md:text-lg lg:text-xl text-white/95 mb-8 md:mb-10 max-w-3xl leading-relaxed font-light">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <button className="px-8 md:px-10 py-3 md:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
                    Explore More
                  </button>
                  <button className="px-8 md:px-10 py-3 md:py-4 bg-transparent hover:bg-white/10 text-white font-semibold text-base md:text-lg rounded-lg border-2 border-white/80 transition-all duration-300 backdrop-blur-sm">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 md:w-16 bg-green-500 shadow-lg shadow-green-500/50"
                : "w-2.5 md:w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 md:bottom-12 right-6 md:right-10 z-20 text-white/80 text-sm md:text-base font-light tracking-wider">
        <span className="text-2xl md:text-3xl font-bold text-green-500">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default HeroSection;
