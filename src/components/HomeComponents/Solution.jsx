import React from "react";
import "./Solution.css";
import { solutionData } from "./data";
import solImg from "../../assets/solution.png";
import line from "../../assets/solutionLine.png";
import {openContactForm}  from "../../features/appSlice"
import { useDispatch } from "react-redux";

const Solution = () => {
  let dispatch=useDispatch()
  return (
    <div>
      <img src={line} className="solutionLine" />
      <div className="solutionBigMain">
        <div className="solutionMain">
          <div className="solutionContent">
            <div>
              <h1 style={{marginBottom:"20px"}}  className="solutionHead">The Solution</h1>
              <p className="solutionPara">
                Traaak provides the most fundamental tools required for managing
                customer post-sales customer activities without the unnecessary
                fluff. A simple yet practical platform that enables users to get
                on with the job helping them stay organised and executing
                customer related tasks efficiently.
              </p>
            </div>
            <div className="solutionBoxes">
              {solutionData?.map((item) => {
                return (
                  <div className="solutionBox">
                    <div className="solutionImageBox">
                      <img src={item?.img} />
                    </div>

                    <div className="solutionContentText">
                      <h1 className="solutionBoxHead">{item?.head}</h1>
                      <p className="solutionBoxPara">{item?.para}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="solutionImage">
            <img src={solImg} />
          </div>
        </div>
        <button className="homeBtnCommon solutionBtn" onClick={()=>dispatch(openContactForm())}>Book a Demo</button>
      </div>
    </div>
  );
};

export default Solution;
