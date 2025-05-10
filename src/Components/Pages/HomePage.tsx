import MainTemplate from "../Templates/MainTemplate";
import Product from "../Molecules/Product";

const HomePage = () => {
  return (
    <MainTemplate>
      <div
        className="mt-3 w-full h-[600px] relative flex flex-col gap-2 items-center justify-center"
        style={{
          backgroundImage: "url('/assets/bg-solar-panel-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <p className="text-[54px] relative font-bold text-white text-center z-10">
          Providing Renewable Energy Solutions
        </p>
        <p className="text-[24px] font-bold text-white relative z-10">
          Switch to solar. Let the sun pay your bills.
        </p>
        <button className="px-6 py-2 relative bg-blue-800 text-white rounded-[24px] mt-5 z-10">
          Get a quote
        </button>
      </div>
      <div className="w-full h-[760px] mt-5">
        <p className="w-full text-[16px] text-[#7AC33E] text-center uppercase font-bold tracking-wider">
          Discover
        </p>
        <p className="w-full text-[40px] font-bold text-black text-center">
          Our Products
        </p>
        <div className="grid grid-cols-3 gap-10 w-full justify-center mt-6 px-28">
          <Product productName={"Solar water pump controller"} />
          <Product productName={"Solar Roof-Top"}  />
          <Product productName={"Solar Photovoltaic"}  />
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
