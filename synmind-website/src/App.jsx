import "./App.css";
import { useEffect, useState, useRef } from "react";

import Chat from "./components/Chat.jsx";
import PersonaEditor from "./components/PersonaEditor.jsx";
import PersonaMiniPanel from "./components/PersonaMiniPanel.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatusBadge from "./components/StatusBadge.jsx";

import { loadPersona, buildSystemPrompt } from "./lib/persona.js";

/* -------------------------------------------------------
   CLICK SOUND (UI audio feedback)
------------------------------------------------------- */
const clickSound = new Audio(
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
);

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

export default function App() {
  const [systemPrompt, setSystemPrompt] = useState("Loading persona…");
  const [showEditor, setShowEditor] = useState(false);
  const [modelKey, setModelKey] = useState("local-demo");
  const [page, setPage] = useState("chat");
  const topRef = useRef(null);

  /* -------------------------------------------------------
     Load persona + build active system prompt
  ------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      try {
        const persona = await loadPersona();
        const sys = buildSystemPrompt(persona);
        setSystemPrompt(sys);
      } catch (e) {
        console.error("Persona load failed:", e);
        setSystemPrompt("Persona unavailable.");
      }
    })();
  }, []);

  /* -------------------------------------------------------
     Load saved model
  ------------------------------------------------------- */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("synmind_model_key");
      if (saved) setModelKey(saved);
    } catch {}
  }, []);

  /* -------------------------------------------------------
     Save model when changed
  ------------------------------------------------------- */
  useEffect(() => {
    try {
      localStorage.setItem("synmind_model_key", modelKey);
    } catch {}
  }, [modelKey]);

  /* -------------------------------------------------------
     Read Persona Summary
  ------------------------------------------------------- */
  function getPersonaSummary() {
    try {
      const raw = localStorage.getItem("synmind_ui_persona");
      if (!raw) return "Not set";
      const p = JSON.parse(raw);

      const pts = [];
      if (p.name) pts.push(`Name: ${p.name}`);
      if (p.traits) pts.push(`Traits: ${p.traits}`);
      if (p.tone) pts.push(`Tone: ${p.tone}`);
      if (p.mode) pts.push(`Thinking: ${p.mode}`);

      return pts.length ? pts.join(" • ") : "Not set";
    } catch {
      return "Not set";
    }
  }

  const personaSet = getPersonaSummary() !== "Not set";

  /* -------------------------------------------------------
     Model name helper
  ------------------------------------------------------- */
  function modelLabel(key) {
    switch (key) {
      case "local-demo":
        return "Local Demo";
      case "gpt-like":
        return "GPT-like (planned)";
      case "synmind-core":
        return "Synmind Core (future)";
      default:
        return key;
    }
  }

  /* -------------------------------------------------------
     MAIN UI
  ------------------------------------------------------- */
  return (
    <div className="app-layout">
      <Sidebar
        active={page}
        onSelect={(key) => {
          playClick();
          setPage(key);
        }}
      />

      <div className="app-container" ref={topRef}>
        {/* ---------------------------------------------------
           TOP NAV BAR
        --------------------------------------------------- */}
        <nav
          className="glass-panel"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            gap: 16,
          }}
        >
          {/* Left: branding */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ fontSize: 20, fontWeight: 600 }}>🜂 Synmind</div>
            <span style={{ fontSize: 11, opacity: 0.7 }}>
              Built by Daniel & Eric
            </span>
          </div>

          {/* Right: controls */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Status badges */}
            <StatusBadge
              label={personaSet ? "Persona: Set" : "Persona: Not Set"}
              color={personaSet ? "green" : "orange"}
            />

            <StatusBadge
              label={modelLabel(modelKey)}
              color="blue"
            />

            {/* Model selector */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 12, opacity: 0.8 }}>Model</span>
              <select
                value={modelKey}
                onChange={(e) => {
                  playClick();
                  setModelKey(e.target.value);
                }}
                style={{
                  background: "#0b0f19",
                  color: "#eaf1ff",
                  borderRadius: 999,
                  border: "1px solid #465a8c",
                  padding: "4px 10px",
                  fontSize: 12,
                }}
              >
                <option value="local-demo">Local Demo</option>
                <option value="gpt-like">GPT-like (planned)</option>
                <option value="synmind-core">Synmind Core (future)</option>
              </select>
            </div>

            {/* Buttons */}
            <button
              className="btn-small"
              onClick={() => {
                playClick();
                setShowEditor(true);
              }}
            >
              Edit Persona
            </button>

            <button
              className="btn-small"
              onClick={() => {
                playClick();
                navigator.clipboard.writeText(systemPrompt);
              }}
            >
              Copy
            </button>

            <button
              className="btn-small"
              onClick={() => {
                playClick();
                location.reload();
              }}
            >
              Reload
            </button>

            {/* Avatar Chip */}
            <div className="user-chip">
              <div className="user-avatar">
                <span>DC</span>
                <span className="user-status-dot" />
              </div>
              <div className="user-labels">
                <span className="user-name">Daniel Chin</span>
                <span className="user-role">Co-creator</span>
              </div>
            </div>
          </div>
        </nav>

        {/* ---------------------------------------------------
           MAIN PAGE CONTENT
        --------------------------------------------------- */}
        <section className="glass-panel">
          {page === "dashboard" && (
            <>
              <h1 className="title">Dashboard</h1>
              <p style={{ opacity: 0.8 }}>System overview coming soon.</p>
            </>
          )}

          {page === "chat" && (
            <>
              <h1 className="title">Chat</h1>

              <p style={{ opacity: 0.75, marginBottom: 8, fontSize: 14 }}>
                <b>Persona:</b> {getPersonaSummary()}
              </p>
              <p style={{ opacity: 0.7, marginBottom: 14, fontSize: 12 }}>
                <b>Model:</b> {modelLabel(modelKey)}
              </p>

              <pre
                style={{
                  background: "rgba(11,15,25,0.55)",
                  padding: "16px",
                  borderRadius: "12px",
                  marginBottom: "18px",
                  border: "1px solid rgba(80,100,150,0.4)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {systemPrompt}
              </pre>

              <Chat systemPrompt={systemPrompt} modelKey={modelKey} />

              <div style={{ marginTop: 20 }}>
                <PersonaMiniPanel />
              </div>
            </>
          )}

          {page === "persona" && (
            <>
              <h1 className="title">Persona</h1>
              <p style={{ opacity: 0.8 }}>Customize Synmind’s personality.</p>
              <button
                className="btn-small"
                onClick={() => {
                  playClick();
                  setShowEditor(true);
                }}
                style={{ marginTop: 12 }}
              >
                Open Persona Editor
              </button>
            </>
          )}

          {page === "settings" && (
            <>
              <h1 className="title">Settings</h1>
              <p style={{ opacity: 0.8 }}>More settings coming soon.</p>
            </>
          )}
        </section>

        {/* Persona Editor Modal */}
        {showEditor && (
          <PersonaEditor
            onClose={() => {
              playClick();
              setShowEditor(false);
            }}
            onApply={(newSys) => setSystemPrompt(newSys)}
          />
        )}

        {/* Back to top */}
        <button
          id="top-btn"
          className="btn-small"
          onClick={() => {
            playClick();
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ↑ Top
        </button>

        {/* Footer */}
        <footer
          className="glass-panel"
          style={{ marginTop: 24, textAlign: "center", padding: 12 }}
        >
          <span style={{ opacity: 0.65 }}>
            Synmind UI Prototype — v0.6 (Eric Edition)
          </span>
        </footer>
      </div>
    </div>
  );
}
