import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ceblbpnwewsyrhehxjyn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_0lWAFxVWRdYyTmvMoST9bA_8FNkj3M9';
const DEFAULT_REDIRECT_URL = 'https://minatoxic.github.io/Go-Find-Me/';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const FLAGS = {
    ma: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#c1272d"/><polygon points="9,3.3 9.7,5.5 12,5.5 10.1,6.8 10.8,9 9,7.6 7.2,9 7.9,6.8 6,5.5 8.3,5.5" fill="none" stroke="#006233" stroke-width="0.7"/></svg>`,
    fr: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#0055a4"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ef4135"/></svg>`,
    be: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#000"/><rect width="6" height="12" x="6" fill="#fae042"/><rect width="6" height="12" x="12" fill="#ed2939"/></svg>`,
    ca: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="4.5" height="12" x="0" fill="#ff0000"/><rect width="9" height="12" x="4.5" fill="#fff"/><rect width="4.5" height="12" x="13.5" fill="#ff0000"/><polygon points="9,3.2 9.8,5.2 11.5,4.8 10.5,6.4 11.8,7.3 9.6,7.5 9,9.2 8.4,7.5 6.2,7.3 7.5,6.4 6.5,4.8 8.2,5.2" fill="#ff0000"/></svg>`,
    cd: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#007fff"/><path d="M0 9.6L15.6 0H18v2.4L2.4 12H0z" fill="#f7d618"/><path d="M0 10.3L16.7 0H18v1.3L1.3 12H0z" fill="#ce1021"/><polygon points="3.5,1.5 4.1,3.2 5.9,3.2 4.4,4.2 5,5.9 3.5,4.9 2,5.9 2.6,4.2 1.1,3.2 2.9,3.2" fill="#f7d618"/></svg>`,
    us: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#b22234"/><path d="M0 1.4h18M0 3.7h18M0 6h18M0 8.3h18M0 10.6h18" stroke="#fff" stroke-width="1"/><rect width="7.5" height="6.5" fill="#3c3b6e"/></svg>`,
    gb: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#012169"/><path d="M0 0l18 12M18 0L0 12" stroke="#fff" stroke-width="2.2"/><path d="M0 0l18 12M18 0L0 12" stroke="#c8102e" stroke-width="1.2"/><path d="M9 0v12M0 6h18" stroke="#fff" stroke-width="3.2"/><path d="M9 0v12M0 6h18" stroke="#c8102e" stroke-width="1.8"/></svg>`,
    au: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#00008b"/><rect width="9" height="6" fill="#00008b"/><path d="M0 0l9 6M9 0L0 6" stroke="#fff" stroke-width="1.3"/><path d="M0 0l9 6M9 0L0 6" stroke="#c8102e" stroke-width="0.7"/><path d="M4.5 0v6M0 3h9" stroke="#fff" stroke-width="2"/><path d="M4.5 0v6M0 3h9" stroke="#c8102e" stroke-width="1.1"/></svg>`,
    eg: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#ce1126"/><rect width="18" height="4" y="4" fill="#fff"/><rect width="18" height="4" y="8" fill="#000"/><circle cx="9" cy="6" r="1.4" fill="#c09300"/></svg>`,
    dz: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="9" height="12" x="0" fill="#006233"/><rect width="9" height="12" x="9" fill="#fff"/><circle cx="9.8" cy="6" r="2.7" fill="#d21034"/><circle cx="10.6" cy="6" r="2.1" fill="#fff"/><polygon points="9.2,6 11.4,5.3 10.1,7.1 10.1,4.9 11.4,6.7" fill="#d21034"/></svg>`,
    tn: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#e70013"/><circle cx="9" cy="6" r="3.4" fill="#fff"/><circle cx="9.6" cy="6" r="2.5" fill="#e70013"/><polygon points="9.8,4.6 10.2,5.6 11.2,5.6 10.4,6.2 10.7,7.2 9.8,6.6 8.9,7.2 9.2,6.2 8.4,5.6 9.4,5.6" fill="#fff"/></svg>`,
    sa: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#006c35"/><path d="M4 5.5h10M5.5 8h7" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/></svg>`,
    es: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="3" y="0" fill="#aa151b"/><rect width="18" height="6" y="3" fill="#f1bf00"/><rect width="18" height="3" y="9" fill="#aa151b"/></svg>`,
    mx: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#006847"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ce1126"/><circle cx="9" cy="6" r="1.5" fill="#8b5a2b"/></svg>`,
    co: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="6" y="0" fill="#fcd116"/><rect width="18" height="3" y="6" fill="#003893"/><rect width="18" height="3" y="9" fill="#ce1126"/></svg>`,
    ar: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#74acdf"/><rect width="18" height="4" y="4" fill="#fff"/><rect width="18" height="4" y="8" fill="#74acdf"/><circle cx="9" cy="6" r="1.4" fill="#f6b40e"/></svg>`,
    de: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#000"/><rect width="18" height="4" y="4" fill="#dd0000"/><rect width="18" height="4" y="8" fill="#ffce00"/></svg>`,
    at: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#ed2939"/><rect width="18" height="4" y="4" fill="#fff"/><rect width="18" height="4" y="8" fill="#ed2939"/></svg>`,
    it: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#009246"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ce2b37"/></svg>`,
    ch: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#d52b1e"/><rect x="7.8" y="2.5" width="2.4" height="7" fill="#fff"/><rect x="5.5" y="4.8" width="7" height="2.4" fill="#fff"/></svg>`,
    br: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#009b3a"/><polygon points="9,1.8 15.8,6 9,10.2 2.2,6" fill="#ffdf00"/><circle cx="9" cy="6" r="2.3" fill="#002776"/></svg>`,
    pt: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="7" height="12" x="0" fill="#006600"/><rect width="11" height="12" x="7" fill="#ff0000"/><circle cx="7" cy="6" r="2.2" fill="#ffcc00" stroke="#000" stroke-width="0.4"/></svg>`
};

const COUNTRY_LANGUAGES = [
    { country: "Morocco", flag: "ma", lang: "ar", langLabel: "العربية" },
    { country: "France", flag: "fr", lang: "fr", langLabel: "Français" },
    { country: "Belgium", flag: "be", lang: "fr", langLabel: "Français" },
    { country: "Canada", flag: "ca", lang: "fr", langLabel: "Français" },
    { country: "DR Congo", flag: "cd", lang: "fr", langLabel: "Français" },
    { country: "United States", flag: "us", lang: "en", langLabel: "English" },
    { country: "United Kingdom", flag: "gb", lang: "en", langLabel: "English" },
    { country: "Australia", flag: "au", lang: "en", langLabel: "English" },
    { country: "Egypt", flag: "eg", lang: "ar", langLabel: "العربية" },
    { country: "Algeria", flag: "dz", lang: "ar", langLabel: "العربية" },
    { country: "Tunisia", flag: "tn", lang: "ar", langLabel: "العربية" },
    { country: "Saudi Arabia", flag: "sa", lang: "ar", langLabel: "العربية" },
    { country: "Spain", flag: "es", lang: "es", langLabel: "Español" },
    { country: "Mexico", flag: "mx", lang: "es", langLabel: "Español" },
    { country: "Colombia", flag: "co", lang: "es", langLabel: "Español" },
    { country: "Argentina", flag: "ar", lang: "es", langLabel: "Español" },
    { country: "Germany", flag: "de", lang: "de", langLabel: "Deutsch" },
    { country: "Austria", flag: "at", lang: "de", langLabel: "Deutsch" },
    { country: "Italy", flag: "it", lang: "it", langLabel: "Italiano" },
    { country: "Switzerland", flag: "ch", lang: "it", langLabel: "Italiano" },
    { country: "Brazil", flag: "br", lang: "pt", langLabel: "Português" },
    { country: "Portugal", flag: "pt", lang: "pt", langLabel: "Português" }
];

const UI_TEXT = {
    en: { categories: "Categories", sortBy: "Sort by:", search: "Search brands...", signIn: "Sign In", brandOne: "1 brand", brandMany: "brands" },
    fr: { categories: "Catégories", sortBy: "Trier par :", search: "Rechercher une marque...", signIn: "Connexion", brandOne: "1 marque", brandMany: "marques" },
    ar: { categories: "الفئات", sortBy: "ترتيب حسب:", search: "ابحث عن علامة تجارية...", signIn: "تسجيل الدخول", brandOne: "علامة واحدة", brandMany: "علامات" },
    es: { categories: "Categorías", sortBy: "Ordenar por:", search: "Buscar marcas...", signIn: "Iniciar sesión", brandOne: "1 marca", brandMany: "marcas" },
    de: { categories: "Kategorien", sortBy: "Sortieren:", search: "Marken suchen...", signIn: "Anmelden", brandOne: "1 Marke", brandMany: "Marken" },
    it: { categories: "Categorie", sortBy: "Ordina per:", search: "Cerca brand...", signIn: "Accedi", brandOne: "1 brand", brandMany: "brand" },
    pt: { categories: "Categorias", sortBy: "Ordenar por:", search: "Buscar marcas...", signIn: "Entrar", brandOne: "1 marca", brandMany: "marcas" }
};

let brands = [];
let currentUser = null;
let isSignUp = true;
let isSubmittingAuth = false;
let isResendingEmail = false;
let currentSelectedBrandName = null;
let draftCountry = null;
let countryFilterQuery = '';
let reviewFilterMode = 'all';
let reviewSortMode = 'newest';
let currentLang = 'en';
let lastPendingEmail = '';
const translatedCache = {};
let toastTimer = null;

const defaultAvatarSvg = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;

const eyeOpenSvg = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
const eyeClosedSvg = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeJsSingleQuote(value) {
    return String(value ?? '')
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function resolveBannerUrl(bannerValue) {
    if (!bannerValue) return '';
    const trimmed = String(bannerValue).trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
        return encodeURI(trimmed);
    }
    const normalizedPath = trimmed.startsWith('images/') ? trimmed : `images/${trimmed}`;
    return encodeURI(normalizedPath);
}

function getRedirectUrl() {
    const originHref = window.location.origin + window.location.pathname;
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return DEFAULT_REDIRECT_URL;
        }
        return originHref;
    }
    return DEFAULT_REDIRECT_URL;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function togglePasswordVisibility() {
    const input = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    if (!input || !eyeIcon) return;

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.innerHTML = eyeClosedSvg;
    } else {
        input.type = 'password';
        eyeIcon.innerHTML = eyeOpenSvg;
    }
}

function toggleMobileSidebar(forceState) {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    const next = typeof forceState === 'boolean' ? forceState : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', next);
    backdrop.classList.toggle('open', next);
}

function getLangForCountry(countryName) {
    const found = COUNTRY_LANGUAGES.find(c => c.country === countryName);
    return found ? found.lang : 'en';
}

function getCountryInfo(countryName) {
    return COUNTRY_LANGUAGES.find(c => c.country === countryName) || { country: countryName, flag: "us", lang: 'en', langLabel: 'English' };
}

function applyUIText(lang) {
    const t = UI_TEXT[lang] || UI_TEXT.en;
    const sidebarTitle = document.getElementById('sidebarTitle');
    const sortLabel = document.getElementById('sortLabel');
    const searchBar = document.getElementById('search');
    if (sidebarTitle) sidebarTitle.textContent = t.categories;
    if (sortLabel) sortLabel.textContent = t.sortBy;
    if (searchBar) searchBar.placeholder = t.search;
}

async function autoTranslate(text, targetLang) {
    if (targetLang === 'en' || !text) return text;
    const cacheKey = targetLang + "_" + text;
    if (translatedCache[cacheKey]) return translatedCache[cacheKey];

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
            const translated = data.responseData.translatedText;
            translatedCache[cacheKey] = translated;
            return translated;
        }
    } catch (e) {
        console.error("Traduction auto échouée", e);
    }
    return text;
}

async function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    applyUIText(lang);
    const langSelect = document.getElementById('langSelect');
    if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
    }
    updateAuthUI();
    await render();
    if (currentSelectedBrandName) {
        await openBrandDetail(currentSelectedBrandName, false);
    }
}

function computeBrandStats(brandRow, reviewRows) {
    const list = reviewRows.map(r => ({
        id: r.id,
        username: r.username,
        text: r.text,
        rating: Number(r.rating),
        verified: Boolean(r.verified),
        date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        upvotes: Number(r.upvotes || 0),
        downvotes: Number(r.downvotes || 0),
        userVote: null
    }));

    let rating = 0, verified = 0, unverified = 0;
    if (list.length > 0) {
        let total = 0, verTotal = 0, verCount = 0, unvTotal = 0, unvCount = 0;
        list.forEach(r => {
            total += r.rating;
            if (r.verified) {
                verTotal += r.rating;
                verCount++;
            } else {
                unvTotal += r.rating;
                unvCount++;
            }
        });
        rating = parseFloat((total / list.length).toFixed(1));
        verified = verCount > 0 ? parseFloat((verTotal / verCount).toFixed(1)) : 0;
        unverified = unvCount > 0 ? parseFloat((unvTotal / unvCount).toFixed(1)) : 0;
    }

    return {
        id: brandRow.id,
        name: brandRow.name,
        mark: brandRow.mark,
        category: brandRow.category,
        banner: brandRow.banner,
        description: brandRow.description,
        website: brandRow.website,
        visit_count: Number(brandRow.visit_count || 0),
        created_at: String(brandRow.created_at || '').slice(0, 10),
        rating,
        verified,
        unverified,
        reviews: list.length,
        userReviews: list
    };
}

async function loadBrandsFromSupabase() {
    const { data: brandRows, error: bErr } = await supabase
        .from('brands')
        .select('*')
        .order('id', { ascending: true });

    if (bErr) {
        console.error('Erreur chargement marques:', bErr.message);
        showToast('Error loading brands');
        return;
    }

    const { data: reviewRows, error: rErr } = await supabase
        .from('reviews')
        .select('*')
        .order('id', { ascending: false });

    if (rErr) {
        console.error('Erreur chargement avis:', rErr.message);
    }

    const reviewsByBrand = {};
    (reviewRows || []).forEach(r => {
        if (!reviewsByBrand[r.brand_id]) reviewsByBrand[r.brand_id] = [];
        reviewsByBrand[r.brand_id].push(r);
    });

    brands = (brandRows || []).map(b => computeBrandStats(b, reviewsByBrand[b.id] || []));
    await render();
}

async function loadUserProfile(authUser) {
    if (!authUser || !authUser.email_confirmed_at) {
        currentUser = null;
        updateAuthUI();
        return;
    }

    const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single();

    const fallbackName = authUser.user_metadata?.username || authUser.email.split('@')[0];

    if (error || !profile) {
        const newProfile = {
            id: authUser.id,
            username: fallbackName,
            country: 'Morocco',
            preferred_lang: currentLang,
            avatar_url: null,
            favorites: [],
            verified_ratings_count: 0,
            unverified_ratings_count: 0
        };
        await supabase.from('profiles').upsert(newProfile);
        currentUser = {
            id: authUser.id,
            email: authUser.email,
            username: newProfile.username,
            country: newProfile.country,
            preferredLang: newProfile.preferred_lang,
            avatar: null,
            favorites: [],
            verifiedRatingsCount: 0,
            unverifiedRatingsCount: 0,
            createdAt: new Date(authUser.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };
    } else {
        currentUser = {
            id: authUser.id,
            email: authUser.email,
            username: profile.username || fallbackName,
            country: profile.country || 'Morocco',
            preferredLang: profile.preferred_lang || 'en',
            avatar: profile.avatar_url || null,
            favorites: Array.isArray(profile.favorites) ? profile.favorites : [],
            verifiedRatingsCount: Number(profile.verified_ratings_count || 0),
            unverifiedRatingsCount: Number(profile.unverified_ratings_count || 0),
            createdAt: new Date(profile.created_at || authUser.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };
    }

    if (currentUser.preferredLang && currentUser.preferredLang !== currentLang) {
        currentLang = currentUser.preferredLang;
        document.documentElement.lang = currentLang;
        document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';
        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = currentLang;
        applyUIText(currentLang);
    }

    updateAuthUI();
    await render();
}

function updateAuthUI() {
    const container = document.getElementById('authContainer');
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (currentUser) {
        const avatarContent = currentUser.avatar ? `<img src="${escapeHtml(currentUser.avatar)}" alt="Avatar">` : defaultAvatarSvg;
        container.innerHTML = `
            <div class="user-trigger" onclick="openProfilePage()">
                <div class="avatar-container">${avatarContent}</div>
                <span class="username-label">${escapeHtml(currentUser.username)}</span>
            </div>
        `;
    } else {
        container.innerHTML = `<button class="auth-btn" onclick="openModal()">${escapeHtml(t.signIn)}</button>`;
    }
}

function toggleCountryMenu(e) {
    e.stopPropagation();
    const menu = document.getElementById('countryMenu');
    if (!menu) return;
    const isOpening = !menu.classList.contains('open');
    menu.classList.toggle('open', isOpening);
    if (isOpening) {
        const input = document.getElementById('countrySearchInput');
        if (input) setTimeout(() => input.focus(), 20);
    }
}

function renderCountryOptions(activeCountry) {
    const q = countryFilterQuery.trim().toLowerCase();
    const filtered = COUNTRY_LANGUAGES.filter(item =>
        item.country.toLowerCase().includes(q) || item.langLabel.toLowerCase().includes(q)
    );
    if (filtered.length === 0) {
        return `<div style="padding: 12px; font-size: 13px; color: #777; text-align: center;">No country found</div>`;
    }
    return filtered.map(item => `
        <button type="button" class="country-option ${item.country === activeCountry ? 'active' : ''}" data-country="${escapeHtml(item.country)}" onclick="selectCountryOption('${escapeJsSingleQuote(item.country)}')">
            <span class="country-option-left">
                ${FLAGS[item.flag] || ''}
                <span>${escapeHtml(item.country)}</span>
            </span>
            <span class="country-lang-badge">${escapeHtml(item.langLabel)}</span>
        </button>
    `).join('');
}

function filterCountryOptions(val) {
    countryFilterQuery = val;
    const activeCountry = draftCountry || (currentUser && currentUser.country) || "Morocco";
    const listContainer = document.getElementById('countryOptionsList');
    if (listContainer) {
        listContainer.innerHTML = renderCountryOptions(activeCountry);
    }
}

async function selectCountryOption(countryName) {
    draftCountry = countryName;
    const info = getCountryInfo(countryName);

    const triggerLabel = document.getElementById('countryTriggerLabel');
    if (triggerLabel) {
        triggerLabel.innerHTML = `${FLAGS[info.flag] || ''} <span>${escapeHtml(info.country)}</span>`;
    }

    const previewEl = document.getElementById('countryPreview');
    if (previewEl) {
        previewEl.innerHTML = `${FLAGS[info.flag] || ''} <span>${escapeHtml(info.country)} — Language: ${escapeHtml(info.langLabel)}</span>`;
    }

    const listContainer = document.getElementById('countryOptionsList');
    if (listContainer) {
        listContainer.innerHTML = renderCountryOptions(countryName);
    }

    const menu = document.getElementById('countryMenu');
    if (menu) menu.classList.remove('open');

    await changeLanguage(info.lang);
}

document.addEventListener('click', () => {
    const menu = document.getElementById('countryMenu');
    if (menu) menu.classList.remove('open');
});

function openProfilePage() {
    if (!currentUser) {
        openModal();
        return;
    }
    countryFilterQuery = '';
    const page = document.getElementById('profilePage');
    const content = document.getElementById('profileContentContainer');
    const avatarContent = currentUser.avatar ? `<img src="${escapeHtml(currentUser.avatar)}" alt="Avatar">` : defaultAvatarSvg;
    const activeCountry = draftCountry || currentUser.country || "Morocco";
    draftCountry = activeCountry;
    const currentCountryInfo = getCountryInfo(activeCountry);

    const favs = currentUser.favorites || [];
    let favsHtml = '';

    if (favs.length === 0) {
        favsHtml = `<p style="font-size: 13px; color: #777; font-style: italic;">No favorite brands yet.</p>`;
    } else {
        favsHtml = `<div class="favorites-list">` + favs.map(favName => {
            const b = brands.find(x => x.name === favName);
            const safeJsName = escapeJsSingleQuote(favName);
            return `
                <div class="favorite-item">
                    <div class="favorite-brand-info">
                        <strong style="font-size: 15px;">${escapeHtml(favName)}</strong>
                        <span style="font-size: 12px; color: #666;">${b ? escapeHtml(b.category) : ''}</span>
                    </div>
                    <div class="favorite-actions">
                        <button class="back-btn" style="padding: 5px 11px; font-size: 12px;" onclick="closeProfilePage(); openBrandDetail('${safeJsName}');">View</button>
                        <button class="logout-profile-btn" style="padding: 5px 11px; font-size: 12px;" onclick="removeFavorite('${safeJsName}')">Remove</button>
                    </div>
                </div>
            `;
        }).join('') + `</div>`;
    }

    content.innerHTML = `
        <div class="profile-hero-card">
            <div class="profile-main-info">
                <div class="profile-avatar-wrapper" title="Change picture" onclick="triggerAvatarUpload()">
                    <div class="profile-big-avatar">
                        ${avatarContent}
                    </div>
                    <span class="avatar-edit-badge">Edit</span>
                </div>
                <div class="profile-details">
                    <h2>${escapeHtml(currentUser.username)}</h2>
                    <p>${escapeHtml(currentUser.email)}</p>
                    <div class="profile-meta-chips">
                        <span class="meta-chip verified-chip">✓ Email Verified</span>
                        <span class="meta-chip">${FLAGS[currentCountryInfo.flag] || ''} ${escapeHtml(currentCountryInfo.country)}</span>
                        <span class="meta-chip">Joined ${escapeHtml(currentUser.createdAt || 'N/A')}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <h5>Verified Reviews</h5>
                <div class="number verified">${currentUser.verifiedRatingsCount || 0}</div>
                <span class="stat-sub">Confirmed purchase feedback</span>
            </div>
            <div class="stat-card">
                <h5>Unverified Reviews</h5>
                <div class="number">${currentUser.unverifiedRatingsCount || 0}</div>
                <span class="stat-sub">General community feedback</span>
            </div>
        </div>

        <div class="favorites-section">
            <div class="section-card-header">
                <h3>My Favorite Brands</h3>
                <span class="meta-chip">${favs.length} saved</span>
            </div>
            ${favsHtml}
        </div>

        <div class="settings-section">
            <div class="section-card-header">
                <h3>Profile Settings</h3>
                <span class="meta-chip">Account Preferences</span>
            </div>
            <div class="form-group">
                <label>Edit Username</label>
                <input type="text" id="editUsername" value="${escapeHtml(currentUser.username)}">
            </div>
            <div class="form-group">
                <label>Country & Language</label>
                <div class="country-picker" id="countryPicker" onclick="event.stopPropagation()">
                    <button type="button" class="country-trigger" onclick="toggleCountryMenu(event)">
                        <span class="country-trigger-left" id="countryTriggerLabel">
                            ${FLAGS[currentCountryInfo.flag] || ''}
                            <span>${escapeHtml(currentCountryInfo.country)}</span>
                        </span>
                        <span style="font-size: 10px; color: #666;">▼</span>
                    </button>
                    <div class="country-menu" id="countryMenu">
                        <input type="text" class="country-search-input" id="countrySearchInput" placeholder="Search country or language..." oninput="filterCountryOptions(this.value)">
                        <div id="countryOptionsList">${renderCountryOptions(activeCountry)}</div>
                    </div>
                </div>
                <div class="country-preview-row" id="countryPreview">
                    ${FLAGS[currentCountryInfo.flag] || ''} <span>${escapeHtml(currentCountryInfo.country)} — Language: ${escapeHtml(currentCountryInfo.langLabel)}</span>
                </div>
            </div>
            <div class="profile-actions-bar">
                <div class="profile-actions-right">
                    <button type="button" class="logout-profile-btn" onclick="logout()">Sign Out</button>
                    <button type="button" class="save-profile-btn" onclick="saveProfileChanges()">Save Changes</button>
                </div>
            </div>
        </div>
    `;
    page.classList.add('active');
}

function closeProfilePage() {
    draftCountry = null;
    document.getElementById('profilePage').classList.remove('active');
}

function triggerAvatarUpload() {
    document.getElementById('avatarUpload').click();
}

async function handleAvatarChange(event) {
    const file = event.target.files[0];
    if (!file || !currentUser) return;
    const reader = new FileReader();
    reader.onload = async function(e) {
        currentUser.avatar = e.target.result;
        await supabase
            .from('profiles')
            .update({ avatar_url: currentUser.avatar })
            .eq('id', currentUser.id);
        updateAuthUI();
        openProfilePage();
        showToast("Avatar updated");
    };
    reader.readAsDataURL(file);
}

async function saveProfileChanges() {
    if (!currentUser) return;
    const newName = document.getElementById('editUsername').value.trim();
    const selectedCountry = draftCountry || currentUser.country || "Morocco";
    const countryLang = getLangForCountry(selectedCountry);

    if (newName) {
        currentUser.username = newName;
    }
    currentUser.country = selectedCountry;
    currentUser.preferredLang = countryLang;

    const { error } = await supabase
        .from('profiles')
        .update({
            username: currentUser.username,
            country: currentUser.country,
            preferred_lang: currentUser.preferredLang
        })
        .eq('id', currentUser.id);

    if (error) {
        showToast("Error saving profile");
        return;
    }

    updateAuthUI();
    await changeLanguage(countryLang);
    openProfilePage();
    showToast("Profile saved");
}

async function toggleFavorite(brandName, event) {
    if (event) event.stopPropagation();
    if (!currentUser) {
        openModal();
        return;
    }

    if (!currentUser.favorites) currentUser.favorites = [];
    const index = currentUser.favorites.indexOf(brandName);
    const added = index === -1;
    if (index > -1) {
        currentUser.favorites.splice(index, 1);
    } else {
        currentUser.favorites.push(brandName);
    }

    await supabase
        .from('profiles')
        .update({ favorites: currentUser.favorites })
        .eq('id', currentUser.id);

    showToast(added ? `Added ${brandName} to favorites` : `Removed ${brandName} from favorites`);

    if (currentSelectedBrandName === brandName) {
        await openBrandDetail(brandName, false);
    } else {
        await render();
    }
}

async function removeFavorite(brandName) {
    if (!currentUser || !currentUser.favorites) return;
    const index = currentUser.favorites.indexOf(brandName);
    if (index > -1) {
        currentUser.favorites.splice(index, 1);
        await supabase
            .from('profiles')
            .update({ favorites: currentUser.favorites })
            .eq('id', currentUser.id);
        openProfilePage();
        showToast(`Removed ${brandName} from favorites`);
    }
}

function setReviewFilter(mode) {
    reviewFilterMode = mode;
    if (currentSelectedBrandName) {
        openBrandDetail(currentSelectedBrandName, false);
    }
}

function setReviewSort(mode) {
    reviewSortMode = mode;
    if (currentSelectedBrandName) {
        openBrandDetail(currentSelectedBrandName, false);
    }
}

async function openBrandDetail(brandName, incrementVisit = true) {
    currentSelectedBrandName = brandName;
    const brand = brands.find(b => b.name === brandName);
    if (!brand) return;

    if (incrementVisit && brand.id) {
        await supabase.rpc('increment_brand_visits', { p_brand_id: brand.id });
        brand.visit_count = (brand.visit_count || 0) + 1;
    }

    const detailPage = document.getElementById('brandDetailPage');
    const container = document.getElementById('brandDetailContent');
    const bannerElement = document.querySelector('.brand-banner');

    bannerElement.classList.toggle('banner-framework', brand.name === 'Framework');

    const resolvedBanner = resolveBannerUrl(brand.banner);
    if (resolvedBanner) {
        bannerElement.style.backgroundImage = `url('${resolvedBanner}')`;
    } else {
        bannerElement.style.backgroundImage = 'none';
    }

    await renderBrandDetailContent(brand, container);
    detailPage.classList.add('active');
}

async function closeBrandDetail() {
    document.getElementById('brandDetailPage').classList.remove('active');
    currentSelectedBrandName = null;
    reviewFilterMode = 'all';
    reviewSortMode = 'newest';
    await render();
}

async function renderBrandDetailContent(brand, container) {
    const isFav = currentUser && currentUser.favorites && currentUser.favorites.includes(brand.name);
    const translatedDesc = await autoTranslate(brand.description, currentLang);
    const safeBrandJs = escapeJsSingleQuote(brand.name);

    let filteredReviews = Array.isArray(brand.userReviews) ? [...brand.userReviews] : [];
    if (reviewFilterMode === 'verified') {
        filteredReviews = filteredReviews.filter(r => r.verified);
    } else if (reviewFilterMode === 'unverified') {
        filteredReviews = filteredReviews.filter(r => !r.verified);
    }

    if (reviewSortMode === 'helpful') {
        filteredReviews.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
    } else if (reviewSortMode === 'rating-high') {
        filteredReviews.sort((a, b) => b.rating - a.rating);
    } else {
        filteredReviews.sort((a, b) => b.id - a.id);
    }

    let reviewsHtml = '';
    if (filteredReviews.length === 0) {
        reviewsHtml = `<p style="color: #666; font-size: 14px; font-style: italic;">No reviews yet. Be the first!</p>`;
    } else {
        reviewsHtml = filteredReviews.map(rev => {
            const isUp = rev.userVote === 'up';
            const isDown = rev.userVote === 'down';
            return `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <span>👤 ${escapeHtml(rev.username)}</span>
                            ${rev.verified ? `<span class="verified-badge" style="font-size:11px;">✓ Verified</span>` : ''}
                        </div>
                        <span class="review-date">${escapeHtml(rev.date)}</span>
                    </div>
                    <div class="review-text">${escapeHtml(rev.text)}</div>
                    <div class="review-footer">
                        <span style="font-weight:600; font-size: 12px;">Rating: ${Number(rev.rating).toFixed(1)}/10</span>
                        <div class="vote-area">
                            <button class="vote-btn ${isUp ? 'active-up' : ''}" onclick="handleVote('${safeBrandJs}', ${Number(rev.id)}, 'up')">👍 ${Number(rev.upvotes)}</button>
                            <button class="vote-btn ${isDown ? 'active-down' : ''}" onclick="handleVote('${safeBrandJs}', ${Number(rev.id)}, 'down')">👎 ${Number(rev.downvotes)}</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    container.innerHTML = `
        <div class="brand-detail-top-bar">
            <button class="back-btn" onclick="closeBrandDetail()">← Back to catalog</button>
            <div class="action-buttons-group">
                <button class="favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${safeBrandJs}')">
                    ${isFav ? '♥ Favorite' : '♡ Add to favorite'}
                </button>
                <a href="${escapeHtml(brand.website || '#')}" target="_blank" rel="noopener noreferrer" class="official-link-btn">Visit official website →</a>
            </div>
        </div>

        <div class="brand-header-info">
            <div class="brand-detail-logo">${escapeHtml(brand.mark)}</div>
            <div class="brand-detail-title-area">
                <h2>${escapeHtml(brand.name)}</h2>
                <span class="cat-tag"><strong>${escapeHtml(brand.category)}</strong> — ${escapeHtml(translatedDesc)}</span>
            </div>
        </div>

        <div class="brand-ratings-summary">
            <div class="summary-box">
                <span>Global Rating</span>
                <strong>${brand.rating.toFixed(1)}/10</strong>
            </div>
            <div class="summary-box">
                <span>✓ Verified</span>
                <strong style="color: #00a86b;">${brand.verified.toFixed(1)}/10</strong>
            </div>
            <div class="summary-box">
                <span>Unverified</span>
                <strong>${brand.unverified.toFixed(1)}/10</strong>
            </div>
        </div>

        <div class="reviews-section">
            <div class="reviews-toolbar">
                <h3>Community Reviews (${brand.userReviews ? brand.userReviews.length : 0})</h3>
                <div class="reviews-filters">
                    <button type="button" class="filter-pill ${reviewFilterMode === 'all' ? 'active' : ''}" onclick="setReviewFilter('all')">All</button>
                    <button type="button" class="filter-pill ${reviewFilterMode === 'verified' ? 'active' : ''}" onclick="setReviewFilter('verified')">✓ Verified</button>
                    <button type="button" class="filter-pill ${reviewFilterMode === 'unverified' ? 'active' : ''}" onclick="setReviewFilter('unverified')">Unverified</button>
                    <select class="reviews-sort-select" onchange="setReviewSort(this.value)">
                        <option value="newest" ${reviewSortMode === 'newest' ? 'selected' : ''}>Newest</option>
                        <option value="helpful" ${reviewSortMode === 'helpful' ? 'selected' : ''}>Most helpful</option>
                        <option value="rating-high" ${reviewSortMode === 'rating-high' ? 'selected' : ''}>Highest rating</option>
                    </select>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${reviewsHtml}
            </div>
        </div>

        <div class="add-review-box">
            <h4>Leave a Review</h4>
            <textarea id="newReviewText" placeholder="Write your feedback..."></textarea>
            <div class="form-error" id="reviewError"></div>
            <div class="review-form-controls">
                <div class="form-row">
                    <label>Rating (/10):</label>
                    <input type="number" id="newReviewRating" min="0" max="10" step="0.5" value="8.0" style="width: 72px;">
                    <label><input type="checkbox" id="newReviewVerified"> Verified purchase</label>
                </div>
                <button class="submit-review-btn" onclick="submitBrandReview('${safeBrandJs}')">Submit Review</button>
            </div>
        </div>
    `;
}

async function submitBrandReview(brandName) {
    if (!currentUser) {
        openModal();
        return;
    }

    const errEl = document.getElementById('reviewError');
    const text = document.getElementById('newReviewText').value.trim();
    let rating = parseFloat(document.getElementById('newReviewRating').value);
    const isVerified = document.getElementById('newReviewVerified').checked;

    if (!text) {
        if (errEl) errEl.textContent = "Please write a short review before submitting.";
        return;
    }
    if (isNaN(rating)) rating = 8.0;
    rating = Math.max(0, Math.min(10, rating));
    if (errEl) errEl.textContent = "";

    const brand = brands.find(b => b.name === brandName);
    if (!brand || !brand.id) return;

    const { error: insErr } = await supabase
        .from('reviews')
        .insert({
            brand_id: brand.id,
            user_id: currentUser.id,
            username: currentUser.username,
            text: text,
            rating: rating,
            verified: isVerified
        });

    if (insErr) {
        if (errEl) errEl.textContent = insErr.message;
        return;
    }

    if (isVerified) {
        currentUser.verifiedRatingsCount = (currentUser.verifiedRatingsCount || 0) + 1;
    } else {
        currentUser.unverifiedRatingsCount = (currentUser.unverifiedRatingsCount || 0) + 1;
    }

    await supabase
        .from('profiles')
        .update({
            verified_ratings_count: currentUser.verifiedRatingsCount,
            unverified_ratings_count: currentUser.unverifiedRatingsCount
        })
        .eq('id', currentUser.id);

    await loadBrandsFromSupabase();
    await openBrandDetail(brand.name, false);
    showToast("Review published");
}

async function handleVote(brandName, reviewId, type) {
    const brand = brands.find(b => b.name === brandName);
    if (!brand) return;
    const review = brand.userReviews.find(r => r.id === reviewId);
    if (!review) return;

    if (type === 'up') {
        if (review.userVote === 'up') {
            review.upvotes--;
            review.userVote = null;
        } else {
            if (review.userVote === 'down') review.downvotes--;
            review.upvotes++;
            review.userVote = 'up';
        }
    } else if (type === 'down') {
        if (review.userVote === 'down') {
            review.downvotes--;
            review.userVote = null;
        } else {
            if (review.userVote === 'up') review.upvotes--;
            review.downvotes++;
            review.userVote = 'down';
        }
    }

    await supabase
        .from('reviews')
        .update({ upvotes: review.upvotes, downvotes: review.downvotes })
        .eq('id', reviewId);

    await openBrandDetail(brand.name, false);
}

function syncAuthFeedbackBox() {
    const box = document.getElementById('authFeedbackBox');
    const errEl = document.getElementById('authError');
    const infoEl = document.getElementById('authInfo');
    const resendBtn = document.getElementById('resendVerificationBtn');
    const hasErr = !!(errEl && errEl.textContent.trim());
    const hasInfo = !!(infoEl && infoEl.textContent.trim());
    const hasResend = !!(resendBtn && resendBtn.classList.contains('visible'));
    if (box) {
        box.classList.toggle('has-content', hasErr || hasInfo || hasResend);
    }
}

function resetAuthFeedback() {
    const errEl = document.getElementById('authError');
    const infoEl = document.getElementById('authInfo');
    const resendBtn = document.getElementById('resendVerificationBtn');
    const passInput = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    if (errEl) errEl.textContent = "";
    if (infoEl) infoEl.textContent = "";
    if (resendBtn) resendBtn.classList.remove('visible');
    if (passInput) passInput.type = "password";
    if (eyeIcon) eyeIcon.innerHTML = eyeOpenSvg;
    syncAuthFeedbackBox();
}

function applyModalModeText() {
    const titleEl = document.getElementById('modalTitle');
    const subEl = document.getElementById('modalSubtitle');
    const userWrap = document.getElementById('usernameWrap');
    const submitEl = document.getElementById('modalSubmit');
    const toggleEl = document.getElementById('modalToggle');

    if (isSignUp) {
        titleEl.textContent = "Create an Account";
        subEl.textContent = "Join Go Find Me to save favorite brands and leave reviews.";
        userWrap.style.display = "flex";
        submitEl.textContent = isSubmittingAuth ? "Please wait..." : "Sign Up";
        toggleEl.innerHTML = "Already have an account? <strong>Sign In</strong>";
    } else {
        titleEl.textContent = "Welcome Back";
        subEl.textContent = "Sign in with your verified email address to access your profile.";
        userWrap.style.display = "none";
        submitEl.textContent = isSubmittingAuth ? "Please wait..." : "Sign In";
        toggleEl.innerHTML = "Need an account? <strong>Sign Up</strong>";
    }
    if (submitEl) submitEl.disabled = isSubmittingAuth;
}

function openModal() {
    resetAuthFeedback();
    applyModalModeText();
    document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
}

function toggleAuthMode() {
    if (isSubmittingAuth) return;
    isSignUp = !isSignUp;
    resetAuthFeedback();
    applyModalModeText();
}

async function resendVerificationEmail() {
    if (isResendingEmail) return;
    const errEl = document.getElementById('authError');
    const infoEl = document.getElementById('authInfo');
    const resendBtn = document.getElementById('resendVerificationBtn');
    const email = (document.getElementById('emailInput').value.trim() || lastPendingEmail);

    if (!email) {
        if (errEl) errEl.textContent = "Please enter your email address first.";
        syncAuthFeedbackBox();
        return;
    }

    isResendingEmail = true;
    if (resendBtn) resendBtn.disabled = true;

    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email,
            options: {
                emailRedirectTo: getRedirectUrl()
            }
        });

        if (error) {
            if (errEl) errEl.textContent = error.message;
            if (infoEl) infoEl.textContent = "";
            syncAuthFeedbackBox();
            return;
        }

        if (errEl) errEl.textContent = "";
        if (infoEl) infoEl.textContent = `Verification email sent to ${email}. Check your inbox and spam folder.`;
        syncAuthFeedbackBox();
        showToast("Verification email sent");
    } finally {
        isResendingEmail = false;
        if (resendBtn) resendBtn.disabled = false;
    }
}

async function handleAuth() {
    if (isSubmittingAuth) return;
    const errEl = document.getElementById('authError');
    const infoEl = document.getElementById('authInfo');
    const resendBtn = document.getElementById('resendVerificationBtn');
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value;
    const username = document.getElementById('usernameInput').value.trim() || email.split('@')[0];

    resetAuthFeedback();

    if (!email || !password) {
        if (errEl) errEl.textContent = "Please enter both email and password.";
        syncAuthFeedbackBox();
        return;
    }

    lastPendingEmail = email;
    isSubmittingAuth = true;
    applyModalModeText();

    try {
        if (isSignUp) {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { username },
                    emailRedirectTo: getRedirectUrl()
                }
            });
            if (error) {
                if (errEl) errEl.textContent = error.message;
                syncAuthFeedbackBox();
                return;
            }
            if (data.user && !data.user.email_confirmed_at) {
                await supabase.auth.signOut();
                if (infoEl) infoEl.textContent = "Account created! Check your email and click the verification link before signing in.";
                if (resendBtn) resendBtn.classList.add('visible');
                syncAuthFeedbackBox();
                showToast("Verify your email before signing in");
                return;
            }
            if (data.user) {
                await supabase.from('profiles').upsert({
                    id: data.user.id,
                    username,
                    country: 'Morocco',
                    preferred_lang: currentLang,
                    favorites: []
                });
                await loadUserProfile(data.user);
                closeModal();
                openProfilePage();
                showToast(`Welcome, ${currentUser.username}`);
            }
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                if (error.message.toLowerCase().includes('email not confirmed')) {
                    if (errEl) errEl.textContent = "You must verify your email address before signing in.";
                    if (resendBtn) resendBtn.classList.add('visible');
                } else {
                    if (errEl) errEl.textContent = error.message;
                }
                syncAuthFeedbackBox();
                return;
            }
            if (data.user && !data.user.email_confirmed_at) {
                await supabase.auth.signOut();
                if (errEl) errEl.textContent = "Please verify your email address before signing in.";
                if (resendBtn) resendBtn.classList.add('visible');
                syncAuthFeedbackBox();
                return;
            }
            await loadUserProfile(data.user);
            closeModal();
            openProfilePage();
            showToast(`Welcome back, ${currentUser.username}`);
        }
    } finally {
        isSubmittingAuth = false;
        applyModalModeText();
    }
}

async function logout() {
    await supabase.auth.signOut();
    currentUser = null;
    draftCountry = null;
    closeProfilePage();
    updateAuthUI();
    await render();
    showToast("Signed out");
}

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const sectionTitle = document.getElementById("section-title");
const resultCount = document.getElementById("result-count");
const categoryItems = document.querySelectorAll(".category-item");

let activeCategory = "All";

const sorters = {
    "verified-desc": (a, b) => b.verified - a.verified || b.reviews - a.reviews,
    "verified-asc": (a, b) => a.verified - b.verified || a.reviews - b.reviews,
    "trending": (a, b) => b.visit_count - a.visit_count,
    "niche": (a, b) => a.visit_count - b.visit_count,
    "new": (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at),
    "unverified-desc": (a, b) => b.unverified - a.unverified || b.reviews - a.reviews,
    "unverified-asc": (a, b) => a.unverified - b.unverified || a.reviews - b.reviews,
    "rating-desc": (a, b) => b.rating - a.rating || b.reviews - a.reviews,
    "rating-asc": (a, b) => a.rating - b.rating || a.reviews - b.reviews
};

function isListedWithinLastYear(iso) {
    if (!iso) return false;
    const created = new Date(iso + "T00:00:00");
    const cutoff = new Date();
    cutoff.setHours(0, 0, 0, 0);
    cutoff.setFullYear(cutoff.getFullYear() - 1);
    return created >= cutoff;
}

function updateCategoryCounts() {
    const allEl = document.getElementById("count-All");
    if (allEl) allEl.textContent = brands.length;
    ["Sports", "Fashion", "Games", "Everyday Life", "Books", "Technology"].forEach(cat => {
        const el = document.getElementById(`count-${cat}`);
        if (el) el.textContent = brands.filter(b => b.category === cat).length;
    });
}

async function render() {
    updateCategoryCounts();
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    const query = searchInput.value.trim().toLowerCase();
    const sortKey = sortSelect.value;

    let list = brands.filter(b => {
        const inCat = activeCategory === "All" || b.category === activeCategory;
        const matches = (b.name + " " + b.category + " " + b.description).toLowerCase().includes(query);
        const recent = sortKey !== "new" || isListedWithinLastYear(b.created_at);
        return inCat && matches && recent;
    });

    list.sort((a, b) => (sorters[sortKey] || sorters["verified-desc"])(a, b));

    sectionTitle.textContent = activeCategory;
    resultCount.textContent = list.length === 1 ? t.brandOne : `${list.length} ${t.brandMany}`;

    if (list.length === 0) {
        grid.innerHTML = '<div class="empty"><strong>No brands found</strong><br>Try another search or category.</div>';
        return;
    }

    let cardsHTML = '';
    for (let b of list) {
        const translatedDesc = await autoTranslate(b.description, currentLang);
        const zoomClass = b.name === "Framework" ? " zoom-framework" : "";
        const resolvedBanner = resolveBannerUrl(b.banner);
        const bannerHTML = resolvedBanner
            ? `<div class="card-banner-box"><img src="${resolvedBanner}" class="card-banner${zoomClass}" alt="${escapeHtml(b.name)} banner"></div>`
            : '';
        const isFav = !!(currentUser && currentUser.favorites && currentUser.favorites.includes(b.name));
        const safeBrandJs = escapeJsSingleQuote(b.name);

        cardsHTML += `
            <article class="card" onclick="openBrandDetail('${safeBrandJs}')">
                <div>
                    <div class="card-header">
                        <div class="brand-identity">
                            <div class="logo">${escapeHtml(b.mark)}</div>
                            <div>
                                <div class="brand-name">${escapeHtml(b.name)}</div>
                                <div class="brand-category">${escapeHtml(b.category)}</div>
                            </div>
                        </div>
                        <div class="card-header-right">
                            <button type="button" class="quick-fav-btn ${isFav ? 'active' : ''}" title="${isFav ? 'Remove favorite' : 'Add favorite'}" onclick="toggleFavorite('${safeBrandJs}', event)">${isFav ? '♥' : '♡'}</button>
                            <span class="score">${b.rating.toFixed(1)}/10</span>
                        </div>
                    </div>

                    ${bannerHTML}

                    <div class="description-container">
                        <p class="description">${escapeHtml(translatedDesc)}</p>
                    </div>
                </div>
                <div>
                    <div class="metrics">
                        <span>Visits: ${b.visit_count.toLocaleString()}</span>
                        <span>Listed: ${escapeHtml(b.created_at.slice(0, 7))}</span>
                    </div>
                    <div class="ratings">
                        <div><span class="verified-badge">✓ Verified:</span> ${b.verified.toFixed(1)}</div>
                        <div><span>Unverified:</span> ${b.unverified.toFixed(1)}</div>
                        <div class="reviews">${b.reviews.toLocaleString()} reviews</div>
                    </div>
                </div>
            </article>
        `;
    }
    grid.innerHTML = cardsHTML;
}

window.toggleMobileSidebar = toggleMobileSidebar;
window.changeLanguage = changeLanguage;
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleAuthMode = toggleAuthMode;
window.togglePasswordVisibility = togglePasswordVisibility;
window.handleAuth = handleAuth;
window.resendVerificationEmail = resendVerificationEmail;
window.logout = logout;
window.openProfilePage = openProfilePage;
window.closeProfilePage = closeProfilePage;
window.triggerAvatarUpload = triggerAvatarUpload;
window.handleAvatarChange = handleAvatarChange;
window.saveProfileChanges = saveProfileChanges;
window.toggleCountryMenu = toggleCountryMenu;
window.filterCountryOptions = filterCountryOptions;
window.selectCountryOption = selectCountryOption;
window.toggleFavorite = toggleFavorite;
window.removeFavorite = removeFavorite;
window.setReviewFilter = setReviewFilter;
window.setReviewSort = setReviewSort;
window.openBrandDetail = openBrandDetail;
window.closeBrandDetail = closeBrandDetail;
window.submitBrandReview = submitBrandReview;
window.handleVote = handleVote;

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);

categoryItems.forEach(item => {
    item.addEventListener("click", () => {
        const next = item.dataset.category;
        activeCategory = (next === "All" || next === activeCategory) ? "All" : next;
        categoryItems.forEach(el => el.classList.toggle("active", el.dataset.category === activeCategory));
        toggleMobileSidebar(false);
        render();
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
        const countryMenu = document.getElementById('countryMenu');
        if (countryMenu) countryMenu.classList.remove('open');
        toggleMobileSidebar(false);
    }
});

applyUIText(currentLang);
await loadBrandsFromSupabase();

const { data: { session } } = await supabase.auth.getSession();
if (session?.user) {
    await loadUserProfile(session.user);
}

supabase.auth.onAuthStateChange(async (_event, nextSession) => {
    if (nextSession?.user && nextSession.user.email_confirmed_at) {
        await loadUserProfile(nextSession.user);
    } else {
        currentUser = null;
        updateAuthUI();
        await render();
    }
});
