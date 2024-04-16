import React, { useEffect, useState, useContext } from "react";

import Style from "./Style.module.scss";
import { UserContext } from "../UserProvider";
import { Container } from "../ui/Container";
import { NavBar } from "../ui/Navbar";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import Loader from "../ui/Loader";
import {
  getCurrentMember,
  getOrdersAll,
  getSortedOrders,
} from "../../api/functions";
import { ROUTER_PATH } from "../const/PATH";
import Popup from "../ui/Popup/Order";

const ProfileCustomer = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [member, setMember] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getMember = async () => {
    let currentMember = await getCurrentMember(user);
    setMember(currentMember);
    setIsLoading(true);
  };

  const getOrders = async () => {
    const res = await getOrdersAll(user);
    setData(res);
    setIsLoading(true);
  };

  const getSorted = async (query) => {
    const sortedData = await getSortedOrders(query, user);
    setData(sortedData);
  };

  const showPopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsLoading(false);
    getOrders();
    getMember();
  }, [user]);

  return (
    <>
      <NavBar />
      <Container>
        {isLoading ? (
          <section className={Style.profileBox}>
            <div className={Style.description}>
              <p className={Style.profileTitle}>Имя заказчика</p>
              <div className={Style.profileDescription}>{member?.username}</div>
            </div>
            <div className={Style.description}>
              <p className={Style.profileTitle}>Название компании</p>
              <div className={Style.profileDescription}>{member?.id}</div>
            </div>
            <div className={Style.description}>
              <p className={Style.profileTitle}>Роль</p>
              <div className={Style.profileDescription}>{member?.roles}</div>
            </div>
          </section>
        ) : (
          <Loader />
        )}
        <section className={Style.order}>
          {isOpen && <Popup onClick={showPopup} />}
          <div className={Style.titleBox}>
            <div className={Style.title}>
              <p>Заказы</p>
            </div>
            <Button
              onClick={() => showPopup()}
              title="Создать"
              color="white"
              background="#61ff00"
            />
          </div>
          <div className={Style.status}>
            <div className={Style.title}>Статус</div>
            <div className={Style.content}>
              <fieldset className={Style.fieldset}>
                <label>
                  <input
                    onClick={() => {
                      getSorted("В обработке");
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
                      getSorted("Принят");
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
                      getSorted("Выполнен");
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
                      getSorted("Отклонён");
                    }}
                    type="radio"
                    value="Отклонен"
                    name="status"
                  />
                  Отклонен <img src="/rejected.svg" alt="rejected" />
                </label>
              </fieldset>
              <div className={Style.cardBox}>
                {isLoading ? (
                  data?.map((value) => {
                    return (
                      <Card
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        description={value.description}
                        path={ROUTER_PATH.ORDER}
                      />
                    );
                  })
                ) : (
                  <Loader width={80} height={80} />
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProfileCustomer;
