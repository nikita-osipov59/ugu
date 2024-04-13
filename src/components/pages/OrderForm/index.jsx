import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { NavBar } from "../../ui/Navbar";
import style from "./OrderForm.module.scss";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";

import { UserContext } from "../../UserProvider";

const OrderForm = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const { id } = useParams();

  const getOrderById = async () => {
    const response = await axios
      .get(`https://backendyogy.onrender.com/api/v1/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).access_token
          }`,
        },
        // { TODO: разобраться с запросом}
      })
      .then(({ data }) => {
        let res = data;
        setData(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    return response;
  };

  useEffect(() => {
    getOrderById();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <div className={style.order_info}>
          <h2>{data.name}</h2>
          <p>Статус - {data?.status?.name}</p>
          <p>Заказчик - {user.login}</p>
          <p>Описание - {data.description}</p>
          <div>
            <Button
              title={"Редактировать"}
              color={"black"}
              background={"white"}
            />
            <Button title={"Удалить"} color={"black"} background={"white"} />
          </div>
        </div>
        <div className={style.comments_list}>
          <h2>Комментарии</h2>
          <div>{data.comment}</div>
        </div>
      </Container>
    </div>
  );
};

export default OrderForm;
