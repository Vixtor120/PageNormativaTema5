export const TOPIC_COLORS = {
  "ISO 27001": "#6366f1", 
  "SGSI": "#7c3aed", 
  "SoA": "#9333ea",
  "Análisis de riesgos": "#2563eb", 
  "ENS": "#0891b2", 
  "ENS vs ISO 27001": "#0d9488",
  "ENS vs LOPD": "#059669", 
  "Roles ENS": "#16a34a", 
  "NIS I": "#ca8a04",
  "NIS II": "#ea580c", 
  "LPIC": "#dc2626", 
  "LPIC vs NIS": "#db2777",
  "DORA": "#e11d48", 
  "DORA vs GDPR": "#9f1239", 
  "Regulaciones nacionales": "#4338ca",
};

export const TOPIC_GROUPS = {
  "ISO 27001": ["ISO 27001", "SGSI", "SoA"],
  "ENS": ["ENS", "ENS vs ISO 27001", "ENS vs LOPD", "Roles ENS"],
  "NIS": ["NIS I", "NIS II"],
  "LPIC": ["LPIC", "LPIC vs NIS"],
  "DORA": ["DORA", "DORA vs GDPR"],
  "Análisis de riesgos": ["Análisis de riesgos"],
  "Regulaciones": ["Regulaciones nacionales"]
};

export const TOPIC_ICONS = {
  "ISO 27001": "🔐",
  "ENS": "🏛️",
  "NIS": "🌐",
  "LPIC": "⚡",
  "DORA": "🏦",
  "Análisis de riesgos": "📊",
  "Regulaciones": "📜"
};

export function shuffle(arr) { 
  return [...arr].sort(() => Math.random() - 0.5); 
}
