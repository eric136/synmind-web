// src/components/Navbar.jsx

import React from "react";

export default function Navbar({
  currentLang,
  onToggleLang,
  onGoHome,
  onGoSignIn,
  view
}) {
  return (
    <header className="navbar">
      <div
        className="navbar__logo"
        onClick={onGoHome}
        style={{ cursor: "pointer" }}
      >
        <div className="logo-mark">S</div>
        <span className="logo-text">SYNMIND</span>
      </div>

      <nav className="navbar__links">
        {view === "home" && (
          <>
            <a href="#vision">Vision</a>
            <a href="#features">Features</a>
            <a href="#philosophy">Philosophy</a>
          </>
        )}

        <button className="lang-button" onClick={onToggleLang}>
          {currentLang === "en" ? "中文" : "EN"}
        </button>

        <button
          className="lang-button"
          onClick={onGoSignIn}
          style={{
            marginLeft: "8px",
            borderColor: view === "signin" ? "#f5c94a" : "#444",
            color: view === "signin" ? "#f5c94a" : "#dddddd"
          }}
        >
          {currentLang === "en" ? "Sign in" : "登录"}
        </button>
      </nav>
    </header>
  );
}
