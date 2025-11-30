import { useState, useEffect, useRef } from "react";

export default function Chat({ systemPrompt, modelKey }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function handleSend() {
    const text = input.trim();
    if (!text || thinking) return;

    const now = new Date().toLocaleTimeString();

    const userMsg = {
      id: Date.now(),
      role: "user",
      text,
      time: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    // Fake AI reply after a short delay
    setTimeout(() => {
      const reply = buildDemoReply(text);
      const aiMsg = {
        id: Date.now() + 1,
        role: "assistant",
        text: reply,
        time: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setThinking(false);
    }, 700);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function buildDemoReply(userText) {
    const shortPrompt = (systemPrompt || "")
      .split("\n")[0]
      .slice(0, 120);

    return (
      `Demo reply from Synmind (${modelKey || "local-demo"}):\n\n` +
      `You said: "${userText}".\n\n` +
      (shortPrompt
        ? `Persona hint: ${shortPrompt}…`
        : `No persona configured yet — this is just a local demo.`)
    );
  }

  const tokenEstimate = messages.reduce(
    (sum, m) => sum + m.text.split(/\s+/).length,
    0
  );

  return (
    <div className="chat-wrap">
      {/* Stats bar */}
      <div className="chat-stats">
        <span>Messages: {messages.length}</span>
        <span>Approx. tokens: {tokenEstimate}</span>
        <span>Mode: {modelKey || "local-demo"}</span>
      </div>

      {/* Status line */}
      <div className="chat-status-line">
        {thinking
          ? "Synmind is thinking (demo)…"
          : "Local demo: type below and Synmind will simulate a reply."}
      </div>

      {/* Chat feed */}
      <div className="chat-feed">
        {messages.map((m) => (
          <div
            key={m.id}
            className={
              "msg " +
              (m.role === "user" ? "msg-user" : "msg-assistant")
            }
          >
            <div className="avatar-badge">
              {m.role === "user" ? "👤" : "🤖"}
            </div>
            <div className="msg-body">
              <div style={{ fontSize: 14, whiteSpace: "pre-wrap" }}>
                {m.text}
              </div>
              <div className="meta">{m.time}</div>
            </div>
          </div>
        ))}

        {thinking && (
          <div className="msg msg-assistant">
            <div className="avatar-badge">🤖</div>
            <div className="msg-body">
              <div className="thinking">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="meta">Thinking…</div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-row">
        <textarea
          className="chat-input"
          rows={2}
          placeholder="Say something to Synmind (demo)…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn-small" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
