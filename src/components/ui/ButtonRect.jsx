import React from "react";

const ButtonRect = ({ children, className = "", ...props }) => {
  return (
    <>
      <button
        className={`py-3 px-4 font-bold bg-gray-100 hover:bg-primary hover:border-2 hover:boder-teal-800 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonRect;
