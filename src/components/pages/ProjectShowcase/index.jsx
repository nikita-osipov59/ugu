import { NavBar } from '../../ui/Navbar';
import './ProjectShowcase.scss'

const ProjectShowcase = () => {
    return(
        <div>
            <NavBar/>
            
            <div className='body_cont'>
                 <div className='filter_cont'> {/*//TODO перенести фильтр в отдельный файл и добавить чекбоксы */}
                    <h2>Фильтры</h2>
                    <p>Руководитель</p>
                    <p>Год набора</p>
                    <p>Тип заказчика</p>
                    <p>Вид проекта</p>
                    <p>Направление идентичности ЮГУ</p>
                    <p>Сфера проекта</p>
                </div>
                <div className='search_cont'>
                    <input placeholder='Название проекта'/>
                    <button>Найти</button>
                </div>
                <div className='project_list_cont'>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                    <div className='project_cont'>
                        <h2>Производство деталей с использованием аддитивных технологий (3D печать)</h2>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                    </div>
                
                </div>
            </div>
            <div className='project_page_switcher'> {/* //TODO когда поднимут бек сделать постраничное распределение проектов */}
                <button>{"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );
}

export default ProjectShowcase;