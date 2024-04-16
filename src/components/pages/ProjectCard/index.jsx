import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../UserProvider";
import { getProjectById } from "../../../api/functions";
import style from "./ProjectCard.module.scss";
import Popup from "../../ui/Popup/Letter";
import { NavBar } from "../../ui/Navbar";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";

const ProjectCard = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const getProject = async () => {
    const response = await getProjectById(user, id);
    setData(response);
  };

  const showPopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <div className={style.project_info}>
          <h2>{data.name}</h2>
          <label>Кол-во свободных мест: {data.count_place}</label>
          <label>Срок до: {data.deadline_date}</label>
          <label>Описание: {data.description}</label>
          <label>{data.identity ? `Идентичность: ${data.identity}` : ""}</label>
          <label>{data.spheres ? `Сфера: ${data.spheres}` : ""}</label>
          <label>{data.types ? `Типы: ${data.types}` : ""}</label>
        </div>
        {/*//TODO понятное дело когда будет бек через цикл это сделать */}
        <div className={style.student_letters}>
          {isOpen && <Popup onClick={showPopup} />}
          <h2>Письма студентов</h2>
          <div className={style.letter}>
            <h2>Иванов А.А</h2>
            <p>
              Текст lorem askdas bla bla bla lorem askdas bla bla blalorem
              askdas bla bla blalorem askdas bla bla bla lorem askdas bla bla
              bla
            </p>
            <div className={style.buttons}>
              <Button
                title={"Принять"}
                color={"black"}
                background={"#24FF00"}
              />
              <Button
                title={"Отклонить"}
                color={"black"}
                background={"#FF0000"}
              />
            </div>
          </div>
          <div className={style.letter}>
            <h2>Иванов А.А</h2>
            <p>
              Текст lorem askdas bla bla bla lorem askdas bla bla blalorem
              askdas bla bla blalorem askdas bla bla bla lorem askdas bla bla
              bla
            </p>
            <div className={style.buttons}>
              <Button
                title={"Принять"}
                color={"black"}
                background={"#24FF00"}
              />
              <Button
                title={"Отклонить"}
                color={"black"}
                background={"#FF0000"}
              />
            </div>
          </div>
          <Button
            onClick={() => showPopup()}
            margin={"30px 0px"}
            title={"Написать мотивационное письмо"}
            color={"black"}
            background={"#FFF"}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProjectCard;
