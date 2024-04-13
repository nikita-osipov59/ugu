import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../UserProvider";
import { Container } from "../ui/Container";
import { ROUTER_PATH } from "../const/PATH";
import AuthStyle from "./Auth.module.scss";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://backendyogy.onrender.com/api/v1/auth/login",
        {
          username: login,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )

      .then(({ data }) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            login,
            password,
            ...data,
          })
        );

        navigate(ROUTER_PATH.HOME);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <form onSubmit={onFormSubmit}>
              <label>
                Login
                <input
                  onChange={(e) => setLogin(e.target.value)}
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
                  type="password"
                  name="password"
                  required
                />
              </label>
              <button type="submit">Войти</button>
              <p>
                Нет аккаунта?&nbsp;
                <Link to="/register">Регистрация</Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
