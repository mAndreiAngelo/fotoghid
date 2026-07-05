/**
 * Grila regulii treimilor, suprapusă peste o fotografie prin prop-ul
 * `overlay` al componentei Figure. Liniile împart cadrul în nouă părți
 * egale; punctele marchează intersecțiile — locurile „tari” ale cadrului.
 */
export default function ThirdsGrid() {
  const intersections = [
    { left: "33.333%", top: "33.333%" },
    { left: "66.666%", top: "33.333%" },
    { left: "33.333%", top: "66.666%" },
    { left: "66.666%", top: "66.666%" },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-y-0 left-1/3 w-px bg-white/80 shadow-[0_0_2px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-white/80 shadow-[0_0_2px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-white/80 shadow-[0_0_2px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-white/80 shadow-[0_0_2px_rgba(0,0,0,0.4)]" />
      {intersections.map((pos, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/90 bg-terra-500/60"
          style={pos}
        />
      ))}
    </div>
  );
}
