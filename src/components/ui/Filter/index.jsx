import style from './Filter.module.scss';

export const Filter = () => {
    return(
        <div className={style.filter_cont}>
            
            <button><h2>Фильтры</h2></button>
            
            <div >
                <button>Руководитель</button>
                <div className={style.filter_option_cont}><input/></div>
            </div>

            <div>
                <button>Год набора</button>
                <div className={style.filter_option_cont}>
                    <div><input type='checkbox'/> <p>пример</p></div>
                    <div><input type='checkbox'/> <p>пример</p></div>
                </div>
            </div>
            
            <div>
                <button>Тип заказчика</button>
                <div className={style.filter_option_cont}>
                    <div><input type='checkbox'/> <p>пример</p></div>
                    <div><input type='checkbox'/> <p>пример</p></div>
                </div>
            </div>
            
            <div>
                <button>Вид проекта</button>
                <div className={style.filter_option_cont}>
                    <div><input type='checkbox'/> <p>пример</p></div>
                    <div><input type='checkbox'/> <p>пример</p></div>
                </div>
            </div>
            
            <div>
                <button>Направление идентичности ЮГУ</button>
                <div className={style.filter_option_cont}>
                    <div><input type='checkbox'/> <p>пример</p></div>
                    <div><input type='checkbox'/> <p>пример</p></div>
                </div>
            </div>
            
            <div>
                <button>Сфера проекта</button>
                <div className={style.filter_option_cont}>
                    <div><input type='checkbox'/> <p>пример</p></div>
                    <div><input type='checkbox'/> <p>пример</p></div>
                </div>
            </div>
        
        </div>
    );
}
