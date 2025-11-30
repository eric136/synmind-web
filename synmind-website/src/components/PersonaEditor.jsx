import { useEffect, useState } from "react";
import { loadPersona, savePersona, buildSystemPrompt } from "../lib/persona.js";

export default function PersonaEditor({ onClose, onApply }) {
  const [text, setText] = useState("");

  // Load persona JSON when modal opens
  useEffect(() => {
    (async () => {
      const p = await loadPersona();
      setText(JSON.stringify(p, null, 2));
    })();
  }, []);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(text);
      savePersona(parsed);
      onApply(buildSystemPrompt(parsed));
      onClose();
    } catch {
      alert("Invalid JSON format. Please fix and try again.");
    }
  };

  return (
    <div style={S.overlay} className="overlay-enter">
      <div style={S.modal} className="modal-enter">
        <h2 style={{ marginTop: 0 }}>Edit Persona</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={S.textarea}
        />

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button style={S.btn} onClick={onClose}>Cancel</button>
          <button style={S.btn} onClick={handleSave}>Save & Apply</button>
        </div>
      </div>
    </div>
  );
}

const S = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.65)",
    display: "grid",
    placeItems: "center",
    zIndex: 10
  },
  modal: {
    background: "#0f1424",
    color: "#eaf1ff",
    padding: 20,
    borderRadius: 12,
    width: "min(900px, 90vw)",
    boxShadow: "0 10px 30px rgba(0,0,0,.4)"
  },
  textarea: {
    width: "100%",
    height: "50vh",
    background: "#0b0f19",
    color: "#dfe7ff",
    border: "1px solid #273050",
    borderRadius: 8,
    padding: 10,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    marginBottom: 12
  },
  btn: {
    padding: "8px 16px",
    background: "#1a2540",
    color: "#eaf1ff",
    border: 0,
    borderRadius: 8,
    cursor: "pointer"
  }
};
