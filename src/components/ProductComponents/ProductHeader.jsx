import React from "react";
import "./ProductHeader.css";
import bar from "../../assets/bar.png";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import { closeHam } from "../../features/appSlice";
import { useDispatch } from "react-redux";

const ProductHeader = () => {
  let dispatch=useDispatch()
  return (
    <div className="productBigMain">
      <div className="homeHeaderMain">
        <div className="headerIcons">
          <div className="traakLogo">
            <div className="wordBox">
              <img src={Word} className="word" />
            </div>
            <img src={Traak} className="traak" />
          </div>
          <img src={bar} className="bar" onClick={()=>dispatch(closeHam())} />
        </div>
      </div>
      {/*  */}
      <div className="productHeaderGrid">
        <div className="productContent">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Customer portfolio management platform for success, account
            management, relationship management, customer service teams. Keep
            track of your customer activities, stay organised and never miss
            what is important.{" "}
          </p>
          <button className="homeBtnCommon">Book a Demo</button>
        </div>

        <div className="productHeaderImage">
          <img src={product1} className="proImg1" />
          <img src={product2} className="proImg2" />
          <img src={product3} className="proImg3" />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ProductHeader;
