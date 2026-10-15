# Rockabilly Reels – arkkitehtuurikartoitus ja siivoussuunnitelma

Päiväys: 14.10.2026. Lähtökohta: versio 1.5.4, nykyinen työskentelykopio.
Tila: kartoitus tehty, toteutusvaiheet suunniteltu. Tämä työ ei muuta pelin toimintaa.

## Päätös ja tavoite

Yksi ylläpidettävä Rockabilly Reels -käyttöliittymä, yksi kierroksen tilakone ja kaksi
selvästi erotettua tuloslähdettä: paikallinen demo ja Stake RGS. Nykyinen ulkoasu,
81 ways -pelin käyttäytyminen ja mobiilin sommittelu säilytetään siivouksen aikana.
Matematiikan muuttaminen ja Stakeen julkaiseminen ovat erillisiä vaiheita.

Matematiikkatarkistus 14.10.2026: `ACTIVE_MATH_AUDIT.md` osoittaa nykyisen
kiinteän panoksen RTP:ksi 80,6792 %, joten 95 % tavoite ei toteudu nykyisillä
arvoilla. Priorisoi kierros-/bonuspanoksen lukitus ja tilastojen luokittelu
ennen kalibrointia. Auditissa esitettyä 95 % skaalainta ei ole otettu käyttöön.

Ensimmäiseksi puretaan aktiivisen pelin vastuut. Sen jälkeen yhdistetään käyttöliittymä
SDK:n tapahtumapolkuun. SDK-toteutuksen täydellistä korvaamista tai säilyttämistä ei
ratkaista pelkän kansionimen tai vanhojen kommenttien perusteella.

## Kartoituksen rajaus ja näyttö

Luettu aktiivinen reitti, keskeiset pelikomponentit, standalone-moduulit, SDK:n actor,
context, tapahtumatyypit ja käsittelijät, RGS-pyyntömoduuli, autentikointikomponentti,
layoutin rakenne, simulaattorin kytkentä, julkaisuworkflow ja aiemmat refaktorointidokumentit.
Tiedostokohtainen polku-, koko-, SHA-256- ja alustava toimenpideluettelo on
`ARCHITECTURE_INVENTORY.json`-tiedostossa. Se kattaa alla mainitut kuusi kansiota.

Kaikkien Git-historian versioiden toimivuutta ei ole testattu. Vanhojen julkaisutiedostojen
ulkopuolisia käyttäjiä tai käsin tehtyjä latauksia ei voida päätellä repositoriosta.
Hashin vastaavuus todistaa saman tiedostosisällön; poisto-oikeutta tai käyttämättömyyttä
se ei todista. Tämä on arkkitehtuurikartoitus, ei täydellinen pelimatematiikan auditointi.

| Kohde | Tiedostoja | Koko noin | Nykyinen rooli |
|---|---:|---:|---|
| `apps/oma-peli/src` | 114 | 22,4 MiB | Aktiivinen lähdekoodi, SDK-polku ja myös työkalukopioita |
| `apps/oma-peli/static` | 314 | 100,0 MiB | Aktiivisen buildin staattiset resurssit |
| `apps/oma-peli/build` | 344 | 101,0 MiB | Generoitu julkaisu; GitHub-workflow käyttää tätä |
| `oma-peli` | 299 | 91,3 MiB | Julkaisun kaltainen erillinen snapshot, ei aktiivinen Svelte-lähde |
| `temp-deploy` | 523 | 153,8 MiB | Toinen julkaisu-/resurssisnapshot |
| `web-sdk/oma-peli` | 54 | 8,4 MiB | Erillinen symboliresurssien kokoelma |

Luvut ovat tämän kartoituksen hetkeltä. Buildin tiedostonimet ja määrä muuttuvat käännöksissä.
`New_Wild.jpg` ja `ReelFrames.png` ovat hashiltaan samat aktiivisessa static-kansiossa,
juuren `oma-peli`-kansiossa ja `temp-deploy`-kansiossa. Kaikkia kansioita ei voi tämän
otoksen perusteella kutsua keskenään identtisiksi.

## Nykyiset toteutuspolut

```text
+layout.svelte -> SDK Authenticate / i18n / globaalit tyylit
  +page.svelte -> PasswordProtection -> HelloPixi.svelte
    game-standalone/* + components/standalone/* + static/*
    paikallinen saldo, satunnaistulos, voitot, free spinit ja autoplay

Storybook -> game/context.ts -> Game.svelte
  EnableGameActor -> game/actor.ts -> BookEvent-käsittelijät
  EmitterEvent -> Board / Win / FreeSpin* / Sound / SDK-kontrollit
```

Autentikointikääreen mukanaolo sivulla ei tee HelloPixistä RGS-ohjattua peliä.
`Authenticate.svelte` päivittää jaetun SDK-tilan, mutta HelloPixillä on oma saldo ja
pelitila. SDK:n actor/tapahtumapolku ja julkaistu kierros eivät ole sama toteutus.
Storybookin läpäisy ei siis todista julkaistun reitin toimivuutta.

## Keskeiset löydökset

1. **HelloPixi on yhä noin 2 800 rivin kokoinen vastuukeskittymä.** Se hallitsee
   Pixi-alustusta, kierrosta, tuloslaskennan kutsuja, saldoa, free spinejä, autoplayta,
   ääntä, näyttökokoa, debugia ja näkymiä. Jo erotetut moduulit ovat käyttökelpoinen pohja.
2. **Kierroksen omistajuus on epäselvä.** Viimeisin pysähtymisbugi syntyi, kun nappi
   ja näppäimistö asettivat kiekon sisäisen tilan suoraan. `requestStop()` korjaa
   tämän reitin, mutta julkisia muutettavia kenttiä on edelleen. UI tarvitsee komento-API:n.
3. **Layoutilla on useita totuuslähteitä.** `layoutConfig.ts`, `layoutUtils.ts`,
   `uiLayout.ts`, `stageComposition.ts`, komponentin koordinaatit ja CSS-mediarajat
   vaikuttavat samaan näkymään. Keskiruudun viimeisin korjaus osoitti maskin ja
   symbolin käyttäneen eri pystysuuntaista koordinaatistoa.
4. **Matematiikan kuvaukset eivät ole yhdenmukaiset.** Aktiivinen
   `game-standalone/math.ts` käyttää keskikiekossa 55 % Wildia; `PaytableSection.svelte`
   ilmoittaa 50 %. `game/config.ts` on merkitty vanhentuneeksi matematiikkaviitteeksi,
   vaikka SDK-polku yhä importoi sitä. Se sisältää myös eri sääntöjä kuvaavia kommentteja.
   `src/tools/math-sim.cjs` käyttää omaa YAML-konfiguraatiota. RTP-lukuja ei pidä
   vahvistaa tämän kartoituksen perusteella.
5. **Tila on osittain erotettu, mutta ei keskitetty.** `state.ts` antaa oletusarvot ja
   `actions.ts` palauttaa siirtymiä; HelloPixi pitää edelleen lukuisat erilliset `$state`-arvot.
   SDK:n jaettu tila muodostaa toisen kokonaisuuden.
6. **Julkaisukohde vaikuttaa resurssipolkuihin.** GitHub Pages -base on
   `/web-sdk/oma-peli`; resurssimanifesti ja host-erikoistapaukset pitää erottaa
   Stake-paketoinnista. `.github/workflows/deploy-oma-peli.yml` rakentaa aktiivisen
   sovelluksen ja julkaisee `apps/oma-peli/build`-kansion `gh-pages`-haaraan.
7. **Dokumentaatio sisältää jo ratkaistuja avoimia kysymyksiä.** Vanhan YAML-suunnitelman
   review queue kysyy edelleen Howlerin pakettiriippuvuudesta ja puuttuvasta loopista 14,
   vaikka paketti ja loopin poissulkeminen ovat jo käytössä. Alkuperäisten vaiheiden
   valmistuminen ei tarkoita Stake-integraation valmistumista.

## Säilytä–yhdistä–arkistoi: tiedostokohtaiset päätökset

Polut tässä taulukossa ovat suhteessa `apps/oma-peli`-kansioon, ellei muuta mainita.
Toimenpiteet ovat suunnitelmia; mitään näistä ei ole poistettu tässä työssä.

| Tiedosto tai rajattu tiedostoryhmä | Toimenpide | Peruste ja seuraava konkreettinen työ |
|---|---|---|
| `src/routes/+page.svelte` | Säilytä, selkeytä myöhemmin | Valitse käynnistyksessä demo/RGS eksplisiittisesti; yksi pelinäkymä |
| `src/routes/+layout.svelte` | Säilytä, yhdistä vastuut | Autentikoinnin ja globaalin layoutin rajat; älä päivitä kahta saldoa |
| `src/components/HelloPixi.svelte` | Pura ja yhdistä | Siirrä kierros, runtime, audio ja layout erillisiin omistajiin; jätä näkymäkoostumus |
| `src/game-standalone/reel.ts` | Säilytä, vahvista rajapinta | Yksityinen tilasiirtymä; renderöijä saa lopputuloksen ulkoa ennen RGS-vaihetta |
| `src/game-standalone/pixiRuntime.ts` | Säilytä ja laajenna | Sovellus, maskit, resurssit, ticker ja yhtenäinen dispose |
| `src/game-standalone/math.ts`, `mathConfig.ts`, `types.ts` | Säilytä demossa | Aktiivisten demosääntöjen lähde; RGS-tilassa ei asiakaspään tulosarvontaa |
| `src/game-standalone/state.ts`, `actions.ts` | Yhdistä ohjaimeen | Yksi kierroksen tila ja siirtymät; erota saldo verkko-/demopalveluun |
| `src/game-standalone/assets.ts` | Säilytä ja selkeytä | Yksi manifesti; build-kohde määrittää juuripolun |
| `src/config/layoutConfig.ts`, `src/utils/layoutUtils.ts` | Yhdistä layout-sopimukseen | Näyttöluokka ja geometria samasta mallista; poista vanha rinnakkainen laitetunnistus vaiheittain |
| `src/game-standalone/uiLayout.ts`, `stageComposition.ts` | Säilytä, yhdistä koordinaatit | Kehys, aukot, symbolit ja HTML-kontrollit yhden geometrialaskennan kautta |
| `src/components/standalone/DesktopControlBar.svelte` | Säilytä | Hyväksytty desktop-ulkoasu; käytä samaa komento-API:a kuin mobiili |
| `SpinButton.svelte`, `BetControls.svelte`, `MenuButton.svelte`, `QuickActions.svelte`, `TopToggles.svelte` samassa kansiossa | Säilytä | UI lähettää toimintoja, ei muuta kiekkoja tai saldoa |
| `DesktopControlPanel.svelte`, `MobileControlPanel.svelte`, `ControlPanelFrame.svelte` samassa kansiossa | Yhdistä viittauskartoituksen jälkeen | Osa on ohuita bet-wrappereita; vanha paneeli on yhä fallback-polussa |
| `WinPopup.svelte`, `FreeSpinsEndPopup.svelte`, `StatusMeters.svelte`, `AutoplayMenu.svelte`, `SettingsSection.svelte`, `ModalShell.svelte`, `controlPanelApi.ts` samassa kansiossa | Säilytä, yhtenäistä tila/props | Näkymät toimivat samoilla tilannekuvilla demossa ja RGS:ssä |
| `PaytableSection.svelte` samassa kansiossa | Yhdistä sääntömanifestiin | Poista käsin kopioidut arvot; selvitä 50/55 %-ristiriita dokumentointikorjauksena |
| `DebugPanel.svelte`, `PasswordProtection.svelte` | Demo-/kehityskäyttö | Erillinen debug-koostumus ja demoportti; eivät tuotannon autentikointia |
| `src/components/Game.svelte`, `EnableGameActor.svelte`, `ResumeBet.svelte` | Säilytä migraatiovaiheeseen | Selvitä käyttökelpoisuus aktiivisen ulkoasun kanssa; ei sokkona reitinvaihtoa |
| `src/game/actor.ts`, `context.ts`, `utils.ts`, `bookEventHandlerMap.ts`, `typesBookEvent.ts`, `typesEmitterEvent.ts`, `eventEmitter.ts` | Säilytä ja sovita | SDK:n tapahtuma-/resume-runko; varmista Rockabillyn 13 solun koordinaatit |
| `src/game/config.ts`, `symbols.ts`, `stateGame.svelte.ts`, `stateApp.ts`, `stateLayout.ts`, `stateXstate.ts` | Arvioi ja yhdistä | Importit tekevät näistä SDK-polun riippuvuuksia; vanhentunut kommentti ei riitä poistoon |
| `src/components/Board*.svelte`, `Win.svelte`, `FreeSpin*.svelte`, `Sound.svelte` | Vertaa, siirrä tai korvaa vaiheittain | Näyttöpolkujen erot dokumentoidaan fixtureilla ennen valintaa |
| `src/stories/*`, `.storybook/*` | Säilytä ja päivitä | Tarvitaan tapahtumatestin ja renderöijän vertailuun; lisää aktiivisen näkymän tarinat |
| `scripts/test-reel-stop.mjs` | Säilytä | Todellinen pysähtymisregressio; liitä CI:hin |
| `scripts/capture-audit-screenshots.mjs`, `UI_TEST_MATRIX.md`, `reports/*` | Selkeytä | Erottele toistettava testi ja historialliset kuvakaappaukset; nykyisiä kuvia ei poisteta |
| `src/tools/math-config.yml`, `src/tools/math-sim.cjs`, `run-sim.ps1` | Säilytä kunnes vertailtu | Nykyinen simulaattoriketju; erilliset säännöt täytyy verrata aktiiviseen matematiikkaan |
| `math-simulator.js`, `rtp-calculator.js`, `rtp-simulator*.js` | Arvioi, valitse yksi ylläpidettävä työkalu | Aja samat seedatut fixturet; älä päättele yhdenmukaisuutta nimistä |
| `src/tools/*varmuuskopio*`, `src/tools/tuhottavat/*` | Arkistointiehdokas | Ei poisteta ilman sisältö-/kuluttajavertailua; nimi ei ole poistovaltuutus |
| `static/*` | Säilytä aktiivisena resurssilähteenä | Tee importtien, manifestin, dynaamisten URLien ja latausten käyttökartta |
| `static/symbols/vanhat*`, `static/symbols – kopio/*`, vastaavat pakatut resurssikopiot | Arkistointiehdokas | Varmista ainutlaatuiset sisällöt ja dynaamiset viitteet ennen siirtämistä |
| `build/*`, `.svelte-kit/*`, `.turbo/*` | Generoidut | Buildin Git-seurannan lopettaminen erillinen CI-muutos; reproducible build ensin |
| Repon juuren `oma-peli/*`, `temp-deploy/*`, `web-sdk/oma-peli/*` | Arkistointiehdokas | Nykyinen workflow ei käytä niitä julkaisun lähteenä; varmista muut kuluttajat ja ainutlaatuiset resurssit |
| `packages/rgs-requests`, `rgs-fetcher`, `utils-xstate`, `utils-book`, `state-shared` | Säilytä yhteisinä | Hyödynnä olemassa oleva verkkokerros; sovelluskohtaisia korjauksia ei levitetä muihin peleihin |
| `OMA_PELI_REFACTOR_PLAN.yaml`, `OMA_PELI_UI_REFACTOR_PHASES.md`, `LAYOUT_*.md`, `MATH_*.md`, `MATEMATIIKKA_YHTEENVETO.md` | Yhdistä dokumentoinnin vastuut | Master kuvaa nykytilan; tämä suunnitelma tulevat vaiheet; YAML seuraa toteutusta |
| `.github/workflows/deploy-oma-peli.yml` | Säilytä ja kehitä | Lisää regressiot ennen julkaisua; erottele demo- ja Stake-artifactit |
| `package.json`, `src/version.ts` | Yhdistä version lähde | Johda näyttöversio paketista buildissa; älä ylläpidä kahta käsin päivitettävää numeroa |

## Ehdotettu tavoiterakenne

Nimet ovat ehdotuksia, eivät jo toteutettuja moduuleja. Uudet kansiot sijoitetaan
ensin sovelluksen sisälle; yhteisiin packages-kansioihin siirretään vain todistetusti yhteinen osa.

```text
src/
  app/             käynnistys, demo/RGS-valinta, asetukset
  domain/          symbolit, RoundResult, koordinaatit, komennot, tilasiirtymät
  game/            SDK actor ja BookEvent -> yhteinen tulos/tapahtuma -sovitus
  providers/
    demo/          paikallinen RNG, demosaldo ja demo-matematiikka
    stake/         nykyisen RGS-kerroksen sovitus, resume, virheiden käsittely
  runtime/         Pixi, kiekot, resurssit, ääni, ajastimet ja dispose
  layout/          näyttöluokat, yksi geometria, raamien aukot ja kontrollipaikat
  components/      pelinäkymä, desktop-/mobiilikontrollit ja overlayt
  stories/         tapahtuma- ja näkymäfixturet
tests/             tilasiirtymät, sopimukset ja julkaistun reitin selainregressiot
tools/             yksi ylläpidettävä simulaattori ja resurssitarkistukset
```

Virtaus: käyttäjän komento -> kierroksen ohjain -> tuloslähde -> validoitu tulos /
BookEvent-sekvenssi -> animaatio -> valmistuminen. Demo voi tuottaa tuloksen
paikallisesti. Stake-tilassa tulos ja saldo tulevat palvelimelta. Animaation ohitus
nopeuttaa esitystä, eikä arvo uutta palvelintulosta tai sulje kierrosta kahdesti.

## Vaiheet ja valmistumiskriteerit

| Vaihe | Konkreettinen tuotos | Valmistumiskriteeri |
|---|---|---|
| A – Totuuslähteet | Resurssi-/importtikartta, demosääntöjen ristiriitalista, dokumenttien omistajuus | Jokaisella aktiivisella lähteellä ja kopioehdokkaalla rooli; ainutlaatuiset resurssit tunnistettu |
| B – Toiminnan suojaus | Seedatut tulosfixturet, julkaistun reitin selainregressiot, pysähtymistesti CI:hin | Normaali/ohitettu kierros, tuplaklikkaus, voitto, free spinit ja autoplay läpäisevät; pysty/vaaka/desktop-kuvat |
| C – Kierroksen omistaja | Ohjain ja komennot start/skip/autoplay; tilakoneen yksityiset siirtymät | UI ei kirjoita reel.state/saldo/free spin -kenttiin; yksi valmistumis- ja voittokäsittely |
| D – Runtime ja layout | Pixi/audio-lifecycle, geometria-API ja pieni näkymäkoostumus | Mount/unmount/resize eivät jätä tickereitä tai ajastimia; sama koordinaatisto maskille, symbolille ja raamille |
| E – Demo/RGS-sopimus | RoundResult ja tuloslähteen rajapinta, mockatut vastaukset | Sama hyväksytty ulkoasu renderöi demo- ja palvelinfixturet; tulos lukitaan ennen pysähtymistä |
| F – SDK:n sovitus | BookEvent/EmitterEvent ja Rockabillyn 13 solun adapteri | Base/free spin/win/resume-fixturet toimivat samassa näkymässä; vanha polku voidaan nimetä arkistoksi |
| G – Stake-yhteys | Authenticate/play/end-round/resume/error-virrat testiympäristössä | Palvelinsaldo, konfiguraatio ja tulokset ohjaavat peliä; ei automaattista panoksen uudelleenlähetystä aikakatkaisussa |
| H – Siivous ja julkaisut | Kopioiden hallittu arkistointi, versioinnin yksi lähde, demo-/Stake-artifactit | Julkaisu rakentuu puhtaasta checkoutista; polut ja assetit testattu molemmille kohteille; palautusversio olemassa |

Jokainen vaihe tehdään pieninä PR:inä: erottelu, toiminnan tarkistus, dokumentointi.
Hakemistojen uudelleennimeäminen ei yksin täytä vaihetta. Toiminnan muutos kirjataan
erikseen; RTP:tä, painoja tai free spin -sääntöjä ei säädetä refaktoroinnin sivutuotteena.
Täsmällinen työmäärä arvioidaan B:n ja F:n sopimusvertailun jälkeen.

## Stake-integraation tarkistuslista

Virallinen RGS-ohje kuvaa authenticate -> play -> end-round -virran ja aktiivisen
kierroksen jatkamisen. URL-parametreihin kuuluvat sessionID, lang, device ja rgs_url;
palvelinosoitetta ei kovakoodata. Lähde: [Stake Engine RGS](https://stakeengine.org/docs/rgs), tarkistettu 14.10.2026.

- Käytä nykyisiä RGS-pyyntömoduuleja alkuun. Vertaa niiden skeema ja yksikkömuunnos
  dokumentoituihin vastauksiin ennen kirjaston vaihtamista.
- Testaa authenticate-vastauksen panosrajat, valuutta, saldo, aktiivinen kierros ja
  tarjotut käyttörajoitukset; demon oletukset eivät saa ohittaa näitä.
- Lukitse palvelimen tulos ja toista sen tapahtumat. Pelkkä paikallisen matematiikan
  siirtäminen TypeScript-moduuliin ei valmista Stake-pelimatematiikkaa.
- Määritä 5 sarakkeen [3,3,1,3,3] koordinaattien muunnos 13 erilliseen animaatiokiekkoon,
  symbolit, voittopositiot, multipliereiden yksiköt ja free spin -tapahtumat.
- Sopimus- ja integraatiotestit: verkkovirhe ennen vastausta, epäselvä play-vastaus,
  reload kesken bonuksen, toistuva end-round, puuttuva asset ja peruttu autoplay.
- Stake-matematiikan aineistot, tapahtumakirjat ja niiden yhteensopivuus tämän pelin
  kanssa on tuotettava/varmennettava erikseen. Niiden valmiutta ei todettu tässä työssä.
- Kokeile paketin resurssipolut Stake-kohteessa ja GitHub-demossa erikseen.

## Testaus ja palautus

Säilytä version 1.5.4 toiminta vertailuna. Vähimmäisnäkymät: 360x740, 390x844,
430x932, 740x360, 844x390, 900x500, 1100x650, 1440x1000 ja 2560x1080.
Selainkuvien lisäksi tarvitaan fyysinen iOS- ja Android-kierros ennen Stake-hyväksyntää.
Storybook tarkistaa tapahtumat ja komponentit, selainregressio varsinaisen reitin.
Matematiikkaa verrataan samoilla syötteillä ja RNG-sekvensseillä, ei vain RTP-keskiarvolla.

Jokaisen muutoksen hyväksyntä: rajattu testi, tarvittaessa tuotantobuild, resurssipolut,
version ja dokumenttien synkronointi. Julkaisun voi palauttaa aiempaan commit/artifactiin;
käynnissä olevien palvelinkierrosten tapahtumasopimusta ei saa rikkoa palautuksessa.

## Seuraava toteutustyö

Aloita A:n importti-/resurssikäyttökartasta ja B:n aktiivisen reitin regressioista.
Niiden jälkeen irrota kierroksen ohjain HelloPixistä ennen audio- tai hakemistosiivousta.
Kopioiden poistaminen ja SDK-reitin vaihtaminen jätetään vaiheisiin F–H.
Tämä suunnitelma antaa toteutusjärjestyksen; ei ole lupa poistaa havaittuja kopioita.
