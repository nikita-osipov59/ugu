import React, { useEffect, useState } from "react";

import Style from "./Style.module.scss";
import { Container } from "../ui/Container";
import { NavBar } from "../ui/Navbar";
import { Button } from "../ui/Button";

const ProfileCustomer = () => {
  const [status, setStatus] = useState([
    {
      id: 1,
      title: "В обработке",
      status: "Panding",
    },
    {
      id: 2,
      title: "Принят",
      status: "Accept",
    },
    {
      id: 3,
      title: "Выполнен",
      status: "Done",
    },
    {
      id: 4,
      title: "Отклонен",
      status: "Rejected",
    },
  ]);

  const filter = (props) => {
    const test = document.getElementById("card");
    status
      .filter((value) => {
        return value.status === props;
      })
      .map((value) => {
        console.log(value.title);
        test.innerHTML = `<div id="card" class=${Style.card}>
            <h2 class=${Style.cardTitle}>${value.title}
            </h2>
            <p class=${Style.cardDescription}>${value.description}</p>
          </div>`;
      });
  };
  return (
    <>
      <NavBar />
      <Container>
        <section className={Style.profileBox}>
          <div className={Style.description}>
            <p>Имя заказчика</p>
            <p>Какое-то имя</p>
          </div>
          <div className={Style.description}>
            <p>Название компании</p>
            <p>Какое-то название компании</p>
          </div>
          <div className={Style.description}>
            <p>Какая-то инфа</p>
            <p>Инфа</p>
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
                    onClick={() => filter("Panding")}
                    type="radio"
                    value="В обработке"
                    name="status"
                  />
                  В обработке <img src="/panding.svg" alt="panding" />
                </label>
                <label>
                  <input
                    onClick={() => filter("Accept")}
                    type="radio"
                    value="Принят"
                    name="status"
                  />
                  Принят <img src="/confirm.svg" alt="confirm" />
                </label>
                <label>
                  <input
                    onClick={() => filter("Done")}
                    type="radio"
                    value="Выполнен"
                    name="status"
                  />
                  Выполнен <img src="/accept.svg" alt="accept" />
                </label>
                <label>
                  <input
                    onClick={() => filter("Rejected")}
                    type="radio"
                    value="Отклонен"
                    name="status"
                  />
                  Отклонен <img src="/rejected.svg" alt="rejected" />
                </label>
              </fieldset>
              <div id="card" className={Style.cardBox}></div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProfileCustomer;
