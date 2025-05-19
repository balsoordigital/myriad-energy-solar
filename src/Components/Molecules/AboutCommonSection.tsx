import CountUp from "react-countup";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const AboutCommonSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
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
        <div ref={ref} className="flex flex-col gap-8 py-12 w-1/2 items-center">
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
            <p className="text-center text-[30px] font-bold">Enquiry Form</p>
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
  );
};

export default AboutCommonSection;
