import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import themeContext from "./Theme";
// import Context from "./FunctioncontextApp";
import { ThemeContextProvide } from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeContextProvide>
    <App />
  </ThemeContextProvide>
);
