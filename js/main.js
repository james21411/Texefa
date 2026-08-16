/* ============================================================
   TEXEFA — Données + rendu + interactions
   ============================================================ */

const S = (stroke, fill = "none") =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="${fill}" ${fill === "none" ? `stroke="${stroke}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"` : ""} aria-hidden="true">`;

const icons = {
    cap: S("currentColor") + `<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    feather: S("currentColor") + `<path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    code: S("currentColor") + `<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    building: S("currentColor") + `<rect x="4" y="2" width="16" height="20" rx="0"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"></path></svg>`,
    ship: S("currentColor") + `<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M12 10v4"></path><path d="M12 2v3"></path></svg>`,
    seedling: S("currentColor") + `<path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>`,
    factory: S("currentColor") + `<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1M12 18h1M7 18h1"></path></svg>`,
    school: S("currentColor") + `<path d="m14 5-2 2-2-2"></path><path d="M22 10 12 5 2 10v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"></path><path d="M6 12v8M12 12v8M18 12v8"></path></svg>`,
    megaphone: S("currentColor") + `<path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`,
    messages: S("currentColor") + `<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>`,
    check: S("currentColor") + `<path d="M20 6 9 17l-5-5"></path></svg>`,
    star: S("currentColor", "currentColor") + `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    arrowRight: S("currentColor") + `<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`,
    arrowDown: S("currentColor") + `<path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>`,
    whatsapp: S("currentColor", "currentColor") + `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>`
};

const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#a-propos" },
    { label: "Services", href: "#services" },
    { label: "Offres web", href: "#offres" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Investir", href: "#investissement" },
    { label: "Témoignages", href: "#temoignages" }
];

const serviceCards = [
    {
        title: "Academy",
        tagColor: "text-violet",
        icon: "cap",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Étudiants en formation Texefa, en ligne et en présentiel",
        intro: "Notre académie forme la prochaine génération de leaders et de spécialistes, avec des programmes intensifs, pratiques et certifiants, adaptés aux besoins du marché.",
        points: [
            "Promotion et représentation d'écoles",
            "Formation en Intelligence Artificielle",
            "Formation en Scientific Writing",
            "Formation IT & Développement",
            "Certifications informatiques internationales",
            "Ateliers et bootcamps intensifs"
        ],
        extra: "Des experts de terrain et des cas concrets, du premier jour."
    },
    {
        title: "Services éditoriaux & scientifiques",
        tagColor: "text-mauve",
        icon: "feather",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
        alt: "Manuscrits et publications scientifiques édités par Texefa",
        intro: "Un partenaire de confiance pour les chercheurs, les institutions académiques et les éditeurs : qualité, rigueur et visibilité.",
        points: [
            "Scientific Writing & Coaching Publication",
            "Édition scientifique et relecture",
            "Création de journaux scientifiques",
            "Conseil d'indexation (Scopus, WoS…)",
            "Organisation de conférences scientifiques"
        ],
        extra: "De la conception à la diffusion internationale."
    },
    {
        title: "Développement IT & IA",
        tagColor: "text-coral",
        icon: "code",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
        alt: "Développeurs Texefa créant des applications et solutions d'intelligence artificielle",
        intro: "Notre équipe technique transforme vos idées en produits digitaux performants et évolutifs.",
        points: [
            "Applications et sites web sur mesure",
            "Analyse de données et data science",
            "Dashboards interactifs",
            "Solutions IA & agentiques (GenAI)",
            "Développement EdTech"
        ],
        extra: "De la conception à la maintenance, avec des technologies de pointe."
    }
];

const testimonials = [
    {
        name: "Karim B.",
        role: "Directeur d'école, Casablanca",
        text: "Texefa nous a accompagnés dans la création de notre plateforme EdTech. Une équipe à l'écoute, créative et très professionnelle.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Dr. Marie N.",
        role: "Chercheuse, Yaoundé",
        text: "Grâce à Texefa, j'ai pu publier mes travaux dans une revue indexée. Leur coaching en scientific writing a été d'une aide précieuse.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Awa S.",
        role: "Responsable RH, Douala",
        text: "Les formations de Texefa ont boosté les compétences de nos équipes en IA. Des programmes concrets et directement applicables.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    }
];

const futureCards = [
    { num: "01", title: "Immobilier", icon: "building", desc: "Investissements, promotion et gestion de projets immobiliers résidentiels et commerciaux.", color: "text-violet" },
    { num: "02", title: "Import & Export", icon: "ship", desc: "Commerce international, sourcing et logistique entre l'Afrique, l'Europe et l'Asie.", color: "text-mauve" },
    { num: "03", title: "Agriculture", icon: "seedling", desc: "Projets agricoles modernes et durables, avec un focus sur la productivité et l'impact social.", color: "text-coral" },
    { num: "04", title: "Agro-industrie", icon: "factory", desc: "Transformation locale des produits agricoles et création de valeur ajoutée.", color: "text-lilas" }
];

const offers = [
    {
        title: "Site Vitrine Professionnel",
        price: "100 000",
        suffix: "FCFA",
        badge: "Populaire",
        image: "images/site_vitrine.jpeg",
        alt: "Site vitrine professionnel affiché sur un ordinateur portable",
        features: [
            "Design moderne et responsive",
            "Jusqu'à 5 pages",
            "Formulaire de contact",
            "Optimisé SEO",
            "Intégration réseaux sociaux",
            "Support continu"
        ]
    },
    {
        title: "Site E-commerce",
        price: "150 000",
        suffix: "FCFA",
        badge: "Boutique",
        featured: true,
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
        alt: "Boutique en ligne et achats sécurisés",
        features: [
            "Boutique en ligne complète",
            "Gestion des produits",
            "Paiement sécurisé",
            "Tableau de bord admin",
            "Gestion des commandes"
        ]
    },
    {
        title: "Autres types de sites",
        price: "180 000",
        suffix: "FCFA dès",
        badge: "Applications",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        alt: "Applications web et portails avec tableau de bord",
        features: [
            "Applications web",
            "Portails web",
            "Extranet / intranet",
            "Réseaux sociaux et forums"
        ]
    },
    {
        title: "Application Desktop",
        price: "120 000",
        suffix: "FCFA",
        badge: "Sur mesure",
        image: "images/application_desktop.jpeg",
        alt: "Application de bureau sur un espace de travail moderne",
        features: [
            "Application sur mesure",
            "Interface moderne",
            "Performances optimisées",
            "Installation & support"
        ]
    },
    {
        title: "Hébergement & Maintenance",
        price: "75 000",
        suffix: "FCFA / an",
        badge: "Tranquillité",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        alt: "Serveurs et hébergement de sites web",
        features: [
            "Hébergement offert 1 an",
            "Nom de domaine",
            "Certificat SSL",
            "Maintenance & mises à jour",
            "Support technique"
        ]
    }
];

const projects = [
    {
        name: "Fosilamaster",
        tag: "Application complète",
        icon: "school",
        desc: "Gestion scolaire de bout en bout : élèves, enseignants, notes, paiements et communication.",
        color: "text-violet",
        url: "https://fosilamaster.verificationticket.com/",
        images: ["images/fosila_1.png", "images/fosila_2.png", "images/fosila_3.png"]
    },
    {
        name: "CAITED",
        tag: "Site officiel",
        icon: "megaphone",
        desc: "Site officiel de la Conférence : programme, intervenants, inscriptions et actes.",
        color: "text-coral",
        url: "https://caited.ens.cm/",
        images: ["images/caited_1.png", "images/caited_2.png", "images/caited_3.png"]
    },
    {
        name: "NexusTrans",
        tag: "Communication",
        icon: "messages",
        desc: "Application de messagerie et de communication pour les équipes et les réseaux.",
        color: "text-mauve"
    }
];

const footerNav = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#a-propos" },
    { label: "Services", href: "#services" },
    { label: "Offres web", href: "#offres" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Investir", href: "#investissement" },
    { label: "Contact", href: "#contact" }
];

const heroSlides = [
    { img: "flyer.jpeg", title: "Brochure officielle — développement web", href: "#offres" },
    { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", title: "Academy & certifications", tag: "Formation", alt: "Étudiants en formation Texefa", href: "#services" },
    { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop", title: "Sites, applications & IA", tag: "Présence digitale", alt: "Écran affichant un site web développé par Texefa", href: "#contact" }
];

const softTints = {
    "text-violet": "soft-violet",
    "text-mauve": "soft-mauve",
    "text-lavande": "soft-lavande",
    "text-lilas": "soft-lilas",
    "text-coral": "soft-coral"
};

const stats = [
    { value: 2, pad: 2, suffix: "", label: "Continents — l'Afrique au cœur" },
    { value: 2, pad: 2, suffix: "", label: "Villes : Yaoundé & Casablanca" },
    { value: 3, pad: 2, suffix: "", label: "Pôles d'expertise complémentaires" },
    { value: 4, pad: 2, suffix: "", label: "Axes d'investissement en préparation" }
];

/* ---------------- Rendu ---------------- */

function renderNav(items) {
    return items.map(i => `<li class="nav-item"><a class="nav-link" href="${i.href}">${i.label}</a></li>`).join('');
}

function renderServiceCards(items) {
    return items.map((item, index) => {
        const pointsHtml = item.points.map(p =>
            `<li><span class="${item.tagColor}">${icons.check}</span>${p}</li>`
        ).join('');
        const badge = `
            <span class="tag-pill ${item.tagColor}">
                <span class="d-inline-flex">${icons[item.icon]}</span>${item.title.split(' ')[0]}
            </span>`;

        if (index === 0) {
            return `
            <div class="col-lg-7" data-reveal>
                <article class="service-card d-flex flex-column flex-sm-row">
                    <div class="col-sm-5 featured-media-col position-relative">
                        ${badge}
                        <div class="service-media sm-tall">
                            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="1200" height="1400">
                        </div>
                    </div>
                    <div class="service-body d-flex flex-column">
                        <span class="icon-box ${softTints[item.tagColor] || 'soft-violet'} mb-3"><span class="${item.tagColor}">${icons[item.icon]}</span></span>
                        <h3 class="h4 fw-bold">${item.title}</h3>
                        <p class="text-body-secondary mt-2">${item.intro}</p>
                        <ul class="service-points mt-3">${pointsHtml}</ul>
                        <p class="service-note ${item.tagColor} mt-auto">${item.extra}</p>
                    </div>
                </article>
            </div>`;
        }

        return `
            <div class="col-lg-5" data-reveal>
                <article class="service-card d-flex flex-column">
                    <div class="service-media sm-wide position-relative">
                        ${badge}
                        <img src="${item.image}" alt="${item.alt}" loading="lazy" width="1200" height="750">
                    </div>
                    <div class="service-body d-flex flex-column">
                        <h3 class="h5 fw-bold">${item.title}</h3>
                        <p class="text-body-secondary mt-2 small">${item.intro}</p>
                        <ul class="service-points mt-3">${pointsHtml}</ul>
                        <p class="service-note ${item.tagColor} mt-auto">${item.extra}</p>
                    </div>
                </article>
            </div>`;
    }).join('');
}

const starRow = `${icons.star}${icons.star}${icons.star}${icons.star}${icons.star}`;

function renderTestimonials(items) {
    return items.map((item, index) => {
        const body = `
            <div class="testi-mark text-violet" aria-hidden="true">&ldquo;</div>
            <blockquote class="testi-quote mt-3 mb-4">&laquo;&nbsp;${item.text}&nbsp;&raquo;</blockquote>
            <figcaption class="d-flex align-items-center gap-3">
                <img src="${item.avatar}" alt="Photo de ${item.name}" class="rounded-circle" width="52" height="52" loading="lazy">
                <div>
                    <p class="fw-bold text-strong mb-0">${item.name}</p>
                    <p class="text-muted small mb-0">${item.role}</p>
                </div>
            </figcaption>`;

        if (index === 0) {
            return `
            <div class="col-lg-5" data-reveal>
                <figure class="testi-card testi-featured d-flex flex-column">
                    <div class="testi-stars mb-2" aria-label="Note : 5 étoiles sur 5">
                        ${starRow}
                    </div>
                    ${body}
                </figure>
            </div>`;
        }

        return `
            <div class="col-12" data-reveal>
                <figure class="testi-card d-flex flex-column flex-sm-row gap-4 align-items-sm-center">
                    <img src="${item.avatar}" alt="Photo de ${item.name}" class="rounded-circle flex-shrink-0" width="64" height="64" loading="lazy">
                    <div class="flex-grow-1">
                        <div class="testi-stars mb-2" aria-label="Note : 5 étoiles sur 5">
                            ${starRow}
                        </div>
                        <blockquote class="testi-quote mb-0">&laquo;&nbsp;${item.text}&nbsp;&raquo;</blockquote>
                        <figcaption class="mt-3">
                            <p class="fw-bold mb-0 text-strong">${item.name}</p>
                            <p class="text-muted small mb-0">${item.role}</p>
                        </figcaption>
                    </div>
                </figure>
            </div>`;
    }).join('');
}

function renderFutureCards(items) {
    return items.map(item => `
        <div class="col-sm-6 col-lg-3" data-reveal>
            <article class="future-card ${item.color}">
                <span class="future-num" aria-hidden="true">${item.num}</span>
                <span class="future-ico ${item.color}">${icons[item.icon] || ''}</span>
                <h3 class="h5 fw-bold">${item.title}</h3>
                <p class="text-white-50 small mt-2 mb-0">${item.desc}</p>
            </article>
        </div>`).join('');
}

function renderFooterNav(items) {
    return items.map(i => `<li><a class="footer-link" href="${i.href}">${i.label}</a></li>`).join('');
}

function renderStats(items) {
    return items.map(s => `
        <div class="stat" data-reveal>
            <span class="stat-num" data-count="${s.value}" data-pad="${s.pad || 0}">00</span>${s.suffix ? `<span class="stat-suffix">${s.suffix}</span>` : ''}
            <p class="stat-label">${s.label}</p>
        </div>`).join('');
}

function renderOffers(items) {
    return items.map(o => `
        <div class="col-lg-4 col-md-6 d-flex" data-reveal>
            <article class="offer-card w-100">
                <div class="offer-media">
                    <img src="${o.image}" alt="${o.alt}" loading="lazy" width="1200" height="800">
                    <span class="offer-badge${o.featured ? ' offer-badge-hot' : ''}">${o.badge}</span>
                </div>
                <div class="offer-body d-flex flex-column">
                    <h3 class="h6 fw-bold mb-0">${o.title}</h3>
                    <p class="offer-price mb-0"><span class="font-display fst-italic text-violet">${o.price}</span><small>${o.suffix}</small></p>
                    <ul class="service-points mt-3 mb-0">
                        ${o.features.map(f => `<li><span class="text-coral">${icons.check}</span>${f}</li>`).join('')}
                    </ul>
                    <div class="offer-cta mt-4">
                        <a href="#contact" class="btn btn-coral w-100">Commander<span class="ms-2">${icons.arrowRight}</span></a>
                    </div>
                </div>
            </article>
        </div>`).join('');
}

function renderProjects(items) {
    return items.map((p, idx) => {
        const head = `
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="icon-box ${softTints[p.color] || 'soft-violet'}"><span class="${p.color}">${icons[p.icon] || ''}</span></span>
                <span class="offer-badge ${softTints[p.color] || 'soft-violet'} ${p.color}">${p.tag}</span>
            </div>`;

        const media = (p.images && p.images.length) ? `
            <div class="project-media">
                <span class="offer-badge ${softTints[p.color] || 'soft-violet'} ${p.color}">${p.tag}</span>
                <div id="proj-carousel-${idx}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3500" data-bs-pause="hover">
                    <div class="carousel-inner">
                        ${p.images.map((img, i) => `
                        <div class="carousel-item${i === 0 ? ' active' : ''}">
                            <img src="${img}" alt="${p.name} — vue ${i + 1}" ${i === 0 ? '' : 'loading="lazy"'}>
                        </div>`).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#proj-carousel-${idx}" data-bs-slide="prev" aria-label="Capture précédente de ${p.name}"></button>
                    <button class="carousel-control-next" type="button" data-bs-target="#proj-carousel-${idx}" data-bs-slide="next" aria-label="Capture suivante de ${p.name}"></button>
                </div>
            </div>` : '';

        const cta = p.url
            ? `<a href="${p.url}" target="_blank" rel="noopener" class="btn btn-brand w-100">Visiter le site<span class="ms-2">${icons.arrowRight}</span></a>`
            : `<a href="https://wa.me/237698385186?text=${encodeURIComponent(`Bonjour Texefa, je souhaite en savoir plus sur ${p.name}.`)}" target="_blank" rel="noopener" class="btn btn-outline-violet w-100">
                <span class="text-wa me-2">${icons.whatsapp}</span>Discuter de ce projet
            </a>`;

        return `
        <div class="col-md-4 d-flex" data-reveal>
            <article class="project-card w-100">
                ${media}
                <div class="project-body d-flex flex-column">
                    ${p.images ? '' : head}
                    <h3 class="h4 fw-bold mt-3 mb-1 font-display">${p.name}</h3>
                    <p class="text-body-secondary small mb-0">${p.desc}</p>
                    <div class="mt-4">
                        ${cta}
                    </div>
                </div>
            </article>
        </div>`;
    }).join('');
}

/* ---------------- Montage ---------------- */

document.getElementById('nav-list').innerHTML = renderNav(navItems);
document.getElementById('service-grid').innerHTML = renderServiceCards(serviceCards);
document.getElementById('testimonial-grid').innerHTML = renderTestimonials(testimonials);
document.getElementById('future-grid').innerHTML = renderFutureCards(futureCards);
document.getElementById('footer-nav').innerHTML = renderFooterNav(footerNav);
document.getElementById('stats-row').innerHTML = renderStats(stats);
document.getElementById('offers-grid').innerHTML = renderOffers(offers);
document.getElementById('projects-grid').innerHTML = renderProjects(projects);

/* ---------------- Apparition au défilement ---------------- */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function staggerReveals() {
    document.querySelectorAll('[data-reveal-group]').forEach(group => {
        group.querySelectorAll('[data-reveal]').forEach((el, i) => {
            el.style.setProperty('--d', `${i * 80}ms`);
        });
    });
}
staggerReveals();

if (!reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-inview');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
} else {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-inview'));
}

/* ---------------- Compteurs ---------------- */

function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const pad = parseInt(el.dataset.pad || '0', 10);
    const duration = 1300;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased)).padStart(pad, '0');
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

if (!reduceMotion) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-num[data-count]').forEach(el => statsObserver.observe(el));
} else {
    document.querySelectorAll('.stat-num[data-count]').forEach(el => {
        el.textContent = String(parseInt(el.dataset.count, 10)).padStart(parseInt(el.dataset.pad || '0', 10), '0');
    });
}

/* ---------------- Barre de navigation ---------------- */

const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('back-to-top');
const waFloat = document.getElementById('wa-float');

function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 12);
    backToTop.classList.toggle('show', y > 620);
    waFloat.classList.toggle('show', y > 460);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------------- Suivi de section (scrollspy) ---------------- */

const navLinks = Array.from(document.querySelectorAll('#nav-list .nav-link'));

if (navLinks.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const current = `#${entry.target.id}`;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === current);
            });
        });
    }, { rootMargin: '-38% 0px -55% 0px' });

    navLinks.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) spy.observe(target);
    });
}

/* ---------------- Ancres : défilement fluide ---------------- */

document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', link.getAttribute('href'));

    const collapse = document.querySelector('#main-nav');
    if (collapse && collapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    }
});

/* ---------------- Retour en haut ---------------- */

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

/* ---------------- Formulaire de contact ---------------- */

const contactForm = document.getElementById('contact-form');
const contactSubmit = document.getElementById('contact-submit');
const contactStatus = document.getElementById('contact-status');

const feedbackMessages = {
    name: "Merci d'indiquer votre nom.",
    email: "Merci d'indiquer une adresse email valide.",
    message: "Merci d'écrire un message."
};

function ensureFeedback(form) {
    form.querySelectorAll('input, textarea').forEach(field => {
        if (!feedbackMessages[field.name]) return;
        if (field.parentElement.querySelector('.invalid-feedback')) return;
        const fb = document.createElement('div');
        fb.className = 'invalid-feedback';
        fb.textContent = feedbackMessages[field.name];
        field.parentElement.appendChild(fb);
    });
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ensureFeedback(contactForm);

    if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        const firstInvalid = contactForm.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
    }
    contactForm.classList.remove('was-validated');

    const label = contactSubmit.querySelector('.btn-label');
    const spinner = contactSubmit.querySelector('.spinner-border');
    label.classList.add('d-none');
    spinner.classList.remove('d-none');
    contactSubmit.disabled = true;

    setTimeout(() => {
        label.classList.remove('d-none');
        spinner.classList.add('d-none');
        contactSubmit.disabled = false;
        contactForm.reset();
        contactStatus.innerHTML = `
            <div class="alert alert-success d-flex align-items-center gap-2 mb-0" role="alert">
                <span>${icons.check}</span>
                <span>Merci ! L'équipe Texefa vous répondra très rapidement.</span>
            </div>`;
        setTimeout(() => { contactStatus.innerHTML = ''; }, 6000);
    }, 1400);
});

/* ---------------- Newsletter ---------------- */

const newsletterForm = document.getElementById('newsletter-form');
const newsletterStatus = document.getElementById('newsletter-status');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const button = newsletterForm.querySelector('button');

    if (!input.value || !input.checkValidity()) {
        newsletterStatus.className = 'small mt-2 mb-0 text-danger';
        newsletterStatus.textContent = "Merci d'indiquer une adresse email valide.";
        return;
    }

    button.disabled = true;
    newsletterStatus.className = 'small mt-2 mb-0 text-white-50';
    newsletterStatus.textContent = "Inscription en cours…";

    setTimeout(() => {
        button.disabled = false;
        newsletterForm.reset();
        newsletterStatus.className = 'small mt-2 mb-0 text-success';
        newsletterStatus.textContent = "Merci ! Vous êtes bien inscrit(e).";
        setTimeout(() => { newsletterStatus.textContent = ''; }, 6000);
    }, 900);
});

/* ---------------- Carrousel 3D (haut de page) ---------------- */

function renderHeroSlides(items) {
    return items.map((s, i) => `
        <div class="c3d-slide${i === 0 ? ' active' : ''}" data-index="${i}" data-href="${s.href}" role="group" aria-roledescription="diapositive" aria-label="${s.title}"${i === 0 ? '' : ' aria-hidden="true"'}>
            <img src="${s.img}" alt="${s.alt || s.title}" ${i === 0 ? '' : 'loading="lazy"'} width="600" height="800">
            ${s.tag ? `<div class="c3d-caption"><strong>${s.title}</strong><small>${s.tag}</small></div>` : ''}
        </div>`).join('');
}

(function initHeroCarousel() {
    const stage = document.getElementById('hero-carousel');
    const track = document.getElementById('c3d-track');
    if (!stage || !track) return;

    const slidesData = heroSlides;
    track.innerHTML = renderHeroSlides(slidesData);
    const slides = Array.from(track.querySelectorAll('.c3d-slide'));
    if (!slides.length) return;

    if (reduceMotion) {
        stage.innerHTML = `
            <div class="d-flex flex-wrap justify-content-center gap-3 py-2">
                ${slidesData.map(s => `
                    <a href="${s.href}" class="d-block" style="width: clamp(180px, 28vw, 240px); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px -20px rgba(8, 2, 24, .6);">
                        <img src="${s.img}" alt="${s.alt || s.title}" width="600" height="800" style="width: 100%; height: auto; display: block;">
                    </a>`).join('')}
            </div>`;
        return;
    }

    const dotsBox = document.getElementById('c3d-dots');
    const prevBtn = document.getElementById('c3d-prev');
    const nextBtn = document.getElementById('c3d-next');
    const n = slides.length;
    let current = 0;
    let timer = null;

    function render() {
        slides.forEach((slide, i) => {
            let offset = i - current;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;
            const abs = Math.abs(offset);
            const translateX = offset * 118;
            const translateZ = abs === 0 ? 130 : abs === 1 ? 0 : -260;
            const rotateY = offset * -46;
            const scale = abs === 0 ? 1 : abs === 1 ? .88 : .74;

            slide.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
            slide.style.opacity = abs === 0 ? 1 : abs === 1 ? .92 : 0;
            slide.style.filter = abs >= 2 ? 'blur(5px)' : 'none';
            slide.style.zIndex = String(n - abs);
            slide.classList.toggle('active', i === current);
            slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
        });

        [...dotsBox.children].forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
            dot.setAttribute('aria-selected', String(i === current));
        });
    }

    function go(delta) {
        current = (current + delta + n) % n;
        render();
    }

    dotsBox.innerHTML = slidesData.map((s, i) =>
        `<button type="button" class="c3d-dot" data-i="${i}" role="tab" aria-label="Diapositive ${i + 1} : ${s.title}"${i === 0 ? ' aria-selected="true"' : ''}></button>`
    ).join('');
    [...dotsBox.children].forEach(dot => {
        dot.addEventListener('click', () => { current = Number(dot.dataset.i); render(); restart(); });
    });

    prevBtn.addEventListener('click', () => { go(-1); restart(); });
    nextBtn.addEventListener('click', () => { go(1); restart(); });

    function restart() {
        clearInterval(timer);
        timer = setInterval(() => go(1), 4200);
    }
    stage.addEventListener('mouseenter', () => clearInterval(timer));
    stage.addEventListener('mouseleave', restart);
    stage.addEventListener('focusin', () => clearInterval(timer));
    stage.addEventListener('focusout', restart);

    track.addEventListener('click', (e) => {
        const slide = e.target.closest('.c3d-slide');
        if (slide && slide.dataset.href) window.location.href = slide.dataset.href;
    });

    render();
    restart();
})();
