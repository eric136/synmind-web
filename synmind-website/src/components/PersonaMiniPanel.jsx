import { useEffect, useState } from "react";

const STORAGE_KEY = "synmind_ui_persona";

export default function PersonaMiniPanel() {
  const [name, setName] = useState("");
  const [traits, setTraits] = useState("");
  const [tone, setTone] = useState("");
  const [mode, setMode] = useState("");
  const [savedAt, setSavedAt] = useState("");
  const [collapsed, setCollapsed] = useState(false);

  // Load from localStorage when the panel mounts
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      setName(data.name || "");
      setTraits(data.traits || "");
      setTone(data.tone || "");
      setMode(data.mode || "");
      setSavedAt(data.savedAt || "");
      setCollapsed(!!data.collapsed);
    } catch {
      // ignore
    }
  }, []);

  const saveToStorage = (extra = {}) => {
    const data = {
      name,
      traits,
      tone,
      mode,
      savedAt,
      collapsed,
      ...extra,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  };

  const handleSave = () => {
    const data = saveToStorage({ savedAt: new Date().toLocaleString() });
    setSavedAt(data.savedAt);
    alert("Persona settings saved locally ✅");
  };

  const handleToggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    saveToStorage({ collapsed: next });
  };

  return (
    <aside style={panel}>
      {/* Header row: title + chevron, clickable */}
      <button
        onClick={handleToggle}
        style={headerBtn}
      >
        <span>Persona Settings</span>
        <span style={{ fontSize: 14, opacity: 0.8 }}>
          {collapsed ? "▼" : "▲"}
        </span>
      </button>

      {/* Hint always visible, but smaller if collapsed */}
      <p style={{ ...hint, marginBottom: collapsed ? 0 : 10 }}>
        Offline persona only — later it will drive Synmind’s real behavior.
      </p>

      {/* Collapsible content */}
      {!collapsed && (
        <div style={{ marginTop: 10 }}>
          <label style={label}>
            Name
            <input
              style={input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Synmind Elior"
            />
          </label>

          <label style={label}>
            Traits
            <input
              style={input}
              value={traits}
              onChange={(e) => setTraits(e.target.value)}
              placeholder="kind, clear, calm…"
            />
          </label>

          <label style={label}>
            Tone style
            <input
              style={input}
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              placeholder="warm and concise"
            />
          </label>

          <label style={label}>
            Thinking mode
            <input
              style={input}
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              placeholder="step-by-step, reflective…"
            />
          </label>

          <button
            className="btn-small"
            onClick={handleSave}
            style={{ marginTop: 10 }}
          >
            Save Persona
          </button>

          {savedAt && (
            <p style={{ ...hint, marginTop: 8 }}>
              Last saved: <span style={{ opacity: 0.9 }}>{savedAt}</span>
            </p>
          )}
        </div>
      )}
    </aside>
  );
}

const panel = {
  marginTop: 20,
  padding: 14,
  borderRadius: 12,
  background: "#101524",
  border: "1px solid #273050",
  textAlign: "left",
  color: "#d5ddff",
  fontSize: 14,
};

const headerBtn = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  border: "none",
  padding: 0,
  margin: 0,
  color: "#d5ddff",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
};

const hint = {
  fontSize: 12,
  opacity: 0.7,
  margin: "4px 0 10px",
};

const label = {
  display: "block",
  marginBottom: 8,
};

const input = {
  width: "100%",
  marginTop: 4,
  padding: "6px 8px",
  borderRadius: 8,
  border: "1px solid #273050",
  background: "#0b0f19",
  color: "#eaf1ff",
  fontSize: 13,
  outline: "none",
};
