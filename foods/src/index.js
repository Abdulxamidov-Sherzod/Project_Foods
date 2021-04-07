import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./components/main.css"


render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);