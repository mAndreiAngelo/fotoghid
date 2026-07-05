type AspectRatioDiagramProps = {
  /** Raportul, ex. [3, 2] pentru 3:2 */
  ratio: [number, number];
  label: string;
};

/**
 * Mică diagramă SVG care arată forma de decupaj a unui raport de aspect.
 * Toate diagramele au aceeași înălțime de referință, ca să poată fi
 * comparate vizual una lângă alta.
 */
export default function AspectRatioDiagram({
  ratio,
  label,
}: AspectRatioDiagramProps) {
  const [rw, rh] = ratio;
  const height = 100;
  const width = Math.round((height * rw) / rh);
  const viewW = 200;
  const viewH = 130;
  const x = (viewW - width) / 2;
  const y = (viewH - height) / 2;

  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      role="img"
      aria-label={`Forma cadrului la raportul de aspect ${label}`}
      className="w-full"
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="6"
        fill="var(--color-amber-tint)"
        stroke="var(--color-terra-500)"
        strokeWidth="2.5"
      />
      <text
        x={viewW / 2}
        y={viewH / 2 + 7}
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="var(--color-terra-700)"
      >
        {label}
      </text>
    </svg>
  );
}
