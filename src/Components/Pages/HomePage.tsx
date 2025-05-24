import "aos/dist/aos.css";
import MainTemplate from "../Templates/MainTemplate";
import HeroCarousel from "../Molecules/HeroCarousel";
import CustomerReviewSection from "../Molecules/CustomerReviewSection";
import FAQSection from "../Molecules/FAQSection";
import StatsSection from "../Molecules/StatsSection";
import AboutSection from "../Molecules/AboutSection";
import ProductsSection from "../Molecules/ProductsSection";

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
      <ProductsSection />

      {/*Customer Review */}
      <CustomerReviewSection />

      {/*FAQ Section */}
      <FAQSection />
    </MainTemplate>
  );
};

export default HomePage;
