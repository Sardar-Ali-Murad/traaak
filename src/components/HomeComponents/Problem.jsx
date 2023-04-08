import React from "react";
import "./Problem.css";
import base from "../../assets/Base.png";
import group from "../../assets/Group.png";
import HBar from "../../assets/horizontalBar.png";
import VBar from "../../assets/verticalBar.png";
import line from "../../assets/problemLine.png";

const Problem = () => {
  return (
    <div className="problemBigMain">
      <div className="problemMain">
        <div className="problemImages">
          <img src={line} className="problemLine" />
          <img src={base} className="base" />
          <img src={group} className="group" />
          <img src={HBar} className="hBar" />
          <img src={VBar} className="vBar" />
        </div>

        <div className="problemContent">
          <h1>The Problem</h1>
          <p>
            Most customer portfolio managers rely on multiple propriety
            software’s, tools, spreadsheets, documents, to do lists etc. to
            manage their customer activities. This does not allow for visibility
            of the work at hand, is inefficient and leads to waste of precious
            time as well as efforts. Additionally, existing CRM platforms lay
            too much emphasis on the sales processes and don’s support the
            post-sales customer lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
