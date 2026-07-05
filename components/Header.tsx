"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/stiluri", label: "Stiluri" },
  { href: "/sfaturi", label: "Sfaturi și tehnici" },
  { href: "/echipamente", label: "Echipamente" },
  { href: "/accesorii", label: "Accesorii" },
  { href: "/editare", label: "Editare" },
  { href: "/galerie", label: "Galerie" },
];

function ApertureMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-terra-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v7.5" />
      <path d="M20.66 7l-6.5 3.75" />
      <path d="M20.66 17l-6.5-3.75" />
      <path d="M12 22v-7.5" />
      <path d="M3.34 17l6.5-3.75" />
      <path d="M3.34 7l6.5 3.75" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-ink"
        >
          <ApertureMark />
          <span>
            Foto<span className="text-terra-600">Ghid</span>
          </span>
        </Link>

        <nav aria-label="Navigare principală" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-terra-50 text-terra-700"
                        : "text-ink-soft hover:bg-terra-50/60 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="meniu-mobil"
          className="rounded-lg p-2 text-ink hover:bg-terra-50 lg:hidden"
        >
          <span className="sr-only">
            {open ? "Închide meniul" : "Deschide meniul"}
          </span>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="meniu-mobil"
          aria-label="Navigare mobilă"
          className="border-t border-line bg-cream lg:hidden"
        >
          <ul className="container-site flex flex-col gap-1 py-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                      active
                        ? "bg-terra-50 text-terra-700"
                        : "text-ink-soft hover:bg-terra-50/60 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
