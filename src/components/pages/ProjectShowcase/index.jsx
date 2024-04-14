import { useContext, useState, useEffect, useRef } from "react";
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
import { arrayToMatrix } from "../../../utils";

const ProjectShowcase = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
	const [matrixData, setMatrixData] = useState();
	const [showedElementsId, setElementsId] = useState(0);
	const observer = useRef();
	const lastElement = useRef();

	useEffect(() =>{
		if(data === undefined) return;
		if(observer.current) observer.current.disconnect();
		let callback = function(enteries, observer){
			if(enteries[0].isIntersecting && showedElementsId <= matrixData.length){
				setData([...data, ...matrixData[showedElementsId + 1]])
				setElementsId(showedElementsId + 1)
			}
		}
		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current)
	}, [data])

  useEffect(() => {
    getProjects();
  }, [user]);
	
  const getProjects = async () => {
    const res = await getProjectsAll(user);
		let matrix_res = await arrayToMatrix(res);
		
		setMatrixData(matrix_res);
    setData(matrix_res[showedElementsId]);
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
								<div id="observer_el" ref={lastElement} style={{width: 140, height: 20}}></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcase;
