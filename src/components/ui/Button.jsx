import React from "react";

const Button = ({ children, className = "",onClick, ...props }) => {
  const handleClick = (e) => {
    console.log("Rounded button clicked!");
    if (onClick) onClick(e); // allow custom handler if passed
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`bg-rose-700 text-white font-bold rounded-full py-2 px-6 hover:text-blue-500 hover:border hover:border-blue-500 hover:bg-white ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
