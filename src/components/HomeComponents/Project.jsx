import React from "react";
import "./Project.css";
import Img from "../../assets/project.png";
import Line from "../../assets/pLine.png";
import vBar from "../../assets/verticalBar.png";

const Project = () => {
  return (
    <div className="projecrBigMain">
      <div className="projectMain">
        <img src={vBar} className="projectVBar" />
        <div className="projectContent">
          <h1 className="homeHead">Projects</h1>
          <p className="homePara">
            Manage your customer or non-customer related projects in one place,
            mapping them to your customer portfolio if this is required. Create
            and manage emails campaigns, service improvement plans and even
            internal projects relating to your job. Track and monitor progress,
            assign and receive tasks from team or project members as an at when
            needed.{" "}
          </p>
          <button className="homeBtnCommon">Book a Demo</button>
        </div>
        <div className="projectImage">
          <img src={Line} className="pLine" />
          <img src={Img} />
        </div>
      </div>
    </div>
  );
};

export default Project;
