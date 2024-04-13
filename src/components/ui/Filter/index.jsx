import style from "./Filter.module.scss";
import { useState, useEffect } from "react";

export const Filter = () => { //TODO доделать верстку 
  const [isHideOptions, setOptions] = useState([false, false, false, false, false, false]);

  useEffect(() =>{
    isHideOptions.map((c, i) =>{
      let option = document.getElementById(`option_${i}`)
      if(c){
        option.style.display = 'block'
      }
      else{
        option.style.display = 'none'
      }
    })
  }, [isHideOptions])

  const showHideOptions = (id) =>{
    const newHideOptions = isHideOptions.map((c, i) =>{
      if(i===id){
        return !c 
      }
      else{
        return c
      }
    });
    setOptions(newHideOptions);
  }
  
  return (
    <aside className={style.filter_cont}>
      <button>
        <h2>Фильтры</h2>
      </button>

      <div>
        <button onClick={() => showHideOptions(0)}>Руководитель</button>
        <div id="option_0" className={style.filter_option_cont}>
          <input />
        </div>
      </div>

      <div>
        <button onClick={() => showHideOptions(1)}>Количевство мест</button>
        <div id="option_1" className={style.filter_option_cont}>
          <div>
            <input />
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => showHideOptions(2)}>Тип заказчика</button>
        <div id="option_2" className={style.filter_option_cont}>
          <div>
            <input type="checkbox" /> <p>Внутренний</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Внешний</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => showHideOptions(3)}>Тип проекта</button>
        <div id="option_3" className={style.filter_option_cont}>
          <div>
            <input type="checkbox" /> <p>Бизнес</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Социальный</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Творческий</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Исследовательский</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => showHideOptions(4)}>Идентичность</button>
        <div id="option_4" className={style.filter_option_cont}>
          <div>
            <input type="checkbox" /> <p>Green</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Lean</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Smart</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => showHideOptions(5)}>Сфера проекта</button>
        <div id="option_5" className={style.filter_option_cont}>
          <div>
            <input type="checkbox" /> <p>IT</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Волонтёрство</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Журналистика</p>
          </div>
          <div>
            <input type="checkbox" /> <p>История</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Логистика</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Маркетинг</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Образование</p>
          </div>
          <div>
            <input type="checkbox" /> <p>SocialMedia</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Экономика</p>
          </div>
          <div>
            <input type="checkbox" /> <p>Юриспруденция</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
