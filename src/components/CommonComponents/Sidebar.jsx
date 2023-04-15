import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import { openContactForm, openHam } from "../../features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import mainLogo  from "../../assets/mainLogo.png"
import homeLogo from "../../assets/logoHome.png"

const Navbar = () => {
  let dispatch = useDispatch();
  let { ham } = useSelector((state) => state.store);

  function contact() {
    dispatch(openHam());
    dispatch(openContactForm());
  }

  return (
    <div className="nav">
      <div
        className={`smal-screen-nav ${!ham ? "small-screen-nav-active" : ""}`}
      >
        <AiOutlineClose className="close" onClick={() => dispatch(openHam())} />
        <div className="headerIcons sidebarIcon">
          <div className="traakLogo">
            {/* <div className="wordBox">
              <img src={Word} className="word" />
            </div> */}
              <img src={homeLogo} style={{height:"40px"}}/>
            <img src={Traak} className="traak" />
          </div>
          {/* <img src={mainLogo}  className="mainLogo"/> */}
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => dispatch(openHam())}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => dispatch(openHam())}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => dispatch(openHam())}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="links fancy-link"
                onClick={() => dispatch(openHam())}
                to="/product"
              >
                Products
              </Link>
            </li>

            {/*  */}

            {/* <li>
              <Link
                className="fancy-link links"
                to="/testimonials"
                onClick={() => dispatch(openHam())}
              >
                Testimonials
              </Link>
            </li> */}
            <li>
              <Link
                className="fancy-link links"
                to="/blog"
                onClick={() => dispatch(openHam())}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link className="fancy-link links" to="/" onClick={contact}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
