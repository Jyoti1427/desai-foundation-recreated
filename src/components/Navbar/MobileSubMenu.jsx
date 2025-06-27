import React from "react";
import { Link } from "react-router-dom";

const MobileSubMenu = ({ items, onClose }) => {
  return (
    <ul className="mt-2 w-full pl-4 space-y-2">
      {items.map((item, idx) => {
        const label = item.label;
        const path = item.path || `/${label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li key={idx} className="text-white">
            <Link
              to={path}
              onClick={() => {
                console.log("Submenu item clicked:", label);
                if (onClose) onClose();
              }}
              className="block w-full px-4 py-2 bg-primary rounded-md border border-black/50 hover:bg-white hover:text-primary transition"
            >
              {label}
            </Link>

            {item.subItems && (
              <ul className="pl-4 mt-1 space-y-1">
                {item.subItems.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      to={sub.path}
                      onClick={() => {
                        console.log("Sub-submenu clicked:", sub.label);
                        if (onClose) onClose();
                      }}
                      className="block w-full px-4 py-2 bg-primary rounded-md border border-black/50 hover:bg-white hover:text-primary transition"
                    >
                      {sub.label}
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

export default MobileSubMenu;
