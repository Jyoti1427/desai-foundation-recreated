import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import MobileSubMenu from "./MobileSubMenu";
import { Link } from "react-router-dom";

const MobileMenu = ({ navItems, onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ul className="text-white bg-primary border border-black/60 rounded-xl overflow-hidden">
      {navItems.map((item, idx) => {
        const hasChildren = !!item.children;
        const path =
          item.path || `/${item.label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li
            key={idx}
            className="border-b border-black/60 hover:bg-white hover:text-primary transition-all duration-300 px-4 py-3 rounded-md"
          >
            <div className="flex justify-between items-center w-full">
              {hasChildren ? (
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="flex items-center gap-1 font-extrabold w-full text-left"
                >
                  <span>{item.label}</span>
                  <MdArrowDropDown
                    className={`ml-2 transition-transform duration-200 ${
                      openDropdowns[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={path}
                   onClick={() => {
                    if (onClose) onClose();
                     }}
                  className="block w-full font-extrabold"
                  
                >
                  {item.label}
                </Link>
              )}
            </div>
            {hasChildren && openDropdowns[idx] && (
              <MobileSubMenu items={item.children} onClose={onClose} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
