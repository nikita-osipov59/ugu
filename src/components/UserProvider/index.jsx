import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    login: "",
    password: "",
    isAuth: Boolean,
  });

  useEffect(() => {
    try{
      const userInfo = JSON.parse(localStorage.getItem("user"));
      setUser({ ...userInfo ,isAuth: true });
    } 
    catch(err) {
      setUser({ isAuth: false });
      console.log(err);
    }
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
