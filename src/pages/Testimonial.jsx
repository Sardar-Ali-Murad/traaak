import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import Body from "../components/TestimonialComponents/Body";
import "./index.css"


const Testimonial = () => {
  return (
    <div className="pagesWrapper">
      <Navbar text="Customer Testimonials" />
      <Body />
      <Footer />
    </div>
  );
};

export default Testimonial;
