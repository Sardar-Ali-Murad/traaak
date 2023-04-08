import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";

const TimeLine = () => {
  return (
    <div className="timeLineMain">
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est.
        Pellentesque sed neque at ipsum congue tincidunt. Curabitur felis sem,
        pharetra eu eros ac, volutpat vestibulum diam. Aliquam luctus eget
        sapien ac finibus.
      </p>

      <div className="timeline">
        <VerticalTimeline
          contentStyle={{ background: "red" }}
          className="costum-line"
          lineColor="#00CCB3"
>
          <VerticalTimelineElement
            className="vertical-timeline-element--work costum-line costum-line"
            date="2021"
            dateClassName="date1"
            iconClassName="icon1"
            position="right"
          >
            <div className="timelineWrapper">
            <h1>
            Lorem ipsum dolor sit amet
            </h1>
            <p>
            Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est. Pellentesque sed neque at ipsum congue tincidunt.
            </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            // iconStyle={{ background: "#C06EF3", color: "#C06EF3" }}
            position="left"
            dateClassName="date2"
            iconClassName="icon2"
          >
          <div className="timelineWrapper">
            <h1>
            Lorem ipsum dolor sit amet
            </h1>
            <p>
            Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est. Pellentesque sed neque at ipsum congue tincidunt.
            </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            position="right"
            dateClassName="date3"
            iconClassName="icon3"
          >
            <div className="timelineWrapper">
            <h1>
            Lorem ipsum dolor sit amet
            </h1>
            <p>
            Aenean diam nunc, commodo ac nisi ut, facilisis lobortis est. Pellentesque sed neque at ipsum congue tincidunt.
            </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
