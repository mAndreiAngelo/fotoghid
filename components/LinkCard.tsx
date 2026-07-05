import Link from "next/link";
import { imgSrc, imgSrcSet, type Photo } from "@/lib/images";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  photo: Photo;
};

export default function LinkCard({
  href,
  title,
  description,
  photo,
}: LinkCardProps) {
  return (
    <Link
      href={href}
      className="card group block overflow-hidden transition-all hover:-translate-y-0.5 hover:border-terra-300 hover:shadow-md"
    >
      <div className="aspect-[3/2] overflow-hidden bg-line/40">
        <img
          src={imgSrc(photo, 800)}
          srcSet={imgSrcSet(photo, [480, 800, 1200])}
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          {description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-terra-600 transition-colors group-hover:text-terra-700">
          Explorează
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 8h11M9 3.5L13.5 8 9 12.5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
