import React from "react";

const Button = ({ children, onClickHandler, width, height }) => {
  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      className="active:scale-105 active:-translate-y-1 transition-all rounded-full bg-gradient text-[20px] font-bold flex items-center justify-center text-white"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
