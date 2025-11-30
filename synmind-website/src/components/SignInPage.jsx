// src/components/SignInPage.jsx

import React from "react";

export default function SignInPage({ lang }) {
  const isEnglish = lang === "en";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      isEnglish
        ? "This is a demo sign-in page. No real account yet 🙂"
        : "这是一个演示登录页面，目前还没有真实账号哦 🙂"
    );
  };

  return (
    <section
      id="signin"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 16px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "20px",
          border: "1px solid #1f1f1f",
          padding: "24px 22px 26px 22px",
          background:
            "radial-gradient(circle at top, rgba(245,201,74,0.1), rgba(0,0,0,0.95))",
          boxShadow: "0 18px 40px rgba(0,0,0,0.6)"
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "6px" }}>
          {isEnglish ? "Sign in to Synmind" : "登录 Synmind"}
        </h2>
        <p
          style={{
            marginTop: 0,
            marginBottom: "18px",
            fontSize: "13px",
            color: "#c6c6c6"
          }}
        >
          {isEnglish
            ? "Future: real accounts. For now, this form is just a demo."
            : "未来这里会接入真实账号系统，目前只是一个演示表单。"}
        </p>

        <form onSubmit={handleSubmit}>
          <label
            style={{ display: "block", fontSize: "12px", marginBottom: "6px" }}
          >
            {isEnglish ? "Email" : "邮箱"}
          </label>
          <input
            type="email"
            required
            placeholder={isEnglish ? "you@example.com" : "你@example.com"}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "rgba(0,0,0,0.7)",
              color: "#f5f5f5",
              fontSize: "13px",
              marginBottom: "12px"
            }}
          />

          <label
            style={{ display: "block", fontSize: "12px", marginBottom: "6px" }}
          >
            {isEnglish ? "Password" : "密码"}
          </label>
          <input
            type="password"
            required
            placeholder={isEnglish ? "••••••••" : "••••••••"}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "rgba(0,0,0,0.7)",
              color: "#f5f5f5",
              fontSize: "13px",
              marginBottom: "16px"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "9px 12px",
              borderRadius: "999px",
              border: "1px solid #f5c94a",
              background: "linear-gradient(135deg, #f5c94a, #f7e08a)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            {isEnglish ? "Sign in" : "登 录"}
          </button>

          <p
            style={{
              fontSize: "11px",
              color: "#888",
              margin: 0,
              textAlign: "center"
            }}
          >
            {isEnglish
              ? "Demo only — no data is stored."
              : "仅为演示用途 —— 不会保存任何数据。"}
          </p>
        </form>
      </div>
    </section>
  );
}
