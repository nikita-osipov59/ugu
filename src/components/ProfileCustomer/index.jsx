import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Style from "./Style.module.scss";
import { UserContext } from "../UserProvider";
import { Container } from "../ui/Container";
import { NavBar } from "../ui/Navbar";
import { Button } from "../ui/Button";

const ProfileCustomer = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");

  useEffect(() => {
    getInfo();
  }, [user]);

  const getInfo = async (e) => {
    await axios
      .get("https://backendyogy.onrender.com/api/v1/auth/", {
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

  useEffect(() => {
    getOrders();
  }, [user]);

  const getOrders = async (e) => {
    await axios
      .get(
        "https://backendyogy.onrender.com/api/v1/orders/sorted?mode=В обработке&offset=0",
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
            <p>Имя заказчика</p>
            <p>{data.login}</p>
          </div>
          <div className={Style.description}>
            <p>Название компании</p>
            <p>{data.id}</p>
          </div>
          <div className={Style.description}>
            <p>Роль</p>
            <p>{data.roles}</p>
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
                      getOrders();
                    }}
                    type="radio"
                    value="В обработке"
                    name="status"
                  />
                  В обработке <img src="/panding.svg" alt="panding" />
                </label>
                <label>
                  <input type="radio" value="Принят" name="status" />
                  Принят <img src="/confirm.svg" alt="confirm" />
                </label>
                <label>
                  <input type="radio" value="Выполнен" name="status" />
                  Выполнен <img src="/accept.svg" alt="accept" />
                </label>
                <label>
                  <input type="radio" value="Отклонен" name="status" />
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
// const filter = (props) => {
//   const test = document.getElementById("card");
//   status
//     .filter((value) => {
//       return value.status === props;
//     })
//     .map((value) => {
//       console.log(value.title);
//       test.innerHTML = `<div id="card" class=${Style.card}>
//           <h2 class=${Style.cardTitle}>${value.title}
//           </h2>
//           <p class=${Style.cardDescription}>${value.description}</p>
//         </div>`;
//     });
// };
