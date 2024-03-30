import React, { useState } from "react";

import AuthStyle from "./Auth.module.scss";
import { Container } from "../ui/Container";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={AuthStyle.background}>
      <Container>
        <div className={AuthStyle.wrapper}>
          <div className={AuthStyle.box}>
            <p>
              <b>Добро пожаловать!</b>
            </p>
            <div>краткое описание сайта бла бла бла тут что-то важное</div>
          </div>
          <div className={AuthStyle.auth}>
            <p className={AuthStyle.title}>Авторизация</p>
            <form>
              <label>
                Login
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="login"
                  type="text"
                  name="login"
                  required
                />
              </label>
              <label>
                Password
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="text"
                  name="password"
                  required
                />
              </label>
              <button
                type="submit"
                name="submit"
                onChange={(e) => e.preventDefalut()}
              >
                Войти
              </button>

              <p>
                Еще нет аккаунта?&nbsp;
                <a href="#">Регистрация</a>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
