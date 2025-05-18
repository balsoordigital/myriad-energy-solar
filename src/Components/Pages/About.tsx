import MainTemplate from "../Templates/MainTemplate";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      <div className="w-full bg-blue-900 h-auto my-5">
        <p className="uppercase text-buttonColor text-[16px] tracking-wide text-center font-bold pt-16  ">
          Why Choose Us
        </p>
        <p className="text-[40px] text-white text-center font-bold">
          We Are Building A Sustainable Future
        </p>
        <div className="flex gap-5 justify-around w-full text-white py-8">
          <div className="text-[17px] flex items-center gap-3">
            <div className="relative w-[58px] h-[58px]">
              <div className="absolute inset-0 rounded-full bg-[#19B04B]" />
              <IoCheckmarkSharp
                size={40}
                color="white"
                className="absolute inset-0 m-auto"
              />
            </div>
            <span>Wide Spread Experience of 15 Years</span>
          </div>
          <div className="text-[17px] flex items-center gap-3">
            <div className="relative w-[58px] h-[58px]">
              <div className="absolute inset-0 rounded-full bg-[#19B04B]" />
              <IoCheckmarkSharp
                size={40}
                color="white"
                className="absolute inset-0 m-auto"
              />
            </div>
            <span>
              Presence in 5 leading <br /> Agriculture States
            </span>
          </div>
          <div className="text-[17px] flex items-center gap-3">
            <div className="relative w-[58px] h-[58px]">
              <div className="absolute inset-0 rounded-full bg-[#19B04B]" />
              <IoCheckmarkSharp
                size={40}
                color="white"
                className="absolute inset-0 m-auto"
              />
            </div>
            <span>
              India's largest Pure Play EPC company <br /> under PM-Kusum
              Component B
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <div
            ref={ref}
            className="flex flex-col gap-8 py-12 w-1/2 items-center"
          >
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-[155px] h-[155px] border-[5px] border-buttonColor rounded-full flex justify-center items-center text-[35px] font-bold text-white">
                  {inView ? <CountUp end={15} duration={3.5} /> : 0}+
                </div>
                <p className="text-[17px] text-white w-[143px]">
                  Year's Expertise
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[155px] h-[155px] border-[5px] border-buttonColor rounded-full flex justify-center items-center text-[35px] font-bold text-white">
                  {inView ? <CountUp end={500} duration={3.5} /> : 0}+
                </div>
                <p className="text-[17px] text-white w-[143px]">
                  Employees and Workmen
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-[155px] h-[155px] border-[5px] border-buttonColor rounded-full flex justify-center items-center text-[35px] font-bold text-white">
                  {inView ? <CountUp end={42788} duration={3.5} /> : 0}+
                </div>
                <p className="text-[17px] text-white w-[143px]">
                  Solar pump installed upto 30th Nov 2024
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[155px] h-[155px] border-[5px] border-buttonColor rounded-full flex justify-center items-center text-[35px] font-bold text-white">
                  {inView ? <CountUp end={10} duration={3.5} /> : 0}+
                </div>
                <p className="text-[17px] text-white w-[143px]">
                  Leading Agriculture states
                </p>
              </div>
            </div>
          </div>  
          <div className="w-1/2 flex justify-center py-12">
          
            <form className="flex flex-col w-3/4 gap-5 bg-white p-8 shadow-lg rounded-xl">
            <p className="text-center text-[30px] font-bold" >Enquiry Form</p>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
                required
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="border border-gray-300 p-3 rounded-md resize-none focus:outline-green-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-buttonColor hover:bg-green-700 text-white py-3 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default About;
