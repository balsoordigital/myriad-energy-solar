import AboutCommonSection from "../Molecules/AboutCommonSection";
import MainTemplate from "../Templates/MainTemplate";

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

      <div className="w-full flex flex-col lg:flex-row gap-5 px-5 py-10 justify-center items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={require("../../assets/About-us-page-snap.jpg")}
            alt="About Us"
            className="w-[250px] md:w-[350px] lg:w-[480px] h-[250px] md:h-[350px] lg:h-[480px] object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-[17px] space-y-4">
          <div className="text-[40px] font-bold text-blue-800">
            Empowering a Greener Tomorrow
          </div>
          <p className="text-justify w-full xl:w-[80%]">
            At <strong>Myriad Energy Pvt. Ltd.</strong>, we are driven by a
            simple but powerful mission — to harness the boundless potential of
            the sun and lead the transition toward a cleaner, more sustainable
            energy future.
          </p>
          <p className="text-justify w-full xl:w-[80%]">
            Founded with a vision to innovate and inspire, Myriad Energy
            specializes in providing cutting-edge{" "}
            <strong>solar energy solutions</strong> for residential, commercial,
            industrial, and agricultural applications. Our team of passionate
            engineers, energy experts, and sustainability advocates work
            hand-in-hand to deliver tailor-made solar power systems that are
            efficient, reliable, and cost-effective.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 space-y-6">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md lg:mx-6 my-8 p-6 max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
            What We Do
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800">
            <li>
              <strong>Solar Power System Design & Installation</strong>
            </li>
            <li>
              <strong>Rooftop and Ground-Mounted Solar Projects</strong>
            </li>
            <li>
              <strong>Solar Street Lighting and Off-Grid Solutions</strong>
            </li>
            <li>
              <strong>Operation & Maintenance Services</strong>
            </li>
            <li>
              <strong>Solar Consultation and Energy Audits</strong>
            </li>
          </ul>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md lg:mx-6 my-8 p-6 max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
            Our Commitment
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-4 text-[16px] text-gray-800">
            <li>Maximizing solar potential with cutting-edge technology</li>
            <li>
              Reducing carbon footprints and promoting environmental stewardship
            </li>
            <li>
              Offering transparent, affordable, and customer-first services
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md lg:mx-6 my-8 p-6 max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
            Why Choose Myriad Energy?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800">
            <li>Certified and experienced solar professionals</li>
            <li>High-performance components and best-in-class technology</li>
            <li>Seamless execution and lifetime support</li>
            <li>Proven track record of successful installations</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-900 rounded-lg py-8 px-4 text-white text-center space-y-2 max-w-[1100px] mx-auto mt-8">
        <h2 className="text-3xl font-bold">Join Us in Powering Change</h2>
        <p className="text-[16px]">
          At Myriad Energy Pvt. Ltd., we don’t just install solar panels — we
          build partnerships for a cleaner, brighter future. <br /> Join the green
          energy revolution and be part of a solution that powers generations to
          come.
        </p>
      </div>

      <div className="bg-blue-900 my-8 py-5 h-[210px] flex flex-col max-w-[1300px] mx-auto rounded-lg">
        <p className="text-[40px] text-center font-bold text-white pb-5">
          Our Commitment
        </p>
        <p className="text-[17px] text-center text-white">
          We believe renewable energy is not just an option—it’s a
          responsibility. <br /> That’s why our projects are rooted in{" "}
          <strong>quality</strong>, <strong>innovation</strong>, and{" "}
          <strong>sustainability</strong>.
        </p>
      </div>

      <AboutCommonSection />
    </MainTemplate>
  );
};

export default About;
