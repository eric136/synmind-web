function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b1020",
        color: "#eaf0ff",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "44px", fontWeight: 800 }}>Synmind</h1>
        <p style={{ marginTop: 10, color: "#b8c7ec" }}>Technology with warmth.</p>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollToId("about")}
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              fontWeight: 700,
              cursor: "pointer",
              background: "linear-gradient(180deg,#7c9eff,#6288ff)",
              color: "#fff",
              boxShadow: "0 10px 24px rgba(100,140,255,.28)",
              transition: "transform .15s ease",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToId("about")}
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,.18)",
              background: "rgba(255,255,255,.06)",
              color: "#eaf0ff",
              fontWeight: 700,
              cursor: "pointer",
              transition: "background .2s ease, transform .15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.10)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
