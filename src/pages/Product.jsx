import React from "react";
import {
  ProductHeader,
  ProductNumbers,
  ProductContent,
  Vedio,
  Map,
} from "../components/ProductComponents/index";
import Footer from "../components/CommonComponents/Footer";
import "./index.css"


const Product = () => {
  return (
    <div className="pagesWrapper">
      <ProductHeader />
      <ProductNumbers />
      <ProductContent />
      <Vedio />
      <Map />
      <Footer />
    </div>
  );
};

export default Product;
