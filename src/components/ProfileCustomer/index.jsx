import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Style from "./Style.module.scss";
import { UserContext } from "../UserProvider";
import { Container } from "../ui/Container";
import { NavBar } from "../ui/Navbar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const ProfileCustomer = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(() => {
    getMember();
  }, [user]);

  const getMember = async (e) => {
    await axios
      .get("https://backendyogy.onrender.com/api/v1/auth/", {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then(({ data }) => {
        const res = data;
        setMember(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getOrdersAll();
  }, [user]);

  const getOrdersAll = async (e) => {
    await axios
      .get("https://backendyogy.onrender.com/api/v1/orders/all", {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
      .then(({ data }) => {
        const res = data;
        setData(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getOrdersSorted = async (query) => {
    await axios
      .get(
        `https://backendyogy.onrender.com/api/v1/orders/sorted?mode=${query}&offset=0`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      )
      .then(({ data }) => {
        const res = data;
        setData(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <Container>
        <section className={Style.profileBox}>
          <div className={Style.description}>
            <p className={Style.profileTitle}>Имя заказчика</p>
            <p className={Style.profileDescription}>{member.username}</p>
          </div>
          <div className={Style.description}>
            <p className={Style.profileTitle}>Название компании</p>
            <p className={Style.profileDescription}>{member.id}</p>
          </div>
          <div className={Style.description}>
            <p className={Style.profileTitle}>Роль</p>
            <p className={Style.profileDescription}>{member.roles}</p>
          </div>
        </section>
        <section className={Style.order}>
          <div className={Style.titleBox}>
            <div className={Style.title}>
              <p>Заказы</p>
            </div>
            <Button title="Создать" color="white" background="#61ff00" />
          </div>
          <div className={Style.status}>
            <div className={Style.title}>Статус</div>
            <div className={Style.content}>
              <fieldset className={Style.fieldset}>
                <label>
                  <input
                    onClick={() => {
                      getOrdersSorted("В обработке");
                    }}
                    type="radio"
                    value="В обработке"
                    name="status"
                  />
                  В обработке <img src="/panding.svg" alt="panding" />
                </label>
                <label>
                  <input
                    onClick={() => {
                      getOrdersSorted("Принят");
                    }}
                    type="radio"
                    value="Принят"
                    name="status"
                  />
                  Принят <img src="/confirm.svg" alt="confirm" />
                </label>
                <label>
                  <input
                    onClick={() => {
                      getOrdersSorted("Выполнен");
                    }}
                    type="radio"
                    value="Выполнен"
                    name="status"
                  />
                  Выполнен <img src="/accept.svg" alt="accept" />
                </label>
                <label>
                  <input
                    onClick={() => {
                      getOrdersSorted("Отклонён");
                    }}
                    type="radio"
                    value="Отклонен"
                    name="status"
                  />
                  Отклонен <img src="/rejected.svg" alt="rejected" />
                </label>
              </fieldset>
              <div className={Style.cardBox}>
                {data.map((value) => {
                  return (
                    <Card
                      key={value.id}
                      name={value.name}
                      description={value.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProfileCustomer;
