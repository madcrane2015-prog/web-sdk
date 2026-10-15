# Rockabilly Reels – säilytetty historia ennen 1.6-refaktorointia

Siirretty 14.10.2026 aktiivisen käyttökartan tarkistuksen jälkeen. Säilytetyt resurssit
eivät ole nykyisen pelin lähdekoodia. Alkuperäisen inventaarion 881 siirretyn tiedoston
SHA-256-arvot verrattiin siirron jälkeen: kaikki vastasivat alkuperäisiä.

| Alkuperäinen polku repon juuressa | Polku tässä arkistossa |
|---|---|
| `oma-peli/` | `oma-peli/` |
| `temp-deploy/` | `temp-deploy/` |
| `web-sdk/oma-peli/` | `web-sdk-oma-peli/` |
| `apps/oma-peli/src/tools/math-config_varmuuskopio.yml` | `tools/math-config_varmuuskopio.yml` |
| `apps/oma-peli/src/tools/math-sim_varmuuskopio.cjs` | `tools/math-sim_varmuuskopio.cjs` |
| `apps/oma-peli/src/tools/tuhottavat/` | `tools/tuhottavat/` |

Julkaisusnapshotit voivat sisältää vanhoja kiinteitä URL-polkuja; arkisto ei ole
uusi julkaisuympäristö. Palautus tehdään yllä olevan taulukon mukaan.
Alkuperäiset polut ja hashit: `apps/oma-peli/ARCHITECTURE_INVENTORY.json`.

`legacy-math/` säilyttää myös vanhat juuren RTP-laskurit sekä YAML-pohjaisen
`src/tools/math-sim.cjs`-ketjun. Näiden seitsemän tiedoston hashit tarkistettiin
erikseen ennen ja jälkeen siirron. Vanhan ways-laskurin vertailuruudukko maksoi
13,5×, vaikka aktiivisen pisimmän symboliosuman sääntö maksaa 8×.
Ylläpidettävä auditointi: `pnpm --filter=oma-peli audit:math`.
