export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "72px 20px",
        background: "#0a0f1c",
        color: "#eaf0ff",
        display: "grid",
        placeItems: "center",
        scrollMarginTop: 80,  // <-- important for sticky nav
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800 }}>What is Synmind?</h2>
        <p style={{ marginTop: 14, color: "#b8c7ec", fontSize: 18, lineHeight: 1.7 }}>
          Synmind is “AI with soul.” It doesn't replace you — it empowers you.
          Private, personal, and built to support real life.
        </p>

        <ul style={{ marginTop: 18, color: "#96a7d1", fontSize: 16, lineHeight: 1.9 }}>
          <li>Private by design — local first</li>
          <li>Edge + Cloud hybrid intelligence</li>
          <li>Helps you take action in real life</li>
        </ul>
      </div>
    </section>
  );
}
