import React, { useState } from "react";
import PropTypes from "prop-types";
import MultiColorBorder from "../uiDetails/multiColorBorder/MultiColorBorder";

const RoadmapItem = ({ title, number, text, className }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`roadmap--item ${className}`} arria-hidden="true">
      <p className={toggle ? "roadmap--txt open" : "roadmap--txt"}>
        Milestone {number}
      </p>
      <MultiColorBorder value={toggle ? 100 : 1} />
      <h3 onClick={() => setToggle(!toggle)} className={toggle ? "open" : ""}>
        {title}
        <img
          className="arrow"
          src="assets/icons/roadmap-arrow-down.svg"
          alt="arrow"
        />
      </h3>
      <p
        className={toggle ? "roadmap--toggle-txt open" : "roadmap--toggle-txt"}
      >
        {text}
      </p>
    </div>
  );
};

RoadmapItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  text: PropTypes.node,
};

RoadmapItem.defaultProps = {
  className: "",
  title: "",
  text: null,
  number: null,
};

export default RoadmapItem;
