import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavItem from "../Molecules/NavItem";

const MainTemplate = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-[116px] fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="flex py-4 border-b border-[#c0e3b1] justify-end pr-40 text-[13px] text-[#0A4884]">
          <span className="flex gap-2 items-center justify-center pr-4 border-r-2 border-gray-400">
            <FaPhoneVolume color="#7AC33E" size={16} />{" "}
            <span>+91 9999999999</span>
          </span>
          <span className="flex gap-2 items-center justify-center pl-4">
            <CiMail color="#7AC33E" size={18} />
            <span>info@myriadenergy.in</span>
          </span>
        </div>
        <div className="flex py-4 gap-12 justify-end pr-36 text-[16px] font-bold text-[#0A4884]">
          <NavItem label="Home" to="/" />
          {/* <NavItem label="Services" to="/services" /> */}
          <NavItem
            label="About"
            submenu={[
              { label: "About Us", to: "/about-us" },
              { label: "History", to: "/history" },
            ]}
          />
          <NavItem
            label="Products"
            submenu={[
              { label: "Product 1", to: "/products/product1" },
              { label: "Product 2", to: "/products/product2" },
            ]}
          />
          <NavItem
            label="Projects"
            submenu={[
              { label: "Project 1", to: "/project/project1" },
              { label: "Project 2", to: "/project/project2" },
            ]}
          />
          <NavItem label="Contact Us" to="/contact" />
        </div>
        <img
          src={require("../../assets/myriad_logo.jpg")}
          className="absolute left-10 top-[-15px] w-[150px] h-[130px] "
          alt=""
        />
      </div>
      {children}
      <footer
        className="w-full bottom-0 flex gap-24 mt-2 h-[380px] px-36 py-10 relative"
        style={{
          background:
            "linear-gradient(90.16deg, #101f9d -15.84%, #11111c 122.54%)",
        }}
      >
        <div className="flex flex-col h-full">
          <img
            src={require("../../assets/myriad_logo.jpg")}
            className="w-[145px] h-[115px]"
            alt=""
          />
          <span className="text-white my-4">
            Rooftop solar made simple. We don't just <br /> sell solar — we give
            you peace of mind.
          </span>
          <div className="flex py-4 text-[14px] text-white">
            <span className="flex gap-2 items-center justify-center pr-4 border-r-2 border-gray-400">
              <FaPhoneVolume color="#FFFFFF" size={16} />{" "}
              <span>+91 9999999999</span>
            </span>
            <span className="flex gap-2 items-center justify-center pl-4">
              <CiMail color="#FFFFFF" size={18} />
              <span>info@myriadenergy.in</span>
            </span>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col">
            <span className="text-[20px] text-white font-bold">
              Quick Links
            </span>
            <span className="text-[14px] text-white mt-6 cursor-pointer">
              About Us
            </span>
            <span
              className="text-[14px] text-white mt-4 cursor-pointer"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Us
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Projects
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Blogs
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] text-white font-bold">Products</span>
            <span className="text-[14px] text-white mt-6 cursor-pointer">
              Solar Waterpump Controller
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Solar Agriculture Pump
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Solar Photovoltaic Module
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Solar Roof-Top
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] text-white font-bold ">Projects</span>
            <span className="text-[14px] text-white mt-6 cursor-pointer">
              Solar Pump
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Solar Roof-Top
            </span>
            <span className="text-[14px] text-white mt-4 cursor-pointer">
              Remote Village Electrification
            </span>
          </div>
        </div>
        <div className="flex gap-6   absolute bottom-8 right-10">
          <FaFacebook color="#ffffff" size={28} className="cursor-pointer" />{" "}
          <FaYoutube color="#ffffff" size={28} className="cursor-pointer" />{" "}
          <FaInstagram color="#ffffff" size={28} className="cursor-pointer" />{" "}
          <FaLinkedin color="#ffffff" size={28} className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default MainTemplate;
