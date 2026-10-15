# Rockabilly Reels – aktiivisen matematiikan tarkistus

14.10.2026, version 1.5.4 standalone-toteutus. Tavoite noin 95 % RTP.
Painoja, voittotaulua, kertoimia tai pelin käyttäytymistä ei muutettu tässä tarkistuksessa.

Jatkototeutus 1.6.0: kierrosohjain lukitsee nyt maksetun kierroksen ja koko
bonusketjun panoksen sekä luokittelee triggerikierroksen voiton perusvoittoihin.
Painot, maksuarvot ja teoreettinen 80,6792 % RTP säilyivät ennallaan.
95 % kalibrointiehdotusta ei ole toteutettu arkkitehtuurisiivouksen yhteydessä.

## Tulos

**Nykyisen matematiikan teoreettinen RTP on 80,6792147723 %.**
Se jää 95 % tavoitteesta 14,3207852277 prosenttiyksikköä.

| Osuus | Palautus suhteessa maksettuun panokseen |
|---|---:|
| Peruspelin suorat voitot | 59,0153957164 % |
| Kaikki vapaapelit ja retriggerit | 21,6638190559 % |
| Yhteensä | 80,6792147723 % |

RTP:n nimittäjä on vain maksettujen peruspelikierrosten panos. Vapaapelejä ei
lasketa lisäpanoksiksi. Maksukierroksen koko bonusketju lasketaan sen palautukseen.
Laskelma olettaa vakion panoksen, riippumattomat symboliarvonnat ja kaikkien
myönnettyjen vapaapelien pelaamisen loppuun; debugilla myönnettyjä pelejä ei mukana.

## Käytetyt totuuslähteet

- `src/game-standalone/math.ts`: symboliarvonta, scatter-trigger ja voittolaskenta.
- `src/game-standalone/mathConfig.ts`: aktiiviset painot, voitot ja kertoimet.
- `src/game-standalone/actions.ts` sekä `HelloPixi.svelte`: panostus,
  vapaapelilaskurin vähennys, myöntäminen ja retrigger.
- `reel.ts`: pysähdyksen lopputulos arvotaan nykyisestä symbolijakaumasta.

SDK:n `src/game/config.ts`, vanhat RTP-laskurit ja dokumenttien RTP-lupaukset eivät
ole julkaistun standalone-pelin matematiikan totuuslähteitä. YAML-simulaattorin
nykyiset perusjakaumat ja free spin -korvausmap näyttävät tuottavan samoja
symbolipainoja, mutta sen laskentatoteutusta ei tässä vahvistettu aktiivista
voittolaskentaa vasten. Auditoitu laskuri importoi aktiiviset TS-moduulit.

## Menetelmä ja toistettavuus

`scripts/audit-active-rtp.ts` sisältää analyyttisen laskelman, nopeutetun
voittolaskurin ja kolme seedattua Monte Carlo -ajoa. Nopeutettu laskuri verrattiin
ensin 20 000 tulosruudukolla todelliseen `calculateWins()`-funktioon. Mukana yhtä
paljon perus- ja vapaapeliruudukkoja, samat kertoinarvonnat, samat scatter-myönnöt.
Kaikki vastaavuustarkistukset läpäisivät.

| Seed | Maksettuja kierroksia | Toteutunut RTP | Likimääräinen 95 % luottamusväli |
|---|---:|---:|---:|
| 12345 | 1 000 000 | 80,64619 % | 79,03912–82,25326 % |
| 741354 | 1 000 000 | 79,96819 % | 78,56617–81,37021 % |
| 987654321 | 1 000 000 | 81,52695 % | 80,00333–83,05057 % |

Luottamusvälit perustuvat maksettujen kierrosten koko tuoton otosvarianssiin
(sisältäen kaikki saman kierroksen bonusjälkeläiset), eivät erillisten free spinien
käsittelyyn riippumattomina panoksina. Suuret bonusvoitot aiheuttavat hajontaa;
teoreettinen odotusarvo on tässä vahvempi määritys kuin yksittäinen miljoonan otos.
Numerot ja symbolikohtaiset osuudet: `reports/active-rtp-audit.json`.

Toista repository rootista nykyisen lockfilen esbuildilla:

```powershell
node node_modules/.pnpm/esbuild@0.25.12/node_modules/esbuild/bin/esbuild ./apps/oma-peli/scripts/audit-active-rtp.ts --bundle --platform=node --format=esm --outfile=.codex-screenshots/audit-active-rtp.mjs
node .codex-screenshots/audit-active-rtp.mjs 1000000
```

Ensimmäinen komento on auditin paketointi; toinen suorittaa kolme miljoonan ajoa.
Esbuild-versiopolku muuttuu riippuvuuspäivityksessä. Pelin buildia ei tarvitse vaihtaa.

## Analyyttinen tarkistus

Vain keskikiekko voi olla Wild, todennäköisyydellä q=0,55. Muissa sarakkeissa
on kolme riippumatonta ruutua. Kun symbolin todennäköisyys on p, sen lukumäärän
odotusarvo sarakkeessa on n=3p ja puuttumisen todennäköisyys z=(1-p)^3.
Nykyinen voittolaskenta maksaa symbolin pisimmän yhtenäisen vasemmalta alkavan
osuman. Symbolin odotustuotto ennen satunnaiskerrointa on

```text
q * n² * (z * pay3 + n * z * pay4 + n² * pay5)
```

Peruspelin kertoimen odotusarvo on 1,38 ja vapaapelin 4,00.
Scattereita voi tulla 12 ulkoruutuun, kussakin todennäköisyys 0,10.
Keskikiekko ei tuota scatteria. Triggeri on vähintään viisi scatteria ja myöntää
niiden lukumäärän verran pelejä. Vapaapeleissä sama triggeri lisää pelejä.

```text
P(trigger) = 0,00432934327                 (noin 1 / 231 maksettua kierrosta)
g = E[scatterCount * 1(scatterCount >= 5)] = 0,02224171344
EV(free spin) = 9,52353722998 * panos
RTP = EV(base) + g_base * EV(free spin) / (1 - g_free)
```

g_free < 1, joten bonusketjun odotusarvo on äärellinen. Retriggerien vuoksi bonusketjun
pituudelle ja kokonaisvoitolle ei kuitenkaan ole tämän lähdekoodin matematiikassa
kovaa enimmäisrajaa. Simulaatiossa nähty suurin voitto ei ole pelin teoreettinen maksimivoitto.

## Muut löydökset

1. `increaseBet()`, `decreaseBet()` ja `maxBet()` eivät lukitse panosta kierroksen
   tai bonusketjun ajaksi. `checkWins()` käyttää senhetkistä `betAmount`-arvoa.
   Panoksen muuttaminen animoinnin aikana voi muuttaa jo maksetun kierroksen
   voiton skaalausta. Bonuspanoskaan ei ole sidottu triggeripanokseen.
   Tämä on prioriteetti ennen mitään 95 % RTP -julkaisua: lukitse kierrospanos
   alussa ja säilytä triggeripanoksen arvo koko vapaapelisarjan ajan.
2. `checkWins()` asettaa triggerin jälkeen `isFreeSpinMode=true` ennen
   `applyWinAccounting()`-kutsua. Näin triggerikierroksen perusvoitto voi päätyä
   bonusvoittojen tilastoon. Kokonaispayout ei tästä yksin muutu, mutta bonusraportti vääristyy.
3. Näkyvä voittotaulu ilmoittaa 50 % Wildia; runtime käyttää 55 %.
   Pelimatematiikkaa kuvaavat dokumentit ja vanhat laskurit sisältävät muitakin
   painoja. Niihin kirjoitetut 94–95 % arvot eivät ole vahvistus nykyisen pelin RTP:stä.
4. RGS-siirtymässä paikallinen RNG ja paikallinen saldokirjanpito eivät saa
   päättää tuotantokierroksen tulosta. Tämä laskelma koskee nykyistä demomatematiikkaa,
   ei vielä Stakeen toimitettua tai varmennettua matematiikkapakettia.

## Ehdotus 95 % kalibrointiin

Yksinkertaisin vertailuratkaisu, joka säilyttää symbolien osumatiheydet ja
bonus-triggerit, on kaikkien maksavien voittojen suhteellinen korotus:

```text
scale = 0,95 / 0,8067921477232709 = 1,1775027839336993
```

Tämä nostaisi maksavia voittoja noin 17,7503 % ja antaisi mallissa täsmälleen
95 % odotusarvon ennen rahayksiköiden pyöristyksiä. Skaalain on vasta ehdotus:
sitä ei ole lisätty pelin voittoihin. Voittotaulu, julkaistut kertoimet, pyöristys
ja Stake-matematiikan paketointi on ratkaistava yhdessä.

Vaihtoehtona voidaan muuttaa symbolipainoja, Wild-jakaumaa tai kertoimia.
Silloin osumatiheys ja/tai voittoprofiili muuttuvat; uudesta jakaumasta tarvitaan
oma tarkistus. Suositeltu eteneminen: ensin panoksen lukitus ja tilastokorjaus,
sitten yksi selvästi nimetty kalibrointi, samojen testien uusinta ja voittotaulun päivitys.
