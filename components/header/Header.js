import React, { useState } from "react";
import DesktopView from "./dimensions/desktop/DesktopView";
import MobileView from "./dimensions/mobile/MobileView";
import Button from "../button/Button";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <Link href="/">
        <div className="app__logo">
          <img src="assets/images/logo-full-light.svg" alt="App Logo" />
        </div>
      </Link>
      <div className="header_nav">
        <DesktopView />
        <Button variant="outlined" className="outlined">
          Join Discord
        </Button>
      </div>
      <div className="mob_header_btn">
        <img
          onClick={() => setToggle(!toggle)}
          src="assets/icons/mobHeaderIcon.svg"
          alt="Mobile Header Icon"
        />
      </div>
      <div className={toggle ? "header-mob-nav open" : "header-mob-nav"}>
        <MobileView toggle={toggle} setToggle={setToggle} />
      </div>
    </header>
  );
};

export default Header;
