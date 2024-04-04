import React from "react";
import { Routes, Route } from "react-router-dom";

import ProjectShowcase from "../pages/ProjectShowcase";
import ProfileCustomer from "../ProfileCustomer";
import Auth from "../Auth";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectShowcase />} />
      <Route path="/profile" element={<ProfileCustomer />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
