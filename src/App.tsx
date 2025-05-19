import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Contact from "./Components/Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/Pages/About";
import Product1 from "./Components/Pages/Products/Product1";
import Product2 from "./Components/Pages/Products/Product2";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/about-us"} element={<About />} />
      <Route path={"/products/product1"} element={<Product1 />} />
      <Route path={"/products/product2"} element={<Product2 />} />
    </Routes>
  );
}

export default App;
