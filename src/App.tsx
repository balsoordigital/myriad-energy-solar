import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Contact from "./Components/Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    </Routes>
  );
}

export default App;
