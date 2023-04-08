import React from "react";
import "./Vedio.css";
import img1 from "../../assets/vedio.png";
import img2 from "../../assets/pause.png";

const Vedio = () => {
  return (
    <div className="vedioMain">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est.
        Pellentesque sed neque at ipsum congue tincidunt. Curabitur felis sem,
        pharetra eu eros ac, volutpat vestibulum diam. Aliquam luctus eget
        sapien ac finibus.
      </p>
      <div className="VedioMain">
        <div className="vedioOverlay"></div>
        <img src={img1} className="img1" />
        <div className="pauseBox">
          <img src={img2} className="img2" />
        </div>
      </div>
    </div>
  );
};

export default Vedio;
