import React from "react";

import RegStyle from "./Reg.module.scss";
import { Container } from "../ui/Container";

const Auth = () => {
  return (
    <div className={RegStyle.background}>
      <Container>
        <div className={RegStyle.wrapper}>
          <div className={RegStyle.box}>
            <p>
              <b>Добро пожаловать!</b>
            </p>
            <div>краткое описание сайта бла бла бла тут что-то важное</div>
          </div>
          <div className={RegStyle.auth}>
            <p className={RegStyle.title}>Регистрация</p>
            <form>
              <label>
                Login
                <input id="login" type="text" name="login" required />
              </label>
              <label>
                Password
                <input id="password" type="text" name="password" required />
              </label>
              <button type="submit">Войти</button>
              <p>
                Есть аккаунт?&nbsp;
                <a href="#">Авторизация</a>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
