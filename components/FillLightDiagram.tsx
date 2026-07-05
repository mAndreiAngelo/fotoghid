/**
 * Schemă SVG văzută de sus: lumina principală vine dintr-o parte,
 * iar un reflector (sau un blitz la putere mică) „umple” umbrele
 * de pe partea opusă a subiectului.
 */
export default function FillLightDiagram() {
  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-label="Schemă de iluminare văzută de sus: lumina principală vine din stânga subiectului, reflectorul de umplere din dreapta ridică umbrele, iar aparatul foto este în fața subiectului."
      className="mx-auto w-full max-w-lg"
    >
      {/* Lumina principală (soare / fereastră) */}
      <circle
        cx="80"
        cy="70"
        r="24"
        fill="var(--color-amber-warm)"
        opacity="0.9"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 80 + Math.cos(rad) * 30;
        const y1 = 70 + Math.sin(rad) * 30;
        const x2 = 80 + Math.cos(rad) * 40;
        const y2 = 70 + Math.sin(rad) * 40;
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-amber-warm)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      <text
        x="80"
        y="136"
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        Lumina principală
      </text>
      <text
        x="80"
        y="153"
        textAnchor="middle"
        fontSize="12"
        fill="var(--color-ink-soft)"
      >
        soare sau fereastră
      </text>

      {/* Direcția luminii principale spre subiect */}
      <line
        x1="112"
        y1="90"
        x2="205"
        y2="140"
        stroke="var(--color-amber-warm)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="212,144 196,142 202,131" fill="var(--color-amber-warm)" />

      {/* Subiectul */}
      <circle
        cx="230"
        cy="155"
        r="20"
        fill="var(--color-terra-500)"
      />
      <text
        x="230"
        y="120"
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        Subiectul
      </text>

      {/* Umbra care ar rămâne fără umplere */}
      <path
        d="M 244 169 q 26 22 40 52"
        fill="none"
        stroke="var(--color-ink-soft)"
        strokeWidth="2"
        strokeDasharray="4 5"
        opacity="0.55"
      />
      <text
        x="322"
        y="232"
        textAnchor="middle"
        fontSize="12"
        fill="var(--color-ink-soft)"
      >
        umbra fără umplere
      </text>

      {/* Reflectorul de umplere */}
      <path
        d="M 380 110 a 46 46 0 0 1 0 92"
        fill="none"
        stroke="var(--color-terra-600)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <text
        x="388"
        y="82"
        textAnchor="middle"
        fontSize="13.5"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        Reflector / blitz
      </text>
      <text
        x="388"
        y="99"
        textAnchor="middle"
        fontSize="12"
        fill="var(--color-ink-soft)"
      >
        de umplere
      </text>

      {/* Lumina reflectată înapoi spre subiect */}
      <line
        x1="370"
        y1="156"
        x2="262"
        y2="156"
        stroke="var(--color-terra-600)"
        strokeWidth="2.5"
        strokeDasharray="7 6"
        strokeLinecap="round"
      />
      <polygon points="255,156 268,149 268,163" fill="var(--color-terra-600)" />

      {/* Aparatul foto */}
      <rect
        x="207"
        y="248"
        width="46"
        height="30"
        rx="6"
        fill="var(--color-ink)"
      />
      <circle cx="230" cy="263" r="9" fill="var(--color-cream)" />
      <circle cx="230" cy="263" r="5" fill="var(--color-ink)" />
      <text
        x="286"
        y="268"
        textAnchor="start"
        fontSize="13.5"
        fontWeight="600"
        fill="var(--color-ink)"
      >
        Aparatul
      </text>
    </svg>
  );
}
