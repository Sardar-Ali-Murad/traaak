import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import {
  AboutNumbers,
  AboutContent,
  TimeLine,
  Companies,
} from "../components/AboutComponents/index";
import Numbers from "../components/ProductComponents/ProductNumbers";
import Footer from "../components/CommonComponents/Footer";
import "./index.css"

const About = () => {
  return (
    <div  className="pagesWrapper">
      <Navbar text="About Us" />
      <Numbers />
      <AboutContent />
      <TimeLine />
      <Companies />
      <Footer />
    </div>
  );
};

export default About;
