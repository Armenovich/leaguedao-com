import React from "react";
import PropTypes from "prop-types";

const MultiColorBorder = ({ value }) => {
  return (
    <div className="parent--multi--color--border">
      <div className="grey--border" />
      <div className="progress--border" style={{ width: `${value}%` }} />
    </div>
  );
};

MultiColorBorder.propTypes = {
  value: PropTypes.number,
};

MultiColorBorder.defaultProps = {
  value: 10,
};

export default MultiColorBorder;
