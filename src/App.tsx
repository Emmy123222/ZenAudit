import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

import { Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  return (
    <div className="relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
