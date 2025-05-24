import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Contact from "./Components/Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/Pages/About";
import Product1 from "./Components/Pages/Products/Product1";
import Product2 from "./Components/Pages/Products/Product2";
import Gallery from "./Components/Pages/Gallery";
import Project1 from "./Components/Pages/Projects/Project1";
import Project2 from "./Components/Pages/Projects/Project2";
import LeadCapturePage from "./Components/Pages/LeadCapturePage";
import Careers from "./Components/Pages/Careers";
import ProductsList from "./Components/Pages/ProductsList";
import ProjectsList from "./Components/Pages/ProjectsList";

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
      <Route path={"/products"} element={<ProductsList />} />
      <Route path={"/products/product1"} element={<Product1 />} />
      <Route path={"/products/product2"} element={<Product2 />} />
      <Route path={"/gallery"} element={<Gallery />} />
      <Route path={"/projects"} element={<ProjectsList />} />
      <Route path={"/project/project1"} element={<Project1 />} />
      <Route path={"/project/project2"} element={<Project2 />} />
      <Route path={"/signup"} element={<LeadCapturePage />} />
      <Route path={"/careers"} element={<Careers />} />

    </Routes>
  );
}

export default App;
