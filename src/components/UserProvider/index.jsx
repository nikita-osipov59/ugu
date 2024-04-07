import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsAuth(true);
    }
  }, [isAuth]);

  const value = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={{ value, isAuth }}>
      {children}
    </UserContext.Provider>
  );
};
