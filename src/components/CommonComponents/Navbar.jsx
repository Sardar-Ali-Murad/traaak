import React from "react";
import "./Navbar.css";
import bar from "../../assets/bar.png";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";

import img1 from "../../assets/nav1.png";
import img2 from "../../assets/nav2.png";
import img3 from "../../assets/nav3.png";
import img4 from "../../assets/nav4.png";
import img5 from "../../assets/nav5.png";
import img6 from "../../assets/nav6.png";
import img7 from "../../assets/nav7.png";
import img8 from "../../assets/nav8.png";
import img9 from "../../assets/nav9.png";
import { closeHam } from "../../features/appSlice";
import { useDispatch } from "react-redux";

const Navbar = ({ text }) => {
  let dispatch=useDispatch()
  return (
    <div className="navbarBigMain">
      <div className="navbarMain">
        <div className="navBarIcons">
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

        <div className="navbarImages">
          <img src={img1} className="navbarImg1" />
          <img src={img2} className="navbarImg2" />
          <img src={img3} className="navbarImg3" />
          <img src={img4} className="navbarImg4" />
          <img src={img5} className="navbarImg5" />
          <img src={img6} className="navbarImg6" />
          <img src={img7} className="navbarImg7" />
          <img src={img8} className="navbarImg8" />
          <img src={img9} className="navbarImg9" />
        </div>
        <h1 className="NavHeader">{text}</h1>
      </div>
    </div>
  );
};

export default Navbar;
