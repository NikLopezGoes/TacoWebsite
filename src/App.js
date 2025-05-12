import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./jsx/navbar";
import Hero from "./jsx/hero";
import AboutUs from "./jsx/aboutUs";
import Menu from "./jsx/menu";  // Menu Page
import Footer from "./jsx/footer";
import "./css/index.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
          </>
        } />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
