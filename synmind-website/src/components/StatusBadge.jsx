export default function StatusBadge({ label, color = "blue" }) {
  const colors = {
    blue:  { bg: "rgba(100,150,255,0.15)", border: "#7ca8ff", text: "#dbe6ff" },
    green: { bg: "rgba(96,229,193,0.15)", border: "#60e5c1", text: "#c7fff0" },
    orange:{ bg: "rgba(255,176,77,0.15)", border: "#ffb04d", text: "#ffe5c0" },
    red:   { bg: "rgba(255,120,120,0.15)", border: "#ff6a6a", text: "#ffd4d4" }
  };

  const c = colors[color] || colors.blue;

  return (
    <span
      style={{
        padding: "4px 10px",
        fontSize: 12,
        borderRadius: 999,
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        whiteSpace: "nowrap"
      }}
    >
      {label}
    </span>
  );
}
