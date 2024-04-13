import React from "react";
import { Link } from "react-router-dom";

import { ROUTER_PATH } from "../../const/PATH";
import Style from "./Style.module.scss";

export const Card = ({
  name,
  description,
  count_place,
  deadline_date,
  registration_date,
  lecturer,
  spheres,
  types,
  identity,
  id,
  path,
}) => {
  return (
    <Link to={path + `/${id}`} className={Style.card}>
      <h1 className={Style.cardTitle}>{name}</h1>
      <div className={Style.cardDescription}>{description}</div>
      <ul>
        <li>{deadline_date ? `Срок до:  ${deadline_date}` : ""}</li>
        <li>{count_place ? `Мест: ${count_place}` : ""}</li>
        <li>{registration_date ? `Год набора: ${registration_date}` : ""}</li>
        <li>{identity ? `Идентичность: ${identity}` : ""}</li>
        <li>{types ? `Типы: ${types}` : ""}</li>
        <li>{lecturer ? `Руководитель: ${lecturer.username}` : ""}</li>
        <li>{spheres ? `Сфера: ${spheres}` : ""}</li>
      </ul>
    </Link>
  );
};
