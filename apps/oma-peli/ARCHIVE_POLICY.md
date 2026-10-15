# Historialliset resurssit ja julkaisut

Aktiivisen lähdekoodin juuri on `apps/oma-peli/src`, resurssien juuri
`apps/oma-peli/static`. Tuotanto generoidaan buildilla; build-tiedostoja ei muokata käsin.

Juuren `oma-peli`, `temp-deploy` ja `web-sdk/oma-peli` ovat historiallisia
julkaisu-/resurssikokoelmia. Nykyinen GitHub-workflow ei käytä niitä buildin lähteenä.
Niitä ei pidä käyttää uuden ominaisuuden toteuttamiseen tai aktiivisen assetin korvaamiseen.

`ARCHITECTURE_INVENTORY.json` sisältää sisältöhashit ja vertailun aktiivisiin
resursseihin. `reports/resource-usage.json` erottaa suorat viittaukset dynaamisista
tai arkistointiehdokkaista. Viittausta vailla oleva tiedosto ei automaattisesti ole poistettava.

Historialliset julkaisukansiot ja nimetyt työkalukopiot on siirretty
`archive/rockabilly-pre-1.6`-kansioon aktiivisen koodin ja workflow-viittausten
tarkistuksen jälkeen. 881 alkuperäisen inventaarion tiedoston hashit täsmäsivät
siirron jälkeen. Myös ainutlaatuiset resurssit säilyvät; poistamista ei tehty.
Alkuperäisten polkujen palautustaulukko on arkiston README:ssa. Repo ei voi
todistaa ulkoisten käsin ladattujen snapshotien käyttämättömyyttä.

Vanhojen simulaattorien ja `src/tools/*varmuuskopio*`-tiedostojen tulokset eivät ole
aktiivisen demosäännöstön RTP-todistus. Uusi auditointi käyttää
`scripts/audit-active-rtp.ts`-tiedostoa ja aktiivisia TS-moduuleja.
