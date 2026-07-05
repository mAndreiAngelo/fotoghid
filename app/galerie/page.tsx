import type { Metadata } from "next";
import Figure from "@/components/Figure";
import PageIntro from "@/components/PageIntro";
import SectionHeader from "@/components/SectionHeader";
import { allPhotos, creditUrl, photos, type Photo } from "@/lib/images";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "O galerie de fotografii-exemplu, fiecare însoțită de tehnica pe care o ilustrează — plus creditele complete pentru fotografii Unsplash.",
};

type GalleryItem = {
  photo: Photo;
  technique: string;
  caption: string;
  aspect: string;
};

const gallery: GalleryItem[] = [
  {
    photo: photos.galeriePeyto,
    technique: "Peisaj la ora de aur",
    caption:
      "Lumina joasă colorează cerul, iar punctul de belvedere înalt deschide adâncimea văii.",
    aspect: "aspect-[3/4]",
  },
  {
    photo: photos.galerieUmbrele,
    technique: "Fotografie de stradă",
    caption:
      "Ploaia dublează orașul în reflexii; umbrelele dau ritm și repetiție cadrului.",
    aspect: "aspect-[3/2]",
  },
  {
    photo: photos.galerieLibelula,
    technique: "Macro cu lumină naturală",
    caption:
      "Focalizare precisă pe subiect și fundal curat: profunzimea mică de câmp izolează libelula.",
    aspect: "aspect-[3/2]",
  },
  {
    photo: photos.galerieCaleaLactee,
    technique: "Astrofotografie",
    caption:
      "Expunere lungă de pe trepied sub un cer fără poluare luminoasă: Calea Lactee prinde contur.",
    aspect: "aspect-[3/4]",
  },
  {
    photo: photos.galerieVulpe,
    technique: "Natură sălbatică în prim-plan",
    caption:
      "Teleobiectivul comprimă perspectiva și umple cadrul; focalizarea cade pe ochi.",
    aspect: "aspect-[3/2]",
  },
  {
    photo: photos.galerieFatade,
    technique: "Arhitectură și geometrie",
    caption:
      "Decupaj strâns pe tipare repetitive: fațada devine compoziție abstractă.",
    aspect: "aspect-[3/4]",
  },
  {
    photo: photos.galerieSilueta,
    technique: "Siluetă în contralumină",
    caption:
      "Expunerea pe cerul luminos transformă subiectul în siluetă și simplifică scena.",
    aspect: "aspect-[3/2]",
  },
  {
    photo: photos.galerieNoapte,
    technique: "Peisaj nocturn",
    caption:
      "ISO ridicat, obiectiv luminos și trepied: rețeta cerului înstelat deasupra munților.",
    aspect: "aspect-[3/2]",
  },
];

export default function GaleriePage() {
  const credits = [...allPhotos].sort((a, b) =>
    a.photographer.localeCompare(b.photographer, "ro")
  );

  return (
    <>
      <PageIntro
        eyebrow="Capitolul 6"
        title="Galerie"
        lead="Fiecare fotografie de mai jos ilustrează o tehnică din acest ghid. Privește-le ca pe niște teme de lucru: alege una și încearcă să o reproduci cu echipamentul tău."
      />

      <div className="container-site py-14 sm:py-16">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <li key={item.photo.page}>
              <Figure
                photo={item.photo}
                aspect={item.aspect}
                sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                caption={
                  <>
                    <span className="mb-1.5 inline-block rounded-full bg-terra-50 px-3 py-0.5 text-xs font-semibold text-terra-700">
                      {item.technique}
                    </span>
                    <span className="block">{item.caption}</span>
                  </>
                }
              />
            </li>
          ))}
        </ul>
      </div>

      <section
        aria-labelledby="credite-titlu"
        className="border-t border-line bg-surface scroll-mt-20"
        id="credite"
      >
        <div className="container-site py-14 sm:py-16">
          <SectionHeader
            id="credite-titlu"
            eyebrow="Mulțumiri"
            title="Credite foto"
            lead="Toate fotografiile de pe FotoGhid aparțin fotografilor comunității Unsplash și sunt folosite conform licenței Unsplash. Le mulțumim — vizitați-le portofoliile:"
          />
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((photo) => (
              <li key={photo.page} className="text-sm leading-relaxed">
                <a
                  href={creditUrl(photo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-terra-700 underline decoration-line underline-offset-2 transition-colors hover:text-terra-600"
                >
                  {photo.photographer}
                </a>
                <span className="text-ink-soft"> — {photo.alt}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-soft">
            Sursă:{" "}
            <a
              href="https://unsplash.com/?utm_source=fotoghid&utm_medium=referral"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-2 hover:text-terra-600"
            >
              Unsplash
            </a>{" "}
            · imagini servite prin CDN-ul oficial Unsplash.
          </p>
        </div>
      </section>
    </>
  );
}
