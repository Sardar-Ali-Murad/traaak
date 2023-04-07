import React from "react";
import Word from "../../assets/T.png";
import Traak from "../../assets/Traaak.png";
import "./Footer.css";

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
              Helping you manage your customer portfolio tasks more efficiently.
            </p>
          </div>

          <div className="footerLinks">
            <div>
             <h1>Our links</h1>
            </div>
            <div className="footerParas">
             <p>Blogs</p>
             <p>About Us</p>
             <p>Contact Us</p>
            </div>
          </div>

          <div className="footerLinks">
            <div>
            <h1>Product</h1>
            </div>
            <div className="footerParas">
            <p>Product Overview</p>
            <p>Customer Testimonials</p>
            <p>Pricing</p>
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
