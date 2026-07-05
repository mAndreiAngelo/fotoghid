import type { Metadata } from "next";
import ExposureTriangle from "@/components/ExposureTriangle";
import Figure from "@/components/Figure";
import FillLightDiagram from "@/components/FillLightDiagram";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import ThirdsGrid from "@/components/ThirdsGrid";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sfaturi și tehnici",
  description:
    "Triunghiul expunerii (diafragmă, timp de expunere, ISO), regulile de compoziție și noțiunile de lumină — explicate simplu, cu exemple fotografice reale.",
};

export default function SfaturiPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capitolul 2"
        title="Sfaturi și tehnici"
        lead="Trei fundamente stau la baza aproape oricărei fotografii reușite: expunerea, compoziția și lumina. Le luăm pe rând, cu exemple pentru fiecare."
      />

      {/* ===== Triunghiul expunerii ===== */}
      <section
        aria-labelledby="expunere-titlu"
        className="container-site py-14 sm:py-16"
      >
        <SectionHeader
          id="expunere-titlu"
          eyebrow="Fundamentul nr. 1"
          title="Triunghiul expunerii"
          lead="Cantitatea de lumină dintr-o fotografie este rezultatul a trei reglaje care se echilibrează reciproc: diafragma, timpul de expunere și ISO. O „treaptă” (stop) înseamnă dublarea sau înjumătățirea luminii — dacă adaugi o treaptă într-o parte, o compensezi în alta."
        />

        <div className="card mt-10 p-6 sm:p-10">
          <ExposureTriangle />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <article>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Diafragma
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Deschiderea din obiectiv prin care intră lumina, exprimată în
              numere f. Atenție, scara e inversă: un număr mic (f/1.8)
              înseamnă o deschidere mare — multă lumină și fundal estompat;
              un număr mare (f/11) înseamnă o deschidere mică — mai puțină
              lumină, dar claritate în adâncime.
            </p>
            <Figure
              photo={photos.diafragma}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 22rem, 100vw"
              caption="Diafragmă deschisă: profunzime mică de câmp — subiectul este clar, fundalul se topește."
              className="mt-5"
            />
          </article>

          <article>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Timpul de expunere
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Cât timp rămâne senzorul expus la lumină. Un timp scurt
              (1/1000 s) îngheață mișcarea; unul lung (secunde întregi)
              o transformă în curgere. Regulă practică pentru lucrul din
              mână: nu coborî sub 1/distanța focală — la 50 mm, circa
              1/50 s — iar la timpi mai lungi folosește trepied.
            </p>
            <Figure
              photo={photos.expunereLunga}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 22rem, 100vw"
              caption="Expunere lungă de pe trepied: apa devine un văl mătăsos, stâncile rămân clare."
              className="mt-5"
            />
          </article>

          <article>
            <h3 className="font-display text-2xl font-semibold text-ink">
              ISO
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Cât de mult este amplificat semnalul senzorului. ISO mic
              (100–200) dă imaginea cea mai curată; valorile mari scot
              detalii din întuneric, dar aduc zgomot digital. Ține-l jos
              când poți — și ridică-l fără teamă când altfel ai rata
              momentul: zgomotul se corectează la editare, mișcatul nu.
            </p>
            <Figure
              photo={photos.isoNoapte}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 22rem, 100vw"
              caption="Noaptea, în oraș: un ISO ridicat păstrează timpul de expunere suficient de scurt pentru lucrul din mână."
              className="mt-5"
            />
          </article>
        </div>
      </section>

      {/* ===== Compoziția ===== */}
      <section
        aria-labelledby="compozitie-titlu"
        className="border-t border-line bg-surface"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="compozitie-titlu"
            eyebrow="Fundamentul nr. 2"
            title="Compoziția"
            lead="Compoziția este felul în care așezi elementele în cadru ca să conduci privirea. Regulile de mai jos nu sunt legi — sunt puncte de plecare pe care, odată stăpânite, le poți încălca în cunoștință de cauză."
          />

          <div className="mt-10 space-y-14">
            <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Regula treimilor
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Împarte cadrul în nouă părți egale, cu două linii verticale
                  și două orizontale. Elementele importante așezate pe linii
                  sau la intersecțiile lor dau un cadru mai dinamic decât
                  plasarea totul în centru. Orizontul stă bine pe linia de
                  sus sau de jos — aproape niciodată la mijloc.
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Majoritatea aparatelor și telefoanelor pot afișa această
                  grilă direct pe ecran — activeaz-o din meniu și exersează
                  cu ea până devine instinct.
                </p>
              </div>
              <Figure
                photo={photos.regulaTreimilor}
                aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 34rem, 100vw"
                overlay={<ThirdsGrid />}
                caption="Copacul stă lângă o intersecție a treimilor, iar orizontul urmează linia inferioară — cadrul respiră."
              />
            </article>

            <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="lg:order-2">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Linii directoare
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Drumuri, garduri, râuri, umbre — orice linie din scenă
                  poate conduce privirea spre subiect. Liniile care pornesc
                  din colțul cadrului și se adâncesc în perspectivă creează
                  senzația de spațiu tridimensional pe o suprafață plată.
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Înainte să declanșezi, întreabă-te: unde duce privirea
                  linia cea mai puternică din cadru? Dacă duce în afara
                  fotografiei, recompune.
                </p>
              </div>
              <Figure
                photo={photos.liniiDirectoare}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 34rem, 100vw"
                caption="Aleea și șirurile de copaci converg și trag privirea în adâncimea cadrului."
                className="lg:order-1"
              />
            </article>

            <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Încadrarea naturală
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  O ramă în interiorul cadrului: o fereastră, o arcadă,
                  ramuri, o ușă. Încadrarea concentrează atenția asupra
                  subiectului, adaugă context și un plus de adâncime —
                  privitorul are senzația că se uită „prin” ceva către
                  scenă.
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Rama nu trebuie să fie perfectă sau completă: chiar și un
                  colț întunecat de vegetație în marginea cadrului poate
                  închide frumos compoziția.
                </p>
              </div>
              <Figure
                photo={photos.incadrare}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 34rem, 100vw"
                caption="Rama ferestrei încadrează silueta și separă interiorul cald de lumina apusului."
              />
            </article>
          </div>
        </div>
      </section>

      {/* ===== Lumina ===== */}
      <section
        aria-labelledby="lumina-titlu"
        className="container-site py-14 sm:py-16"
      >
        <SectionHeader
          id="lumina-titlu"
          eyebrow="Fundamentul nr. 3"
          title="Noțiuni de lumină"
          lead="Fotografia înseamnă, literal, „a scrie cu lumină”. Aceeași scenă poate fi banală sau spectaculoasă în funcție de unghiul, culoarea și calitatea luminii."
        />

        <div className="mt-10 space-y-14">
          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                Ora de aur
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Intervalul de după răsărit și de dinainte de apus, când
                soarele stă jos pe cer. Lumina devine caldă, moale și
                laterală: umbrele se lungesc, texturile prind viață, iar
                pielea capătă un ton auriu măgulitor. Este momentul preferat
                pentru portrete și peisaje deopotrivă.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Imediat după apus urmează <strong>ora albastră</strong>:
                cerul se colorează în albastru profund, iar luminile
                orașului se echilibrează cu cele ale cerului — ideală
                pentru fotografia urbană și de arhitectură.
              </p>
            </div>
            <Figure
              photo={photos.oraDeAur}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 34rem, 100vw"
              caption="Lumina joasă și caldă a orei de aur modelează chipul fără umbre dure."
            />
          </article>

          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-2">
              <h3 className="font-display text-2xl font-semibold text-ink">
                Contralumina
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Sursa de lumină se află în spatele subiectului. Ai două
                direcții la alegere: expune pentru fundalul luminos și
                obții o siluetă grafică, dramatică — sau compensează
                expunerea în plus (ori adaugă lumină de umplere) ca să
                păstrezi detaliile subiectului, cu un contur luminos în
                jurul lui.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Pentru siluete puternice, caută subiecte cu contur clar și
                fundaluri simple: un cer la apus, o fereastră luminoasă.
              </p>
            </div>
            <Figure
              photo={photos.contralumina}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 34rem, 100vw"
              caption="Expunere făcută pentru fereastra luminoasă: subiectul devine siluetă, iar cadrul devine grafic."
              className="lg:order-1"
            />
          </article>

          <article className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                Lumina de umplere
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Când lumina principală lasă umbre prea adânci — soare dur,
                contralumină — o a doua sursă mai slabă „umple” umbrele:
                un reflector pliabil, un perete alb din apropiere sau un
                blitz la putere mică. Scopul nu e să elimini umbrele, ci
                să le îmblânzești cât să păstrezi detaliul.
              </p>
              <p className="mt-3 leading-relaxed text-ink-soft">
                E cel mai ieftin upgrade din fotografia de portret: un
                reflector pliabil încape în orice rucsac și nu are nevoie
                de baterii.
              </p>
            </div>
            <div className="card p-6 sm:p-8">
              <FillLightDiagram />
              <p className="mt-4 text-center text-sm text-ink-soft">
                Schemă văzută de sus: lumina principală desenează, umplerea
                îmblânzește umbrele.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
