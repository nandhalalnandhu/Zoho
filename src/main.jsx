import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
