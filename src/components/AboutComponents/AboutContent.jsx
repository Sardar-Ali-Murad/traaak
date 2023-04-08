import React from "react";
import "./AboutContent.css";
import vBar from "../../assets/verticalBar.png";
import hBar from "../../assets/horizontalBar.png";
import base from "../../assets/aboutBase.png";
import about from "../../assets/about.png";

const AboutContent = () => {
  return (
    <div className="aboutBigMain">
      <div className="aboutContent">
        <h1>About Traaak</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam
          nunc, commodo ac nisi ut, facilisis lobortis est. Pellentesque sed
          neque at ipsum congue tincidunt. Curabitur felis sem, pharetra eu eros
          ac, volutpat vestibulum diam. Aliquam luctus eget sapien ac finibus.
          Quisque vitae nisl turpis. Etiam vehicula consequat lectus. In sed
          tristique mauris, ac congue erat. Curabitur orci lectus, rutrum et
          felis id, vehicula viverra mi. Phasellus maximus nulla nec eleifend
          vehicula. Vivamus a quam non urna lobortis tempor eu non metus. Sed
          vel velit dui. Morbi elementum dolor sed diam tempor euismod id et
          orci. Maecenas turpis metus, tincidunt in ex nec, bibendum ultrices
          arcu. Nam nec dolor facilisis, bibendum nibh non, ultrices nibh. Ut
          mollis est volutpat diam consequat, ut lobortis ipsum commodo.
        </p>
      </div>
      <div className="aboutImageWrapper">
        <img src={base} className="aboutBase" />
        <img src={about} className="aboutImg" />
        <img src={vBar} className="aboutVBar" />
        <img src={hBar} className="aboutHbar" />
      </div>
    </div>
  );
};

export default AboutContent;
