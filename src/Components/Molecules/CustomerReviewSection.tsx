import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Leaf } from "lucide-react";

const reviews = [
  {
    text: "Our electricity bill dropped significantly after installing solar panels!",
    name: "Ramesh Kumar",
    bg: "from-green-100 via-green-200 to-lime-100",
  },
  {
    text: "My solar water pump is efficient and works even on cloudy days.",
    name: "Sneha Patel",
    bg: "from-lime-100 via-green-100 to-green-200",
  },
  {
    text: "Fast installation and friendly staff. Great eco-friendly choice.",
    name: "Amit Verma",
    bg: "from-green-50 via-lime-200 to-green-100",
  },
  {
    text: "Very happy with the performance of the solar panels!",
    name: "Lakshmi Devi",
    bg: "from-lime-50 via-green-100 to-lime-200",
  },
  {
    text: "The solar pump works seamlessly and supports our daily farming needs.",
    name: "Vikram Singh",
    bg: "from-green-200 via-green-100 to-lime-100",
  },
  {
    text: "Excellent customer service and post-installation support.",
    name: "Divya Mehra",
    bg: "from-lime-100 via-green-200 to-green-100",
  },
];

const CustomerReviewSection = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col mt-5">
        <div className="relative w-full text-center py-10 bg-gradient-to-r from-[#7AC33E] to-[#0A4884] shadow-lg overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white z-10 relative drop-shadow-md">
            Trusted by Hundreds of Happy Customers
          </h2>
          <p className="text-white text-base sm:text-lg mt-2 z-10 relative">
            Real experiences. Real impact. Real results.
          </p>
          {/* Optional decorative gradient bubbles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3" />
        </div>
      </div>
      <div
        className="w-full flex flex-col xl:flex-row items-center justify-between gap-8 mt-4 px-4 sm:px-10 lg:px-28 py-12"
        data-aos="fade-right"
      >
        {/* Left Column */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-green-700 leading-tight md:pl-5 pl-3">
            90% of customers <br className="hidden sm:block" /> recommend us!
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 pl-3 md:pl-5">
            Don't just believe us — read the reviews for yourself
          </p>
          <div className="w-full">
            <iframe
              className="w-[95%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-xl shadow-lg mx-auto"
              src="https://www.youtube.com/embed/e1yPB5jqZas"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Column (Review Slider) */}
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center relative mt-10 lg:mt-36">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={prevReview}
            className="mb-4"
          >
            <ChevronUp
              className="text-green-600 hover:text-green-800 transition"
              size={32}
            />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full max-w-xl rounded-3xl p-6 sm:p-8 text-center flex flex-col justify-center items-center shadow-2xl bg-white relative border border-green-100"
            >
              {/* Decorative Glow Bubble */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-[-30px] left-[-30px] w-24 h-24 bg-green-100 rounded-full blur-2xl z-0"
              />
              <Leaf className="text-green-600 mb-4 z-10" size={40} />
              <p className="text-base sm:text-lg md:text-xl italic text-gray-800 drop-shadow-sm mb-4 leading-snug z-10">
                “{reviews[index].text}”
              </p>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-green-800 z-10">
                — {reviews[index].name}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={nextReview}
            className="mt-4"
          >
            <ChevronDown
              className="text-green-600 hover:text-green-800 transition"
              size={32}
            />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default CustomerReviewSection;
