import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './index.css'

const root = document.getElementById("root");
if (!root) {
  document.body.innerHTML = "<h1>#root not found</h1>";
} else {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
