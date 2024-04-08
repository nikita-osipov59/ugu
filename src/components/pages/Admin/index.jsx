import React from 'react';
import { Container } from '../../ui/Container';
import { NavBar } from '../../ui/Navbar';
import style from './Admin.module.scss';
import { Button } from '../../ui/Button';

const Admin = () => {
    return(
        <div>
            <NavBar/>
            <Container>
                <div className={style.orders}>
                    <h2>Заказы</h2>
                    <div className={style.order}>
                        <h3>Производство деталей с использованием аддитивных технологий (3D печать)</h3>
                        <p>Заказчик - {'backend_info'}</p>
                        <div className={style.buttons}>
                            <Button title={'Принять'} color={'black'} background={'#24FF00'}/>
                            <Button title={'Отклонить'} color={'black'} background={'#FF0000'}/>
                        </div>
                    </div>
                    <div className={style.order}>
                        <h3>Производство деталей с использованием аддитивных технологий (3D печать)</h3>
                        <p>Заказчик - {'backend_info'}</p>
                        <div className={style.buttons}>
                            <Button title={'Принять'} color={'black'} background={'#24FF00'}/>
                            <Button title={'Отклонить'} color={'black'} background={'#FF0000'}/>
                        </div>
                    </div>
                </div>
                <div className={style.projects}>
                    <h2>Проекты</h2>
                    <div className={style.project}>
                        <h3>Производство деталей с использованием аддитивных технологий (3D печать)</h3>
                        <p>Срок до: 15.05.2024</p>
                        <p>Мест: 6</p>
                        <p>Год набора 2022</p>
                        <div className={style.buttons}>
                            <Button title={'Редактировать'} color={'black'} background={'#fff'}/>
                            <Button title={'Отклонить'} color={'black'} background={'#FF0000'}/>
                        </div>
                    </div>
                </div>
                <div className={style.tools}>
                    <h2>Инстументы</h2>
                    <div className={style.time}>
                        <h3>Добавление в проекты</h3>
                        <div>
                            <input placeholder='От'/>
                            <input placeholder='До'/>
                        </div>
                        <h3>Мотивационные письма</h3>
                        <div>
                            <input placeholder='От'/>
                            <input placeholder='До'/>
                        </div>
                        <Button title={'Задать'} color={'black'} background={'#FBFF3C'}/>
                    </div>
                    <div className={style.students}>
                        <h2>Распределить студентов</h2>
                        <Button title={'Распределить'} color={'black'} background={'#FBFF3C'}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Admin;