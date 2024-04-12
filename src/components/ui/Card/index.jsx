import React from "react";

import Style from "./Style.module.scss";

export const Card = ({ name, description }) => {
  return (
    <div className={Style.card}>
      <h1 className={Style.cardTitle}>{name}</h1>
      <div className={Style.cardDescription}>{description}</div>
    </div>
  );
};
