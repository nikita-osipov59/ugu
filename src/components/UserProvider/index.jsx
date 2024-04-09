import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: "",
    password: "",
    isAuth: Boolean,
  });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setUser({ isAuth: true });
    } else setUser({ isAuth: false });
  }, [setUser]);

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={{ value, user }}>
      {children}
    </UserContext.Provider>
  );
};
