import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Services from "./pages/services";
import Contact from "./pages/contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Defines the six pages and their URL paths */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;