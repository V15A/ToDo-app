import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import History from "./routes/history";
import Info from "./routes/info";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info" element={<Info />} />
      <Route path="/history" element={<History />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
