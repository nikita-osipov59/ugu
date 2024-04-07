import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/UserProvider";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
