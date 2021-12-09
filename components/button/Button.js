import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const CustomButton = ({ variant, children, className, onClick }) => (
  <Button
    variant={variant}
    className={`custom--button--${className} ${variant}`}
    onClick={onClick}
  >
    {children}
  </Button>
);

CustomButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  variant: "contained",
  children: null,
  className: "",
  onClick: () => {},
};

export default CustomButton;
