import React, { useState } from "react";
import Link from "next/link";

const menuData = [
  {
    text: "Products",
    subMenu: [{ title: "Nomo Leagues", icon: null, href: "/" }],
  },
  {
    text: "Player drops",
    subMenu: [{ title: "Nomo Fantasy Football", icon: null, href: "/" }],
  },
  {
    text: "Info",
    subMenu: [
      { title: "White paper", icon: null, href: "/" },
      { title: "Contributors", icon: null, href: "/" },
      { title: "Docs", icon: null, href: "/" },
      { title: "$LEAG Token Vesting", icon: null, href: "/" },
    ],
  },
  {
    text: "DAO",
    subMenu: [
      { title: "Governance", icon: null, href: "/" },
      { title: "Yield farming", icon: null, href: "/" },
    ],
  },
];

const HeaderDesktop = ({ toggle, setToggle }) => {
  const [indexOpen, setIndexOpen] = useState(-1);
  return (
    <div className={!toggle ? "mobile--header close" : "mobile--header"}>
      <div className="mobile--body">
        <div className="app__logo_mob">
          <img src="assets/images/logoMob.svg" alt="App Logo" />
          <img
            onClick={() => setToggle(!toggle)}
            src="assets/icons/closeMobIcon.svg"
            className="mobHeaderClose"
            alt="Close Mob Header"
          />
        </div>
        <nav className="menu--container">
          <ul className="menu">
            {menuData.map((elem, index) => {
              const { text, subMenu } = elem;
              return (
                <li
                  key={index.toString()}
                  onClick={() => {
                    index !== indexOpen
                      ? setIndexOpen(index)
                      : setIndexOpen(-1);
                  }}
                  className={index === indexOpen ? "open" : ""}
                >
                  <span>{elem.text}</span>
                  <img
                    className="arrow"
                    src="assets/icons/arrowDownSmall.svg"
                    alt="arrow"
                  />
                  {indexOpen === index && (
                    <ul className="submenu--mob">
                      {subMenu.map((item, indx) => {
                        const { title, icon, href } = item;
                        return (
                          <li key={indx.toString()} className="submenu--item">
                            {!!icon && <img src={icon} alt="submenu-icon" />}
                            <Link href={href}>
                              <a>{title}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderDesktop;
