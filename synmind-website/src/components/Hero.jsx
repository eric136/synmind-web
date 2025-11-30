// src/components/Hero.jsx

import React from "react";

export default function Hero({ title, body, lang }) {
  const isEnglish = lang === "en";

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="vision"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "96px 32px",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* background glow */}
      <div
        style={{
          position: "absolute",
          inset: "-40%",
          background:
            "radial-gradient(circle at 20% 0%, rgba(245,201,74,0.15), transparent 55%), radial-gradient(circle at 80% 0%, rgba(124,158,255,0.18), transparent 55%)",
          opacity: 0.9,
          pointerEvents: "none"
        }}
      />

      {/* content */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "16px",
            color: "#f5c94a"
          }}
        >
          {isEnglish ? "AI WITH COMPASSION" : "让 AI 有慈悲心"}
        </div>

        <h1
          style={{
            fontSize: isEnglish ? "40px" : "36px",
            lineHeight: 1.15,
            margin: "0 0 20px 0"
          }}
        >
          {title}
        </h1>

        <p
          style={{
            margin: "0 auto 28px auto",
            maxWidth: "640px",
            color: "#c6c6c6",
            fontSize: "15px",
            lineHeight: 1.7
          }}
        >
          {body}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px"
          }}
        >
          <button
            onClick={() => scrollToId("features")}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid #f5c94a",
              background:
                "linear-gradient(135deg, #f5c94a, #f7e08a)",
              color: "#000",
              fontSize: "14px",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            {isEnglish ? "Get started with Synmind" : "开始与 Synmind 同行"}
          </button>

          <button
            onClick={() => scrollToId("philosophy")}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid #333",
              background: "rgba(0,0,0,0.7)",
              color: "#f5f5f5",
              fontSize: "13px",
              cursor: "pointer"
            }}
          >
            {isEnglish ? "Why we built this" : "为什么要创造它"}
          </button>
        </div>
      </div>
    </section>
  );
}
