import MainTemplate from "../Templates/MainTemplate";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <MainTemplate>
      {/* Header Image */}
      <div
        className="w-full h-[320px] relative text-[60px] font-bold text-white flex items-center justify-center mt-2"
        style={{
          backgroundImage: "url('/assets/bg-contact.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <span className="relative z-10">Contact Us</span>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col md:flex-row px-10 py-16 gap-10 bg-gray-50">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 items-center justify-center text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">
            Get in Touch
          </h2>

          <div className="w-full flex flex-col gap-6">
            {/* Location */}
            <div className="flex flex-col items-center border-b border-gray-300 pb-4">
              <MapPin className="w-10 h-10 text-green-600 mb-2" />
              <p className="text-2xl font-medium">
                <strong>Location:</strong>
                <br />
                123 Solar Street, Green City, IN
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center border-b border-gray-300 pb-4">
              <Mail className="w-10 h-10 text-green-600 mb-2" />
              <p className="text-2xl font-medium">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:contact@solarpower.in"
                  className="text-green-700 hover:underline"
                >
                  contact@solarpower.in
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center border-b border-gray-300 pb-4">
              <Phone className="w-10 h-10 text-green-600 mb-2" />
              <p className="text-2xl font-medium">
                <strong>Phone:</strong>
                <br />
                <a
                  href="tel:+919876543210"
                  className="text-green-700 hover:underline"
                >
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-xl">
          <p className="text-[22px] font-bold mb-2">Send Us Message </p>
          <p className="text-[16px] text-[#696969] mb-7">Questions or you would just like to say hello, contact us.</p>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 rounded-md focus:outline-green-500"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-gray-300 p-3 rounded-md resize-none focus:outline-green-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
