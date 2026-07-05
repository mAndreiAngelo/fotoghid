import type { Metadata } from "next";
import Figure from "@/components/Figure";
import PageIntro from "@/components/PageIntro";
import { photos, type Photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Stiluri de fotografie",
  description:
    "Portret, peisaj, stradă, macro, astrofotografie, natură sălbatică și arhitectură: ce definește fiecare stil, când îl folosești și cum începi.",
};

type Style = {
  id: string;
  title: string;
  defining: string;
  when: string;
  howTo: string;
  photo: Photo;
  caption: string;
};

const styles: Style[] = [
  {
    id: "portret",
    title: "Portret",
    defining:
      "Omul este în centrul atenției: expresie, privire, personalitate. Fundalul rămâne discret, de multe ori topit printr-o profunzime mică de câmp, ca nimic să nu concureze cu subiectul.",
    when:
      "Ședințe foto cu familia sau prietenii, evenimente, portrete profesionale sau simple momente de zi cu zi care merită păstrate.",
    howTo:
      "Focalizează întotdeauna pe ochiul cel mai apropiat, deschide diafragma (în jur de f/1.8–f/2.8) pentru fundal estompat și caută lumină blândă: o fereastră mare sau umbra deschisă funcționează excelent. Distanțele focale de 50–135 mm redau chipul fără distorsiuni.",
    photo: photos.portret,
    caption:
      "Lumină naturală blândă și fundal estompat: atenția rămâne pe expresie.",
  },
  {
    id: "peisaj",
    title: "Peisaj",
    defining:
      "Natura în cadru amplu: munți, văi, lacuri, coaste. Se caută claritate din prim-plan până la orizont și, mai ales, lumină spectaculoasă — peisajul bun se fotografiază rar la prânz.",
    when:
      "Drumeții, călătorii, răsărituri și apusuri. Aceeași vale arată complet diferit în ceață, pe zăpadă sau la ora de aur.",
    howTo:
      "Închide diafragma (f/8–f/11) pentru claritate în adâncime, folosește trepied când lumina scade și construiește cadrul cu un element de prim-plan care invită privirea înăuntru.",
    photo: photos.peisaj,
    caption:
      "Răsărit în Dolomiți: prim-planul, planul mediu și fundalul construiesc împreună adâncimea.",
  },
  {
    id: "strada",
    title: "Fotografie de stradă",
    defining:
      "Viața urbană surprinsă spontan: oameni, gesturi, lumină și geometrie. Autenticitatea momentului contează mai mult decât perfecțiunea tehnică.",
    when:
      "La orice plimbare prin oraș — ploaia, ceața sau neonul serii transformă străzi banale în scene de film.",
    howTo:
      "Ia un obiectiv compact de 28–50 mm, pregătește-ți setările dinainte ca să reacționezi rapid și ai răbdare: găsește un fundal bun și așteaptă ca „momentul decisiv” să intre în cadru. Fii discret și respectuos cu oamenii pe care îi fotografiezi.",
    photo: photos.strada,
    caption:
      "Ploaia și luminile orașului adaugă atmosferă și reflexii unei scene obișnuite.",
  },
  {
    id: "macro",
    title: "Macro",
    defining:
      "Lumea la scară mică: insecte, flori, picături, texturi. Fotografia macro propriu-zisă atinge un raport de mărire de aproximativ 1:1 — subiectul apare pe senzor la mărimea lui reală.",
    when:
      "În grădină, în parc sau chiar în casă. Dimineața devreme insectele sunt lente, iar roua adaugă strălucire.",
    howTo:
      "Folosește un obiectiv macro dedicat sau inele de extensie. Profunzimea de câmp se reduce la câțiva milimetri, așa că închide diafragma, stabilizează aparatul și focalizează pe detaliul-cheie (ochii insectei, centrul florii).",
    photo: photos.macro,
    caption:
      "La distanțe foarte mici, planul de claritate e subțire cât o lamă: ochii libelulei sunt clari, restul se topește.",
  },
  {
    id: "astrofotografie",
    title: "Astrofotografie",
    defining:
      "Cerul nocturn: Calea Lactee, constelații, urme de stele. Un gen tehnic și răbdător, cu recompense spectaculoase.",
    when:
      "În nopți senine, fără Lună, departe de luminile orașului. Verifică faza Lunii și prognoza înainte să pleci.",
    howTo:
      "Trepiedul este obligatoriu. Folosește un obiectiv superangular luminos, expuneri de 10–20 de secunde și un ISO ridicat. Ca punct de plecare, „regula 500”: împarte 500 la distanța focală (echivalent full-frame) și obții numărul aproximativ de secunde înainte ca stelele să lase urme vizibile.",
    photo: photos.astro,
    caption:
      "Calea Lactee cere expunere lungă, obiectiv luminos și un cer cu adevărat întunecat.",
  },
  {
    id: "natura-salbatica",
    title: "Natură sălbatică",
    defining:
      "Animale fotografiate în mediul lor, de la distanță respectuoasă. Genul cere cunoașterea subiectului aproape la fel de mult ca tehnica.",
    when:
      "Rezervații, deltă, păduri — dimineața devreme și seara, când animalele sunt active și lumina e caldă și joasă.",
    howTo:
      "Teleobiectivul este unealta de bază. Setează un timp de expunere scurt (1/500 s sau mai rapid pentru subiecți în mișcare), folosește rafala și focalizarea continuă. Regula de aur: binele animalului vine întotdeauna înaintea fotografiei.",
    photo: photos.salbaticie,
    caption:
      "Contactul vizual și fundalul curat transformă o observație norocoasă într-un portret de animal.",
  },
  {
    id: "arhitectura",
    title: "Arhitectură",
    defining:
      "Clădiri, forme, ritm și simetrie: jocul dintre lumină și structură. Poate fi documentară sau abstractă, de la fațade întregi la detalii geometrice.",
    when:
      "În orașe noi sau chiar în cartierul tău, la orice oră — lumina laterală a dimineții scoate texturile în evidență, iar noaptea clădirile se transformă complet.",
    howTo:
      "Caută linii, tipare și repetiții. Ține aparatul cât mai drept ca să eviți liniile verticale convergente (sau corectează-le la editare) și încearcă atât cadre largi, cât și decupaje strânse de detaliu.",
    photo: photos.arhitectura,
    caption:
      "Repetiția și geometria devin subiectul: un decupaj strâns dintr-o fațadă modernă.",
  },
];

export default function StiluriPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capitolul 1"
        title="Stiluri de fotografie"
        lead="Fiecare gen fotografic are propriile reguli, unelte și bucurii. Nu trebuie să le stăpânești pe toate: alege unul care te atrage și aprofundează-l — restul vin de la sine."
      />

      <div className="container-site py-14 sm:py-16">
        <nav aria-label="Cuprinsul stilurilor" className="mb-12">
          <ul className="flex flex-wrap gap-2">
            {styles.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-terra-300 hover:text-terra-700"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16 sm:space-y-20">
          {styles.map((style, i) => (
            <section
              key={style.id}
              id={style.id}
              aria-labelledby={`${style.id}-titlu`}
              className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2
                  id={`${style.id}-titlu`}
                  className="font-display text-3xl font-semibold text-ink"
                >
                  {style.title}
                </h2>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                      Ce îl definește
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-soft">
                      {style.defining}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                      Când îl folosești
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-soft">
                      {style.when}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                      Cum începi
                    </dt>
                    <dd className="mt-1.5 leading-relaxed text-ink-soft">
                      {style.howTo}
                    </dd>
                  </div>
                </dl>
              </div>
              <Figure
                photo={style.photo}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 34rem, 100vw"
                caption={style.caption}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
