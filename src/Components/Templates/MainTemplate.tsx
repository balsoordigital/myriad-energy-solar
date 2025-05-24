import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import NavItem from "../Molecules/NavItem";

const MainTemplate = ({ children }: any) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        {/* <div className="hidden md:flex justify-end py-2 border-b border-[#c0e3b1] pr-6 md:pr-16 text-[13px] text-[#0A4884]">
          <span className="flex gap-2 items-center pr-4 border-r border-gray-400">
            <FaPhoneVolume color="#7AC33E" size={15} />
            <span>+91 9999999999</span>
          </span>
          <span className="flex gap-2 items-center pl-4">
            <CiMail color="#7AC33E" size={18} />
            <span>info@myriadenergy.in</span>
          </span>
        </div> */}

        <div className="relative flex justify-between items-center px-4 md:px-12">
          <img
            src={require("../../assets/myriad_logo.jpg")}
            className="w-[110px] h-[80px] md:w-[135px] md:h-[110px]"
            alt="Myriad Logo"
          />

          {/* Desktop Nav */}
          <nav className="hidden xl:flex gap-16 text-[16px] font-bold text-[#0A4884] items-center">
            <NavItem label="Home" to="/" />
            <NavItem
              label="About"
              submenu={[
                { label: "About Us", to: "/about-us" },
                { label: "History", to: "/history" },
              ]}
            />
            <NavItem
              label="Products"
              to="/products"
              submenu={[
                { label: "Product 1", to: "/products/product1" },
                { label: "Product 2", to: "/products/product2" },
              ]}
            />
            <NavItem
              label="Projects"
              to="/projects"
              submenu={[
                { label: "Project 1", to: "/project/project1" },
                { label: "Project 2", to: "/project/project2" },
              ]}
            />
            <NavItem label="Contact Us" to="/contact" />
            <NavItem label="Gallery" to="/gallery" />

            <div
              className="w-[245px] h-[38px] bg-gradient-to-r from-[#101f9d] to-[#11111c] rounded-[20px] text-white flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up for free electricity{" "}
              <FaArrowRight className="mt-1" size={12} />{" "}
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-4 gap-4 text-[#0A4884] font-bold xl:hidden">
              <NavItem label="Home" to="/" />
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
              <NavItem label="Gallery" to="/gallery" />
              <div
                className="w-[245px] h-[38px] bg-gradient-to-r from-[#101f9d] to-[#11111c] rounded-[20px] text-white flex items-center justify-center gap-2 cursor-pointer mt-3 ml-[-6px]"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up for free electricity{" "}
                <FaArrowRight className="mt-1" size={12} />{" "}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[60px] flex-grow">{children}</main>

      {/* Footer */}
      <footer className="w-full px-4 md:px-16 py-10 bg-gradient-to-r from-[#101f9d] to-[#11111c] text-white">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Logo and Info */}
          <div className="flex flex-col w-full lg:w-1/4">
            <img
              src={require("../../assets/myriad_logo.jpg")}
              className="w-[120px] h-[90px] mb-4"
              alt="Footer Logo"
            />
            <p className="text-sm">
              Rooftop solar made simple. We don't just sell solar — we give you
              peace of mind.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <FaPhoneVolume size={15} /> <span>+91 9999999999</span>
              </div>
              <div className="flex items-center gap-2">
                <CiMail size={18} /> <span>info@myriadenergy.in</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap w-full lg:w-3/4 justify-between gap-8 lg:justify-around px-5">
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="flex flex-col gap-2 text-">
                <li className="cursor-pointer">About Us</li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/careers")}
                >
                  Careers
                </li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Blogs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="cursor-pointer">Solar Waterpump Controller</li>
                <li className="cursor-pointer">Solar Agriculture Pump</li>
                <li className="cursor-pointer">Solar Photovoltaic Module</li>
                <li className="cursor-pointer">Solar Roof-Top</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Projects</h4>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="cursor-pointer">Solar Pump</li>
                <li className="cursor-pointer">Solar Roof-Top</li>
                <li className="cursor-pointer">
                  Remote Village Electrification
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-end gap-6 mt-10">
          <FaFacebook size={24} className="cursor-pointer" />
          <FaYoutube size={24} className="cursor-pointer" />
          <FaInstagram size={24} className="cursor-pointer" />
          <FaLinkedin size={24} className="cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default MainTemplate;
