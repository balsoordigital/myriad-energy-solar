const Product = ({ productName }: any) => {
  return (
    <div className="w-full h-[518px] rounded-[16px] shadow-lg overflow-hidden">
      <img
        src={require("../../assets/bg-solar-panel-2.jpg")}
        alt=""
        className="w-full h-[50%] object-cover"
      />
      <div className="h-[50%] flex lg:text-[30px] text-[24px] font-bold relative mx-5">
        <span className="absolute top-16">{productName}</span>
        <button className="px-4 py-2 rounded-[8px] bg-buttonColor text-white text-[15px] absolute bottom-4">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Product;
