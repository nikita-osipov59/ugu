import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../UserProvider";
import { useParams } from "react-router-dom";
import { getProjectById, getProjectLetters } from "../../../api/functions";

import style from "./ProjectCard.module.scss";
import { NavBar } from "../../ui/Navbar";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import Loader from "../../ui/Loader";

const ProjectCard = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const [letters, setLetters] = useState()
  const { id } = useParams();

  const getProject = async () => {
    const response = await getProjectById(user, id);
    setData(response);
  };

  const getLetters = async () =>{
    const response = await getProjectLetters(user, id)
    setLetters(response)
  }

  useEffect(() => {
    getProject();
    getLetters();
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
        <div className={style.student_letters}>
          <h2>Письма студентов</h2>
          {letters ? (
            letters.map((letter, i) =>{
                return(
                  <div key={i} className={style.letter}>
                    <h2>{letter.user.username}</h2>
                    <p>
                      {letter.text}
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
                )
                
            })
            
          ):<Loader/>}
          
        </div>
        <div className={style.new_letter_cont}>
          <button>Написать мотивационное письмо</button>
        </div>
      </Container>
    </div>
  );
};

export default ProjectCard;
