import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserProvider";
import axios from "axios";

import { ROUTER_PATH } from "../const/PATH";
import RegStyle from "./Reg.module.scss";
import { Container } from "../ui/Container";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   onFormSubmit();
  // }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://backendyogy.onrender.com/api/v1/auth/register", {
        Headers: {
          "Content-Type": "application/json",
        },
        username: login,
        password: password,
      })

      .then(() => {
        navigate(ROUTER_PATH.AUTH, { replace: true });
        setLogin("");
        setPassword("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <form onSubmit={onFormSubmit}>
              <label>
                Login
                <input
                  onChange={(e) => setLogin(e.target.value)}
                  id="login"
                  type="text"
                  name="login"
                  placeholder="example@mail.ru"
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
              <button type="submit">Регистрация</button>
              {status ? (
                <p>
                  Нет аккаунта?&nbsp;
                  <Link>Регистрация</Link>
                </p>
              ) : (
                <p>
                  Есть аккаунт?&nbsp;
                  <Link to="/auth">Авторизация</Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
