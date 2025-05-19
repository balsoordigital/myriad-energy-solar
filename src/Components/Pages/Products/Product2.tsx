import AboutCommonSection from "../../Molecules/AboutCommonSection";
import MainTemplate from "../../Templates/MainTemplate";
import { Sun } from "lucide-react";

const Product2 = () => {
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
            src={require("../../../assets/Hybrid-Solar-System-1.jpg")}
            alt="About Us"
            className="w-[570px] h-[570px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="uppercase text-[16px] font-bold tracking-wider text-buttonColor">
            Product
          </p>
          <p className="text-[48px] font-bold mb-3">Hybrid Solar System</p>
          <p className="text-[17px] w-3/4">
            Hybrid solar systems evolve from the best advantages of grid-tied
            and off-grid solar systems. These systems can either be described as
            off-grid solar with utility back power or grid-tied solar with extra
            battery storage. With a hybrid solar system, however, the
            electricity is routed to a hybrid inverter and battery. Once the
            battery is full, the excess is channeled through a smart meter to
            the grid’s power lines. This allows the homeowner to retain a
            portion of the electricity, which can help power the home not only
            during overcast days or the night but also if there is an energy
            blackout.
          </p>
          <p className="text-[25px] font-bold mt-5">Advantages</p>
          <div className="text-[16px] mt-5 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Allows Use Of Solar Energy During Peak Times</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Power Available During A Grid Outage Or Blackout</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Enables Energy Independence</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Reduces Power Consumption</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 px-5 py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../../assets/Solar-Grid-Tied-System-1.jpg")}
            alt="About Us"
            className="w-[570px] h-[570px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="uppercase text-[16px] font-bold tracking-wider text-buttonColor">
            Product
          </p>
          <p className="text-[48px] font-bold mb-3">Solar Grid Tied System</p>
          <p className="text-[17px] w-3/4">
            A grid-tied solar system is, as the name suggests, a solar energy
            system that is connected to the main electricity grid. They can
            operate without being connected to a solar battery, making them the
            most simple, cost-effective, and popular type of solar system.{" "}
            <br />
            During daylight hours, the system generates power, offsetting the
            consumption of electricity from the utility and reducing electric
            bills, the balance of kWH required by your loads is automatically
            drawn from the input lines. <br /> In case of PV panels are
            producing more electricity than you are consumption, the system will
            feed surplus energy back to the utility.
          </p>
          <p className="text-[25px] font-bold mt-5">Advantages</p>
          <div className="text-[16px] mt-5 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Longer Life</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Energy Cost Saving</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Net Metering Facility</p>
            </div>
            <div className="flex gap-4 items-center">
              <Sun color="#FFAC33" size={20} />
              <p>Economic & Easier To Install</p>
            </div>
          </div>
        </div>
      </div>
      <AboutCommonSection />
    </MainTemplate>
  );
};

export default Product2;
