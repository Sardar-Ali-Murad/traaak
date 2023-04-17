import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import Body from "../components/PricingComponents/PricingBody";
import "./index.css"


const Pricing = () => {
  return (
    <div className="pagesWrapper">
      <Navbar text="Pricing" />
      <Body />
      <Footer />
    </div>
  );
};

export default Pricing;
