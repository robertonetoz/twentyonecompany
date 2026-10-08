const CENTER = 300;

function ring(radius: number) {
  return `M${CENTER},${CENTER} m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`;
}

const OUTER = 228;
const BAND = 157;

/** Anilha vista de frente, com as inscrições em relevo. Gira por fora; o brilho fica parado. */
export function Plate() {
  return (
    <svg viewBox="0 0 600 600" className="size-full" aria-hidden>
      <defs>
        <radialGradient id="anilha-corpo">
          <stop offset="0" stopColor="#1f1f1f" />
          <stop offset="0.6" stopColor="#0d0d0d" />
          <stop offset="0.92" stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#040404" />
        </radialGradient>
        <linearGradient id="anilha-laranja" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a1f" />
          <stop offset="0.5" stopColor="#ff5a0a" />
          <stop offset="1" stopColor="#d63c00" />
        </linearGradient>
        <linearGradient id="anilha-aco" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f4f4" />
          <stop offset="0.45" stopColor="#8f8f8f" />
          <stop offset="0.6" stopColor="#3d3d3d" />
          <stop offset="1" stopColor="#bdbdbd" />
        </linearGradient>
        <path id="anilha-fora" d={ring(OUTER)} />
        <path id="anilha-faixa" d={ring(BAND)} />
      </defs>

      <circle cx={CENTER} cy={CENTER} r="298" fill="url(#anilha-corpo)" />
      <circle cx={CENTER} cy={CENTER} r="297" fill="none" stroke="#333" strokeWidth="2" />
      <circle cx={CENTER} cy={CENTER} r="276" fill="none" stroke="#000" strokeWidth="4" />
      <circle cx={CENTER} cy={CENTER} r="273" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="1.5" />

      <text
        fill="#fff"
        fontSize="40"
        fontWeight="900"
        style={{ fontFamily: "var(--font-display)", fontStretch: "135%" }}
      >
        <textPath href="#anilha-fora" textLength={Math.floor(2 * Math.PI * OUTER) - 8} lengthAdjust="spacingAndGlyphs">
          TWENTY ONE COMPANY / UBERLÂNDIA / DESDE 2001 /
        </textPath>
      </text>

      <circle cx={CENTER} cy={CENTER} r="168" fill="none" stroke="url(#anilha-laranja)" strokeWidth="60" />
      <text fill="#000" fontSize="23" fontWeight="900" style={{ fontFamily: "var(--font-display)", fontStretch: "120%" }}>
        <textPath href="#anilha-faixa" textLength={Math.floor(2 * Math.PI * BAND) - 8} lengthAdjust="spacingAndGlyphs">
          O BÁSICO BEM FEITO GERA RESULTADO / 25 ANOS DE HISTÓRIA /
        </textPath>
      </text>

      <circle cx={CENTER} cy={CENTER} r="137" fill="#0a0a0a" stroke="#000" strokeWidth="3" />
      <circle cx={CENTER} cy={CENTER} r="134" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={Math.round(CENTER + 103 * Math.cos((angle * Math.PI) / 180))}
          cy={Math.round(CENTER + 103 * Math.sin((angle * Math.PI) / 180))}
          r="7"
          fill="#000"
          stroke="rgb(255 255 255 / 0.1)"
        />
      ))}

      <circle cx={CENTER} cy={CENTER} r="66" fill="url(#anilha-aco)" />
      <circle cx={CENTER} cy={CENTER} r="52" fill="#050505" />
      <circle cx={CENTER} cy={CENTER} r="46" fill="url(#anilha-aco)" />
      <circle cx={CENTER} cy={CENTER} r="36" fill="none" stroke="rgb(0 0 0 / 0.35)" strokeWidth="2" />
      <circle cx={CENTER} cy={CENTER} r="9" fill="#111" />
    </svg>
  );
}
