import React from "react";

import AuthStyle from "./Auth.module.scss";
import { Container } from "../ui/Container";

const Auth = () => {
  return (
    <div className={AuthStyle.background}>
      <Container>
        <div className={AuthStyle.wrapper}>
          <div className={AuthStyle.box}>
            <p>Добро пожаловать !</p>
            <div>краткое описание сайта бла бла бла тут что-то важное</div>
          </div>
          <div className={AuthStyle.auth}>
            <p className={AuthStyle.title}>Авторизация</p>
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
              <a href="#">Регистрация</a>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
