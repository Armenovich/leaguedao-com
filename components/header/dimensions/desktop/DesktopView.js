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
      { title: "Contributors", icon: null, href: "/contributors" },
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

const HeaderDesktop = () => {
  return (
    <div className="desktop--header">
      <div className="desktop--body">
        <nav className="menu--container">
          <ul className="menu">
            {menuData.map((elem, index) => {
              const { text, subMenu } = elem;
              return (
                <li key={index.toString()}>
                  <span>{text}</span>
                  <img
                    className="arrow"
                    src="assets/icons/header-arrow-down.svg"
                    alt="arrow"
                  />
                  <ul className="submenu">
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
