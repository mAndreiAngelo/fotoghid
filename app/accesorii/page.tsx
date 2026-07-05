import type { Metadata } from "next";
import Figure from "@/components/Figure";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Accesorii și combinații",
  description:
    "Trepiede, filtre ND și polarizante, blitz extern, curele, genți și carduri de memorie — și cum se combină fiecare cu echipamentul și scena potrivită.",
};

type Accessory = {
  id: string;
  name: string;
  what: string;
  how: string;
  combos: string[];
};

const accessories: Accessory[] = [
  {
    id: "trepied",
    name: "Trepiedul",
    what: "Cea mai sigură cale spre fotografii clare când lumina scade sau când timpul de expunere se lungește. Deschide ușa spre expuneri lungi, astrofotografie, autoportrete și cadre HDR.",
    how: "Caută echilibrul dintre greutate și stabilitate: unul prea greu rămâne acasă, unul prea ușor tremură în vânt. Un cap cu bilă este rapid și versatil, iar picioarele care se desfac aproape de sol ajută la macro. Folosește temporizatorul sau o telecomandă ca să nu miști aparatul la declanșare.",
    combos: [
      "Peisaj la ora albastră + filtru ND — expuneri de secunde întregi, apă și nori „pictați”",
      "Astrofotografie + superangular luminos — expuneri de 10–20 s imposibile din mână",
      "Autoportrete și fotografii de grup + temporizator",
    ],
  },
  {
    id: "polarizant",
    name: "Filtrul polarizant (CPL)",
    what: "Se rotește pe filetul obiectivului și taie reflexiile nemetalice: apa devine transparentă, geamurile se limpezesc, cerul capătă un albastru mai profund, iar frunzișul își recapătă culoarea.",
    how: "Se alege după diametrul filetului obiectivului (notat cu Ø, în mm, pe obiectiv). Rotește-l până efectul arată natural — maximul nu e mereu cel mai frumos. Reține că „mănâncă” în jur de una–două trepte de lumină.",
    combos: [
      "Peisaj cu apă sau vegetație + orice obiectiv standard — reflexii tăiate, culori curate",
      "Atenție pe superangular: cerul poate ieși polarizat neuniform, cu o pată mai închisă",
      "Vitrine și suprafețe lucioase în fotografia urbană",
    ],
  },
  {
    id: "nd",
    name: "Filtrul ND (densitate neutră)",
    what: "„Ochelari de soare” pentru obiectiv: reduce uniform lumina, fără să schimbe culorile. Îți permite timpi lungi de expunere în plină zi sau diafragme deschise în soare puternic.",
    how: "Filtrele ND vin în densități diferite — de la una–două trepte până la nouă–zece pentru expuneri foarte lungi. Compune și focalizează înainte să montezi un ND puternic: prin el, vizorul devine aproape negru.",
    combos: [
      "Cascade și valuri ziua + trepied — apa mătăsoasă din fotografiile de peisaj",
      "Piațete aglomerate + expunere de zeci de secunde — trecătorii „dispar” din cadru",
      "Portret cu diafragmă deschisă în plin soare — fundal topit fără supraexpunere",
    ],
  },
  {
    id: "blitz",
    name: "Blitzul extern",
    what: "Mult mai puternic și mai flexibil decât blitzul integrat. Marele lui atu este capul orientabil: îndrepți lumina spre tavan sau spre un perete, iar lumina reflectată devine blândă și naturală.",
    how: "Începe cu modul TTL (aparatul dozează automat puterea), apoi treci pe manual când vrei control fin. Un difuzor sau un mic softbox îmblânzește și mai mult lumina. Evită blitzul direct, frontal — aplatizează chipul și lasă umbre dure.",
    combos: [
      "Portret în interior + tavan alb — „bounce” pentru lumină moale, ca de fereastră",
      "Contralumină la ora de aur + blitz la putere mică — umbre umplute, cer păstrat",
      "Evenimente în spații slab luminate + ISO moderat",
    ],
  },
  {
    id: "transport",
    name: "Cureaua și geanta",
    what: "Accesoriile care decid, de fapt, cât de des iei aparatul cu tine. O curea comodă și o geantă potrivită situației fac diferența dintre echipament folosit și echipament uitat acasă.",
    how: "Pentru plimbări lungi, o curea lată sau purtată în diagonală distribuie greutatea; pentru lucru rapid, o curea de încheietură. Geanta să aibă acces rapid la aparat, compartimente căptușite și, ideal, husă de ploaie.",
    combos: [
      "Fotografie de stradă + geantă discretă tip messenger — acces rapid, aspect neutru",
      "Drumeție + rucsac foto cu spate ventilat și acces lateral",
      "Călătorii + geantă care încape sub scaunul avionului, cu echipamentul esențial",
    ],
  },
  {
    id: "carduri",
    name: "Cardurile de memorie",
    what: "Un accesoriu banal până în ziua în care te lasă. Viteza și fiabilitatea cardului contează mai ales la rafale lungi și la filmare.",
    how: "Uită-te la viteza de scriere susținută, nu doar la cea maximă din reclamă: clasele video (V30, V60, V90) garantează un prag minim constant — cu cât numărul e mai mare, cu atât cardul duce filmări mai pretențioase și rafale mai lungi. Formatează cardul în aparat, nu în calculator, și înlocuiește-l la primele semne de eroare.",
    combos: [
      "Rafale la sport sau natură sălbatică + card cu scriere susținută rapidă",
      "Filmare 4K + card din clasa video potrivită (V30 sau mai rapid, după formatul folosit)",
      "Ședințe importante + două carduri mai mici în loc de unul uriaș — riscul se împarte",
    ],
  },
];

export default function AccesoriiPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capitolul 4"
        title="Accesorii și combinații"
        lead="Accesoriul potrivit, în situația potrivită, valorează mai mult decât un aparat nou. Pentru fiecare accesoriu găsești aici și combinațiile în care strălucește."
      />

      <div className="container-site py-14 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Figure
            photo={photos.accesorii}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 34rem, 100vw"
            caption="Un set tipic: corp, obiective, blitz extern și mărunțișurile care le leagă pe toate."
          />
          <Figure
            photo={photos.trepied}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 34rem, 100vw"
            caption="Trepiedul la lucru: lumina scade, timpul de expunere crește, cadrul rămâne clar."
          />
        </div>
      </div>

      <section
        aria-labelledby="accesorii-titlu"
        className="border-t border-line bg-surface"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="accesorii-titlu"
            eyebrow="Ghid de asociere"
            title="Fiecare accesoriu, cu perechea lui"
            lead="Regula de aur: accesoriul se alege pentru o situație, nu „ca să fie”. Mai jos, fiecare piesă vine cu combinațiile ei câștigătoare."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {accessories.map((acc) => (
              <article
                key={acc.id}
                id={acc.id}
                className="card flex flex-col p-6 sm:p-7"
              >
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {acc.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {acc.what}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-terra-600">
                    Cum îl alegi și îl folosești
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {acc.how}
                  </p>
                </div>
                <div className="mt-5 rounded-xl bg-amber-tint p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-terra-700">
                    Combinații câștigătoare
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {acc.combos.map((combo) => (
                      <li
                        key={combo}
                        className="flex gap-2 text-sm leading-relaxed text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terra-500"
                        />
                        {combo}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
