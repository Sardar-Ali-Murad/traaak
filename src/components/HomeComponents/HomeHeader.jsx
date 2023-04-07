import React from "react";
import "./HomeHeader.css";
import bar from "../../assets/bar.png";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import HeaderImg from "../../assets/headerImg.png"

const HomeHeader = () => {
  return (
    <div className="homeHeaderBigMain">
      <div className="homeHeaderMain">
        <div className="headerIcons">
          <div className="traakLogo">
            <div className="wordBox">
              <img src={Word} className="word" />
            </div>
            <img src={Traak} className="traak" />
          </div>
          <img src={bar} className="bar" />
        </div>

        <div className="homeHeaderContent">
          <h1 className="headerHeading">
            Create and manage tasks for your portfolio of customers without the
            complexities.
          </h1>
          <p className="headerPara">
            Customer portfolio management platform for success, account
            management, relationship management, customer service teams. Keep
            track of your customer activities, stay organised and never miss
            what is important.{" "}
          </p>
        </div>
        <button className="homeBtn">Book a Demo</button>

        <div>
            <img src={HeaderImg} className="headerImg"/>
        </div>


      </div>
    </div>
  );
};

export default HomeHeader;
