import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Detect theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div
      className={`relative h-screen w-full overflow-hidden mt-20 transition-colors duration-700 ${
        isDarkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
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
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-black/85 via-black/65 to-black/45"
                    : "bg-gradient-to-r from-white/60 via-white/50 to-white/40"
                }`}
              />
            </div>

            <div className="relative h-full flex items-center px-4 sm:px-6 md:px-12">
              <div
                className={`max-w-3xl w-full backdrop-blur-md border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl transition-all duration-500 ${
                  isDarkMode
                    ? "bg-white/10 border-white/20"
                    : "bg-slate-100/70 border-slate-200/60"
                }`}
              >
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-2 ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  {slide.highlight && (
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 leading-tight mb-2">
                      {slide.highlight}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-bold leading-tight ${
                        isDarkMode ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {slide.subtitle}
                    </h3>
                  )}
                </div>
                <p
                  className={`text-sm sm:text-base md:text-lg mb-5 md:mb-6 leading-relaxed font-light transition-colors duration-300 ${
                    isDarkMode ? "text-white/90" : "text-slate-800/90"
                  }`}
                >
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="px-6 sm:px-7 md:px-8 py-2.5 md:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-green-500/40">
                    Explore More
                  </button>
                  <button
                    className={`px-6 sm:px-7 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm sm:text-base border transition-all duration-300 backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-white/10 hover:bg-white/15 text-white border-white/30"
                        : "bg-white hover:bg-slate-100 text-slate-900 border-slate-300"
                    }`}
                  >
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
          />
        ))}
      </div>

      <div
        className={`absolute bottom-8 md:bottom-12 right-6 md:right-10 z-20 text-sm md:text-base font-light tracking-wider ${
          isDarkMode ? "text-white/80" : "text-slate-800/80"
        }`}
      >
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
