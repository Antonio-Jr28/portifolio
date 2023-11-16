import React from "react";
import { NavbarMobile } from "./navbar-mobile";
import { NavbarDesktop } from "./navbar-desktop";
import { navbarString } from "./navbar-string";

export const Navbar = () => {
  const menuItems = [
    { label: navbarString.home, link: "./" },
    { label: navbarString.About, link: "./" },
    { label: navbarString.portfolio, link: "./" },
    { label: navbarString.service, link: "./" },
    { label: navbarString.summary, link: "./" },
  ];

  return (
    <div className="flex flex-col items-center justify-between p-4 h-20 w-auto shadow-xl md:flex-row md:justify-between md:items-center md:px-32 ">
      <h1>Antonio Carlos</h1>

      <NavbarMobile menuItems={menuItems} />
      <NavbarDesktop menuItems={menuItems} />
    </div>
  );
};
