# Rinnakkainen 96 % kokeilumalli — balanced-96-v1

Laajempi jatkovarmennus: `EXPERIMENTAL_96_SIMULATION_30M.md`.
30 miljoonan maksetun kierroksen palautus oli 95,9023 %; likimääräinen
95 %:n luottamusväli 95,5356–96,2690 %. Alla säilyy alkuperäinen 3M-vertailu.

15.10.2026. Tämä on paikallinen vertailumalli. Tavallisen pelireitin matematiikka
ja GitHub Pages -julkaisu säilyvät ennallaan.

## Malli

| Palautuksen osa | Nykyinen teoreettinen | Kokeilumalli |
|---|---:|---:|
| Peruspelin suorat voitot | 59,0154 % | 66 % |
| Vapaapelit retriggereineen | 21,6638 % | 30 % |
| Yhteensä | 80,6792 % | 96 % |

Kokeilu käyttää samoja symbolituloksia, voittotaulun suhteita, satunnaiskertoimia,
scatter-sääntöjä ja retriggereitä. Pisimmän osuman laskenta säilyy. Peruspelin
maksavat voitot kerrotaan luvulla 1,1183522401025054 ja vapaapelien voitot luvulla
1,3847973860281648. Kertoimet johdetaan aktiivisista säännöistä analyyttisesti.
Nämä ovat erilliset maksukorotukset, eivät uudet arvottavat bonuskertoimet.

Malli laskee täydellä tarkkuudella. Käyttöliittymä näyttää summat kahdella
desimaalilla; senttipyöristystä ei ole lisätty kirjanpitoon. Raha- tai RGS-version
kalibrointi on tarkistettava erikseen sen täsmällisellä pyöristyssäännöllä.

## Varmennus

Komento repon juuresta: `pnpm --filter=oma-peli audit:experiment 1000000`.
Se suorittaa kolme miljoonan maksetun kierroksen ajoa sekä 20 000 vertailutapausta:
nopeutettu laskuri vastaan aktiivinen calculateWins ja pelattava kokeiluprovider
vastaan samat symboli-/kerroinarvonnat. Mukana on bonuspanoksen lukituksen testi.
Raportti: `reports/experimental-96-audit.json`.

| Seed | Nykyinen simuloitu RTP | Kokeilun simuloitu RTP |
|---|---:|---:|
| 12345 | 81,7540 % | 97,5870 % |
| 741354 | 80,3120 % | 95,4105 % |
| 987654321 | 81,2517 % | 96,8672 % |

Yhteisen kolmen miljoonan otoksen kokeilupalautus on 96,6215 %. Analyyttinen
odotusarvo on 96 %, ei otoksen 96,6215 %. Raportin kaikkien kolmen ajon
likimääräiset 95 % luottamusvälit sisältävät 96 %:n. Satunnaislukujen kulutus
eroaa vanhan auditointikomennon ajosta: tämä vertailu arpoo myös nollakierrokselle
käyttämättömän kertoinluvun. Saman seedin yksittäisiä kierroksia ei siksi pidä
verrata vanhaan raporttiin. Tässä raportissa molemmat mallit käyttävät täsmälleen
samoja tuloksia ja kokonaisia bonusketjuja.

## Mitä kokemusmuutoksesta voidaan sanoa

- Nollapalautuksen osuus säilyi noin 82,36 %:ssa. Osumatiheys ei kasva.
- Nettovoiton osuus on noin 11,39 % maksetuista kierroksista koko bonusketju mukaan
  lukien. Parannus tulee tässä pääosin entisten tasatulosten muuttumisesta
  nettovoitoiksi; alle panoksen palautusten osuus pysyi noin 6,25 %:ssa.
- Bonus tulee edelleen teoreettisesti noin kerran 231 maksetussa kierroksessa.
  Tämä on keskiarvo, ei taattu väli.
- Bonusvoittojen suhteellinen korotus on suurempi kuin peruspelin. Absoluuttinen
  tuottohajonta kasvoi vertailussa; tätä versiota ei väitetä vähävolatiiliseksi.
- Uutta kehittyvää bonuskerrointa tai muuta yllätysmekaniikkaa ei ole lisätty.
  Seuraava erillinen koe voi muuttaa osumajakaumaa tai bonusmekaniikkaa samalla
  96 % budjetilla. Parempaa pelikokemusta ei päätellä RTP-luvusta yksin.

## Pelaaminen

Kehityspalvelimessa `/math-lab` näyttää saman pelin kokeiluproviderilla.
Sivun yläosan kokeiluvoittotaulu ilmoittaa maksukorotukset; pelin tavallinen
voittotaulu sisältää edelleen perustason maksuarvot. Tavallinen `/`-reitti
käyttää nykyistä matematiikkaa. Tuotannossa kokeilureitti näyttää vain ilmoituksen.
Debugista myönnettyjä ilmaispelejä ei sisällytetä offline-RTP-tarkistukseen.
