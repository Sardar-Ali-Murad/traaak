import React from "react";
import "./Compare.css";
import { compare } from "./data";
import tick from "../../assets/tick.png";

const Compare = () => {
  return (
    <div className="compareBigMain">
      <div className="compareMain">
        <div className="compareFirstContent">
          <h1 className="compareSmallHeader">How do we compare? </h1>
          <p className="smallContent">
            Traaak was created to provide a platform that will intersect two
            domains which are CRM and task management. Our platform combines the
            two, resulting in a simple and practical platform that helps you
            achieves more for less.
          </p>
        </div>
      </div>
      <div className="compareBoxes">
        {compare.map((item) => {
          // return <div className="singleCompareBox">
          return (
            <div className="singleCompareBox">
              <div className="compareBigImg">
                <img src={item.img} />
              </div>
              <h1 className="compareHeader">{item.head}</h1>
              <div className="compareTicks">
                {item.content.map((text) => {
                  return (
                    <div className="tickContent">
                      <div className="tickBox">
                        <img src={tick} />
                      </div>
                      <p className="tickContent">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Compare;
