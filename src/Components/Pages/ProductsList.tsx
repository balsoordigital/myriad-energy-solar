import Product from "../Molecules/Product";
import MainTemplate from "../Templates/MainTemplate";

const products = [
  "Ground Mounted Solar",
  "Solar Roof-Top",
  "EV Charging station",
  "Solar AG pump",
  "Solar street light/ Solar high mast",
  "Solar electric fencing",
  "Solar home light system",
  "Green hydrogen solution",
];

const ProductsList = () => {
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
        <span className="relative z-10">Products</span>
      </div>

      <div className="w-full lg:w-[80%] xl:w-[65%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {products.map((name, idx) => (
          <div className="p-4" key={idx}>
            <Product productName={name} />
          </div>
        ))}
      </div>
    </MainTemplate>
  );
};

export default ProductsList;
