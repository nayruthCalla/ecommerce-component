import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./componets/App";
import { CartProvider } from "./context/cartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
