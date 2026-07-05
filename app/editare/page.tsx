import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Figure from "@/components/Figure";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Editare",
  description:
    "Un flux de editare foto simplu în cinci pași, instrumentele potrivite (Lightroom, Capture One, Darktable, RawTherapee, GIMP) și exemple înainte/după.",
};

const workflow = [
  {
    title: "Importă și selectează",
    text: "Copiază fotografiile pe calculator (ideal și pe o a doua unitate) și fii nemilos la selecție: din zece cadre asemănătoare, păstrează-l pe cel cu expresia, momentul sau lumina cea mai bună. Editezi mai puțin și mai bine.",
  },
  {
    title: "Corecții de bază",
    text: "Îndreaptă orizontul, decupează, apoi reglează expunerea și balansul de alb. Verifică histograma: recuperează luminile arse și deschide umbrele doar cât rămâne natural.",
  },
  {
    title: "Culoare",
    text: "Ajustează contrastul, apoi culoarea — cu măsură. Vibranța e de regulă mai sigură decât saturația, pentru că protejează tonurile de piele. Caută să redai atmosfera pe care ai simțit-o, nu să inventezi una nouă.",
  },
  {
    title: "Ajustări locale",
    text: "Aici se face diferența: un gradient care întunecă ușor cerul, o pensulă care luminează chipul subiectului, retușul firelor de praf de pe senzor. Privirea merge acolo unde e lumină și claritate — condu-o.",
  },
  {
    title: "Exportă pentru destinație",
    text: "Alte setări pentru web (dimensiune mai mică, spațiu de culoare sRGB), altele pentru tipar (rezoluție maximă). Păstrează întotdeauna fișierul original: peste un an vei edita mai bine.",
  },
];

const tools = [
  {
    name: "Adobe Lightroom",
    type: "Cu plată (abonament)",
    text: "Standardul pentru organizarea și developarea fotografiilor: catalog puternic, editare nedistructivă, sincronizare pe mai multe dispozitive. Varianta Classic e orientată spre desktop, varianta cloud spre mobilitate.",
  },
  {
    name: "Capture One",
    type: "Cu plată",
    text: "Alternativa profesională apreciată pentru redarea culorii și pentru fotografierea legată la calculator (tethering) în studio. Instrumente de culoare foarte fine.",
  },
  {
    name: "Darktable",
    type: "Gratuit, open-source",
    text: "Cel mai apropiat echivalent gratuit al Lightroom-ului: catalog, developare RAW nedistructivă, module avansate. Curba de învățare e ceva mai abruptă, dar documentația e bogată.",
  },
  {
    name: "RawTherapee",
    type: "Gratuit, open-source",
    text: "Procesor RAW cu control tehnic foarte fin al demozaicării și al detaliului. Excelent ca „motor de developare”, în tandem cu un editor pe straturi.",
  },
  {
    name: "GIMP",
    type: "Gratuit, open-source",
    text: "Editor pe straturi, în spiritul Photoshop-ului: retuș, compoziții, grafică. Nu organizează biblioteca foto — se folosește de obicei împreună cu Darktable sau RawTherapee.",
  },
];

const principles = [
  "Editează cu histograma la vedere, nu doar „după ochi” — monitorul te poate minți.",
  "Ia o pauză înainte de export: ochii obosesc și acceptă treptat exagerările.",
  "Mai puțin e mai mult: cele mai bune editări nu se observă.",
  "Lucrează nedistructiv și păstrează originalele — gusturile se schimbă, fișierul RAW rămâne.",
];

export default function EditarePage() {
  return (
    <>
      <PageIntro
        eyebrow="Capitolul 5"
        title="Editare"
        lead="Editarea nu „falsifică” fotografia — este developarea ei modernă. Un flux de lucru simplu și repetabil face mai mult decât o sută de efecte."
      />

      {/* RAW vs JPEG + hero */}
      <section className="container-site py-14 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Figure
            photo={photos.editare}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 34rem, 100vw"
            caption="Developarea modernă: aceleași decizii ca în camera obscură, luate acum pe ecran."
          />
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              De ce să editezi — și de ce RAW
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Fișierul <strong>RAW</strong> este negativul digital: datele
              brute de pe senzor, neprelucrate. Are nevoie de „developare”,
              dar îți lasă o marjă generoasă la recuperarea luminilor și a
              umbrelor și la corectarea balansului de alb.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              <strong>JPEG-ul</strong> este fotografia deja procesată de
              aparat: comodă și gata de trimis, dar cu mult mai puțin loc
              de manevră la editare. Dacă vrei să înveți editarea serios,
              fotografiază RAW (sau RAW+JPEG, cât faci tranziția).
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Și fotografiile de telefon merită editate: aplicațiile moderne
              de mobil oferă aceleași reglaje de bază — expunere, contrast,
              culoare, decupaj.
            </p>
          </div>
        </div>
      </section>

      {/* Flux de lucru */}
      <section
        aria-labelledby="flux-titlu"
        className="border-t border-line bg-surface"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="flux-titlu"
            eyebrow="Pas cu pas"
            title="Un flux de lucru simplu"
            lead="Aceiași cinci pași, în aceeași ordine, la fiecare sesiune de editare. Ordinea contează: deciziile mari (selecție, decupaj, expunere) vin înaintea celor fine."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {workflow.map((step, i) => (
              <li key={step.title} className="card p-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-terra-50 font-display text-base font-bold text-terra-600"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Înainte / după */}
      <section
        aria-labelledby="demo-titlu"
        className="container-site py-14 sm:py-16"
      >
        <SectionHeader
          id="demo-titlu"
          eyebrow="Exemple"
          title="Înainte și după"
          lead="Două exemple tipice de editare. Variantele „înainte” sunt simulate digital din fotografia finală (contrast și saturație reduse, ca la un fișier RAW neprelucrat), pentru a ilustra direcția obișnuită a editării."
        />
        <div className="mt-10 space-y-8">
          <BeforeAfter
            photo={photos.editareDemo1}
            beforeFilter="saturate(0.62) contrast(0.82) brightness(1.07)"
            title="Peisaj la apus: recuperarea atmosferei"
            note="Ce s-a schimbat și de ce: contrastul a fost ridicat ca lumina să-și recapete adâncimea, balansul de alb a fost dus ușor spre cald, iar vibranța a fost accentuată cu măsură — fișierele neprelucrate ies adesea mai „plate” decât scena de care îți amintești."
          />
          <BeforeAfter
            photo={photos.editareDemo2}
            beforeFilter="saturate(0.7) contrast(0.78) brightness(1.12)"
            title="Scenă de noapte: contrast și culoare"
            aspect="aspect-[3/4]"
            note="Ce s-a schimbat și de ce: umbrele au fost adâncite pentru a reda întunericul real al străzii, luminile reclamelor au fost temperate ca să nu ardă, iar culorile au primit un plus de saturație — noaptea urbană trăiește din contrastul dintre întuneric și neon."
          />
        </div>
      </section>

      {/* Instrumente */}
      <section
        aria-labelledby="instrumente-titlu"
        className="border-t border-line bg-surface"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="instrumente-titlu"
            eyebrow="Cu ce editezi"
            title="Instrumente populare"
            lead="Toate programele de mai jos acoperă fluxul descris. Alege în funcție de buget și de cât timp vrei să investești în învățare — prețurile și licențele le găsești pe site-urile oficiale."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <article key={tool.name} className="card p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {tool.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-amber-tint px-3 py-1 text-xs font-semibold text-terra-700">
                    {tool.type}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {tool.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-terra-200 bg-terra-50 p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              Patru principii de ținut minte
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-0.5 h-4 w-4 shrink-0 text-terra-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 8.5L6 12l7.5-8" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
