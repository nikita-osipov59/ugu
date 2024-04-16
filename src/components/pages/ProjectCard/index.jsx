import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, getProjectLetters } from "../../../api/functions";

import { UserContext } from "../../UserProvider";
import style from "./ProjectCard.module.scss";
import Popup from "../../ui/Popup/Letter";
import { NavBar } from "../../ui/Navbar";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import Loader from "../../ui/Loader";

const ProjectCard = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [letters, setLetters] = useState([]);
  const { id } = useParams();

  const getProject = async () => {
    const response = await getProjectById(user, id);
    setData(response);
    setIsLoading(true);
  };

  const getLetters = async () => {
    const response = await getProjectLetters(user, id);
    setLetters(response);
    setIsLoading(true);
  };

  const showPopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsLoading(false);
    getProject();
    getLetters();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <div className={style.project_info}>
          {isLoading ? (
            <>
              <h2>{data.name}</h2>
              <p>Кол-во свободных мест: {data.count_place}</p>
              <p>Срок до: {data.deadline_date}</p>
              <p>Описание: {data.description}</p>
              <p>{data.identity ? `Идентичность: ${data.identity}` : ""}</p>
              <p>{data.spheres ? `Сфера: ${data.spheres}` : ""}</p>
              <p>{data.types ? `Типы: ${data.types}` : ""}</p>
            </>
          ) : (
            <Loader />
          )}
        </div>
        {/*//TODO понятное дело когда будет бек через цикл это сделать */}
        <div className={style.student_letters}>
          {isOpen && <Popup onClick={showPopup} />}
          <h2>Письма студентов</h2>
          {isLoading ? (
            letters.map((letter, i) => {
              return (
                <div key={i} className={style.letter}>
                  <div className={style.username}>
                    <h2>{letter.user.username}</h2>
                  </div>
                  <p>{letter.text}</p>
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
              );
            })
          ) : (
            <Loader />
          )}
        </div>
        <div className={style.new_letter_cont}>
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
