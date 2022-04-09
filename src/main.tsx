import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "virtual:windi.css";
import "virtual:windi-devtools";
import "virtual:svg-icons-register";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
