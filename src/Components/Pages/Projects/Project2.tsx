import AboutCommonSection from "../../Molecules/AboutCommonSection";
import MainTemplate from "../../Templates/MainTemplate";
import { Sun } from "lucide-react";

const Project2 = () => {
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
        <span className="relative z-10">Remote Village Electrification</span>
      </div>
      <div className="flex w-full gap-5 px-5 py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../../assets/Remote-Village-Electrification.jpg")}
            alt="About Us"
            className="w-[450px] h-[450px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="text-[16px] mt-5 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                Remote Village Electrification Programme (RVE) is one such
                initiative, providing financial support for electrification to
                remote unelectrified census villages and unelectrified hamlets
                where grid extension is either not feasible or not cost
                competitive.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                We electrified remote villages in Gadchiroli, Dhule,
                Raigad,Palghar & Amaravati in Maharashtra for 2400 households,
                bringing sustainable energy to underserved communities,
                transforming their lives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutCommonSection />
    </MainTemplate>
  );
};

export default Project2;
