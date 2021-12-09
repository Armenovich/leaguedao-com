import React from "react";
import PropTypes from "prop-types";

const ContributorItem = ({ name, img }) => {
  return (
    <div className="contributorCard">
      <img src={img} />
      <p>{name}</p>
    </div>
  );
};

ContributorItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

ContributorItem.defaultProps = {
  name: "",
  img: "",
};

export default ContributorItem;
