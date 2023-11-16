import React from "react";
import { NavbarMobile } from "./navbar-mobile";
import { NavbarDesktop } from "./navbar-desktop";
import { navbarString } from "./navbar-string";

import logo from "../../assets/icon/logo.svg";

export const Navbar = () => {
  const menuItems = [
    { label: navbarString.home, link: "./" },
    { label: navbarString.About, link: "./" },
    { label: navbarString.portfolio, link: "./" },
    { label: navbarString.service, link: "./" },
    { label: navbarString.summary, link: "./" },
  ];

  return (
    <div className="flex flex-col items-center justify-around p-4 h-24 w-auto shadow-xl md:flex-row md:justify-around md:items-center md:px-32 md:h-20 ">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="logo" />
        <h1 className="text-2xl">{navbarString.title}</h1>
      </div>
      <NavbarMobile menuItems={menuItems} />
      <NavbarDesktop menuItems={menuItems} />
    </div>
  );
};
