import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Product from "./Product"; // replace with your actual import

const products = [
  "Ground Mounted Solar",
  "Solar Roof-Top",
  "EV charging station",
  "Solar AG pump",
  "Solar street light/ Solar high mast",
  "Solar electric fencing",
  "Solar home light system",
  "Green hydrogen solution"
];

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="w-full xl:w-[80%] mx-auto mt-10">
      <p className="text-[16px] text-[#7AC33E] text-center uppercase font-bold tracking-wider">
        Discover
      </p>
      <p className="text-[40px] font-bold text-black text-center">
        Our Products
      </p>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider mt-8">
        {products.map((name, idx) => (
          <div className="keen-slider__slide p-4" key={idx}>
            <Product productName={name} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-4">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ||
              currentSlide === (idx - 1 + products.length) % products.length ||
              currentSlide === (idx - 2 + products.length) % products.length
                ? "bg-buttonColor scale-110"
                : "bg-gray-300 opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
