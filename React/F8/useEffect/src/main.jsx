import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment ${id}`,
      })
    );
  }, 2000);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
