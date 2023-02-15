import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { LoginContextProvider } from "./contexts/LoginModeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
