import "aos/dist/aos.css";
import MainTemplate from "../Templates/MainTemplate";
import Product from "../Molecules/Product";
import HeroCarousel from "../Molecules/HeroCarousel";
import CustomerReviewSection from "../Molecules/CustomerReviewSection";
import FAQSection from "../Molecules/FAQSection";
import StatsSection from "../Molecules/StatsSection";
import AboutSection from "../Molecules/AboutSection";

const HomePage = () => {
  return (
    <MainTemplate>
      {/*Hero Section*/}
      <HeroCarousel />

      {/*AboutUs*/}
      <AboutSection />

      {/*Statistics*/}
      <StatsSection />

      {/* Product Section */}
      <div className="w-full h-auto mt-5 px-4 py-8" data-aos="fade-left">
        <p className="w-full text-[16px] text-[#7AC33E] text-center uppercase font-bold tracking-wider">
          Discover
        </p>
        <p className="w-full text-[40px] font-bold text-black text-center">
          Our Products
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full justify-center mt-6 px-6 md:px-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Product productName={"Solar water pump controller"} />
          <Product productName={"Solar Roof-Top"} />
          <Product productName={"Solar Photovoltaic"} />
        </div>
      </div>

      {/*Customer Review */}
      <CustomerReviewSection />

      {/*FAQ Section */}
      <FAQSection />
    </MainTemplate>
  );
};

export default HomePage;
