import React from "react";
import { Routes, Route } from "react-router-dom";

import ProjectShowcase from "../pages/ProjectShowcase";
import Auth from "../Auth";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectShowcase />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
