import { useContext, useState, useEffect } from "react";
import { Button } from "../../ui/Button";
import { Filter } from "../../ui/Filter";
import Loader from "../../ui/Loader";
import { NavBar } from "../../ui/Navbar";
import style from "./ProjectShowcase.module.scss";

import { UserContext } from "../../UserProvider";
import { getProjectsAll } from "../../../api/functions";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { ROUTER_PATH } from "../../const/PATH";
//import { Card } from '../../ui/Card';

const ProjectShowcase = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjects();
  }, [user]);

  const getProjects = async () => {
    const res = await getProjectsAll(user);
    setData(res);
  };

  return (
    <>
      <NavBar />
      <section className={style.section}>
        <Container>
          <div className={style.test}>
            <Filter />
            <div className={style.search}>
              <div className={style.search_cont}>
                <input placeholder="Название проекта" />
                <Button
                  title={"Найти"}
                  color={"white"}
                  background={"#61FF00"}
                />
              </div>
              <div className={style.project_list_cont}>
                {data ? (
                  data.map((value) => {
                    return (
                      <Card
                        path={ROUTER_PATH.PROJECT}
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        deadline_date={value.deadline_date}
                        registration_date={value.registration_date}
                        identity={value.identity}
                        lecturer={value.lecturer}
                        count_place={value.count_place}
                        types={value.types}
                        spheres={value.spheres}
                      />
                    );
                  })
                ) : (
                  <Loader width={120} height={120} />
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcase;
