import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthStyle from "./Auth.module.scss";
import { Container } from "../ui/Container";
import axios from "axios";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   onFormSubmit();
  // }, []);

  const onFormSubmit = async (e) => {
    setStatus(true);
    e.preventDefault();

    await axios
      .post("https://backendyogy.onrender.com/api/v1/auth/register", {
        headers: {
          "Content-Type": "application/json",
        },
        username: login,
        password: password,
      })

      .then(function (response) {
        console.log(response);
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
            <p className={AuthStyle.title}>
              {status ? "Авторизация" : "Регистрация"}
            </p>
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
              {status ? (
                <p>
                  Нет аккаунта?&nbsp;
                  <Link onClick={() => setStatus(false)}>Регистрация</Link>
                </p>
              ) : (
                <p>
                  Есть аккаунт?&nbsp;
                  <Link onClick={() => setStatus(true)}>Авторизация</Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
