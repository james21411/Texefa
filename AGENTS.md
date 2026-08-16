# AGENTS.md

Site vitrine statique de Texefa (Yaoundé / Casablanca), 100 % en français. Aucune étape de build, pas de npm, pas de tests : le site est servi tel quel.

## Structure

- `index.html` — la page unique. Tout le layout utilise Bootstrap 5.3 (CDN dans le `<head>`, `bootstrap.bundle.min.js` en fin de page pour le menu mobile). Le héros contient le carrousel 3D (`#hero-carousel` → `.c3d-stage`, `#c3d-track`, `#c3d-prev/#c3d-next`, `#c3d-dots`) ; `flyer.jpeg` est la brochure officielle (téléchargeable depuis la section « Offres web »).
- `css/style.css` — styles personnalisés : variables de marque, dégradés, ombres, couleurs texte/fond, carrousel 3D (`.c3d-*`, perspective 1500px, coverflow), bandeau promo (`.promo-banner`, `.promo-30`), cartes d'offres (`.offer-card`) et de réalisations (`.project-card`), bouton WhatsApp flottant (`.wa-float`).
- `js/main.js` — données + rendu : navigation, carrousel (tableau `heroSlides`), cartes services, offres web (tableau `offers`), réalisations (tableau `projects`), témoignages, investissement et footer sont générés en JS depuis les tableaux. « Modifier le contenu = éditer les données de `js/main.js` », pas `index.html` (sections injectées par les fonctions `render*` dans des conteneurs vides). `index.html` est fixe.

## Conventions

- **Modifier le contenu = éditer les données de `js/main.js`**, pas `index.html` (les sections sont injectées par les fonctions `render*` dans des conteneurs vides). `index.html` est fixe.
- **Design system (palette du flyer officiel)** : les couleurs de marque vivent dans `css/style.css` (`:root` : `--violet` #2c0674, `--violet-deep` #14023a, `--violet-ink` #0c0126, `--mauve` #694d91, `--lavande` #9382b2, `--lilas` #c7addd, `--coral` #e66e50, `--coral-deep` #d34f31, `--paper` #fbfbfb) et sont exposées via `.text-violet/-mauve/-lavande/-lilas/-coral`, `.soft-*` (fonds teintés), `.text-gradient` (violet→corail), `.btn-brand` (violet), `.btn-coral`, `.btn-outline-violet`. Toujours les utiliser ; ne jamais introduire de couleur arbitraire dans le HTML ou dans le JS, ni les anciennes classes (`.text-blue`, `.soft-blue`…) qui n'existent plus.
- Conserver la trajectoire des classes générées : `renderServiceCards` → `tagColor` + `softTints` ; `renderOffers` → `.offer-card/.offer-price/.offer-badge(-hot)/.offer-cta` ; `renderProjects` → `.project-card` + `icon-box soft-*` ; carrousel → chaque diapositive `.c3d-slide` reçoit `data-href` (navigation au clic) et est redessinée par le moteur JS (rotateY/translateZ, auto-avance 4,2 s, pause au survol).
- Le HTML produit par JS doit utiliser les classes Bootstrap (grilles `row`/`col`, `card`, `btn`, utilitaires). CSS inline uniquement pour un cas ponctuel (ex. hauteur/`object-fit` des images) ou le fallback `prefers-reduced-motion`.
- Polices : Inter (corps), Playfair Display pour les accents (`.font-display`).
- Toujours écrire le contenu en français.
- Adresses et téléphones réels : contacts WhatsApp officiels `+237 698 38 51 86` / `+237 697 64 69 78` (la version « en ligne » utilise `wa.me/237698385186`).

## Déploiement

Pousser sur `main` déclenche `.github/workflows/deploy.yml` : synchronisation FTP vers LWS avec les secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Pas de serveur local — la prod se voit après le push GitHub.

## Vérification

Aucune commande lint/test. Vérifier dans le navigateur (ex. `python3 -m http.server` à la racine) : rendu des sections générées, menu mobile, ancres `#`, soumission des formulaires.