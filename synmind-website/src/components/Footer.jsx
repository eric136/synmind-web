// src/components/Footer.jsx

import React, { useState } from "react";

export default function Footer() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <footer
      style={{
        padding: "24px 32px",
        borderTop: "1px solid #1c1c1c",
        marginTop: "48px",
        fontSize: "12px",
        color: "#888",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <span>© {new Date().getFullYear()} Synmind. All rights reserved.</span>

      <button
        onClick={handleClick}
        style={{
          padding: "6px 10px",
          borderRadius: "999px",
          border: "1px solid #f5c94a",
          background: "transparent",
          color: "#f5c94a",
          fontSize: "11px",
          cursor: "pointer"
        }}
      >
        Synmind heartbeat: {clicks}
      </button>
    </footer>
  );
}
