import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  "/assets/bg-solar-panel-2.jpg",
  "/assets/bg-solar-2.jpg",
  "/assets/bg-solar-3.jpg",
];


const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = carouselImages.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden mt-24"
      data-aos="fade-up"
    >
      {carouselImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="flex flex-col gap-2 items-center justify-center h-full z-20 relative px-4 text-center">
            <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[54px] leading-tight">
              Providing Renewable Energy Solutions
            </p>
            <p className="text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl mt-5">
              Switch to solar. Let the sun pay your bills.
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-blue-800 text-white rounded-full mt-4 text-sm sm:text-base">
              Get a quote
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 sm:p-3 rounded-full text-white z-30"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 sm:p-3 rounded-full text-white z-30"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;