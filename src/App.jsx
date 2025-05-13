import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
