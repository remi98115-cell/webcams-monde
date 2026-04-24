/* ==================================================================
   WEBCAMS DU MONDE — Données (71 webcams vérifiées LIVE le 2026-04-24)
   ------------------------------------------------------------------
   Pour ajouter/modifier une webcam : éditez simplement ce tableau.
   videoId = identifiant YouTube (la partie après v= dans l'URL)
   ================================================================== */

const WEBCAMS = [
    { name: "Times Square", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗽", videoId: "rnXIjl_Rzy4", desc: "Le carrefour le plus célèbre du monde, illuminé 24h/24." },
    { name: "Abbey Road", city: "Londres", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🎸", videoId: "M3EYAY2MftI", desc: "Le passage piéton mythique des Beatles." },
    { name: "Venice Beach", city: "Los Angeles", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "EO_1LWqsCNE", desc: "La plage culte de Californie et son ambiance." },
    { name: "Piazza San Marco", city: "Venise", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🛶", videoId: "x4AlaibltlA", desc: "La place Saint-Marc au cœur de Venise." },
    { name: "Jackson Hole Town Square", city: "Wyoming", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🤠", videoId: "1EiC9bvVGnk", desc: "La petite ville mythique du Far West américain." },
    { name: "Fontaine de Trevi", city: "Rome", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛲", videoId: "wMT2aNcP4Wg", desc: "La majestueuse fontaine baroque de Rome." },
    { name: "Sagrada Familia", city: "Barcelone", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "⛪", videoId: "NHRDdaH4LpU", desc: "La basilique de Gaudí en construction." },
    { name: "Temple Bar", city: "Dublin", country: "Irlande", region: "europe", flag: "🇮🇪", emoji: "🍺", videoId: "3nyPER2kzqk", desc: "Le quartier festif et coloré de Dublin." },
    { name: "Acropole", city: "Athènes", country: "Grèce", region: "europe", flag: "🇬🇷", emoji: "🏛️", videoId: "5p-s-1453Us", desc: "Le Parthénon et le site antique." },
    { name: "Shibuya Crossing", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗾", videoId: "dfVK7ld38Ys", desc: "Le passage piéton le plus fréquenté du monde." },
    { name: "Vieille Ville", city: "Prague", country: "Tchéquie", region: "europe", flag: "🇨🇿", emoji: "🏰", videoId: "IFnbDmgP69Q", desc: "La place de la vieille ville et son horloge." },
    { name: "Cervin", city: "Zermatt", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏔️", videoId: "enYFXf8u7Lc", desc: "La montagne emblématique des Alpes suisses." },
    { name: "Dam Square", city: "Amsterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🚲", videoId: "Gd9d4q6WvUY", desc: "La place centrale d'Amsterdam." },
    { name: "Reykjavik", city: "Reykjavik", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "❄️", videoId: "tYgGEC-ESTw", desc: "La capitale la plus septentrionale du monde." },
    { name: "Côte d'Azur", city: "Nice", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏖️", videoId: "z6BNMoj9Pyo", desc: "La Promenade des Anglais et la baie." },
    { name: "Aurores Boréales", city: "Laponie", country: "Finlande", region: "nature", flag: "🇫🇮", emoji: "🌌", videoId: "a0i1Kg6fROg", desc: "Les aurores dans le ciel arctique." },
    { name: "Ponte Vecchio", city: "Florence", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌉", videoId: "qWlry5rSTBo", desc: "Le pont médiéval sur l'Arno." },
    { name: "Tour Eiffel", city: "Paris", country: "France", region: "europe", flag: "🇫🇷", emoji: "🗼", videoId: "OzYp4NRZlwQ", desc: "Panorama sur la Dame de Fer." },
    { name: "Bosphore", city: "Istanbul", country: "Turquie", region: "europe", flag: "🇹🇷", emoji: "🕌", videoId: "Veq52FdYk0s", desc: "Le détroit entre Europe et Asie." },
    { name: "Lac de Côme", city: "Lombardie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏞️", videoId: "d0-a8UJAyvY", desc: "Le lac le plus glamour d'Italie." },
    { name: "Mont Blanc", city: "Chamonix", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏔️", videoId: "elGbyX0KCMg", desc: "Le toit de l'Europe." },
    { name: "Dubrovnik", city: "Dubrovnik", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "🏰", videoId: "idr71oXmhdc", desc: "La perle de l'Adriatique." },
    { name: "Zurich", city: "Zurich", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏙️", videoId: "QIt1FaDMnQc", desc: "Le centre-ville et le lac." },
    { name: "Chutes du Niagara", city: "Ontario", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "💧", videoId: "cf4YkyGk6Tk", desc: "Les chutes impressionnantes en HD." },
    { name: "Hollywood Boulevard", city: "Los Angeles", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎬", videoId: "cmkAbDUEoyA", desc: "Le Walk of Fame." },
    { name: "Las Vegas Strip", city: "Las Vegas", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎰", videoId: "_rmUXOHSf0w", desc: "Le boulevard le plus illuminé." },
    { name: "Space Needle", city: "Seattle", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏗️", videoId: "4cgSE12k9Sc", desc: "Le monument futuriste." },
    { name: "Key West", city: "Key West", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌅", videoId: "1Gn9gG9U2iM", desc: "Le point le plus au sud des USA." },
    { name: "Chicago", city: "Chicago", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏙️", videoId: "O0UGT7AT3aw", desc: "Les gratte-ciels sur le lac Michigan." },
    { name: "Bourbon Street", city: "La Nouvelle-Orléans", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎷", videoId: "Ksrleaxxxhw", desc: "Le quartier français du jazz." },
    { name: "Golden Gate Bridge", city: "San Francisco", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌉", videoId: "BSWhGNXxT9A", desc: "Le pont rouge emblématique." },
    { name: "CN Tower", city: "Toronto", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏢", videoId: "EPKWu223XEg", desc: "La skyline de Toronto." },
    { name: "Vancouver", city: "Vancouver", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏔️", videoId: "rxyNjFKwzJA", desc: "Entre océan et Rocheuses." },
    { name: "Mont Fuji", city: "Honshu", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗻", videoId: "F2NbYrc-gBU", desc: "Le volcan sacré du Japon." },
    { name: "Copacabana", city: "Rio de Janeiro", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🏖️", videoId: "l8El-eM_sTk", desc: "La plage mythique et le Pain de Sucre." },
    { name: "Waikiki Beach", city: "Honolulu", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌺", videoId: "WIUg8wzhq1g", desc: "La plage emblématique d'Oahu." },
    { name: "Kyoto", city: "Kyoto", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "⛩️", videoId: "bK9vpKisRnQ", desc: "L'ancienne capitale impériale." },
    { name: "Shinjuku", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏮", videoId: "DjdUEyjx8GM", desc: "Le quartier animé et illuminé." },
    { name: "Bangkok", city: "Bangkok", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🛕", videoId: "UemFRPrl1hk", desc: "La capitale thaïlandaise." },
    { name: "Baie de Hong Kong", city: "Hong Kong", country: "Chine", region: "asia", flag: "🇭🇰", emoji: "🌆", videoId: "YpmiEiUJ5nI", desc: "La skyline spectaculaire." },
    { name: "Marina Bay", city: "Singapour", country: "Singapour", region: "asia", flag: "🇸🇬", emoji: "🏊", videoId: "9cfkyMzanbc", desc: "La baie futuriste." },
    { name: "Dubai Marina", city: "Dubaï", country: "UAE", region: "asia", flag: "🇦🇪", emoji: "🏙️", videoId: "-p1Xnt9n0yg", desc: "La marina futuriste." },
    { name: "Bondi Beach", city: "Sydney", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🏄", videoId: "5uZa3-RMFos", desc: "La célèbre plage de surf." },
    { name: "Bali", city: "Bali", country: "Indonésie", region: "asia", flag: "🇮🇩", emoji: "🌴", videoId: "FBYUkqutqzE", desc: "L'île des dieux." },
    { name: "Safari Kruger", city: "Mpumalanga", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🦁", videoId: "NapztoCaKFY", desc: "Safari en direct avec Africam." },
    { name: "Auckland", city: "Auckland", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "⛵", videoId: "BQR800Gu28g", desc: "Le port d'Auckland." },
    { name: "Melbourne", city: "Melbourne", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🎨", videoId: "l_8DrACHpwY", desc: "La capitale culturelle." },
    { name: "Marrakech", city: "Marrakech", country: "Maroc", region: "africa", flag: "🇲🇦", emoji: "🕌", videoId: "HfgIFGbdGJ0", desc: "La place Jemaa el-Fna." },
    { name: "Le Cap", city: "Le Cap", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏔️", videoId: "iUjpHz9_qaM", desc: "Table Mountain et la baie." },
    { name: "Ours de Katmai", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐻", videoId: "5e4lsEe4Vew", desc: "Les ours pêchent le saumon." },
    { name: "Éléphants Tembe", city: "KwaZulu-Natal", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🐘", videoId: "gdrNUUf-cQw", desc: "Point d'eau des éléphants." },
    { name: "Yellowstone", city: "Yellowstone", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦬", videoId: "BWnloy8r0qU", desc: "La faune du parc national." },
    { name: "Monterey Aquarium", city: "Californie", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐠", videoId: "NUnJc82ptd4", desc: "Les coulisses de l'aquarium." },
    { name: "Pandas Géants", city: "Atlanta", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐼", videoId: "NqOmHpwMUxs", desc: "Les pandas du zoo." },
    { name: "Girafes", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦒", videoId: "ydYDqZQpim8", desc: "La savane du zoo de San Diego." },
    { name: "Hippopotames", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦛", videoId: "BSUnBPvX9K4", desc: "Les hippos sous l'eau." },
    { name: "Manchots", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐧", videoId: "HHp4rjhJsWI", desc: "Les manchots en direct." },
    { name: "Requins", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦈", videoId: "8WTFWvePutc", desc: "Les requins en direct." },
    { name: "Récif corallien", city: "Pacifique", country: "USA", region: "nature", flag: "🌊", emoji: "🐢", videoId: "7i8ARjIeM2k", desc: "Plongée en direct." },
    { name: "Mangeoire oiseaux", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦜", videoId: "y9t1g8Ike6g", desc: "Oiseaux colorés en direct." },
    { name: "Nid d'aigles", city: "USA", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦅", videoId: "tQ-QvErC48w", desc: "Les aigles pêcheurs américains." },
    { name: "ISS Live", city: "Orbite", country: "NASA", region: "space", flag: "🌍", emoji: "🛰️", videoId: "vytmBNhc9ig", desc: "La Terre depuis l'ISS." },
    { name: "SpaceX", city: "Cape Canaveral", country: "USA", region: "space", flag: "🇺🇸", emoji: "🛸", videoId: "PQ2wzesrc9E", desc: "Lancements Falcon." },
    { name: "NASA TV", city: "—", country: "NASA", region: "space", flag: "🚀", emoji: "👨‍🚀", videoId: "sWasdbDVNvc", desc: "Missions et lancements." },
    { name: "Soleil", city: "Espace", country: "NASA", region: "space", flag: "☀️", emoji: "🌞", videoId: "6g4Fh8K-MhY", desc: "Le Soleil via SDO." },
    { name: "Sedona", city: "Arizona", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏜️", videoId: "JlxDI6rGH-U", desc: "Les roches rouges de Sedona." },
    { name: "Phuket", city: "Phuket", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🏝️", videoId: "IVa59mpPJTg", desc: "Les plages thaïlandaises." },
    { name: "Maldives", city: "Maldives", country: "Maldives", region: "asia", flag: "🇲🇻", emoji: "🏝️", videoId: "_BMi3usEwi8", desc: "Les lagons turquoise." },
    { name: "Banff", city: "Alberta", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏞️", videoId: "EENeRuDqS48", desc: "Les lacs turquoise des Rocheuses." },
    { name: "Lisbonne", city: "Lisbonne", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🚋", videoId: "VbDwJxGlZ5k", desc: "Les collines et tramways." },
    { name: "Porte de Brandebourg", city: "Berlin", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🏛️", videoId: "IRqboacDNFg", desc: "Le monument emblématique." },
];

/* ==================================================================
   RENDU ET INTERACTIONS
   ================================================================== */

const grid = document.getElementById('webcam-grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const countEl = document.getElementById('count');

let currentRegion = 'all';
let currentSearch = '';

const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const livePreviewUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`;
const fullEmbedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
const sourceUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

const MAX_ACTIVE_IFRAMES = 10;
const activeCards = new Set();

function loadIframe(card) {
    if (card.dataset.loaded === '1') return;
    if (activeCards.size >= MAX_ACTIVE_IFRAMES) {
        const oldest = activeCards.values().next().value;
        if (oldest && oldest !== card) unloadIframe(oldest);
    }
    const videoId = card.dataset.videoId;
    const thumb = card.querySelector('.card-thumb');
    const iframe = document.createElement('iframe');
    iframe.className = 'thumb-iframe';
    iframe.src = livePreviewUrl(videoId);
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('tabindex', '-1');
    thumb.appendChild(iframe);
    card.dataset.loaded = '1';
    activeCards.add(card);
}

function unloadIframe(card) {
    const iframe = card.querySelector('.thumb-iframe');
    if (iframe) iframe.remove();
    card.dataset.loaded = '0';
    activeCards.delete(card);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) loadIframe(entry.target);
        else unloadIframe(entry.target);
    });
}, { rootMargin: '200px 0px', threshold: 0.1 });

function renderCard(webcam, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${Math.min(index * 0.03, 0.6)}s`;
    card.dataset.region = webcam.region;
    card.dataset.videoId = webcam.videoId;
    card.dataset.loaded = '0';

    card.innerHTML = `
        <div class="card-thumb">
            <span class="live-badge">LIVE</span>
            <img class="thumb-img" src="${thumbUrl(webcam.videoId)}" alt="${webcam.name}" loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="card-thumb-fallback" style="display:none;">${webcam.emoji || '📹'}</div>
            <div class="card-overlay">
                <div class="play-btn">▶</div>
            </div>
        </div>
        <div class="card-body">
            <div class="card-title">
                <span class="card-flag">${webcam.flag}</span>
                <span>${webcam.name}</span>
            </div>
            <div class="card-location">${webcam.city} · ${webcam.country}</div>
            <div class="card-desc">${webcam.desc}</div>
            <span class="card-tag">${regionLabel(webcam.region)}</span>
        </div>
    `;
    card.addEventListener('click', () => openModal(webcam));
    return card;
}

function regionLabel(r) {
    const labels = { europe: 'Europe', americas: 'Amériques', asia: 'Asie', oceania: 'Océanie', africa: 'Afrique', nature: 'Nature', space: 'Espace' };
    return labels[r] || r;
}

function renderGrid() {
    const search = currentSearch.toLowerCase().trim();
    activeCards.forEach(card => observer.unobserve(card));
    activeCards.clear();

    const filtered = WEBCAMS.filter(w => {
        const matchesRegion = currentRegion === 'all' || w.region === currentRegion;
        const matchesSearch = !search ||
            w.name.toLowerCase().includes(search) ||
            w.city.toLowerCase().includes(search) ||
            w.country.toLowerCase().includes(search) ||
            w.desc.toLowerCase().includes(search);
        return matchesRegion && matchesSearch;
    });

    grid.innerHTML = '';
    filtered.forEach((w, i) => {
        const card = renderCard(w, i);
        grid.appendChild(card);
        observer.observe(card);
    });

    countEl.textContent = filtered.length;
    noResults.classList.toggle('hidden', filtered.length > 0);
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRegion = btn.dataset.region;
        renderGrid();
    });
});

let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentSearch = e.target.value;
        renderGrid();
    }, 200);
});

/* ==== Modal ==== */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalDesc = document.getElementById('modal-desc');
const modalVideo = document.getElementById('modal-video');
const modalSource = document.getElementById('modal-source');
const modalClose = document.getElementById('modal-close');

function openModal(webcam) {
    modalTitle.textContent = `${webcam.flag} ${webcam.name}`;
    modalLocation.textContent = `${webcam.city} · ${webcam.country}`;
    modalDesc.textContent = webcam.desc;
    modalSource.href = sourceUrl(webcam.videoId);
    modalVideo.innerHTML = `<iframe src="${fullEmbedUrl(webcam.videoId)}"
        title="${webcam.name}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    modalVideo.innerHTML = '';
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

renderGrid();
