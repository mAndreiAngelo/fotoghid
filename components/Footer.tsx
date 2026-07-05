import Link from "next/link";

const footerNav = [
  { href: "/stiluri", label: "Stiluri de fotografie" },
  { href: "/sfaturi", label: "Sfaturi și tehnici" },
  { href: "/echipamente", label: "Echipamente și rapoarte de aspect" },
  { href: "/accesorii", label: "Accesorii și combinații" },
  { href: "/editare", label: "Editare" },
  { href: "/galerie", label: "Galerie" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="container-site grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">
            Foto<span className="text-amber-warm">Ghid</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Un ghid prietenos de fotografie în limba română. Înveți să vezi
            lumina, să compui cadrul și să scoți ce e mai bun din fiecare
            fotografie.
          </p>
        </div>

        <nav aria-label="Navigare în subsol">
          <p className="text-sm font-semibold uppercase tracking-wider text-cream/50">
            Explorează
          </p>
          <ul className="mt-3 space-y-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-amber-warm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cream/50">
            Fotografii
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Toate fotografiile de pe acest site aparțin fotografilor comunității
            Unsplash și sunt folosite conform licenței Unsplash.
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                href="/galerie#credite"
                className="text-sm text-cream/80 underline decoration-cream/30 underline-offset-2 transition-colors hover:text-amber-warm"
              >
                Vezi creditele foto complete
              </Link>
            </li>
            <li>
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/80 underline decoration-cream/30 underline-offset-2 transition-colors hover:text-amber-warm"
              >
                Licența Unsplash
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-site py-5">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} FotoGhid. Conținut educațional despre
            fotografie, scris cu grijă în limba română.
          </p>
        </div>
      </div>
    </footer>
  );
}
