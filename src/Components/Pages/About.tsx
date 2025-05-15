import MainTemplate from "../Templates/MainTemplate";

const About = () => {
  return (
    <MainTemplate>
     <div
        className="w-full h-[320px] relative text-[60px] font-bold text-white flex items-center justify-center mt-28"
        style={{
          backgroundImage: "url('/assets/bg-contact.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <span className="relative z-10">About</span>
      </div>
    </MainTemplate>
  );
};

export default About;
