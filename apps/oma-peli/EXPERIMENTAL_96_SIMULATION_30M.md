# Kokeilumallin suuri simulaatio: 30 miljoonaa maksettua kierrosta

Malli: balanced-96-v1. Kolme erillistä 10 000 000 maksetun kierroksen ajoa,
seed-arvot 12345, 741354 ja 987654321. Täydet bonusketjut retriggereineen,
yksikköpanos, ei debug-myöntöjä eikä rahayksiköiden pyöristystä.
Komento: `pnpm --filter=oma-peli audit:experiment 10000000`.

## Palautus

| Osuus | Teoreettinen | Simuloitu |
|---|---:|---:|
| Peruspelin suorat voitot | 66 % | 65,9883 % |
| Vapaapelit retriggereineen | 30 % | 29,9140 % |
| Yhteensä | 96 % | **95,9023 %** |

Yhdistetyn otoksen likimääräinen 95 %:n luottamusväli: **95,5356–96,2690 %**.
Laskettu 30 miljoonan maksetun kierroksen kokonaispalautuksista, yhdistämällä
ajojen otosvarianssit ja keskiarvojen erot. Vapaapelejä ei käsitellä erillisinä
maksettuina havaintoina. Tulos on yhteensopiva 96 %:n analyyttisen odotusarvon
kanssa; simulaatio yksin ei todista tarkkaa odotusarvoa.

| Seed | Maksettuja kierroksia | Kokeilun RTP | Nykyisen mallin RTP |
|---|---:|---:|---:|
| 12345 | 10 000 000 | 96,5226 % | 81,0713 % |
| 741354 | 10 000 000 | 95,2684 % | 80,1376 % |
| 987654321 | 10 000 000 | 95,9159 % | 80,6110 % |
| Yhteensä | 30 000 000 | **95,9023 %** | **80,6066 %** |

Molemmat mallit saivat samat symbolitulokset ja bonusketjut. Yhden ajon poikkeama
96 %:sta on mahdollinen: toisen ajon likimääräinen 95 %:n väli ei sisältänyt
96 %:n tavoitetta. Kaikkien erillisten välien ei odoteta
aina kattavan todellista keskiarvoa. Ensisijainen yhteenveto on koko otos yhdessä
analyyttisen laskelman kanssa.

## Voitot ja bonusvälit

- Vapaapelikierroksia: **681 961**.
- Maksetulta kierrokselta alkaneita bonusjaksoja: **129 804**.
- Toteutunut bonusväli keskimäärin: **231,12 maksettua kierrosta**.
- Valmiiden bonusvälien mediaani ajosta riippuen: **160–161 kierrosta**.
- Valmiiden bonusvälien 95. persentiili: **688–689 kierrosta**. Keskeneräinen
  viimeinen väli ei sisälly näihin persentiileihin; ensimmäinen väli alkaa ajon alusta.
- Nollapalautus koko bonusketju mukaan lukien: **82,3742 %**.
- Palautus yli nollan mutta alle panoksen: **6,2524 %**.
- Panoksen ylittävä palautus: **11,3735 %**.
- Jokaisessa ajossa p50 oli 0×, p90 noin 1,6775×, p95 noin 3,5787× ja p99 noin
  15,6569×. Nämä ovat erillisten ajojen persentiilejä, eivät jälkikäteen yhdistetyn jakauman laskettuja persentiilejä.
- Suurin havaittu kokonaispalautus: **5 580,73×** panos, sisältäen bonusketjun.
  Se ei ole teoreettinen maksimivoitto.

Kokonaispalautuksen otoskeskihajonta oli kokeilussa **10,2467×** ja nykyisellä
mallilla **7,5727×**. Isompi palautus kasvattaa tässä absoluuttista hajontaa.
Nollapalautusten tiheys säilyy nykyisenä. Kokeilu ei siis yksin ratkaise pitkien
kuivien jaksojen kokemusta eikä lisää osumatiheyttä.

## Tarkistukset ja aineistot

Ennen suurta ajoa laskuri tarkisti 20 000 tapausta aktiivista voittolaskentaa
vasten, toiset vastaavat provider-vertailut samoilla arvonnoilla sekä bonuspanoksen
lukituksen. Kaikki tarkistukset ja simulaatio päättyivät onnistuneesti.

- Täysi ajokohtainen data: `reports/experimental-96-audit-30m.json`.
- Yhdistetty yhteenveto: `reports/experimental-96-summary-30m.json`.
- Aiempi kolmen miljoonan otos: `reports/experimental-96-audit-3m.json`.

Pelin sääntöjä tai julkaistua versiota ei muutettu. Ennen rahayksiköihin sidottua
versiota on tarkistettava pyöristys tarkalla toteutettavalla säännöllä. Uuden
bonusmekaniikan tai symbolijakauman lisääminen vaatii uuden laskelman.
