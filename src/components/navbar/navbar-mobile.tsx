import React, { useState, useEffect, useRef } from "react";
import { navbarString } from "./navbar-string";
import { Link } from "react-router-dom";

interface NavbarMobileProps {
  menuItems: { label: string; link: string }[];
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ menuItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains?.(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="md:hidden cursor-pointer" ref={menuRef}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-10 border rounded-md shadow-md">
          <ul className="flex flex-col items-center md:flex-row md:items-center gap-4 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-gray-500 hover:text-black"
                  href={item.link}
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link target="_blank" to={"https://w.app/5PpcNK"}>
                <button className="border-4 w-[100px] shadow-md shadow-gray-400">
                  {navbarString.contactButton}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
