import React from 'react'

const HorizontalRule = ({
  width = "w-20",
  height = "h-[1px]",
  color = "bg-blue-700",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${height} ${width} ${color} ${className}`}
      {...props}
    />
  );
};

export default HorizontalRule
