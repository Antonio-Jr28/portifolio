import React from "react";
import { NavbarMobile } from "./navbar-mobile";
import { NavbarDesktop } from "./navbar-desktop";
import { navbarString } from "./navbar-string";


export const Navbar = () => {
  const menuItems = [
    { label: navbarString.home, link: "/" },
    { label: navbarString.About, link: "/sobre" },
    { label: navbarString.portfolio, link: "/portifolio" },
    { label: navbarString.technology, link: "/tecnologias" },
    { label: navbarString.summary, link: "/experiencias" },
  ];

  return (
    <div className="flex flex-col items-center justify-around p-4 h-24 w-100% shadow-xl md:flex-row md:justify-around md:items-center md:px-32 md:h-20 ">
      <div className="flex gap-4 items-center">
        <img src="icon/logo.svg" alt="logo" />
        <h1 className="text-2xl">{navbarString.title}</h1>
      </div>
      <NavbarMobile menuItems={menuItems} />
      <NavbarDesktop menuItems={menuItems} />
    </div>
  );
}; 
