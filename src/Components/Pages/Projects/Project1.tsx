import AboutCommonSection from "../../Molecules/AboutCommonSection";
import MainTemplate from "../../Templates/MainTemplate";
import { Sun } from "lucide-react";

const Project1 = () => {
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
        <span className="relative z-10">Solar Roof-top</span>
      </div>
      <div className="flex w-full gap-5 px-5 py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../../assets/Hybrid-Connecting.png")}
            alt="About Us"
            className="w-[570px] h-[570px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="text-[48px] font-bold mb-3">Hybrid System</p>
          <p className="text-[17px] w-3/4">
            We have successfully installed and commissioned around hybrid solar
            systems at Jharkhand state with JREDA in various location like
            government offices, hospitals, primary health centres and schools,
            etc.
          </p>

          <div className="text-[16px] mt-5 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Starting from 10kw to 100kw</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                Solar hybrid system is advance system which is a combo of
                On-Grid & Off-Grid System
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                In this system energy generated through solar is stored in the
                batteries and is utilized in the night
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                Power Produced more then required for the batteries gets
                exported to the grid under net metering scheme
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                Hybrid System are in demand on remote locations where power cuts
                are very frequent
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 px-5 py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../../assets/Solar-Grid-Tied-System.jpg")}
            alt="About Us"
            className="w-[570px] h-[570px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="text-[48px] font-bold mb-3">Solar Grid Tied System</p>
          <div className="text-[16px] mt-5 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                We have successfully install and commission of solar grid system
                500kw at Sanjeevani educational rural society at Kopargaon
                Nashik district under QIP (Quality improvement Program)
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                By adopting renewable energy sources through QIP-(Quality
                improvement Program), the Sanjeevani Educational Rural Society
                aims to inspire a greener and more sustainable future for there
                institution and the community at large.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p className="w-3/4">
                Installed solar grid system at various collages under QIP-
                (Quality improvement Program) of Savitribai Phule Pune
                University ​
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutCommonSection />
    </MainTemplate>
  );
};

export default Project1;
