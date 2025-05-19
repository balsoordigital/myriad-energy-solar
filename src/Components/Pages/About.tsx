import AboutCommonSection from "../Molecules/AboutCommonSection";
import MainTemplate from "../Templates/MainTemplate";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <MainTemplate>
      <div
        className="w-full h-[320px] relative text-[60px] font-bold text-white flex items-center justify-center mt-12"
        style={{
          backgroundImage: "url('/assets/bg-contact.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <span className="relative z-10">About</span>
      </div>

      <div className="w-full flex gap-5 px-5 py-10 justify-center items-center">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../assets/About-us-page-snap.jpg")}
            alt="About Us"
            className="w-[250px] md:w-[350px] lg:w-[480px] h-[250px] md:h-[350px] lg:h-[480px] object-cover"
          />
        </div>
        <div className="w-1/2 text-[16px] space-y-4">
          <div className="flex">
            <CheckCircle className="text-black mt-[2px] mr-2" size={20} />
            <p className="text-justify w-3/4">
              Largest pure play provider of the engineering, procurement and
              commissioning ("EPC") of solar-powered pump systems under
              Component B of the Pradhan Mantri Kisan Urja Suraksha Evam Utthaan
              Mahabhiyan ("PM-KUSUM") scheme, with approximately 15% of the
              total solar-powered pump systems installed under the PM-KUSUM
              Scheme
            </p>
          </div>

          <div className="flex">
            <CheckCircle className="text-black mt-[2px] mr-2" size={20} />
            <p className="text-justify w-3/4">
              Seasoned professional with over 15 years of experience
            </p>
          </div>

          <div className="flex gap-2">
            <CheckCircle className="text-black mt-[2px] mr-2" size={20} />
            <p className="text-justify w-3/4">
              EPC solutions for Solar Water Pumping Systems, Jal Jeevan Mission,
              Solar Rooftop, etc.
            </p>
          </div>

          <button className="px-6 py-3 rounded-md bg-buttonColor text-white text-sm font-semibold uppercase mt-6">
            Contact Us
          </button>
        </div>
      </div>
      <div className="bg-blue-900 my-8 py-5 h-[250px] flex flex-col max-w-[1300px] mx-auto">
        <p className="text-[40px] text-center font-bold text-white pb-5">
          Our Vision
        </p>
        <p className="text-[17px] text-center text-white">
          To Catalyse A Sustainable Energy Future For India By <br /> Providing
          Robust, Efficient, And Innovative Solar <br /> Energy Solutions Across
          Sectors.
        </p>
      </div>

      <AboutCommonSection />
    </MainTemplate>
  );
};

export default About;
