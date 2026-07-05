/**
 * Diagramă SVG a triunghiului expunerii: diafragma, timpul de expunere
 * și ISO — cele trei reglaje care determină împreună expunerea.
 */
export default function ExposureTriangle() {
  return (
    <svg
      viewBox="0 0 460 400"
      role="img"
      aria-label="Triunghiul expunerii: diafragma controlează profunzimea de câmp, timpul de expunere redă sau îngheață mișcarea, iar ISO influențează zgomotul digital. Împreună determină expunerea."
      className="mx-auto w-full max-w-lg"
    >
      <polygon
        points="230,90 90,330 370,330"
        fill="var(--color-terra-50)"
        stroke="var(--color-terra-500)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Vârful de sus: Diafragma */}
      <circle cx="230" cy="90" r="7" fill="var(--color-terra-500)" />
      <text
        x="230"
        y="42"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fill="var(--color-ink)"
      >
        Diafragma
      </text>
      <text
        x="230"
        y="64"
        textAnchor="middle"
        fontSize="13.5"
        fill="var(--color-ink-soft)"
      >
        controlează profunzimea de câmp
      </text>

      {/* Stânga jos: Timpul de expunere */}
      <circle cx="90" cy="330" r="7" fill="var(--color-terra-500)" />
      <text
        x="118"
        y="362"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fill="var(--color-ink)"
      >
        Timpul de expunere
      </text>
      <text
        x="118"
        y="384"
        textAnchor="middle"
        fontSize="13.5"
        fill="var(--color-ink-soft)"
      >
        îngheață sau redă mișcarea
      </text>

      {/* Dreapta jos: ISO */}
      <circle cx="370" cy="330" r="7" fill="var(--color-terra-500)" />
      <text
        x="370"
        y="362"
        textAnchor="middle"
        fontSize="21"
        fontWeight="700"
        fill="var(--color-ink)"
      >
        ISO
      </text>
      <text
        x="370"
        y="384"
        textAnchor="middle"
        fontSize="13.5"
        fill="var(--color-ink-soft)"
      >
        influențează zgomotul digital
      </text>

      {/* Centru */}
      <text
        x="230"
        y="245"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        letterSpacing="2"
        fill="var(--color-terra-700)"
      >
        EXPUNEREA
      </text>
      <text
        x="230"
        y="268"
        textAnchor="middle"
        fontSize="12.5"
        fill="var(--color-ink-soft)"
      >
        o treaptă în plus pe o latură cere
      </text>
      <text
        x="230"
        y="286"
        textAnchor="middle"
        fontSize="12.5"
        fill="var(--color-ink-soft)"
      >
        o treaptă în minus pe alta
      </text>
    </svg>
  );
}
