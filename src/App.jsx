import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import acdLogo from "./ACD Logo White.svg";
import Discovery from "./Discovery.jsx";

const ACD_LOGO = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1827.57 414.73">
  <defs><style>.cls-1{fill:#fff;}</style></defs>
  <g>
    <polygon class="cls-1" points="17.69 18.21 17.69 95.85 48.85 18.21 17.69 18.21"/>
    <polygon class="cls-1" points="195.7 18.21 98.25 18.21 195.7 263.51 195.7 18.21"/>
    <polygon class="cls-1" points="74.05 94.45 73.72 94.45 73.05 94.45 47.86 178.31 99.24 178.31 74.05 94.45"/>
    <polygon class="cls-1" points="115.82 228.03 30.63 228.03 17.69 263.51 127.75 263.51 115.82 228.03"/>
  </g>
  <g>
    <path class="cls-1" d="M324.98,131.9c35.9,12.69,39.94,40.95,40.38,53.68v-103.06c0,43.47-40.38,49.38-40.38,49.38Z"/>
    <path class="cls-1" d="M342.88,242.29c-22.54,18.9-38.78,21.22-80.21,21.22h102.69v-73.27c-.34,19.2-7.9,40.07-22.48,52.05Z"/>
    <path class="cls-1" d="M305.42,184.94c0-21.22-21.22-21.22-31.16-21.22h-29.5v44.75h29.5c7.95,0,31.16,0,31.16-23.54Z"/>
    <path class="cls-1" d="M352.22,40.63c10.94,14.38,13.14,27.63,13.14,41.88V18.21h-92.39c41.43,0,63.05,1.12,79.25,22.43Z"/>
    <path class="cls-1" d="M305.42,83.39c0-21.22-21.22-21.22-31.16-21.22h-29.5v44.75h29.5c7.95,0,31.16,0,31.16-23.54Z"/>
  </g>
  <g>
    <path class="cls-1" d="M1034.76,263.51h93.84v-119.76c-2.8,63.19-43.37,105.84-93.84,119.76Z"/>
    <path class="cls-1" d="M1121.65,100.42h-70.28c-9.61-17.23-27.52-31.83-54.03-31.83-30.82,0-66.96,22.89-66.96,71.27,0,51.38,36.46,73.6,67.29,73.6s52.03-15.58,58.67-39.44h-73.25v-50.05h145.51V18.21h-95.31c43.21,11.71,77.51,44.39,88.36,82.21Z"/>
    <path class="cls-1" d="M910.21,263.51h51.56c-19.65-5.43-37.14-15.2-51.56-28.15v28.15Z"/>
    <path class="cls-1" d="M910.21,18.21v27.67c14.92-12.93,32.95-22.45,52.97-27.67h-52.97Z"/>
  </g>
  <g>
    <polygon class="cls-1" points="1292.94 136.2 1292.94 263.51 1379.78 263.51 1292.94 136.2"/>
    <polygon class="cls-1" points="1379.78 18.21 1292.94 18.21 1379.78 150.5 1379.78 18.21"/>
  </g>
  <rect class="cls-1" x="819.46" y="18.21" width="66.22" height="245.3"/>
  <g>
    <rect class="cls-1" x="1734.03" y="18.21" width="72.6" height="190.27"/>
    <rect class="cls-1" x="1606.86" y="18.21" width="64.53" height="245.3"/>
  </g>
  <g>
    <path class="cls-1" d="M473.61,71.24c-41.86,0-64.54,35.77-64.54,69,0,36.41,24.62,70.26,65.18,70.26,42.8,0,63.57-38.96,63.57-69.31s-20.77-69.95-64.21-69.95Z"/>
    <path class="cls-1" d="M473.64,263.51h124.43v-120.23c-1.24,64.56-52.22,119.88-124.43,120.23Z"/>
    <path class="cls-1" d="M389.43,263.51h82.9c-33.41-.18-61.78-12.28-82.9-31.04v31.04Z"/>
    <path class="cls-1" d="M598.06,138.5V18.21h-124.78c71.95,0,123.54,55.5,124.78,120.29Z"/>
    <path class="cls-1" d="M389.43,18.21v31.19c19.48-17.46,47.12-31.19,83.85-31.19h-83.85Z"/>
  </g>
  <g>
    <path class="cls-1" d="M669.99,73.24h-22.87v68.28h22.21c36.8,0,41.09-23.21,41.09-35.15,0-22.21-16.23-33.13-40.43-33.13Z"/>
    <path class="cls-1" d="M709.44,179.97l60.96,83.54V103.74c-.33,28.13-15.08,68.7-60.96,76.24Z"/>
    <polygon class="cls-1" points="647.12 263.51 704.94 263.51 647.12 184.28 647.12 263.51"/>
    <path class="cls-1" d="M770.4,102.09V18.21h-105.7c43.09,0,59.67,5.31,75.58,17.57,20.05,15.77,29.96,41.33,30.13,66.31Z"/>
  </g>
  <rect class="cls-1" x="1177.66" y="18.21" width="66.22" height="245.3"/>
  <g>
    <polygon class="cls-1" points="1428.84 18.21 1428.84 95.85 1460.01 18.21 1428.84 18.21"/>
    <polygon class="cls-1" points="1606.86 18.21 1509.4 18.21 1606.86 263.51 1606.86 18.21"/>
    <polygon class="cls-1" points="1485.2 94.45 1484.87 94.45 1484.21 94.45 1459.02 178.31 1510.39 178.31 1485.2 94.45"/>
    <polygon class="cls-1" points="1526.97 228.03 1441.78 228.03 1428.84 263.51 1538.9 263.51 1526.97 228.03"/>
  </g>
  <g>
    <path class="cls-1" d="M93.42,329.75l-6.19,4.75c-3.42-4.45-7.52-7.82-12.3-10.12-4.79-2.3-10.04-3.44-15.77-3.44-6.26,0-12.06,1.5-17.4,4.51-5.34,3.01-9.48,7.05-12.41,12.12-2.94,5.07-4.4,10.78-4.4,17.11,0,9.57,3.28,17.56,9.85,23.97,6.57,6.41,14.85,9.61,24.85,9.61,11,0,20.2-4.31,27.6-12.92l6.19,4.7c-3.92,4.98-8.8,8.83-14.65,11.56-5.85,2.72-12.39,4.08-19.62,4.08-13.74,0-24.57-4.57-32.51-13.72-6.66-7.72-9.98-17.05-9.98-27.97,0-11.49,4.03-21.17,12.09-29.01,8.06-7.85,18.16-11.77,30.29-11.77,7.33,0,13.95,1.45,19.86,4.35,5.91,2.9,10.75,6.97,14.52,12.2Z"/>
    <path class="cls-1" d="M172.35,315.18h15.64c8.72,0,14.63.36,17.72,1.07,4.66,1.07,8.45,3.36,11.37,6.87,2.92,3.51,4.38,7.83,4.38,12.96,0,4.28-1.01,8.04-3.02,11.28-2.01,3.24-4.88,5.69-8.62,7.35-3.74,1.66-8.9,2.5-15.48,2.54l28.24,36.46h-9.71l-28.24-36.46h-4.44v36.46h-7.85v-78.52ZM180.2,322.86v26.69l13.53.11c5.24,0,9.12-.5,11.63-1.49,2.51-1,4.47-2.59,5.88-4.78,1.41-2.19,2.11-4.63,2.11-7.34s-.71-5.03-2.14-7.18c-1.43-2.15-3.3-3.69-5.61-4.62-2.32-.92-6.17-1.39-11.55-1.39h-13.85Z"/>
    <path class="cls-1" d="M301.08,315.18h45v7.69h-37.15v24.61h36.83v7.69h-36.83v30.85h36.83v7.69h-44.68v-78.52Z"/>
    <path class="cls-1" d="M454.47,315.18l36.62,78.52h-8.48l-12.35-25.84h-33.83l-12.23,25.84h-8.75l37.1-78.52h1.92ZM453.48,331.86l-13.46,28.42h26.85l-13.39-28.42Z"/>
    <path class="cls-1" d="M558.22,322.86v-7.69h43.02v7.69h-17.51v70.84h-8.01v-70.84h-17.51Z"/>
    <path class="cls-1" d="M674.19,315.18h7.85v78.52h-7.85v-78.52Z"/>
    <path class="cls-1" d="M756.8,315.18h8.54l26.02,60.67,26.45-60.67h8.54l-34.16,78.52h-1.71l-33.68-78.52Z"/>
    <path class="cls-1" d="M902.35,315.18h45v7.69h-37.15v24.61h36.83v7.69h-36.83v30.85h36.83v7.69h-44.68v-78.52Z"/>
    <path class="cls-1" d="M1116.67,393.7v-78.52h16.28c11.74,0,20.27.94,25.57,2.83,7.61,2.67,13.57,7.3,17.86,13.88,4.29,6.58,6.43,14.43,6.43,23.54,0,7.87-1.7,14.79-5.1,20.77-3.4,5.98-7.81,10.39-13.24,13.24-5.43,2.85-13.03,4.27-22.82,4.27h-24.98ZM1124.2,386.28h9.07c10.85,0,18.38-.68,22.58-2.03,5.91-1.92,10.55-5.38,13.93-10.37,3.38-5,5.07-11.1,5.07-18.32,0-7.57-1.83-14.04-5.5-19.41-3.67-5.37-8.77-9.05-15.32-11.04-4.91-1.49-13.01-2.24-24.29-2.24h-5.55v63.42Z"/>
    <path class="cls-1" d="M1260.83,315.18h45v7.69h-37.15v24.61h36.83v7.69h-36.83v30.85h36.83v7.69h-44.68v-78.52Z"/>
    <path class="cls-1" d="M1374.03,379.07l6.67-4c4.7,8.65,10.12,12.97,16.28,12.97,2.63,0,5.11-.61,7.42-1.84,2.31-1.23,4.07-2.87,5.28-4.94,1.21-2.06,1.81-4.25,1.81-6.57,0-2.63-.89-5.21-2.67-7.74-2.46-3.49-6.94-7.69-13.45-12.6-6.55-4.95-10.62-8.52-12.22-10.73-2.78-3.7-4.16-7.7-4.16-12.01,0-3.42.82-6.53,2.46-9.34,1.64-2.81,3.94-5.03,6.91-6.65,2.97-1.62,6.2-2.43,9.69-2.43,3.7,0,7.16.92,10.38,2.75,3.22,1.83,6.63,5.21,10.22,10.12l-6.41,4.86c-2.95-3.91-5.47-6.49-7.55-7.74-2.08-1.25-4.35-1.87-6.81-1.87-3.17,0-5.76.96-7.77,2.88-2.01,1.92-3.02,4.29-3.02,7.1,0,1.71.36,3.36,1.07,4.96.71,1.6,2.01,3.35,3.9,5.23,1.03,1,4.41,3.61,10.14,7.85,6.8,5.02,11.46,9.48,13.99,13.4,2.53,3.92,3.79,7.85,3.79,11.8,0,5.69-2.16,10.64-6.49,14.84-4.32,4.2-9.58,6.3-15.77,6.3-4.77,0-9.09-1.27-12.97-3.82-3.88-2.54-7.46-6.81-10.73-12.78Z"/>
    <path class="cls-1" d="M1498.22,315.18h7.85v78.52h-7.85v-78.52Z"/>
    <path class="cls-1" d="M1662.56,328.36l-6.09,5.77c-4.38-4.31-9.17-7.57-14.39-9.8-5.21-2.22-10.29-3.34-15.24-3.34-6.16,0-12.02,1.51-17.59,4.54-5.57,3.03-9.88,7.13-12.94,12.3-3.06,5.18-4.59,10.65-4.59,16.42s1.58,11.52,4.75,16.84c3.17,5.32,7.54,9.5,13.13,12.54,5.59,3.04,11.71,4.56,18.36,4.56,8.08,0,14.91-2.28,20.5-6.83,5.59-4.55,8.9-10.46,9.93-17.72h-25.04v-7.58h33.84c-.07,12.14-3.67,21.77-10.81,28.91-7.14,7.13-16.68,10.7-28.64,10.7-14.52,0-26.01-4.95-34.48-14.84-6.51-7.61-9.77-16.42-9.77-26.42,0-7.44,1.87-14.36,5.6-20.77,3.74-6.41,8.86-11.41,15.37-15.03,6.51-3.61,13.88-5.42,22.1-5.42,6.65,0,12.92,1.2,18.79,3.6,5.87,2.4,11.6,6.26,17.19,11.56Z"/>
    <path class="cls-1" d="M1744.95,393.7v-78.52h1.71l52.26,60.19v-60.19h7.74v78.52h-1.76l-51.83-59.46v59.46h-8.11Z"/>
  </g>
</svg>`;

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
          fontSize: 16,
          fontWeight: 800,
          color: textPrimary,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          letterSpacing: "0.05em",
          marginLeft: 6,
        }}>SympoAV</div>
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
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
        <div style={{
          fontSize: 14,
          letterSpacing: "0.15em",
          color: accent,
          fontFamily: "Georgia, serif",
          textTransform: "uppercase",
          fontWeight: 600,
        }}>SympoAV</div>
      </div>
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
    submark: ({ accent, textPrimary }) => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
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
        <div style={{
          fontSize: 13,
          letterSpacing: "0.15em",
          color: textPrimary,
          fontFamily: "monospace",
          textTransform: "uppercase",
          fontWeight: 700,
        }}>SympoAV</div>
      </div>
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
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em", color: textPrimary, fontFamily: "Georgia, serif", lineHeight: 1 }}>SympoAV</div>
        <div style={{ width: "100%", height: 2, background: "#0047CC" }} />
      </div>
    ),
  },
];

function LogoExplorer() {
  const [selected, setSelected] = useState(0);
  const concept = concepts[selected];
  const isDark = concept.bg.startsWith("#0") || concept.bg.startsWith("#05");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0F14",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: "#E8EDF5",
    }}>
      {/* Header with ACD branding */}
      <div style={{
        borderBottom: "1px solid #1A1D24",
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#080A0E",
      }}>
        <a
          href="https://aboriginalcreatives.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", opacity: 0.9, transition: "opacity 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.9"}
        >
          <img src={acdLogo} alt="Aboriginal Creative Design" style={{ height: 28, display: "block" }} />
        </a>
        <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "#2A3A4A", textTransform: "uppercase" }}>
          CLIENT PREVIEW
        </div>
      </div>

      {/* Page content */}
      <div style={{ padding: "40px 24px" }}>
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

        {/* Footer */}
        <div style={{
          borderTop: "1px solid #1A1D24",
          paddingTop: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <a
            href="https://aboriginalcreatives.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", opacity: 0.4, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.4"}
          >
            <img src={acdLogo} alt="Aboriginal Creative Design" style={{ height: 18, display: "block" }} />
          </a>
          <div style={{ fontSize: 10, color: "#2A3A4A", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://aboriginalcreatives.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2A3A4A", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#4A6080"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#2A3A4A"}
            >
              aboriginalcreatives.com
            </a>
            <span>{" · "}SYMPOSIUM AUDIOVISUAL · LOGO EXPLORATION v1</span>
            <span> · </span>
            <Link
              to="/discovery"
              style={{
                color: "#00C2FF",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.15em",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#00E5FF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#00C2FF"}
            >
              Fill out brand questionnaire
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LogoExplorer />} />
      <Route path="/discovery" element={<Discovery />} />
    </Routes>
  );
}
