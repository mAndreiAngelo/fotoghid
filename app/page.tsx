import Link from "next/link";
import Figure from "@/components/Figure";
import LinkCard from "@/components/LinkCard";
import SectionHeader from "@/components/SectionHeader";
import { photos } from "@/lib/images";

const sections = [
  {
    href: "/stiluri",
    title: "Stiluri de fotografie",
    description:
      "De la portret la astrofotografie: ce definește fiecare gen și cum abordezi primul cadru.",
    photo: photos.peisaj,
  },
  {
    href: "/sfaturi",
    title: "Sfaturi și tehnici",
    description:
      "Triunghiul expunerii, regulile de compoziție și lumina — fundamentele oricărei fotografii reușite.",
    photo: photos.regulaTreimilor,
  },
  {
    href: "/echipamente",
    title: "Echipamente și rapoarte de aspect",
    description:
      "Tipuri de aparate și obiective, plus rapoartele de aspect explicate cu diagrame simple.",
    photo: photos.echipamente,
  },
  {
    href: "/accesorii",
    title: "Accesorii și combinații",
    description:
      "Trepiede, filtre, blitz — și, mai ales, cum le combini cu echipamentul și scena potrivită.",
    photo: photos.accesorii,
  },
  {
    href: "/editare",
    title: "Editare",
    description:
      "Un flux de lucru simplu și instrumentele care scot ce e mai bun din fotografiile tale.",
    photo: photos.editare,
  },
  {
    href: "/galerie",
    title: "Galerie",
    description:
      "Exemple comentate: fiecare imagine ilustrează o tehnică pe care o poți încerca chiar azi.",
    photo: photos.galerieSilueta,
  },
];

const steps = [
  {
    href: "/sfaturi",
    title: "Înțelege lumina și compoziția",
    text: "Cele mai mari salturi nu vin din echipament, ci din felul în care vezi. Începe cu triunghiul expunerii și regula treimilor.",
  },
  {
    href: "/echipamente",
    title: "Cunoaște-ți echipamentul",
    text: "Fie că folosești un telefon sau un mirrorless, contează să știi ce poate — și ce accesorii îl completează.",
  },
  {
    href: "/editare",
    title: "Finisează prin editare",
    text: "Editarea este developarea modernă: câteva ajustări făcute cu măsură duc o fotografie bună spre una memorabilă.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="container-site grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Ghid de fotografie în limba română</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Fă fotografii mai bune,{" "}
              <span className="text-terra-600">cadru cu cadru</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              FotoGhid îți explică pe înțelesul tuturor cum funcționează
              lumina, compoziția, echipamentul și editarea. Fără jargon
              inutil, cu exemple reale — indiferent dacă fotografiezi cu
              telefonul sau cu un aparat dedicat.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/sfaturi" className="btn-primary">
                Începe cu tehnicile
              </Link>
              <Link href="/stiluri" className="btn-secondary">
                Descoperă stilurile
              </Link>
            </div>
          </div>
          <Figure
            photo={photos.hero}
            aspect="aspect-[4/3]"
            priority
            sizes="(min-width: 1024px) 34rem, 100vw"
            caption="Ora de aur, un trepied stabil și răbdare: rețeta multor cadre memorabile."
          />
        </div>
      </section>

      {/* Secțiunile site-ului */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Ce găsești aici"
          title="Tot drumul, de la primul cadru la fotografia finală"
          lead="Șase capitole care se leagă între ele: alegi un stil, înveți tehnica, îți cunoști echipamentul și duci fotografia până la capăt în editare."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <LinkCard key={s.href} {...s} />
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-soft/80">
          Fotografiile de pe această pagină aparțin fotografilor comunității
          Unsplash —{" "}
          <Link
            href="/galerie#credite"
            className="underline decoration-line underline-offset-2 hover:text-terra-600"
          >
            vezi creditele complete
          </Link>
          .
        </p>
      </section>

      {/* Cum înveți */}
      <section className="border-t border-line bg-surface">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader
            eyebrow="De unde începi"
            title="Trei pași, în ritmul tău"
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.href} className="card p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terra-50 font-display text-lg font-bold text-terra-600"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
                <Link
                  href={step.href}
                  className="mt-4 inline-block text-sm font-semibold text-terra-600 hover:text-terra-700"
                >
                  Citește capitolul →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
