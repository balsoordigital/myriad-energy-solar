import AboutCommonSection from "../../Molecules/AboutCommonSection";
import MainTemplate from "../../Templates/MainTemplate";

const Product1 = () => {
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
        <span className="relative z-10">Solar Agriculture Pump</span>
      </div>
      <div className="flex w-full px-5 py-10">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={require("../../../assets/Solar-Submersible-Pump.jpg.webp")}
            alt="About Us"
            className="w-[540px] h-[540px] object-cover rounded-[14px] shadow-2xl"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <p className="uppercase text-[16px] font-bold tracking-wider text-buttonColor">
            Product
          </p>
          <p className="text-[48px] font-bold mb-5">About The Solar Pump</p>
          <p className="text-[17px] w-3/4">
            We GK Energy offered various range of fully SS304 pumps in V4/V6
            section. The use of SS304 ensures non corrosion & longer life of
            pump. <br /> <br /> We follow MNRE Technical specifications, BIS &
            ISO Standards. <br /> <br />
            Our Solar Submersible motor is available in SS304. Our motor is
            designed for low-voltage operation, which can be operated in low
            power condition and still achieve maximum LPD.
          </p>
        </div>
      </div>
      <div className="w-3/4 flex flex-col mx-auto items-center pt-[50px] pb-[30px] rounded-[10px] shadow-2xl mt-5 mb-10">
        <p className="py-5 uppercase w-[340px] bg-buttonColor text-white text-center rounded-[8px] mb-10">
          Description
        </p>
        <table className="border-collapse border border-black text-[15px]">
          <thead>
            <tr>
              <th className="border border-black p-[10px] w-[248px] text-left">
                Component
              </th>
              <th className="border border-black p-[10px] w-[248px] text-left">
                V-4
              </th>
              <th className="border border-black p-[10px] w-[248px] text-left">
                V-6
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Power Range
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                0.5 HP to 10 HP
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                3.0 HP 50 HP
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Head Range
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                6 Mtrs to 435 Mtrs
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                2 Mtrs to 473 Mtrs
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Flow Rate
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                73 LPM to 780 LPM
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                740 LPM to 7400 LPM
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Delivery Size
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                32, 40 &50 mm
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                65, 80 & 100 mm
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Sync. Speed
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                2 Pole 2800 rpm , 4 Pole 3600 rpm
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                2 Pole 2800 rpm , 4 Pole 3600 rpm
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Direction of Rotation
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                Anti Clockwise When Viewed From Top
              </td>
              <td className="border border-black p-[10px] w-[248px]">
                Anti Clockwise When Viewed From Top
              </td>
            </tr>
            <tr>
              <td className="border border-black p-[10px] w-[248px]">
                Bore Size
              </td>
              <td className="border border-black p-[10px] w-[248px]">100mm</td>
              <td className="border border-black p-[10px] w-[248px]">750 mm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <AboutCommonSection />
    </MainTemplate>
  );
};

export default Product1;
