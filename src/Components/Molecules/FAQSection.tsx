import { useState } from "react";
import "aos/dist/aos.css";
import { ChevronUp, ChevronDown, Leaf } from "lucide-react";

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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full bg-gray-50 py-12 sm:py-16"
      id="faq"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-buttonColor mb-8 sm:mb-10 text-center py-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 max-w-3xl sm:max-w-4xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-28">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md"
          >
            <button
              className="w-full px-4 sm:px-6 py-4 flex justify-between items-center text-left hover:bg-green-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-base sm:text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-green-600" />
              ) : (
                <ChevronDown className="text-green-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;