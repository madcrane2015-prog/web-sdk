# Rockabilly Reels 1.7.0 — jaettava testiversio

## Linkit

- Suora testi ilman salasanaa: https://madcrane2015-prog.github.io/web-sdk/oma-peli/test/
- Tavallinen peli: https://madcrane2015-prog.github.io/web-sdk/oma-peli/
- Localhost: http://127.0.0.1:3010/test/

Sama responsiivinen versio toimii desktopissa ja mobiilissa. Testi käyttää
leikkisaldoa, ei oikeaa rahaa. Tavallisen pelin nykyinen salasana säilyy.

## Matematiikka

balanced-96-v1 on oletus: 66 % peruspelistä + 30 % kokonaisista bonusketjuista.
30 miljoonan maksetun kierroksen testissä palautus oli 95,9023 %; likimääräinen
95 % luottamusväli 95,5356–96,2690 %. Voitot lasketaan täydellä tarkkuudella,
näyttö pyöristää kahteen desimaaliin. Tämä ei ole senttipyöristetty rahapelimalli.
Voittotaulu näyttää peruspelin ja vapaapelien korotetut maksuarvot erikseen.
Nollakierrosten osuus ja osumatodennäköisyydet säilyvät aiempina.

## Mitä testaajan kannattaa kokeilla

1. Tavallinen kierros ja animaation ohittaminen: kiekot pysähtyvät loppuun.
2. Panoksen vaihtaminen ennen kierrosta; panos lukittuu kierroksen ja bonuksen ajaksi.
3. Autoplay, pysäyttäminen, nopeus ja äänipainikkeet.
4. DEBUG → Test Free Spins → Sulje: vapaapelit jatkuvat automaattisesti,
   päättyvät yhteenvetoon eivätkä aloita maksullista kierrosta.
5. Voittotaulun avaaminen ja sulkeminen, puhelimen pysty-/vaakasuunta.

Palaute: laite ja selain, versio 1.7.0, mitä tehtiin, odotettu ja toteutunut
tulos sekä mahdollinen kuvakaappaus. Demo ei tallenna testaajien palautetta palvelimelle.
Debugilla annetut vapaapelit eivät ole kelvollinen RTP-otos.

## Varmuuskopio ja palautus

GitHubin palautettava lähdekooditunniste:
`backup/rockabilly-pre-96-2026-10-15`.

Commit: `c42bd67273c1e952ee5e7492611e02718a166599`.
Sen tavallinen pelireitti käyttää edelleen 80,6792 %:n matematiikkaa.
Paikallinen koko lähdekoodin ZIP: `.codex-screenshots/rockabilly-pre-96-2026-10-15.zip`.
Tagi on lähetetty GitHubiin. Palautus tehdään erilliseen checkoutiin tagista,
asentamalla lukitut riippuvuudet ja rakentamalla appi; nykyistä työpuuta ei
tarvitse ylikirjoittaa. Vanha julkaistu GitHub-versio säilyy myös päähaaran historiassa.

## Varmennus

`pnpm --filter=oma-peli test:domain` sisältää 4 000 aktiivisen providerin
vertailua vanhaan malliin samoilla arvonnoilla sekä kirjanpito-/panoslukitustestit.
`test:reel-stop` tarkistaa 27 ohitusskenaariota. `audit:math` tarkistaa nyt
96 %:n mallin; `audit:baseline` säilyttää vanhan vertailumallin tarkistuksen.
Suuri simulaatio ja lähdeaineisto: `EXPERIMENTAL_96_SIMULATION_30M.md`.
