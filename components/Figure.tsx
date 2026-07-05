import { creditUrl, imgSrc, imgSrcSet, type Photo } from "@/lib/images";

type FigureProps = {
  photo: Photo;
  /** Legendă opțională, afișată deasupra creditului */
  caption?: React.ReactNode;
  /** Atributul `sizes` pentru încărcarea adaptivă a imaginii */
  sizes?: string;
  /** Clasă Tailwind de tip aspect-[x/y] aplicată containerului imaginii */
  aspect?: string;
  /** Pentru imaginea principală a paginii: încărcare imediată */
  priority?: boolean;
  /** Suprapunere vizuală (ex. grila treimilor) peste imagine */
  overlay?: React.ReactNode;
  className?: string;
};

export default function Figure({
  photo,
  caption,
  sizes = "(min-width: 1024px) 44rem, 100vw",
  aspect,
  priority = false,
  overlay,
  className = "",
}: FigureProps) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-line/40 ${aspect ?? ""}`}
      >
        <img
          src={imgSrc(photo)}
          srcSet={imgSrcSet(photo)}
          sizes={sizes}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="h-full w-full object-cover"
        />
        {overlay}
      </div>
      <figcaption className="mt-2.5 text-sm leading-relaxed text-ink-soft">
        {caption && <span className="block">{caption}</span>}
        <span className="mt-0.5 block text-xs text-ink-soft/80">
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
        </span>
      </figcaption>
    </figure>
  );
}
