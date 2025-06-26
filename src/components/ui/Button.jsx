import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <>
      <button
        className={`bg-rose-700 text-white font-bold rounded-full py-2 px-6 hover:text-blue-500 hover:border hover:border-blue-500 hover:bg-white ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
