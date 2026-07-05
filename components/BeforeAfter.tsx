import { creditUrl, imgSrc, imgSrcSet, type Photo } from "@/lib/images";

type BeforeAfterProps = {
  photo: Photo;
  /** Filtru CSS aplicat variantei „înainte” (simulare de fișier neprelucrat) */
  beforeFilter: string;
  title: string;
  /** Ce s-a schimbat la editare și de ce */
  note: string;
  aspect?: string;
};

/**
 * Comparație „înainte / după”. Varianta „înainte” este o simulare
 * demonstrativă: aceeași fotografie, cu un filtru care imită un fișier
 * RAW neprelucrat (contrast și saturație reduse). Lucrul acesta este
 * menționat explicit în etichetă, ca exemplul să rămână onest.
 */
export default function BeforeAfter({
  photo,
  beforeFilter,
  title,
  note,
  aspect = "aspect-[3/2]",
}: BeforeAfterProps) {
  const shared = {
    src: imgSrc(photo, 800),
    srcSet: imgSrcSet(photo, [480, 800, 1200]),
    sizes: "(min-width: 640px) 50vw, 100vw",
    width: photo.w,
    height: photo.h,
    loading: "lazy" as const,
  };

  return (
    <figure className="card overflow-hidden">
      <div className="grid gap-px bg-line sm:grid-cols-2">
        <div className={`relative overflow-hidden bg-line/40 ${aspect}`}>
          <img
            {...shared}
            alt={`${photo.alt} — varianta needitată (simulare)`}
            style={{ filter: beforeFilter }}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold text-cream">
            Înainte (simulare)
          </span>
        </div>
        <div className={`relative overflow-hidden bg-line/40 ${aspect}`}>
          <img
            {...shared}
            alt={`${photo.alt} — varianta editată`}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-terra-600 px-3 py-1 text-xs font-semibold text-white">
            După
          </span>
        </div>
      </div>
      <figcaption className="p-5">
        <p className="font-display text-lg font-semibold text-ink">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{note}</p>
        <p className="mt-2 text-xs text-ink-soft/80">
          Foto:{" "}
          <a
            href={creditUrl(photo)}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 transition-colors hover:text-terra-600"
          >
            {photo.photographer}
          </a>{" "}
          / Unsplash
        </p>
      </figcaption>
    </figure>
  );
}
