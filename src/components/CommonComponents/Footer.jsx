import React from "react";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footerBigMain">
        <div className="footerMain">
          <div className="footerGrid">
            <div className="footerFirst">
              <div className="traakLogo">
                <div className="wordBox">
                  <img src={Word} className="word" />
                </div>
                <img src={Traak} className="traak" />
              </div>
              <p>
                Helping you manage your customer portfolio tasks more
                efficiently.
              </p>
            </div>

            <div className="footerLinks">
              <div>
                <h1>Our links</h1>
              </div>
              <div className="footerParas">
                <Link to="/">
                  <p>Home</p>
                </Link>
                <Link to="/blog">
                  <p>Blogs</p>
                </Link>
                <Link to="/about">
                  <p>About Us</p>
                </Link>
                <p>Contact Us</p>
              </div>
            </div>

            <div className="footerLinks">
              <div>
                <h1>Product</h1>
              </div>
              <div className="footerParas">
                <Link to="/product">
                  <p>Product Overview</p>
                </Link>
                <Link to="/testimonials">
                  <p>Customer Testimonials</p>
                </Link>
                <Link to="/pricing">
                  <p>Pricing</p>
                </Link>
              </div>
            </div>

            <div className="footerLinks">
              <div>
                <h1>Follow</h1>
              </div>
              <div className="footerParas">
                <p>Linkedin</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <p>Terms & Conditions</p>
        <p>All Right Reserved @ traaak.com</p>
      </div>
    </div>
  );
};

export default Footer;
