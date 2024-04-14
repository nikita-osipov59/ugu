import React from "react";

import Style from "./Button.module.scss";

export const Button = ({ type, onClick, title, color, background }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={Style.button}
      style={{ color: color, background: background }}
    >
      {title}
    </button>
  );
};
