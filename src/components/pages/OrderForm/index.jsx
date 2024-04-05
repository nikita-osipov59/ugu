import React from 'react';
import { NavBar } from '../../ui/Navbar';
import style from './OrderForm.module.scss';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';

const OrderForm = () => {
    return(
        <div>
            <NavBar/>
            <Container>
                <div className={style.order_info}>
                <h2>Заказ1</h2>
                <p>Статус - {'backend_info'}</p>
                <p>Заказчик - {'backend_info'}</p>
                <p>Описание - {'backend_info'}</p>
                <div>
                    <Button title={'Редактировать'} color={'black'} background={'white'}/>
                    <Button title={'Удалить'} color={'black'} background={'white'}/>
                </div>
            </div>
            <div className={style.comments_list}>
                <h2>Комментарии</h2>
                <div>
                    Текст lorem askdas bla bla bla lorem askdas bla bla blalorem askdas 
                    bla bla blalorem askdas bla bla bla lorem askdas bla bla blaр
                </div>
            </div>
            </Container>
            
        </div>
    );
}

export default OrderForm;