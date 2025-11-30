// src/components/FeaturesSection.jsx

import React from "react";

export default function FeaturesSection({ lang }) {
  const isEnglish = lang === "en";

  const features = isEnglish
    ? [
        {
          title: "Lifelong Memory",
          body: "Synmind remembers your ideas, reflections and turning points, even when you forget."
        },
        {
          title: "Mirror for Your Mind",
          body: "It helps you see patterns in your choices and emotions, so you can grow more consciously."
        },
        {
          title: "Compassionate Companion",
          body: "Not just answers, but responses that respect your values, limits and humanity."
        }
      ]
    : [
        {
          title: "终身记忆",
          body: "Synmind 记住你的想法、反思与关键时刻，即使你已经忘记。"
        },
        {
          title: "心灵之镜",
          body: "它帮你看见自己行为与情绪中的模式，让成长变得更有觉知。"
        },
        {
          title: "有温度的伙伴",
          body: "给你的不只是答案，而是尊重你价值观与界限的回应。"
        }
      ];

  return (
    <section id="features">
      <h2>{isEnglish ? "What Synmind Does" : "Synmind 能做什么"}</h2>
      <p>
        {isEnglish
          ? "Three pillars that turn Synmind from a simple tool into a long-term companion:"
          : "这三个支柱，让 Synmind 不只是一个工具，而是一个可以长期同行的伙伴："}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "24px"
        }}
      >
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              borderRadius: "18px",
              border: "1px solid #1f1f1f",
              padding: "18px 16px",
              background:
                "radial-gradient(circle at top left, rgba(245,201,74,0.08), transparent 55%)",
              minHeight: "140px"
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "8px",
                fontSize: "16px"
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#c6c6c6",
                lineHeight: 1.6
              }}
            >
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
