import React from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { ROUTER_PATH } from "../const/PATH";
import ProjectShowcase from "../pages/ProjectShowcase";
import OrderForm from "../pages/OrderForm";
import Admin from "../pages/Admin";
import ProfileCustomer from "../ProfileCustomer";
import Auth from "../Auth";
import Register from "../Register";
import ProjectCard from "../pages/ProjectCard";

export const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTER_PATH.HOME} element={<ProjectShowcase />} />
        <Route path={ROUTER_PATH.PROFILE} element={<ProfileCustomer />} />
        <Route path={ROUTER_PATH.ADMIN} element={<Admin />} />
        <Route path={ROUTER_PATH.ORDER + "/:id"} element={<OrderForm />} />
        <Route path={ROUTER_PATH.PROJECT + "/:id"} element={<ProjectCard />} />
      </Route>
      <Route path={ROUTER_PATH.AUTH} element={<Auth />} />
      <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
    </Routes>
  );
};
