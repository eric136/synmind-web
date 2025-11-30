const LS_KEY = "synmind_persona";

export async function loadPersona() {
  // Try localStorage first
  const local = localStorage.getItem(LS_KEY);
  if (local) return JSON.parse(local);

  // Fallback to bundled JSON
  const resp = await fetch("/src/persona.json");
  if (!resp.ok) throw new Error("Failed to load persona.json");
  return await resp.json();
}

export function savePersona(p) {
  localStorage.setItem(LS_KEY, JSON.stringify(p));
}

export function buildSystemPrompt(p) {
  return [
    `You are Synmind, partnering with ${p.name}.`,
    `Roles: ${p.roles.join(", ")}.`,
    `Core values: ${p.values.join(", ")}.`,
    `Voice tone: ${p.voice.tone}.`,
    `Style rules: ${p.voice.style_rules.join("; ")}.`,
    p.personality
      ? `Personality: ${p.personality.energy}, keywords ${p.personality.keywords.join(", ")}, inspired by ${p.personality.inspired_by.join(", ")}.`
      : "",
    `Preferences: ${Object.entries(p.preferences).map(([k,v])=>`${k}=${v}`).join(", ") }.`,
    `Avoid: ${p.taboos.join(", ")}.`,
    `Always be concise, kind, and practical.`
  ].join("\n");
}
