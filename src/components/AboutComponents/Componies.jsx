import React from "react";
import "./Companies.css";
import img1 from "../../assets/about1.png";
import img2 from "../../assets/about2.png";
import img3 from "../../assets/about3.png";
import img4 from "../../assets/about4.png";
import img5 from "../../assets/about5.png";
import img6 from "../../assets/about6.png";
import img7 from "../../assets/about7.png";
import img8 from "../../assets/about8.png";

const Componies = () => {
  return (
    <div className="companyMain">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est.
        Pellentesque sed neque at ipsum congue tincidunt. Curabitur felis sem,
        pharetra eu eros ac, volutpat vestibulum diam. Aliquam luctus eget
        sapien ac finibus.
      </p>
      <div className="aboutGrid">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        <img src={img7} />
        <img src={img8} />
      </div>
    </div>
  );
};

export default Componies;
