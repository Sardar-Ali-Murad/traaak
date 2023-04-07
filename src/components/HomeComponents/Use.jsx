import React from "react";
import "./Use.css";
import { UseData } from "./data";

const Use = () => {
  return (
    <div className="useBigMain">
      <div className="useMain">
        <div className="useBigContent">
          <h1 className="useBigHead">Who can use Traaak? </h1>
          <p className="useBigPara">
            Track can be used by anyone working in a business-to-business
            entity, manages a portfolio of customers and performs activities
            relating to the post sales customer lifecycle.{" "}
          </p>
        </div>
        <div className="useBoxes">
            {
                Use.map((item)=>{
                    return <div className="useBox">
                           <h1>{item.head}</h1>
                           <div>
                            {
                                item.points.map((text)=>{
                                    return <div>
                                        <div className="dot"></div>
                                        <p>{text}</p>
                                    </div>
                                })
                            }
                           </div>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Use;
