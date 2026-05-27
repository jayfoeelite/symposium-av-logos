import { useState } from "react";

const concepts = [
  {
    id: 1,
    name: "Signal Stack",
    tagline: "Geometric waveform mark + full wordmark",
    description: "Three rising horizontal bars — referencing audio levels, signal strength, and ascending conference tiers. Clean and instantly readable at any size.",
    bg: "#0A0C10",
    accent: "#00C2FF",
    textPrimary: "#FFFFFF",
    textSecondary: "#8A9BB0",
    render: ({ accent, textPrimary, textSecondary }) => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, marginBottom: 4 }}>
          {[18, 28, 38].map((h, i) => (
            <div key={i} style={{
              width: 10,
              height: h,
              background: i === 2 ? accent : `${accent}${i === 1 ? "BB" : "66"}`,
              borderRadius: 2,
            }} />
          ))}
          <div style={{
            width: 2,
            height: 38,
            background: `${accent}44`,
            transform: "rotate(20deg)",
            marginLeft: 4,
          }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: textPrimary,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
          }}>SYMPOSIUM</div>
          <div style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.38em",
            color: accent,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
          }}>AUDIOVISUAL</div>
        </div>
        <div style={{
          marginTop: 8,
          padding: "3px 10px",
          border: `1px solid ${accent}44`,
          borderRadius: 2,
          fontSize: 10,
          letterSpacing: "0.2em",
          color: textSecondary,
          fontFamily: "monospace",
        }}>SYMPOAV.COM</div>
      </div>
    ),
    submark: ({ accent, textPrimary }) => (
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
        {[14, 20, 28].map((h, i) => (
          <div key={i} style={{
            width: 8,
            height: h,
            background: i === 2 ? accent : `${accent}${i === 1 ? "BB" : "55"}`,
            borderRadius: 2,
          }} />
        ))}
        <div style={{
          fontSize: 18,
          fontWeight: 800,
          color: textPrimary,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          letterSpacing: "0.05em",
          marginLeft: 8,
        }}>SAV</div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Forum Arc",
    tagline: "Semicircle seating mark + split wordmark",
    description: "Abstract amphitheater or symposium forum layout — a semicircle of dots representing seated attendees around a focal point. Ties directly to the word 'symposium'.",
    bg: "#F8F7F5",
    accent: "#0047CC",
    textPrimary: "#0A0C10",
    textSecondary: "#6B7280",
    render: ({ accent, textPrimary, textSecondary }) => (
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="52" height="52" viewBox="0 0 52 52">
          {Array.from({ length: 9 }).map((_, i) => {
            const angle = (180 / 8) * i * (Math.PI / 180);
            const r = 22;
            const cx = 26 + r * Math.cos(Math.PI - angle);
            const cy = 30 - r * Math.sin(angle) + 2;
            const size = i === 4 ? 4 : 3;
            return <circle key={i} cx={cx} cy={cy} r={size} fill={i === 4 ? accent : `${accent}99`} />;
          })}
          <line x1="4" y1="38" x2="48" y2="38" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <circle cx="26" cy="42" r="3" fill={accent} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: "0.18em",
            color: textPrimary,
            fontFamily: "Georgia, 'Times New Roman', serif",
            textTransform: "uppercase",
          }}>SYMPOSIUM</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 1, background: `${accent}44` }} />
            <div style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.3em",
              color: accent,
              fontFamily: "'Helvetica Neue', sans-serif",
              textTransform: "uppercase",
            }}>AUDIOVISUAL</div>
            <div style={{ flex: 1, height: 1, background: `${accent}44` }} />
          </div>
        </div>
      </div>
    ),
    submark: ({ accent }) => (
      <svg width="44" height="44" viewBox="0 0 44 44">
        {Array.from({ length: 7 }).map((_, i) => {
          const angle = (180 / 6) * i * (Math.PI / 180);
          const r = 16;
          const cx = 22 + r * Math.cos(Math.PI - angle);
          const cy = 26 - r * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r={i === 3 ? 3.5 : 2.5} fill={i === 3 ? accent : `${accent}88`} />;
        })}
        <line x1="4" y1="32" x2="40" y2="32" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="36" r="2.5" fill={accent} />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Signal Node",
    tagline: "Network node mark + monospaced wordmark",
    description: "A central node with radiating connection points — representing AV distribution, signal routing, and conference network infrastructure. Very tech-forward.",
    bg: "#050810",
    accent: "#00E5C0",
    textPrimary: "#E8EDF5",
    textSecondary: "#4A6080",
    render: ({ accent, textPrimary, textSecondary }) => (
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <svg width="56" height="56" viewBox="0 0 56 56">
          {[
            [28, 28, 28, 6], [28, 28, 50, 28], [28, 28, 28, 50],
            [28, 28, 6, 28], [28, 28, 44, 12], [28, 28, 12, 44],
          ].map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`${accent}33`} strokeWidth="1" />
          ))}
          {[[28, 6], [50, 28], [28, 50], [6, 28], [44, 12], [12, 44]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={`${accent}66`} />
          ))}
          <circle cx="28" cy="28" r="7" fill="none" stroke={accent} strokeWidth="1.5" />
          <circle cx="28" cy="28" r="3" fill={accent} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: accent, fontFamily: "monospace", textTransform: "uppercase" }}>SYMPO</span>
            <span style={{ fontSize: 13, fontWeight: 400, letterSpacing: "0.14em", color: textPrimary, fontFamily: "monospace", textTransform: "uppercase" }}>SIUM</span>
          </div>
          <div style={{ fontSize: 8, fontWeight: 400, letterSpacing: "0.5em", color: textSecondary, fontFamily: "monospace", textTransform: "uppercase" }}>AUDIOVISUAL</div>
        </div>
      </div>
    ),
    submark: ({ accent }) => (
      <svg width="42" height="42" viewBox="0 0 42 42">
        {[[21, 4], [38, 21], [21, 38], [4, 21]].map(([cx, cy], i) => (
          <g key={i}>
            <line x1="21" y1="21" x2={cx} y2={cy} stroke={`${accent}33`} strokeWidth="1" />
            <circle cx={cx} cy={cy} r="2.5" fill={`${accent}55`} />
          </g>
        ))}
        <circle cx="21" cy="21" r="6" fill="none" stroke={accent} strokeWidth="1.5" />
        <circle cx="21" cy="21" r="2.5" fill={accent} />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Monolith",
    tagline: "Ultra-minimal wordmark, no icon",
    description: "Pure typographic confidence. No icon needed — the name carries the weight. A single horizontal rule divides the two words, creating a premium editorial feel.",
    bg: "#FFFFFF",
    accent: "#111318",
    textPrimary: "#111318",
    textSecondary: "#9CA3AF",
    render: ({ accent, textPrimary, textSecondary }) => (
      <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "flex-start" }}>
        <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", color: textPrimary, fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1 }}>
          SYMPOSIUM
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "6px 0" }}>
          <div style={{ width: 32, height: 1.5, background: "#0047CC" }} />
          <div style={{ width: 6, height: 6, background: "#0047CC", borderRadius: "50%" }} />
          <div style={{ flex: 1, height: 1.5, background: "#0047CC33" }} />
        </div>
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.42em", color: "#0047CC", fontFamily: "'Helvetica Neue', sans-serif", textTransform: "uppercase" }}>
          AUDIOVISUAL
        </div>
      </div>
    ),
    submark: ({ accent, textPrimary }) => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: textPrimary, fontFamily: "Georgia, serif", lineHeight: 1 }}>SAV</div>
        <div style={{ width: "100%", height: 2, background: "#0047CC" }} />
      </div>
    ),
  },
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const concept = concepts[selected];
  const isDark = concept.bg.startsWith("#0") || concept.bg.startsWith("#05");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0F14",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: "#E8EDF5",
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto 40px" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#4A6080", textTransform: "uppercase", marginBottom: 8 }}>
          LOGO CONCEPT EXPLORER
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: "#E8EDF5" }}>
          Symposium Audiovisual
        </div>
        <div style={{ fontSize: 13, color: "#4A6080", marginTop: 4 }}>
          4 directions — tap a concept to preview
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {concepts.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setSelected(i)}
              style={{
                padding: "8px 16px",
                background: selected === i ? "#00C2FF" : "#1A1D24",
                color: selected === i ? "#000" : "#8A9BB0",
                border: "none",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {i + 1}. {c.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{
          background: concept.bg,
          borderRadius: 8,
          padding: "56px 48px",
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          transition: "background 0.3s",
          border: "1px solid #1A1D24",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", top: 14, right: 18,
            fontSize: 9, letterSpacing: "0.3em",
            color: concept.textSecondary, textTransform: "uppercase", opacity: 0.6,
          }}>PRIMARY MARK</div>
          {concept.render({ accent: concept.accent, textPrimary: concept.textPrimary, textSecondary: concept.textSecondary })}
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{
            flex: 1, minWidth: 200,
            background: concept.bg,
            borderRadius: 8, padding: "32px 36px",
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", justifyContent: "center",
            border: "1px solid #1A1D24", position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 12, right: 14,
              fontSize: 9, letterSpacing: "0.3em",
              color: concept.textSecondary, textTransform: "uppercase", opacity: 0.6,
            }}>SUB-MARK</div>
            {concept.submark({ accent: concept.accent, textPrimary: concept.textPrimary })}
          </div>

          <div style={{
            flex: 1, minWidth: 200,
            background: isDark ? "#F8F7F5" : "#0A0C10",
            borderRadius: 8, padding: "32px 36px",
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", justifyContent: "center",
            border: "1px solid #1A1D24", position: "relative",
          }}>
            <div style={{
              position: "absolute", top: 12, right: 14,
              fontSize: 9, letterSpacing: "0.3em",
              color: isDark ? "#9CA3AF" : "#4A6080",
              textTransform: "uppercase", opacity: 0.6,
            }}>REVERSED</div>
            {concept.render({
              accent: concept.accent,
              textPrimary: isDark ? "#111318" : "#F8F7F5",
              textSecondary: isDark ? "#6B7280" : "#4A6080",
            })}
          </div>
        </div>

        <div style={{
          background: "#12151B",
          borderRadius: 8, padding: "28px 32px",
          border: "1px solid #1A1D24",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#E8EDF5", letterSpacing: "-0.01em" }}>
              Concept {concept.id}: {concept.name}
            </div>
            <div style={{ fontSize: 12, color: "#4A6080", fontStyle: "italic" }}>
              {concept.tagline}
            </div>
          </div>
          <div style={{ fontSize: 14, color: "#8A9BB0", lineHeight: 1.6 }}>
            {concept.description}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
            {[concept.bg, concept.accent, concept.textPrimary, concept.textSecondary].map((color, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: color, border: "1px solid #2A2D34" }} />
                <span style={{ fontSize: 10, color: "#4A6080", fontFamily: "monospace", letterSpacing: "0.05em" }}>{color}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1A1D24",
          paddingTop: 20,
          fontSize: 11,
          color: "#2A3A4A",
          letterSpacing: "0.1em",
          textAlign: "center",
        }}>
          SYMPOSIUM AUDIOVISUAL · SYMPOAV.COM · LOGO EXPLORATION v1
        </div>
      </div>
    </div>
  );
}
