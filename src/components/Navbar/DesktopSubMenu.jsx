import React from "react";
import { Link } from "react-router-dom";

const DesktopSubMenu = ({ items }) => {
  return (
    <ul className="absolute top-full left-0 bg-primary text-white font-extrabold border border-black shadow-lg rounded-md divide-y divide-black w-48 mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-20 invisible group-hover:visible">
      {items.map((item, idx) => {
        const label = typeof item === "string" ? item : item.label;
        const path =
          typeof item === "object" && item.path
            ? item.path
            : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li key={idx} className="relative group/item">
            <Link
              to={path}
              className="px-4 py-2 hover:bg-white hover:text-primary transition-colors duration-200 flex justify-between items-center"
            >
              {label}
              {item.subItems && <span className="ml-2">▸</span>}
            </Link>
            {item.subItems && (
              <ul className="absolute top-0 left-full mt-0 ml-2 bg-primary text-white border border-black rounded-md shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-30 w-48">
                {item.subItems.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      to={
                        subItem.path ||
                        `/${subItem.label.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      className="block px-4 py-2 hover:bg-white hover:text-primary transition-colors duration-200"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopSubMenu;
