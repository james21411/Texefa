/* ============================================================
   TEXEFA — Données + rendu + interactions
   ============================================================ */

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
        icon: "fa-solid fa-graduation-cap",
        image: "https://picsum.photos/seed/texefa-academy/900/1100",
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
        icon: "fa-solid fa-feather-pointed",
        image: "https://picsum.photos/seed/texefa-edition/900/560",
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
        icon: "fa-solid fa-code",
        image: "https://picsum.photos/seed/texefa-it/900/560",
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
        avatar: "https://picsum.photos/seed/texefa-temoignage-karim/200/200"
    },
    {
        name: "Dr. Marie N.",
        role: "Chercheuse, Yaoundé",
        text: "Grâce à Texefa, j'ai pu publier mes travaux dans une revue indexée. Leur coaching en scientific writing a été d'une aide précieuse.",
        avatar: "https://picsum.photos/seed/texefa-temoignage-marie/200/200"
    },
    {
        name: "Awa S.",
        role: "Responsable RH, Douala",
        text: "Les formations de Texefa ont boosté les compétences de nos équipes en IA. Des programmes concrets et directement applicables.",
        avatar: "https://picsum.photos/seed/texefa-temoignage-awa/200/200"
    }
];

const futureCards = [
    { num: "01", title: "Immobilier", icon: "fa-solid fa-building", desc: "Investissements, promotion et gestion de projets immobiliers résidentiels et commerciaux.", color: "text-violet" },
    { num: "02", title: "Import & Export", icon: "fa-solid fa-ship", desc: "Commerce international, sourcing et logistique entre l'Afrique, l'Europe et l'Asie.", color: "text-mauve" },
    { num: "03", title: "Agriculture", icon: "fa-solid fa-seedling", desc: "Projets agricoles modernes et durables, avec un focus sur la productivité et l'impact social.", color: "text-coral" },
    { num: "04", title: "Agro-industrie", icon: "fa-solid fa-industry", desc: "Transformation locale des produits agricoles et création de valeur ajoutée.", color: "text-lilas" }
];

const offers = [
    {
        title: "Site Vitrine Professionnel",
        price: "100 000",
        suffix: "FCFA",
        badge: "Populaire",
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
        icon: "fa-solid fa-school",
        desc: "Gestion scolaire de bout en bout : élèves, enseignants, notes, paiements et communication.",
        color: "text-violet"
    },
    {
        name: "CAITED",
        tag: "Site officiel",
        icon: "fa-solid fa-tower-observation",
        desc: "Site officiel de la Conférence : programme, intervenants, inscriptions et actes.",
        color: "text-coral"
    },
    {
        name: "NexusTrans",
        tag: "Communication",
        icon: "fa-solid fa-comments",
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
    { img: "https://picsum.photos/seed/texefa-academy-3d/600/800", title: "Academy & certifications", tag: "Formation", alt: "Étudiants en formation Texefa", href: "#services" },
    { img: "https://picsum.photos/seed/texefa-web-3d/600/800", title: "Sites, applications & IA", tag: "Présence digitale", alt: "Écran affichant un site web développé par Texefa", href: "#contact" }
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
            `<li><i class="fa-solid fa-circle-check ${item.tagColor}" aria-hidden="true"></i>${p}</li>`
        ).join('');
        const badge = `
            <span class="tag-pill ${item.tagColor}">
                <i class="${item.icon}" aria-hidden="true"></i>${item.title.split(' ')[0]}
            </span>`;

        if (index === 0) {
            return `
            <div class="col-lg-7" data-reveal>
                <article class="service-card d-flex flex-column flex-sm-row">
                    <div class="col-sm-5 featured-media-col position-relative">
                        ${badge}
                        <div class="service-media sm-tall">
                            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="900" height="1100">
                        </div>
                    </div>
                    <div class="service-body d-flex flex-column">
                        <span class="icon-box ${softTints[item.tagColor] || 'soft-violet'} mb-3"><i class="${item.icon} ${item.tagColor}"></i></span>
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
                        <img src="${item.image}" alt="${item.alt}" loading="lazy" width="900" height="560">
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

function renderTestimonials(items) {
    return items.map((item, index) => {
        const body = `
            <div class="testi-mark text-gradient" aria-hidden="true">&ldquo;</div>
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
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
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
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
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
                <i class="${item.icon} future-ico" aria-hidden="true"></i>
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
                <div class="offer-head">
                    <span class="offer-badge${o.featured ? ' offer-badge-hot' : ''}">${o.badge}</span>
                </div>
                <div class="offer-body d-flex flex-column pt-0">
                    <h3 class="h6 fw-bold mb-0">${o.title}</h3>
                    <p class="offer-price mb-0"><span class="font-display fst-italic text-gradient">${o.price}</span><small>${o.suffix}</small></p>
                    <ul class="service-points mt-3 mb-0">
                        ${o.features.map(f => `<li><i class="fa-solid fa-circle-check text-coral" aria-hidden="true"></i>${f}</li>`).join('')}
                    </ul>
                    <div class="offer-cta mt-4">
                        <a href="#contact" class="btn btn-coral w-100">Commander<i class="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>
                </div>
            </article>
        </div>`).join('');
}

function renderProjects(items) {
    return items.map(p => `
        <div class="col-md-4 d-flex" data-reveal>
            <article class="project-card w-100">
                <div class="d-flex align-items-center justify-content-between gap-2">
                    <span class="icon-box ${softTints[p.color] || 'soft-violet'}"><i class="${p.icon} ${p.color}" aria-hidden="true"></i></span>
                    <span class="offer-badge ${softTints[p.color] || 'soft-violet'} ${p.color}">${p.tag}</span>
                </div>
                <h3 class="h4 fw-bold mt-3 mb-1 font-display">${p.name}</h3>
                <p class="text-body-secondary small mb-0">${p.desc}</p>
            </article>
        </div>`).join('');
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
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
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
