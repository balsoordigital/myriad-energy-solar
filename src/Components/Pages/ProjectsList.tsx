import Product from "../Molecules/Product";
import MainTemplate from "../Templates/MainTemplate";

const projects = [
  "100 kW Rooftop Solar – Commercial Office, Pune",
  "500 kW Ground-Mounted Solar Plant – Industrial Unit, Gujarat",
  "10 kW Residential Solar System – Nagpur",
  "Solar Water Pumping – Rural Maharashtra (PM-KUSUM Project)",
  "50 kW Solar Plant – Educational Campus, Nashik",
];

const ProjectsList = () => {
  return (
    <MainTemplate>
      {/* Header Image */}
      <div
        className="w-full h-[320px] relative text-[60px] font-bold text-white flex items-center justify-center mt-12"
        style={{
          backgroundImage: "url('/assets/bg-contact.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <span className="relative z-10">Projects</span>
      </div>

      <div className="w-full lg:w-[80%] xl:w-[65%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((name, idx) => (
          <div className="p-4" key={idx}>
            <Product productName={name} height={540} />
          </div>
        ))}
      </div>
    </MainTemplate>
  );
};

export default ProjectsList;
