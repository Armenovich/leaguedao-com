import React from "react";
import PropTypes from "prop-types";

const WhiteBox = ({ src, children, className }) => (
  <div className={`white--box custom--${className}`}>
    <img src={src} />
    <p>{children}</p>
  </div>
);

WhiteBox.propTypes = {
  children: PropTypes.node,
  src: PropTypes.node,
  className: PropTypes.string,
};

WhiteBox.defaultProps = {
  children: null,
  src: null,
  className: "",
};

export default WhiteBox;
