import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import MainTemplate from "../Templates/MainTemplate";
import Product from "../Molecules/Product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, Leaf } from "lucide-react";
import { BadgeCheck, MapPinned, Droplets, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years Of Expertise",
    icon: <BadgeCheck className="w-10 h-10 text-green-400" />,
  },
  {
    value: 10,
    suffix: "+",
    label: "Presence In Leading Agriculture States",
    icon: <MapPinned className="w-10 h-10 text-green-400" />,
  },
  {
    value: 42778,
    suffix: "+",
    label: "Solar Pumps Installed Upto 30th Nov 2024",
    icon: <Droplets className="w-10 h-10 text-green-400" />,
  },
  {
    value: 500,
    suffix: "+",
    label: "Employees and Workmen",
    icon: <Users className="w-10 h-10 text-green-400" />,
  },
];

const carouselImages = [
  "/assets/bg-solar-panel-2.jpg",
  "/assets/bg-solar-2.jpg",
  "/assets/bg-solar-3.jpg",
];

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

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer:
      "Depending on your usage and system size, you can save up to 70–90% on your electricity bill each month.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Most solar panels come with a 25-year performance warranty and can last even longer with proper maintenance.",
  },
  {
    question: "Do solar pumps work during cloudy or rainy days?",
    answer:
      "Yes, solar pumps work during cloudy days, though their efficiency may slightly reduce. Batteries or hybrid systems help maintain performance.",
  },
  {
    question: "Is solar installation complicated?",
    answer:
      "Not at all. Our experts handle the full process—from site survey to installation—typically within a few days.",
  },
  {
    question: "What maintenance is required for solar systems?",
    answer:
      "Solar systems require minimal maintenance. Regular cleaning of panels and occasional system checks are usually sufficient.",
  },
  {
    question: "Is financing or subsidy available for solar installations?",
    answer:
      "Yes, government subsidies and EMI options are available to make solar installations more affordable.",
  },
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
      className="relative w-full h-[600px] overflow-hidden mt-2"
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
          <div className="flex flex-col gap-2 items-center justify-center h-full z-20 relative">
            <p className="text-[54px] font-bold text-white text-center">
              Providing Renewable Energy Solutions
            </p>
            <p className="text-[24px] font-bold text-white text-center">
              Switch to solar. Let the sun pay your bills.
            </p>
            <button className="px-6 py-2 bg-blue-800 text-white rounded-[24px] mt-5">
              Get a quote
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white z-30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full text-white z-30"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

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
    <div className="w-full h-[760px] mt-2 px-28 flex" data-aos="fade-right">
      {/* Left Column */}
      <div className="w-[50%] h-full flex flex-col gap-6">
        <p className="text-[40px] font-bold text-green-700">
          90% of customers <br /> recommend us!
        </p>
        <p className="text-[16px] text-gray-700">
          Don't just believe us - read the review for yourself
        </p>
        <iframe
          width="580"
          height="350"
          src="https://www.youtube.com/embed/e1yPB5jqZas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Right Column (Review Slider) */}
      <div className="w-[50%] h-full flex flex-col justify-center items-center relative">
        <button onClick={prevReview}>
          <ChevronUp
            className="text-green-600 hover:text-green-800 transition"
            size={28}
          />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6 }}
            className={`w-[90%] h-[55%] rounded-3xl p-8 text-center flex flex-col justify-center items-center shadow-xl 
              bg-gradient-to-b ${reviews[index].bg} 
              backdrop-blur-md bg-opacity-70 transition`}
          >
            <Leaf className="text-green-600 mb-4" size={36} />
            <p className="text-xl italic text-gray-800 drop-shadow-sm mb-4 leading-snug">
              “{reviews[index].text}”
            </p>
            <p className="text-lg font-semibold text-green-800">
              — {reviews[index].name}
            </p>
          </motion.div>
        </AnimatePresence>

        <button onClick={nextReview}>
          <ChevronDown
            className="text-green-600 hover:text-green-800 transition"
            size={28}
          />
        </button>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full px-6 md:px-28 py-16 bg-gray-50"
      id="faq"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-green-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-green-600" />
              ) : (
                <ChevronDown className="text-green-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // fire when 30% visible
  });

  return (
    <div
      ref={ref}
      className="w-full h-[340px] mb-20 relative flex justify-around items-center text-white px-10"
      style={{
        backgroundImage: `url('/assets/bg-contact.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Stats */}
      <div className="relative z-10 flex w-full justify-around items-center text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 items-center">
            {stat.icon}
            <span className="text-4xl font-bold">
              {inView ? <CountUp end={stat.value} duration={3.5} /> : 0}
              {stat.suffix}
            </span>
            <span className="text-base">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <MainTemplate>
      {/*Hero Section*/}
      <HeroCarousel />

      {/* Product Section */}
      <div className="w-full h-[760px] mt-5" data-aos="fade-left">
        <p className="w-full text-[16px] text-[#7AC33E] text-center uppercase font-bold tracking-wider">
          Discover
        </p>
        <p className="w-full text-[40px] font-bold text-black text-center">
          Our Products
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-center mt-6 px-6 md:px-28"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Product productName={"Solar water pump controller"} />
          <Product productName={"Solar Roof-Top"} />
          <Product productName={"Solar Photovoltaic"} />
        </div>
      </div>

      {/*Statistics*/}
      <StatsSection />

      {/*Customer Review */}
      <CustomerReviewSection />

      {/*FAQ Section */}
      <FAQSection />
    </MainTemplate>
  );
};

export default HomePage;
