import React from "react";

import Style from "./Button.module.scss";

export const Button = ({ title, color, background }) => {
  return (
    <button
      className={Style.button}
      style={{ color: color, background: background }}
    >
      {title}
    </button>
  );
};
