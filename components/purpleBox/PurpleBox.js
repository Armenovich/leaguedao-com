import React from "react";

const PurpleBox = ({ desktopSize }) => {
  return (
    <div>
      {!desktopSize.isTablet && (
        <div className="purpleBox">
          <p>Join the Discord for latest updates </p>
          <img src="assets/icons/discord-white.svg" alt="Discord icon" />
          <p>Discord</p>
        </div>
      )}
    </div>
  );
};

export default PurpleBox;
