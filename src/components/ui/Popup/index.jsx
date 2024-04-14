import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../UserProvider";
import Style from "./Style.module.scss";
import { Button } from "../Button";

const Popup = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://backendyogy.onrender.com/api/v1/orders/",
        {
          name: title,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      )

      .then(({ data }) => {
        let res = data;
        onClick();
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className={Style.test}>
        <form onSubmit={onFormSubmit} className={Style.form}>
          <div className={Style.box}>
            <h2>Заказ</h2>
            <button onClick={onClick}>X</button>
          </div>
          <label>
            Название заказа
            <input
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              name="title"
              required
            />
          </label>
          <label>
            Описание заказа
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              cols="10"
              id="dscrp"
              type="text"
              name="description"
              required
            />
          </label>
          <Button type="submit" title="Создать" color="000" />
        </form>
      </div>
    </>
  );
};

export default Popup;
