import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import Body from "../components/PricingComponents/PricingBody";

const Pricing = () => {
  return (
    <div>
      <Navbar text="Pricing" />
      <Body />
      <Footer />
    </div>
  );
};

export default Pricing;
