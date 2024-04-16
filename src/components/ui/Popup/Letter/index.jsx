import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../../UserProvider";
import Style from "./Style.module.scss";
import { Button } from "../../Button";

const Popup = ({ onClick }) => {
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `https://backendyogy.onrender.com/api/v1/letter/add/${id}`,
        {
          text: description,
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
            <h2>Письмо</h2>
            <button onClick={onClick}>X</button>
          </div>
          <label>
            Текст письма
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
