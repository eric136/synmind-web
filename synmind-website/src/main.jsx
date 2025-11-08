import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 临时禁用全局样式排查：如需测试，先注释下一行
// import "./index.css";

const el = document.getElementById("root");
if (!el) {
  document.body.innerHTML =
    "<pre style='padding:16px;font:16px/1.6 system-ui'>#root not found</pre>";
} else {
  createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
