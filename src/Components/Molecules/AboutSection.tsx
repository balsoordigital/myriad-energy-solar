const AboutSection = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-center items-center mx-auto px-4 sm:px-8 md:px-12 py-12 gap-12">
      {/* Image section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[350px] lg:h-[450px]">
          <img
            src={require("../../assets/about-img.jpeg")}
            alt="About Us"
            className="w-[250px] md:w-[350px] lg:w-[450px] h-[250px] md:h-[350px] lg:h-[450px] rounded-full relative object-cover z-10"
          />
          <div
            className="bg-blue-900 absolute rounded-full"
            style={{
              width: "100%",
              height: "100%",
              top: "0px",
              right: "20px",
            }}
          ></div>
        </div>
      </div>

      {/* Text section */}
      <div className="w-full max-w-2xl text-center xl:text-left">
        <p className="uppercase text-lg sm:text-xl font-bold text-[#7AC33E] pb-3">
          Get to Know Us
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A4884]">
          Powering Progress Through <br className="hidden sm:block" /> Solar
          Innovation
        </h2>
        <p className="pt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
          At <span className="font-bold">Myriad Energy Pvt. Ltd.</span>, our projects are a reflection of our
          commitment to clean energy and sustainable development. We have
          successfully designed, installed, and managed solar power systems
          across residential, commercial, industrial, and agricultural sectors.
          Each project stands as a testament to our technical expertise, quality
          standards, and focus on customer satisfaction.
        </p>
        <button className="px-6 py-3 rounded-md bg-buttonColor text-white text-sm font-semibold uppercase mt-6">
          Know More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
