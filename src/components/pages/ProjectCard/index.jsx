import React from 'react';
import style from './ProjectCard.module.scss';
import { NavBar } from '../../ui/Navbar';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';

const ProjectCard = () => {
    return(
        <div>
            <NavBar/>
            <Container>
                <div className={style.project_info}>
                    <h2>Проект1</h2>
                    <label>Руководитель: {"инфа"}</label>
                    <label>Кол-во свободных мест: {"инфа"}</label>
                    <label>Сроки реализации: {"инфа"}</label>
                    <label>Описание: {"инфа"}</label>
                    <label>Направление Идентичности ЮГУ: {"инфа"}</label>
                    <label>Сфера проекта: {"инфа"}</label>
                    <label>Теги проекта: {"инфа"}</label>
                    <label>Год набора: {"инфа"}</label>
                </div>
                <div className={style.student_letters}> {/*//TODO понятное дело когда будет бек через цикл это сделать */}
                    <h2>Письма студентов</h2>
                    <div className={style.letter}>
                        <h2>Иванов А.А</h2>
                        <p>Текст lorem askdas bla bla bla lorem askdas bla bla blalorem 
                        askdas bla bla blalorem askdas bla bla bla lorem askdas bla bla bla</p>
                        <div className={style.buttons}>
                            <Button title={'Принять'} color={'black'} background={'#24FF00'}/>
                            <Button title={'Отклонить'} color={'black'} background={'#FF0000'}/>
                        </div>
                    </div>
                    <div className={style.letter}>
                        <h2>Иванов А.А</h2>
                        <p>Текст lorem askdas bla bla bla lorem askdas bla bla blalorem 
                        askdas bla bla blalorem askdas bla bla bla lorem askdas bla bla bla</p>
                        <div className={style.buttons}>
                            <Button title={'Принять'} color={'black'} background={'#24FF00'}/>
                            <Button title={'Отклонить'} color={'black'} background={'#FF0000'}/>
                        </div>
                    </div>
                </div>
            </Container>
            
        </div>
    );  
}

export default ProjectCard;