import type { Metadata } from "next";
import AspectRatioDiagram from "@/components/AspectRatioDiagram";
import Figure from "@/components/Figure";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Echipamente și rapoarte de aspect",
  description:
    "Tipuri de aparate foto (DSLR, mirrorless, compact, telefon), tipuri de obiective și rapoartele de aspect 3:2, 4:3, 16:9 și 1:1, explicate cu diagrame.",
};

const cameras = [
  {
    name: "DSLR",
    strengths:
      "Vizor optic (vezi scena direct, prin oglindă), autonomie foarte bună a bateriei și o ofertă uriașă de obiective, inclusiv pe piața second-hand, la prețuri accesibile.",
    tradeoffs:
      "Corp mai voluminos și mai greu; producătorii și-au mutat dezvoltarea către sistemele mirrorless, așa că noutățile sunt tot mai rare.",
    pickIf:
      "ai un buget limitat și vrei un aparat dedicat, cu obiective ieftine la mâna a doua.",
  },
  {
    name: "Mirrorless",
    strengths:
      "Vizor electronic care îți arată expunerea finală înainte să declanșezi, sisteme moderne de focalizare cu detecția ochilor și corpuri mai compacte. Este standardul actual al pieței.",
    tradeoffs:
      "Bateria ține de regulă mai puțin decât la un DSLR, iar obiectivele noi pot fi scumpe — deși adaptoarele deschid accesul la obiective mai vechi.",
    pickIf:
      "vrei sistemul cu cea mai activă dezvoltare și cele mai noi tehnologii de focalizare.",
  },
  {
    name: "Compact",
    strengths:
      "Încape în buzunar, iar modelele pentru entuziaști oferă control manual complet și calitate a imaginii vizibil peste telefon, mai ales la zoom.",
    tradeoffs:
      "Obiectivul este fix (nedetașabil), iar senzorul este de regulă mai mic decât la aparatele cu obiective interschimbabile.",
    pickIf:
      "vrei calitate și control fără să cari o geantă de echipament.",
  },
  {
    name: "Telefon",
    strengths:
      "Este mereu la tine — iar cel mai bun aparat e cel pe care îl ai în buzunar. Procesarea computațională (HDR, mod noapte) face treabă impresionantă, iar partajarea e instant.",
    tradeoffs:
      "Control limitat asupra opticii, zoom-ul digital pierde calitate, iar lumina slabă rămâne o provocare în ciuda modurilor de noapte.",
    pickIf:
      "abia începi: înveți compoziția și lumina fără nicio investiție.",
  },
];

const lenses = [
  {
    name: "Obiectiv fix (prime)",
    focal: "ex. 35 mm, 50 mm, 85 mm",
    text: "Distanță focală unică, de regulă cu diafragmă foarte deschisă (f/1.4–f/2.8): excelent în lumină slabă și pentru fundaluri estompate. Faptul că „zoom-ul” îl faci cu picioarele te disciplinează compozițional.",
  },
  {
    name: "Zoom",
    focal: "ex. 24–70 mm, 18–55 mm",
    text: "Acoperă mai multe distanțe focale într-un singur obiectiv — flexibilitate maximă la călătorii și evenimente, unde nu ai timp să schimbi obiectivul.",
  },
  {
    name: "Superangular (wide)",
    focal: "sub ~35 mm",
    text: "Câmp vizual larg: peisaje, arhitectură, interioare. Accentuează perspectiva și distanțele; atenție la distorsiuni spre marginile cadrului, mai ales la portrete.",
  },
  {
    name: "Teleobiectiv",
    focal: "peste ~70 mm",
    text: "Apropie subiectele îndepărtate — natură sălbatică, sport, dar și portrete: comprimă perspectiva și izolează frumos subiectul de fundal.",
  },
  {
    name: "Macro",
    focal: "raport de mărire ~1:1",
    text: "Proiectat pentru focalizare la distanțe foarte mici, cu claritate excelentă: insecte, flori, detalii de produs. Poate servi și ca obiectiv de portret.",
  },
];

const ratios = [
  {
    ratio: [3, 2] as [number, number],
    label: "3:2",
    title: "Clasicul filmului 35 mm",
    text: "Raportul nativ al majorității senzorilor DSLR și mirrorless, moștenit de la filmul de 35 mm. Echilibrat, ușor alungit — potrivit pentru aproape orice subiect.",
  },
  {
    ratio: [4, 3] as [number, number],
    label: "4:3",
    title: "Micro Four Thirds și telefoane",
    text: "Puțin mai „pătrățos”. Este raportul nativ al sistemelor Micro Four Thirds, al multor compacte și al majorității telefoanelor. Bun pentru portrete și compoziții verticale.",
  },
  {
    ratio: [16, 9] as [number, number],
    label: "16:9",
    title: "Formatul video și panoramic",
    text: "Raportul ecranelor și al videoclipurilor. În fotografie se obține de regulă prin decuparea unui cadru 3:2 sau 4:3 — dramatic pentru peisaje largi, dar pierzi din înălțime.",
  },
  {
    ratio: [1, 1] as [number, number],
    label: "1:1",
    title: "Pătratul",
    text: "Moștenit de la aparatele cu film format mediu 6×6 și readus în atenție de rețelele sociale. Centrat, calm, grafic — excelent pentru simetrii și detalii de arhitectură.",
  },
];

export default function EchipamentePage() {
  return (
    <>
      <PageIntro
        eyebrow="Capitolul 3"
        title="Echipamente și rapoarte de aspect"
        lead="Echipamentul nu face fotograful — dar echipamentul potrivit, înțeles bine, îți dă libertate. Iată harta: tipuri de aparate, tipuri de obiective și formele cadrului."
      />

      <div className="container-site py-14 sm:py-16">
        <Figure
          photo={photos.echipamente}
          aspect="aspect-[21/9]"
          sizes="(min-width: 1280px) 72rem, 100vw"
          caption="Nu ai nevoie de tot ce vezi aici: un aparat și un obiectiv bun acoperă cele mai multe situații."
        />
      </div>

      {/* Tipuri de aparate */}
      <section
        aria-labelledby="aparate-titlu"
        className="container-site pb-14 sm:pb-16"
      >
        <SectionHeader
          id="aparate-titlu"
          eyebrow="Aparatul"
          title="Tipuri de aparate foto"
          lead="Nu există un aparat „cel mai bun”, ci unul potrivit pentru tine. Diferențele reale țin de dimensiune, control și sistemul de obiective."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cameras.map((cam) => (
            <article key={cam.name} className="card flex flex-col p-6">
              <h3 className="font-display text-2xl font-semibold text-ink">
                {cam.name}
              </h3>
              <dl className="mt-4 flex-1 space-y-4">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                    Puncte forte
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {cam.strengths}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                    De ținut cont
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {cam.tradeoffs}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 rounded-lg bg-amber-tint px-4 py-3 text-sm leading-relaxed text-ink">
                <strong className="font-semibold">Alege-l dacă</strong>{" "}
                {cam.pickIf}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Obiective */}
      <section
        aria-labelledby="obiective-titlu"
        className="border-t border-line bg-surface"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="obiective-titlu"
            eyebrow="Obiectivul"
            title="Tipuri de obiective"
            lead="Distanța focală, exprimată în milimetri, spune cât de larg sau cât de „apropiat” vede obiectivul: numerele mici văd larg, numerele mari apropie. Obiectivul influențează imaginea mai mult decât aparatul."
          />
          <ul className="mt-10 divide-y divide-line rounded-2xl border border-line bg-cream">
            {lenses.map((lens) => (
              <li
                key={lens.name}
                className="grid gap-2 p-6 sm:grid-cols-[14rem_1fr] sm:gap-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {lens.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-terra-600">
                    {lens.focal}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                  {lens.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rapoarte de aspect */}
      <section
        aria-labelledby="rapoarte-titlu"
        className="container-site py-14 sm:py-16"
      >
        <SectionHeader
          id="rapoarte-titlu"
          eyebrow="Forma cadrului"
          title="Rapoartele de aspect"
          lead="Raportul de aspect este proporția dintre lățimea și înălțimea imaginii. Sfatul nostru: fotografiază la raportul nativ al senzorului (păstrezi toți pixelii) și decupează la editare, în funcție de destinația fotografiei."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ratios.map((r) => (
            <article key={r.label} className="card p-5">
              <AspectRatioDiagram ratio={r.ratio} label={r.label} />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
