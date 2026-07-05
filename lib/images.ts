/**
 * Registrul central de fotografii — toate imaginile folosite pe site.
 *
 * Sursă: Unsplash (CDN-ul oficial images.unsplash.com), cu atribuirea
 * fotografilor preluată din metadatele oficiale ale fiecărei fotografii.
 * Toate URL-urile au fost verificate (HTTP 200) înainte de publicare.
 */

export type Photo = {
  /** URL-ul de bază al imaginii pe CDN-ul Unsplash, fără parametri */
  raw: string;
  /** Dimensiunile originale, pentru raportul intrinsec al imaginii */
  w: number;
  h: number;
  /** Text alternativ, în română */
  alt: string;
  /** Numele fotografului, conform paginii oficiale Unsplash */
  photographer: string;
  /** Pagina fotografiei pe Unsplash */
  page: string;
};

const IMG_PARAMS = "q=75&auto=format&fit=crop";

export function imgSrc(photo: Photo, width = 1200): string {
  return `${photo.raw}?${IMG_PARAMS}&w=${width}`;
}

export function imgSrcSet(
  photo: Photo,
  widths: number[] = [480, 800, 1200, 1600]
): string {
  return widths
    .map((w) => `${photo.raw}?${IMG_PARAMS}&w=${w} ${w}w`)
    .join(", ");
}

export function creditUrl(photo: Photo): string {
  return `${photo.page}?utm_source=fotoghid&utm_medium=referral`;
}

export const photos = {
  hero: {
    raw: "https://images.unsplash.com/photo-1506434304575-afbb92660c28",
    w: 4898,
    h: 3265,
    alt: "Silueta unui fotograf cu aparatul pe trepied, la apus, pe malul oceanului",
    photographer: "KOBU Agency",
    page: "https://unsplash.com/photos/silhouette-photo-of-person-holding-camera-on-tripod-stand-outside-4H67yWXO2-M",
  },
  portret: {
    raw: "https://images.unsplash.com/photo-1750044010283-bcfab7777e26",
    w: 4160,
    h: 6240,
    alt: "Portretul unui tânăr în lumină naturală blândă, cu fundal estompat",
    photographer: "Jacob Mitani",
    page: "https://unsplash.com/photos/young-man-poses-in-natural-sunlight-FCrhYgBCFac",
  },
  peisaj: {
    raw: "https://images.unsplash.com/photo-1770341989953-f3efb336f7eb",
    w: 8766,
    h: 5361,
    alt: "Munți reflectați într-un lac liniștit la răsărit, în Dolomiți",
    photographer: "Intricate Explorer",
    page: "https://unsplash.com/photos/majestic-mountains-reflected-in-a-serene-lake-at-sunrise-gjI-YoxuFys",
  },
  strada: {
    raw: "https://images.unsplash.com/photo-1643717583148-950284638774",
    w: 5000,
    h: 4000,
    alt: "Persoană cu umbrelă pe o stradă de oraș, noaptea, în ploaie",
    photographer: "Deniz Demir",
    page: "https://unsplash.com/photos/a-person-holding-an-umbrella-on-a-city-street-at-night-ka0EXiJNQjk",
  },
  macro: {
    raw: "https://images.unsplash.com/photo-1565424508176-23452f59d217",
    w: 4255,
    h: 2843,
    alt: "Fotografie macro cu o libelulă în nuanțe de albastru și verde, pe o crenguță",
    photographer: "Clint Patterson",
    page: "https://unsplash.com/photos/blue-and-green-dragonfly-macro-photography-Ek_Dj8nWq_k",
  },
  astro: {
    raw: "https://images.unsplash.com/photo-1742626157111-59f3f1019a8a",
    w: 6720,
    h: 4480,
    alt: "Calea Lactee și mii de stele pe un cer nocturn întunecat",
    photographer: "Tobias Rademacher",
    page: "https://unsplash.com/photos/milky-way-and-stars-in-a-dark-night-sky-oQR1B87HsNs",
  },
  salbaticie: {
    raw: "https://images.unsplash.com/photo-1480472684115-4966367dde1d",
    w: 5172,
    h: 3444,
    alt: "O vulpe roșcată privind direct spre aparat, în mediul ei natural",
    photographer: "Gary Bendig",
    page: "https://unsplash.com/photos/red-fox-Yu-qayee34c",
  },
  arhitectura: {
    raw: "https://images.unsplash.com/photo-1758450062546-4629a717c5fc",
    w: 4500,
    h: 3000,
    alt: "Fațadă modernă cu balcoane triunghiulare din lemn, într-un tipar geometric repetitiv",
    photographer: "Fer Troulik",
    page: "https://unsplash.com/photos/geometric-pattern-of-triangular-building-balconies-LID9JdOx22I",
  },
  diafragma: {
    raw: "https://images.unsplash.com/photo-1548364758-97afefe172f3",
    w: 3666,
    h: 5499,
    alt: "Femeie în palton roșu, perfect clară, pe un fundal urban complet estompat",
    photographer: "David Hurley",
    page: "https://unsplash.com/photos/woman-in-red-coat-standing-beside-building-on-selective-focus-photography-llq_9EOSeJc",
  },
  expunereLunga: {
    raw: "https://images.unsplash.com/photo-1736616645685-a88b3ecda98c",
    w: 4197,
    h: 2623,
    alt: "Cascadă cu apa transformată într-un văl mătăsos printr-o expunere lungă",
    photographer: "Marek Piwnicki",
    page: "https://unsplash.com/photos/a-long-exposure-of-a-waterfall-in-the-woods-E_g13pLTwls",
  },
  isoNoapte: {
    raw: "https://images.unsplash.com/photo-1711539925041-c94ababfb763",
    w: 6000,
    h: 4000,
    alt: "Stradă aglomerată, plină de reclame luminoase, fotografiată noaptea",
    photographer: "mos design",
    page: "https://unsplash.com/photos/a-busy-city-street-at-night-with-neon-lights-1VbC_MpB3zw",
  },
  regulaTreimilor: {
    raw: "https://images.unsplash.com/photo-1567853042143-8d8480f022ad",
    w: 4896,
    h: 3264,
    alt: "Copac singuratic pe un câmp verde la ora de aur, plasat în afara centrului cadrului",
    photographer: "Simon Wilkes",
    page: "https://unsplash.com/photos/green-field-during-golden-hour-uH5OXBhnSNg",
  },
  liniiDirectoare: {
    raw: "https://images.unsplash.com/photo-1724253199185-b167c864979f",
    w: 3772,
    h: 4715,
    alt: "Alee mărginită de copaci care conduce privirea în adâncimea cadrului",
    photographer: "Mohamed B.",
    page: "https://unsplash.com/photos/a-path-lined-with-trees-and-leaves-leading-into-the-distance-a-FBmDKvVO0",
  },
  incadrare: {
    raw: "https://images.unsplash.com/photo-1759893576665-c59922b5b003",
    w: 3785,
    h: 5678,
    alt: "Femeie privind printr-o fereastră mare la apus, încadrată de rama ferestrei",
    photographer: "Ryunosuke Kikuno",
    page: "https://unsplash.com/photos/woman-looking-out-a-large-window-at-sunset-3Q6v_ulD78o",
  },
  oraDeAur: {
    raw: "https://images.unsplash.com/photo-1779497056472-2fa5e883dd36",
    w: 3790,
    h: 4737,
    alt: "Profilul unui tânăr luminat de lumina caldă și joasă a orei de aur",
    photographer: "Alef Morais",
    page: "https://unsplash.com/photos/young-mans-profile-illuminated-by-warm-golden-hour-sunlight-mba4D4BrBEQ",
  },
  contralumina: {
    raw: "https://images.unsplash.com/photo-1586211082529-b7c6b640abff",
    w: 4843,
    h: 3224,
    alt: "Silueta unei femei în contralumină, lângă o fereastră cu jaluzele",
    photographer: "Jorge Salvador",
    page: "https://unsplash.com/photos/silhouette-of-woman-standing-near-window-blinds-vVINLKZtGOI",
  },
  echipamente: {
    raw: "https://images.unsplash.com/photo-1486257293255-8810a92c541f",
    w: 3976,
    h: 2753,
    alt: "Aparate foto, obiective și accesorii aranjate pe o suprafață, văzute de sus",
    photographer: "Jakob Owens",
    page: "https://unsplash.com/photos/flat-lay-photography-of-cameras-and-camera-gear-fkaZiACUb5w",
  },
  accesorii: {
    raw: "https://images.unsplash.com/photo-1535536398915-a79396b523a0",
    w: 6016,
    h: 4016,
    alt: "Set DSLR cu obiective, blitz extern și accesorii, fotografiat de sus",
    photographer: "CHUTTERSNAP",
    page: "https://unsplash.com/photos/flat-lay-photography-of-dslr-camera-set-f2LWA5vnAQw",
  },
  trepied: {
    raw: "https://images.unsplash.com/photo-1523286680734-c387ced73af5",
    w: 7952,
    h: 5304,
    alt: "Silueta unui fotograf lângă aparatul montat pe trepied, la apus",
    photographer: "Roger Erdvig",
    page: "https://unsplash.com/photos/silhouette-of-man-standing-beside-camera-tripod-during-sunset-g6y5mm9Zby0",
  },
  editare: {
    raw: "https://images.unsplash.com/photo-1487537708572-3c850b5e856e",
    w: 4081,
    h: 2716,
    alt: "Fotograf editând o fotografie pe laptop, la birou",
    photographer: "Glenn Carstens-Peters",
    page: "https://unsplash.com/photos/person-editing-photo-on-computer-SL5d_8ywAAA",
  },
  editareDemo1: {
    raw: "https://images.unsplash.com/photo-1577355858396-ca87dffbfab8",
    w: 6000,
    h: 4000,
    alt: "Lan de floarea-soarelui în lumina caldă a apusului",
    photographer: "Rhys Kentish",
    page: "https://unsplash.com/photos/sunflower-field-during-golden-hour-GFQN52hBoG4",
  },
  editareDemo2: {
    raw: "https://images.unsplash.com/photo-1769784497064-d791c39fef39",
    w: 4065,
    h: 6097,
    alt: "Cuplu sub umbrelă pe o stradă udă, noaptea, între luminile orașului",
    photographer: "Tobias Reich",
    page: "https://unsplash.com/photos/couple-sharing-umbrella-on-wet-city-street-at-night-TSc68QaZTPQ",
  },
  galeriePeyto: {
    raw: "https://images.unsplash.com/photo-1507768738058-c38687b47c36",
    w: 4016,
    h: 6016,
    alt: "Lac glaciar turcoaz înconjurat de munți, la ora de aur",
    photographer: "Tyler Lillico",
    page: "https://unsplash.com/photos/photo-of-lake-near-mountain-at-golden-hour-zbZQQ1a2WWg",
  },
  galerieUmbrele: {
    raw: "https://images.unsplash.com/photo-1775315815915-43af175d4c95",
    w: 7008,
    h: 4672,
    alt: "Oameni cu umbrele traversând o stradă udă, noaptea",
    photographer: "ayumi kubo",
    page: "https://unsplash.com/photos/people-with-umbrellas-cross-a-wet-street-at-night-8nigJItHxkU",
  },
  galerieLibelula: {
    raw: "https://images.unsplash.com/photo-1705649538269-2837d441a588",
    w: 5346,
    h: 3564,
    alt: "Libelulă cu aripi delicate, așezată pe o floare",
    photographer: "David Clode",
    page: "https://unsplash.com/photos/a-close-up-of-a-dragon-fly-on-a-flower-Wz855vzBEZo",
  },
  galerieCaleaLactee: {
    raw: "https://images.unsplash.com/photo-1765825365130-52e276bca060",
    w: 3055,
    h: 4582,
    alt: "Calea Lactee arcuindu-se deasupra siluetelor întunecate ale munților",
    photographer: "Filip Kvasnak",
    page: "https://unsplash.com/photos/milky-way-galaxy-over-silhouetted-mountains-at-night-UeRIcbTthwE",
  },
  galerieVulpe: {
    raw: "https://images.unsplash.com/photo-1694013019286-e823be0b06d9",
    w: 6000,
    h: 4000,
    alt: "Prim-plan cu chipul unei vulpi roșcate",
    photographer: "bunting wild photography",
    page: "https://unsplash.com/photos/a-close-up-of-a-red-foxs-face-y52pO-0EfF8",
  },
  galerieFatade: {
    raw: "https://images.unsplash.com/photo-1758846946193-64fade0d6b3e",
    w: 3888,
    h: 5184,
    alt: "Fațade geometrice ale unor clădiri moderne",
    photographer: "Sebastian Schuster",
    page: "https://unsplash.com/photos/modern-building-facade-with-geometric-patterns-ItVmW5GkNI0",
  },
  galerieSilueta: {
    raw: "https://images.unsplash.com/photo-1514899559777-eb59bbe0be90",
    w: 2200,
    h: 1486,
    alt: "Persoană pe malul unui lac de munte, în contralumină, la ora de aur",
    photographer: "Dino Reichmuth",
    page: "https://unsplash.com/photos/silhouette-of-person-standing-on-lake-surrounded-by-mountains-under-cloudy-sky-during-golden-hour-YIaRp5Pn4bM",
  },
  galerieNoapte: {
    raw: "https://images.unsplash.com/photo-1663145034955-1b61b81ad00f",
    w: 5939,
    h: 3959,
    alt: "Cer înstelat deasupra unui lanț muntos, noaptea",
    photographer: "Vadim Artyukhin",
    page: "https://unsplash.com/photos/a-starry-night-sky-over-a-mountain-range-f96OksVxhZ4",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Lista tuturor fotografiilor, pentru secțiunea de credite. */
export const allPhotos: Photo[] = Object.values(photos);
