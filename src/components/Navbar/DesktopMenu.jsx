import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import DesktopSubMenu from "./DesktopSubMenu";

const DesktopMenu = ({ navItems }) => {
  return (
    <div className="hidden md:flex space-x-8">
      {navItems.map((item, idx) => (
        <div key={idx} className="relative group">
          <div className="flex items-center space-x-1 cursor-pointer">
            {item.path ? (
              <Link
                to={item.path}
                className="pt-3 font-extrabold text-gray-800 hover:text-pink-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="pt-3 font-extrabold text-gray-800">
                {item.label}
              </span>
            )}
            {item.children && <MdArrowDropDown className="text-base mt-3" />}
          </div>
          {item.children && <DesktopSubMenu items={item.children} />}
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;