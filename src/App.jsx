import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mainsecation from "./components/Mainsecation";
import Banquets from "./components/Banquets";
import Banquetdata from "./components/Banquetdata";
import SpecialitySection from "./components/SpecialitySection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AuthForms from "./components/AuthForms";
import About from "./components/About";


function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="">
        <Routes>
          <Route path="/" element= { <> <Mainsecation />  <Banquets /> <Banquetdata /><SpecialitySection /><Footer /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authforms" element={<AuthForms />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
