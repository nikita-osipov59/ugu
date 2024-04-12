import { Button } from '../../ui/Button';
import { Filter } from '../../ui/Filter';
import Loader from '../../ui/Loader';
import { NavBar } from '../../ui/Navbar';
import style from './ProjectShowcase.module.scss';

const ProjectShowcase = () => {
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
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className={style.project_cont}>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                
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