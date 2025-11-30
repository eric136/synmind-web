export default function Sidebar({ active = "chat", onSelect }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: "📊" },
    { key: "chat", label: "Chat", icon: "💬" },
    { key: "persona", label: "Persona", icon: "🧠" },
    { key: "settings", label: "Settings", icon: "⚙️" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-circle">S</div>
        <span>Synmind</span>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <div
            key={item.key}
            className={
              "sidebar-item " + (active === item.key ? "active" : "")
            }
            onClick={() => onSelect && onSelect(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
