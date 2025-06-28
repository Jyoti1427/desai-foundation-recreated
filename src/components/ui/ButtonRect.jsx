import React from "react";

const ButtonRect = ({ children, className = "", onClick, ...props }) => {
  const handleClick = (e) => {
    console.log("Rectangular button clicked!");
    if (onClick) onClick(e); // allow custom handler if passed
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`py-3 px-4 font-bold bg-gray-100 hover:bg-primary hover:border-2 hover:border-teal-800 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonRect;
