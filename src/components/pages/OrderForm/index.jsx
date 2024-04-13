import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { NavBar } from "../../ui/Navbar";
import style from "./OrderForm.module.scss";
import { Button } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { getOrderById } from "../../../api/functions";

import { UserContext } from "../../UserProvider";

const OrderForm = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState("");
  const { id } = useParams();

  const getOrder = async () => {
    const response = await getOrderById(user, id);
    setData(response)
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <div className={style.order_info}>
          <h2>{data.name}</h2>
          <p>Статус - {data?.status?.name}</p>
          <p>Заказчик - {user.login}</p>
          <p>Описание - {data?.description}</p>
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
