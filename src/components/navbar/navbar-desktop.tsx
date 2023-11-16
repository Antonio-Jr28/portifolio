import React from "react";
import { navbarString } from "./navbar-string";

interface NavbarDesktopProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ menuItems }) => {
  return (
    <div className="hidden md:flex gap-10 items-center justify-around">
      {menuItems.map((item, index) => (
        <a
          key={index}
          className="text-gray-500 hover:text-black"
          href={item.link}
        >
          {item.label}
        </a>
      ))}
      <button className="border-4 w-[100px] shadow-md shadow-gray-400">
        {navbarString.contactButton}
      </button>
    </div>
  );
};
