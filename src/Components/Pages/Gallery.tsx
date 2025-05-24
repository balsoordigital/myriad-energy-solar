import MainTemplate from "../Templates/MainTemplate";

const Gallery = () => {
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
        <span className="relative z-10">Gallery</span>
      </div>
      <div className="w-[80%] mx-auto flex flex-wrap gap-8 py-12">
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
        <img
          src={require("../../assets/Solar-Submersible-Pump.jpg.webp")}
          alt=""
          className="w-[275px] h-[275px] object-cover rounded-[14px] cursor-pointer shadow-2xl transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </MainTemplate>
  );
};

export default Gallery;
