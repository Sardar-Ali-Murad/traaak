import React from "react";
import "./ProductNumber.css";
import { product } from "./data";

const ProductNumbers = () => {
  return (
    <div className="productNumberBigMain">
      <div className="productNumberMain">
        {product.map((item) => {
          return (
            <div className="singleNumber">
              <div className="numberImg">
                <img src={item.img} />
              </div>
              <div className="numberContent">
                <h2>{item.head}</h2>
                <p>{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductNumbers;
