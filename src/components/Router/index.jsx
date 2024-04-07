import React from "react";
import { Routes, Route } from "react-router-dom";

import ProjectShowcase from "../pages/ProjectShowcase";
import ProfileCustomer from "../ProfileCustomer";
import Auth from "../Auth";
import Reg from "../Reg";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectShowcase />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<ProfileCustomer />} />
    </Routes>
  );
};
