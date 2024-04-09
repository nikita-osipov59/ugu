import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../UserProvider";
import { ROUTER_PATH } from "../../const/PATH";

export const PrivateRoute = () => {
  const { auth } = useContext(UserContext);

  return auth.isAuth ? <Outlet /> : <Navigate to={ROUTER_PATH.AUTH} />;
};
