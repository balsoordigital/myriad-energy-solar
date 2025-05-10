import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Contact from "./Components/Pages/Contact";


function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  );  
}

export default App;