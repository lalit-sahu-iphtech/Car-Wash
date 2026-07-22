import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/services" element={<Services />} />


        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}