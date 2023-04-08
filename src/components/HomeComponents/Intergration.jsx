import React from "react";
import Img from "../../assets/Integration.png";
import "./Integration.css";
import Line from "../../assets/iLine.png";
import hBar from "../../assets/verticalBar.png";
import {openContactForm}  from "../../features/appSlice"
import { useDispatch } from "react-redux";

const Intergration = () => {
  let dispatch=useDispatch()
  return (
    <div className="integrationBigMain">
      <div className="integrationMain">
        <img src={hBar} className="iBars" />
        <div className="integrationImage">
          <img src={Line} className="iLine" />
          <img src={Img} />
        </div>
        <div className="integrationContent">
          <h1 className="homeHead">Integrations</h1>
          <p className="homePara">
            One way connection to popularly used customer relationship
            management platforms including Salesforce, service platform
            including Zendesk, email management platforms including Outlook and
            Gmail, accounting platform including Xero, data analytics platforms
            including PowerBI and Tableau as well as numerous other platforms.
            These connections provide quick access to data and information
            without having to log in separately.
          </p>
          <button className="homeBtnCommon" onClick={()=>dispatch(openContactForm())}>Book a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Intergration;
