import React from "react";

import Style from "./Style.module.scss";

export const Card = ({ name, description, info }) => {
  return (
    <div className={Style.card}>
      <h1 className={Style.cardTitle}>{name}</h1>
      <div className={Style.cardDescription}>{description}</div>
      {info ? (
        <ul>
          <li>Срок до:</li>
          <li>Мест:</li>
          <li>Год набора:</li>
        </ul>
      ) : null}
    </div>
  );
};
