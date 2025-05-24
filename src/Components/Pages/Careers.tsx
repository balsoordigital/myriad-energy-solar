import { useState } from "react";
import { Dialog } from "@headlessui/react";
import MainTemplate from "../Templates/MainTemplate";

const openings = [
  "Solar Project Engineer",
  "Site Supervisor – Solar Installations",
  "Sales & Business Development Executive",
  "Electrical Design Engineer (Solar PV)",
  "Operations & Maintenance (O&M) Technician",
  "Marketing & Communications Specialist",
  "Internships in Renewable Energy and Sustainability",
  "General Application",
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openForm = (role: any) => {
    setSelectedRole(role);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setSelectedRole(null);
  };

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
        <span className="relative z-10">Career Opportunities</span>
      </div>
      <div className="p-6 max-w-5xl mx-auto space-y-8">
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-lg px-6 py-10 text-center space-y-6 border border-green-200">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-snug">
            Join the Solar Revolution with <br /> Myriad Energy Pvt. Ltd.
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            At <strong className="text-green-800">Myriad Energy</strong>, we’re
            not just building solar systems — we’re building a{" "}
            <span className="font-semibold text-green-600">
              sustainable future
            </span>
            . If you’re passionate about{" "}
            <span className="italic">clean energy</span>, innovation, and making
            a real impact, you’ve come to the right place.
          </p>

          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            We are looking for{" "}
            <span className="font-semibold text-green-800">
              dedicated, curious, and forward-thinking individuals
            </span>
            who want to grow with a company that’s driving India’s{" "}
            <span className="text-green-700 font-medium">
              green energy transformation
            </span>
            .
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
          <h3 className="text-xl font-semibold">🌟 Why Work With Us?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Purpose-Driven Work</strong>: Be part of projects that
              reduce carbon footprints and power communities.
            </li>
            <li>
              <strong>Growth & Learning</strong>: Access training,
              certifications, and mentorship in solar technologies.
            </li>
            <li>
              <strong>Innovative Culture</strong>: Join a team that values new
              ideas, collaboration, and continuous improvement.
            </li>
            <li>
              <strong>Work-Life Balance</strong>: Flexible work environments and
              a supportive team culture.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">👨‍💼 Current Openings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {openings.map((role) => (
              <div
                key={role}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-green-400"
                onClick={() => openForm(role)}
              >
                <p className="font-medium text-center text-green-700">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-lg px-6 py-10 text-center space-y-6 border border-green-200">
          <h3 className="text-xl font-semibold">🚀 Intern With Us</h3>
          <p>
            Looking to kickstart your career in green energy? Our internship
            program gives real-world exposure in solar energy, project
            management, and technical design.
          </p>
        </section>

        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-lg px-6 py-10 text-center space-y-6 border border-green-200">
          <h3 className="text-2xl font-bold text-green-600 flex items-center justify-center gap-2">
            📩 How to Apply
          </h3>

          <p className="text-gray-700">
            Send your resume and a brief cover letter to:
            <br />
            <a
              href="mailto:careers@myriadenergy.in"
              className="text-blue-600 underline font-medium hover:text-blue-800"
            >
              careers@myriadenergy.in
            </a>
            <br />
            <span className="italic text-sm text-gray-600">
              Subject Line: [Your Name] – Application for [Position]
            </span>
          </p>

          <p className="text-gray-600">
            Or use our form above by clicking any job opening.
          </p>
        </section>

        <Dialog
          open={isOpen}
          onClose={closeForm}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg z-50">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Apply for: {selectedRole}
            </h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="1234567890"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label
                  htmlFor="cover"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter
                </label>
                <textarea
                  id="cover"
                  rows={4}
                  placeholder="Briefly introduce yourself and explain why you're a good fit."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume (PDF only)
                </label>
                <input
                  id="resume"
                  type="file"
                  accept="application/pdf"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-green-500 file:text-white hover:file:bg-green-600"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    </MainTemplate>
  );
}
