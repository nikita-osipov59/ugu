import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: Boolean,
  });
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")), { ...user });
      setAuth({ isAuth: true });
    } else setAuth({ isAuth: false });
  }, [setUser]);

  return (
    <UserContext.Provider value={{ user, auth }}>
      {children}
    </UserContext.Provider>
  );
};
