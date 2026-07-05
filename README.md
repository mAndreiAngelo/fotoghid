# FotoGhid

Site educațional de fotografie, integral în limba română: stiluri de
fotografie, triunghiul expunerii, compoziție, lumină, echipamente,
accesorii, rapoarte de aspect și editare.

Construit cu **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Rulare locală

```bash
cd E:\Claude\fotoghid
npm run dev
```

Apoi deschide [http://localhost:3000](http://localhost:3000).

> Dacă `node`/`npm` nu sunt recunoscute în terminalul curent, deschide un
> terminal nou (Node.js LTS a fost instalat prin winget) sau rulează
> `dev.cmd` din acest director, care adaugă singur Node.js la PATH.

Pentru versiunea de producție:

```bash
npm run build
npm run start
```

## Structură

- `app/` — paginile site-ului (Acasă, Stiluri, Sfaturi, Echipamente,
  Accesorii, Editare, Galerie)
- `components/` — componente reutilizabile (Header, Footer, Figure,
  diagrame SVG, comparații înainte/după)
- `lib/images.ts` — registrul central al fotografiilor: URL-uri Unsplash
  verificate, text alternativ în română și atribuirea fiecărui fotograf

## Fotografii

Toate fotografiile provin de la fotografii comunității
[Unsplash](https://unsplash.com) și sunt folosite conform
[licenței Unsplash](https://unsplash.com/license), cu credit vizibil sub
fiecare imagine și o secțiune completă de credite pe pagina Galerie.
