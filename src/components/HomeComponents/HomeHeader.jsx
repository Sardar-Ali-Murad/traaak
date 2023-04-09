import React from "react";
import "./HomeHeader.css";
import bar from "../../assets/bar.png";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import HeaderImg from "../../assets/headerImg.png";
import line from "../../assets/headerLine.png";
import Contact from "./ContactForm";
import {openContactForm}  from "../../features/appSlice"
import { useDispatch } from "react-redux";
import {openHam,closeHam}  from "../../features/appSlice"

const HomeHeader = () => {
  let dispatch=useDispatch()
  function openTraaak(){
    window.open("https://taaskclient.herokuapp.com/", '_blank')
  }
  return (
    <div className="homeHeaderBigMain">
      <Contact/>
      <img src={line} className="headerLine" />
      <div className="homeHeaderMain">
        <div className="headerIcons">
          <div className="traakLogo">
            <div className="wordBox">
              <img src={Word} className="word" />
            </div>
            <img src={Traak} className="traak" />
          </div>
          <img src={bar} className="bar" onClick={()=>dispatch(closeHam())}/>
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

        <div className="headerBtnsFlex">
        <button className="homeBtn" onClick={()=>dispatch(openContactForm())}>
          Book a Demo
        </button>
        <button className="homeBtn" onClick={openTraaak}>
          Solution
        </button>
        </div>

        <div>
          <img src={HeaderImg} className="headerImg" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
