import { useContext, useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import { Filter } from '../../ui/Filter';
import Loader from '../../ui/Loader';
import { NavBar } from '../../ui/Navbar';
import style from './ProjectShowcase.module.scss';

import { UserContext } from '../../UserProvider';
import { getProjectsAll } from '../../../api/functions';
//import { Card } from '../../ui/Card';

const ProjectShowcase = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getProjects();
    }, [user])

    const getProjects = async () =>{
        const res =  await getProjectsAll(user);
        setData(res);
        console.log(res);
    }

    return(
        <div>
            <NavBar/>
            
            <div className={style.body_cont}>
                <Filter/>
                <div className={style.search_cont}>
                    <input placeholder='Название проекта'/>
                    <Button title={'Найти'} color={'white'} background={'#61FF00'}/>
                </div>
                <div className={style.project_list_cont}>
                    {data? data.map((value) =>{
                        return(
                            <div key={value.id} className={style.project_cont}>
                                <h2>{value.name}</h2>
                                <p>Свободные места: {value.count_place}</p>
                                <p>Дата окончания: {value.deadline_date}</p>
                                <p>Руководитель: {value.lecturer.username}</p>
                                
                            </div>
                        )
                    }) : <Loader width={120} height={120}/>}
                    
                    
                </div>
            </div>
            <div className={style.project_page_switcher}> {/* //TODO когда поднимут бек сделать постраничное распределение проектов */}
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );
}

export default ProjectShowcase;