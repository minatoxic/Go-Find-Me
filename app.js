import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ceblbpnwewsyrhehxjyn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_01WafxVNRdYyTevNhoST9hA_APRkjYM9';
const DEFAULT_REDIRECT_URL = 'https://minatoxic.github.io/Go-Find-Me/';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const FLAGS = {
    ma: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#c1272d"/><polygon points="9,3.3 9.7,5.5 12,5.5 10.1,6.8 10.8,9 9,7.6 7.2,9 7.9,6.8 6,5.5 8.3,5.5" fill="none" stroke="#006233" stroke-width="0.9"/></svg>`,
    fr: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#0055a4"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ef4135"/></svg>`,
    be: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#000"/><rect width="6" height="12" x="6" fill="#fae042"/><rect width="6" height="12" x="12" fill="#ed2939"/></svg>`,
    ca: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="4.5" height="12" x="0" fill="#ff0000"/><rect width="9" height="12" x="4.5" fill="#fff"/><rect width="4.5" height="12" x="13.5" fill="#ff0000"/><polygon points="9,2.6 9.8,4.6 11.4,4.3 10.5,5.8 12,6.4 9.7,7.1 9.5,9.2 8.5,9.2 8.3,7.1 6,6.4 7.5,5.8 6.6,4.3 8.2,4.6" fill="#ff0000"/></svg>`,
    ch: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#d52b1e"/><rect x="7.8" y="2.5" width="2.4" height="7" fill="#fff"/><rect x="5.5" y="4.8" width="7" height="2.4" fill="#fff"/></svg>`,
    us: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#b22234"/><path d="M0 1.8h18M0 3.7h18M0 5.5h18M0 7.4h18M0 9.2h18M0 11.1h18" stroke="#fff" stroke-width="0.95"/><rect width="7.5" height="6.5" fill="#3c3b6e"/></svg>`,
    gb: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#012169"/><path d="M0 0l18 12M18 0L0 12" stroke="#fff" stroke-width="2.2"/><path d="M0 0l18 12M18 0L0 12" stroke="#c8102e" stroke-width="1.2"/><path d="M9 0v12M0 6h18" stroke="#fff" stroke-width="3.6"/><path d="M9 0v12M0 6h18" stroke="#c8102e" stroke-width="2"/></svg>`,
    au: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#00008b"/><rect width="9" height="6" fill="#00008b"/><path d="M0 0l9 6M9 0L0 6" stroke="#fff" stroke-width="1.3"/><path d="M4.5 0v6M0 3h9" stroke="#fff" stroke-width="2.2"/><path d="M4.5 0v6M0 3h9" stroke="#ff0000" stroke-width="1.2"/><circle cx="13.5" cy="3" r="0.9" fill="#fff"/><circle cx="13.5" cy="9" r="0.9" fill="#fff"/><circle cx="11.2" cy="6.2" r="0.7" fill="#fff"/><circle cx="15.6" cy="5.5" r="0.7" fill="#fff"/><circle cx="13.5" cy="6.2" r="0.5" fill="#fff"/></svg>`,
    dz: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="9" height="12" x="0" fill="#006233"/><rect width="9" height="12" x="9" fill="#fff"/><circle cx="9.8" cy="6" r="2.7" fill="#d21034"/><circle cx="10.6" cy="6" r="2.1" fill="#fff"/><polygon points="9.8,4.6 10.2,5.6 11.2,5.6 10.4,6.2 10.7,7.2 9.8,6.6 8.9,7.2 9.2,6.2 8.4,5.6 9.4,5.6" fill="#d21034"/></svg>`,
    tn: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#e70013"/><circle cx="9" cy="6" r="3.4" fill="#fff"/><circle cx="9.5" cy="6" r="2.5" fill="#e70013"/><circle cx="10.2" cy="6" r="2" fill="#fff"/><polygon points="9.8,4.8 10.1,5.7 11,5.7 10.3,6.2 10.6,7.1 9.8,6.6 9,7.1 9.3,6.2 8.6,5.7 9.5,5.7" fill="#e70013"/></svg>`,
    sa: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#006c35"/><path d="M4 5.5h10M5.5 8h7" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/></svg>`,
    es: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="3" y="0" fill="#aa151b"/><rect width="18" height="6" y="3" fill="#f1bf00"/><rect width="18" height="3" y="9" fill="#aa151b"/></svg>`,
    mx: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#006847"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ce1126"/><circle cx="9" cy="6" r="1.4" fill="#664c28"/></svg>`,
    co: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="6" y="0" fill="#fcd116"/><rect width="18" height="3" y="6" fill="#003893"/><rect width="18" height="3" y="9" fill="#ce1126"/></svg>`,
    ar: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#74acdf"/><rect width="18" height="4" y="4" fill="#fff"/><rect width="18" height="4" y="8" fill="#74acdf"/><circle cx="9" cy="6" r="1.3" fill="#f6b40e"/></svg>`,
    de: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#000"/><rect width="18" height="4" y="4" fill="#dd0000"/><rect width="18" height="4" y="8" fill="#ffce00"/></svg>`,
    at: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="4" y="0" fill="#ed2939"/><rect width="18" height="4" y="4" fill="#fff"/><rect width="18" height="4" y="8" fill="#ed2939"/></svg>`,
    it: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="6" height="12" x="0" fill="#009246"/><rect width="6" height="12" x="6" fill="#fff"/><rect width="6" height="12" x="12" fill="#ce2b37"/></svg>`,
    br: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="18" height="12" fill="#009b3a"/><polygon points="9,1.8 15.8,6 9,10.2 2.2,6" fill="#ffdf00"/><circle cx="9" cy="6" r="2.3" fill="#002776"/></svg>`,
    pt: `<svg class="flag-icon" viewBox="0 0 18 12"><rect width="7" height="12" x="0" fill="#006600"/><rect width="11" height="12" x="7" fill="#ff0000"/><circle cx="7" cy="6" r="2.2" fill="#ffdf00" stroke="#000" stroke-width="0.4"/></svg>`
};

const COUNTRY_LANGUAGES = [
    { code: "ma", name: "Morocco", lang: "ar" },
    { code: "fr", name: "France", lang: "fr" },
    { code: "be", name: "Belgium", lang: "fr" },
    { code: "ca", name: "Canada", lang: "en" },
    { code: "ch", name: "Switzerland", lang: "fr" },
    { code: "us", name: "United States", lang: "en" },
    { code: "gb", name: "United Kingdom", lang: "en" },
    { code: "au", name: "Australia", lang: "en" },
    { code: "dz", name: "Algeria", lang: "ar" },
    { code: "tn", name: "Tunisia", lang: "ar" },
    { code: "sa", name: "Saudi Arabia", lang: "ar" },
    { code: "es", name: "Spain", lang: "es" },
    { code: "mx", name: "Mexico", lang: "es" },
    { code: "co", name: "Colombia", lang: "es" },
    { code: "ar", name: "Argentina", lang: "es" },
    { code: "de", name: "Germany", lang: "de" },
    { code: "at", name: "Austria", lang: "de" },
    { code: "it", name: "Italy", lang: "it" },
    { code: "br", name: "Brazil", lang: "pt" },
    { code: "pt", name: "Portugal", lang: "pt" }
];

const UI_TEXT = {
    en: {
        dir: "ltr",
        categoriesTitle: "Categories",
        sortLabel: "Sort by:",
        searchPlaceholder: "Search brands...",
        signIn: "Sign In",
        myAccount: "My Account",
        profileMenu: "Profile Menu",
        backToCatalog: "← Back to catalog",
        createAccount: "Create an Account",
        authSubtitleSignup: "Join Go Find Me to save favorite brands and leave reviews.",
        authSubtitleSignin: "Welcome back! Sign in to access your profile and favorites.",
        usernamePlaceholder: "Username",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        signUp: "Sign Up",
        alreadyAccount: "Already have an account?",
        needAccount: "Need an account?",
        totalReviews: "Total Reviews",
        verifiedReviews: "Verified Reviews",
        favoriteBrands: "Favorite Brands",
        noFavorites: "No favorite brands yet. Click the heart icon on any brand card or detail page!",
        accountSettings: "Account Settings",
        countryLabel: "Country",
        countryPlaceholder: "Search country...",
        saveChanges: "Save Changes",
        signOut: "Sign Out",
        verifiedBuyer: "✓ Verified Buyer",
        unverifiedReviewer: "Unverified",
        writeReview: "Write a Review",
        reviewPlaceholder: "Share your experience with this brand...",
        ratingLabel: "Rating (0–10):",
        verifiedCheckbox: "Verified purchase / account",
        postReview: "Post Review",
        visitSite: "Visit Official Site",
        addFav: "♡ Favorite",
        inFav: "♥ Favorited",
        visits: "Visits",
        listed: "Listed",
        globalRating: "Global Rating",
        verifiedScore: "Verified",
        unverifiedScore: "Unverified",
        noBrands: "No brands match your current filter.",
        allFilter: "All",
        verifiedFilter: "Verified only",
        sortRecent: "Most recent",
        sortHelpful: "Most helpful",
        sortHighest: "Highest rating",
        sortLowest: "Lowest rating",
        profileUpdated: "Profile updated!",
        avatarUpdated: "Avatar updated!",
        reviewPosted: "Review posted!",
        loginRequired: "Please sign in first.",
        resendVerification: "↻ Resend verification email",
        verificationSent: "Verification email sent! Check your inbox and spam folder.",
        emailNotVerified: "Please verify your email address before signing in. Check your inbox or click below to resend.",
        signupVerifyNotice: "Account created! Please check your email and click the verification link before signing in.",
        catNames: {
            "All": "All",
            "Sports": "Sports",
            "Fashion": "Fashion",
            "Games": "Games",
            "Everyday Life": "Everyday Life",
            "Books": "Books",
            "Technology": "Technology"
        }
    },
    fr: {
        dir: "ltr",
        categoriesTitle: "Catégories",
        sortLabel: "Trier par :",
        searchPlaceholder: "Rechercher une marque...",
        signIn: "Connexion",
        myAccount: "Mon Compte",
        profileMenu: "Menu Profil",
        backToCatalog: "← Retour au catalogue",
        createAccount: "Créer un compte",
        authSubtitleSignup: "Rejoignez Go Find Me pour enregistrer vos marques favorites et publier des avis.",
        authSubtitleSignin: "Bon retour ! Connectez-vous pour accéder à votre profil et vos favoris.",
        usernamePlaceholder: "Nom d'utilisateur",
        emailPlaceholder: "Adresse e-mail",
        passwordPlaceholder: "Mot de passe",
        signUp: "S'inscrire",
        alreadyAccount: "Déjà un compte ?",
        needAccount: "Besoin d'un compte ?",
        totalReviews: "Avis totaux",
        verifiedReviews: "Avis vérifiés",
        favoriteBrands: "Marques favorites",
        noFavorites: "Aucune marque favorite pour le moment. Cliquez sur le cœur d'une marque !",
        accountSettings: "Paramètres du compte",
        countryLabel: "Pays",
        countryPlaceholder: "Rechercher un pays...",
        saveChanges: "Enregistrer",
        signOut: "Déconnexion",
        verifiedBuyer: "✓ Acheteur vérifié",
        unverifiedReviewer: "Non vérifié",
        writeReview: "Écrire un avis",
        reviewPlaceholder: "Partagez votre expérience avec cette marque...",
        ratingLabel: "Note (0–10) :",
        verifiedCheckbox: "Achat / compte vérifié",
        postReview: "Publier l'avis",
        visitSite: "Visiter le site officiel",
        addFav: "♡ Favori",
        inFav: "♥ Favori",
        visits: "Visites",
        listed: "Ajoutée",
        globalRating: "Note globale",
        verifiedScore: "Vérifié",
        unverifiedScore: "Non vérifié",
        noBrands: "Aucune marque ne correspond à vos filtres.",
        allFilter: "Tous",
        verifiedFilter: "Vérifiés uniquement",
        sortRecent: "Plus récents",
        sortHelpful: "Plus utiles",
        sortHighest: "Meilleure note",
        sortLowest: "Moins bonne note",
        profileUpdated: "Profil mis à jour !",
        avatarUpdated: "Avatar mis à jour !",
        reviewPosted: "Avis publié !",
        loginRequired: "Veuillez d'abord vous connecter.",
        resendVerification: "↻ Renvoyer l'e-mail de vérification",
        verificationSent: "E-mail de vérification envoyé ! Vérifiez votre boîte de réception et vos spams.",
        emailNotVerified: "Veuillez vérifier votre adresse e-mail avant de vous connecter. Consultez votre boîte mail ou renvoyez le lien.",
        signupVerifyNotice: "Compte créé ! Vérifiez votre boîte mail et cliquez sur le lien de confirmation avant de vous connecter.",
        catNames: {
            "All": "Tout",
            "Sports": "Sports",
            "Fashion": "Mode",
            "Games": "Jeux",
            "Everyday Life": "Vie quotidienne",
            "Books": "Livres",
            "Technology": "Technologie"
        }
    },
    ar: {
        dir: "rtl",
        categoriesTitle: "الفئات",
        sortLabel: "ترتيب حسب:",
        searchPlaceholder: "ابحث عن علامة تجارية...",
        signIn: "تسجيل الدخول",
        myAccount: "حسابي",
        profileMenu: "قائمة الملف الشخصي",
        backToCatalog: "→ العودة إلى الكتالوج",
        createAccount: "إنشاء حساب",
        authSubtitleSignup: "انضم إلى Go Find Me لحفظ العلامات المفضلة وكتابة التقييمات.",
        authSubtitleSignin: "مرحبًا بعودتك! سجل الدخول للوصول إلى ملفك الشخصي ومفضلاتك.",
        usernamePlaceholder: "اسم المستخدم",
        emailPlaceholder: "البريد الإلكتروني",
        passwordPlaceholder: "كلمة المرور",
        signUp: "إنشاء حساب",
        alreadyAccount: "لديك حساب بالفعل؟",
        needAccount: "تحتاج إلى حساب؟",
        totalReviews: "إجمالي التقييمات",
        verifiedReviews: "تقييمات موثقة",
        favoriteBrands: "العلامات المفضلة",
        noFavorites: "لا توجد علامات مفضلة بعد. اضغط على أيقونة القلب في أي بطاقة!",
        accountSettings: "إعدادات الحساب",
        countryLabel: "البلد",
        countryPlaceholder: "ابحث عن بلد...",
        saveChanges: "حفظ التغييرات",
        signOut: "تسجيل الخروج",
        verifiedBuyer: "✓ مشتري موثق",
        unverifiedReviewer: "غير موثق",
        writeReview: "اكتب تقييمًا",
        reviewPlaceholder: "شارك تجربتك مع هذه العلامة التجارية...",
        ratingLabel: "التقييم (0–10):",
        verifiedCheckbox: "شراء / حساب موثق",
        postReview: "نشر التقييم",
        visitSite: "زيارة الموقع الرسمي",
        addFav: "♡ مفضلة",
        inFav: "♥ في المفضلة",
        visits: "الزيارات",
        listed: "تاريخ الإضافة",
        globalRating: "التقييم العام",
        verifiedScore: "موثق",
        unverifiedScore: "غير موثق",
        noBrands: "لا توجد علامات تطابق بحثك.",
        allFilter: "الكل",
        verifiedFilter: "الموثقة فقط",
        sortRecent: "الأحدث",
        sortHelpful: "الأكثر فائدة",
        sortHighest: "الأعلى تقييمًا",
        sortLowest: "الأقل تقييمًا",
        profileUpdated: "تم تحديث الملف الشخصي!",
        avatarUpdated: "تم تحديث الصورة الرمزية!",
        reviewPosted: "تم نشر التقييم!",
        loginRequired: "يرجى تسجيل الدخول أولًا.",
        resendVerification: "↻ إعادة إرسال رسالة التحقق",
        verificationSent: "تم إرسال رسالة التحقق! تفقد بريدك الوارد والرسائل غير المرغوب فيها.",
        emailNotVerified: "يرجى تأكيد بريدك الإلكتروني قبل تسجيل الدخول.",
        signupVerifyNotice: "تم إنشاء الحساب! تفقد بريدك الإلكتروني واضغط على رابط التفعيل قبل تسجيل الدخول.",
        catNames: {
            "All": "الكل",
            "Sports": "رياضة",
            "Fashion": "أزياء",
            "Games": "ألعاب",
            "Everyday Life": "الحياة اليومية",
            "Books": "كتب",
            "Technology": "تكنولوجيا"
        }
    },
    es: {
        dir: "ltr",
        categoriesTitle: "Categorías",
        sortLabel: "Ordenar por:",
        searchPlaceholder: "Buscar marcas...",
        signIn: "Iniciar sesión",
        myAccount: "Mi cuenta",
        profileMenu: "Menú de perfil",
        backToCatalog: "← Volver al catálogo",
        createAccount: "Crear una cuenta",
        authSubtitleSignup: "Únete a Go Find Me para guardar marcas favoritas y dejar reseñas.",
        authSubtitleSignin: "¡Bienvenido de nuevo! Inicia sesión para acceder a tu perfil y favoritos.",
        usernamePlaceholder: "Nombre de usuario",
        emailPlaceholder: "Correo electrónico",
        passwordPlaceholder: "Contraseña",
        signUp: "Registrarse",
        alreadyAccount: "¿Ya tienes una cuenta?",
        needAccount: "¿Necesitas una cuenta?",
        totalReviews: "Reseñas totales",
        verifiedReviews: "Reseñas verificadas",
        favoriteBrands: "Marcas favoritas",
        noFavorites: "Aún no tienes marcas favoritas.",
        accountSettings: "Configuración de cuenta",
        countryLabel: "País",
        countryPlaceholder: "Buscar país...",
        saveChanges: "Guardar cambios",
        signOut: "Cerrar sesión",
        verifiedBuyer: "✓ Comprador verificado",
        unverifiedReviewer: "No verificado",
        writeReview: "Escribir una reseña",
        reviewPlaceholder: "Comparte tu experiencia con esta marca...",
        ratingLabel: "Puntuación (0–10):",
        verifiedCheckbox: "Compra / cuenta verificada",
        postReview: "Publicar reseña",
        visitSite: "Visitar sitio oficial",
        addFav: "♡ Favorito",
        inFav: "♥ Favorito",
        visits: "Visitas",
        listed: "Añadida",
        globalRating: "Puntuación global",
        verifiedScore: "Verificado",
        unverifiedScore: "No verificado",
        noBrands: "Ninguna marca coincide con tu filtro.",
        allFilter: "Todas",
        verifiedFilter: "Solo verificadas",
        sortRecent: "Más recientes",
        sortHelpful: "Más útiles",
        sortHighest: "Mayor puntuación",
        sortLowest: "Menor puntuación",
        profileUpdated: "¡Perfil actualizado!",
        avatarUpdated: "¡Avatar actualizado!",
        reviewPosted: "¡Reseña publicada!",
        loginRequired: "Inicia sesión primero.",
        resendVerification: "↻ Reenviar correo de verificación",
        verificationSent: "¡Correo de verificación enviado! Revisa tu bandeja de entrada y spam.",
        emailNotVerified: "Verifica tu correo electrónico antes de iniciar sesión.",
        signupVerifyNotice: "¡Cuenta creada! Revisa tu correo y haz clic en el enlace de verificación.",
        catNames: {
            "All": "Todas",
            "Sports": "Deportes",
            "Fashion": "Moda",
            "Games": "Juegos",
            "Everyday Life": "Vida cotidiana",
            "Books": "Libros",
            "Technology": "Tecnología"
        }
    },
    de: {
        dir: "ltr",
        categoriesTitle: "Kategorien",
        sortLabel: "Sortieren nach:",
        searchPlaceholder: "Marken suchen...",
        signIn: "Anmelden",
        myAccount: "Mein Konto",
        profileMenu: "Profilmenü",
        backToCatalog: "← Zurück zum Katalog",
        createAccount: "Konto erstellen",
        authSubtitleSignup: "Tritt Go Find Me bei, um Lieblingsmarken zu speichern und Bewertungen zu schreiben.",
        authSubtitleSignin: "Willkommen zurück! Melde dich an, um Profil und Favoriten zu öffnen.",
        usernamePlaceholder: "Benutzername",
        emailPlaceholder: "E-Mail",
        passwordPlaceholder: "Passwort",
        signUp: "Registrieren",
        alreadyAccount: "Schon ein Konto?",
        needAccount: "Noch kein Konto?",
        totalReviews: "Bewertungen gesamt",
        verifiedReviews: "Verifizierte Bewertungen",
        favoriteBrands: "Lieblingsmarken",
        noFavorites: "Noch keine Lieblingsmarken gespeichert.",
        accountSettings: "Kontoeinstellungen",
        countryLabel: "Land",
        countryPlaceholder: "Land suchen...",
        saveChanges: "Änderungen speichern",
        signOut: "Abmelden",
        verifiedBuyer: "✓ Verifizierter Käufer",
        unverifiedReviewer: "Nicht verifiziert",
        writeReview: "Bewertung schreiben",
        reviewPlaceholder: "Teile deine Erfahrungen mit dieser Marke...",
        ratingLabel: "Bewertung (0–10):",
        verifiedCheckbox: "Verifizierter Kauf / Account",
        postReview: "Bewertung senden",
        visitSite: "Offizielle Website",
        addFav: "♡ Favorit",
        inFav: "♥ Favorit",
        visits: "Aufrufe",
        listed: "Gelisted",
        globalRating: "Gesamtbewertung",
        verifiedScore: "Verifiziert",
        unverifiedScore: "Nicht verifiziert",
        noBrands: "Keine Marken passen zu deinen Filtern.",
        allFilter: "Alle",
        verifiedFilter: "Nur verifizierte",
        sortRecent: "Neueste",
        sortHelpful: "Hilfreichste",
        sortHighest: "Beste Bewertung",
        sortLowest: "Schlechteste Bewertung",
        profileUpdated: "Profil aktualisiert!",
        avatarUpdated: "Avatar aktualisiert!",
        reviewPosted: "Bewertung veröffentlicht!",
        loginRequired: "Bitte zuerst anmelden.",
        resendVerification: "↻ Bestätigungs-E-Mail erneut senden",
        verificationSent: "Bestätigungs-E-Mail gesendet! Prüfe Posteingang und Spam.",
        emailNotVerified: "Bitte bestätige deine E-Mail-Adresse vor der Anmeldung.",
        signupVerifyNotice: "Konto erstellt! Bitte bestätige den Link in deiner E-Mail vor der Anmeldung.",
        catNames: {
            "All": "Alle",
            "Sports": "Sport",
            "Fashion": "Mode",
            "Games": "Spiele",
            "Everyday Life": "Alltag",
            "Books": "Bücher",
            "Technology": "Technologie"
        }
    },
    it: {
        dir: "ltr",
        categoriesTitle: "Categorie",
        sortLabel: "Ordina per:",
        searchPlaceholder: "Cerca brand...",
        signIn: "Accedi",
        myAccount: "Il mio account",
        profileMenu: "Menu profilo",
        backToCatalog: "← Torna al catalogo",
        createAccount: "Crea un account",
        authSubtitleSignup: "Unisciti a Go Find Me per salvare i brand preferiti e lasciare recensioni.",
        authSubtitleSignin: "Bentornato! Accedi per visualizzare profilo e preferiti.",
        usernamePlaceholder: "Nome utente",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        signUp: "Registrati",
        alreadyAccount: "Hai già un account?",
        needAccount: "Ti serve un account?",
        totalReviews: "Recensioni totali",
        verifiedReviews: "Recensioni verificate",
        favoriteBrands: "Brand preferiti",
        noFavorites: "Nessun brand preferito al momento.",
        accountSettings: "Impostazioni account",
        countryLabel: "Paese",
        countryPlaceholder: "Cerca paese...",
        saveChanges: "Salva modifiche",
        signOut: "Esci",
        verifiedBuyer: "✓ Acquirente verificato",
        unverifiedReviewer: "Non verificato",
        writeReview: "Scrivi una recensione",
        reviewPlaceholder: "Condividi la tua esperienza con questo brand...",
        ratingLabel: "Voto (0–10):",
        verifiedCheckbox: "Acquisto / account verificato",
        postReview: "Pubblica recensione",
        visitSite: "Visita sito ufficiale",
        addFav: "♡ Preferito",
        inFav: "♥ Preferito",
        visits: "Visite",
        listed: "Aggiunto",
        globalRating: "Voto globale",
        verifiedScore: "Verificato",
        unverifiedScore: "Non verificato",
        noBrands: "Nessun brand corrisponde ai filtri.",
        allFilter: "Tutti",
        verifiedFilter: "Solo verificati",
        sortRecent: "Più recenti",
        sortHelpful: "Più utili",
        sortHighest: "Voto più alto",
        sortLowest: "Voto più basso",
        profileUpdated: "Profilo aggiornato!",
        avatarUpdated: "Avatar aggiornato!",
        reviewPosted: "Recensione pubblicata!",
        loginRequired: "Accedi prima di continuare.",
        resendVerification: "↻ Invia di nuovo l'email di verifica",
        verificationSent: "Email di verifica inviata! Controlla posta in arrivo e spam.",
        emailNotVerified: "Verifica la tua email prima di accedere.",
        signupVerifyNotice: "Account creato! Controlla l'email e clicca sul link di verifica.",
        catNames: {
            "All": "Tutti",
            "Sports": "Sport",
            "Fashion": "Moda",
            "Games": "Giochi",
            "Everyday Life": "Vita quotidiana",
            "Books": "Libri",
            "Technology": "Tecnologia"
        }
    },
    pt: {
        dir: "ltr",
        categoriesTitle: "Categorias",
        sortLabel: "Ordenar por:",
        searchPlaceholder: "Pesquisar marcas...",
        signIn: "Entrar",
        myAccount: "Minha conta",
        profileMenu: "Menu de perfil",
        backToCatalog: "← Voltar ao catálogo",
        createAccount: "Criar uma conta",
        authSubtitleSignup: "Entre no Go Find Me para salvar marcas favoritas e deixar avaliações.",
        authSubtitleSignin: "Bem-vindo de volta! Entre para acessar seu perfil e favoritos.",
        usernamePlaceholder: "Nome de usuário",
        emailPlaceholder: "E-mail",
        passwordPlaceholder: "Senha",
        signUp: "Cadastrar",
        alreadyAccount: "Já tem uma conta?",
        needAccount: "Precisa de uma conta?",
        totalReviews: "Avaliações totais",
        verifiedReviews: "Avaliações verificadas",
        favoriteBrands: "Marcas favoritas",
        noFavorites: "Nenhuma marca favorita ainda.",
        accountSettings: "Configurações da conta",
        countryLabel: "País",
        countryPlaceholder: "Buscar país...",
        saveChanges: "Salvar alterações",
        signOut: "Sair",
        verifiedBuyer: "✓ Comprador verificado",
        unverifiedReviewer: "Não verificado",
        writeReview: "Escrever avaliação",
        reviewPlaceholder: "Compartilhe sua experiência com esta marca...",
        ratingLabel: "Nota (0–10):",
        verifiedCheckbox: "Compra / conta verificada",
        postReview: "Publicar avaliação",
        visitSite: "Visitar site oficial",
        addFav: "♡ Favorito",
        inFav: "♥ Favorito",
        visits: "Visitas",
        listed: "Adicionado",
        globalRating: "Nota global",
        verifiedScore: "Verificado",
        unverifiedScore: "Não verificado",
        noBrands: "Nenhuma marca corresponde ao filtro.",
        allFilter: "Todas",
        verifiedFilter: "Apenas verificadas",
        sortRecent: "Mais recentes",
        sortHelpful: "Mais úteis",
        sortHighest: "Maior nota",
        sortLowest: "Menor nota",
        profileUpdated: "Perfil atualizado!",
        avatarUpdated: "Avatar atualizado!",
        reviewPosted: "Avaliação publicada!",
        loginRequired: "Faça login primeiro.",
        resendVerification: "↻ Reenviar e-mail de verificação",
        verificationSent: "E-mail de verificação enviado! Verifique sua caixa de entrada e spam.",
        emailNotVerified: "Verifique seu e-mail antes de entrar.",
        signupVerifyNotice: "Conta criada! Verifique seu e-mail e clique no link de confirmação.",
        catNames: {
            "All": "Todas",
            "Sports": "Esportes",
            "Fashion": "Moda",
            "Games": "Jogos",
            "Everyday Life": "Dia a dia",
            "Books": "Livros",
            "Technology": "Tecnologia"
        }
    }
};

const BRAND_TRANSLATIONS = {
    fr: {
        "Nike": "Chaussures et vêtements de sport conçus pour la course et l'entraînement.",
        "Adidas": "Équipements de sport, chaussures et vêtements de performance mondiaux.",
        "Zara": "Mode tendance rapide, vêtements et accessoires pour homme, femme et enfant.",
        "Nintendo": "Jeux vidéo emblématiques, consoles et franchises de divertissement.",
        "IKEA": "Meubles prêts à monter, décoration et solutions pour la maison.",
        "Penguin Books": "Éditions de littérature classique, fiction contemporaine et essais.",
        "Apple": "Matériel informatique, smartphones, logiciels et services d'écosystème.",
        "Patagonia": "Vêtements d'extérieur axés sur la durabilité et la protection de l'environnement.",
        "Steam": "Plateforme numérique de distribution, de jeu et de communauté PC.",
        "Sony": "Électronique grand public, audio, caméras et divertissement PlayStation."
    },
    ar: {
        "Nike": "أحذية وملابس رياضية مصممة للجري والتدريب.",
        "Adidas": "معدات رياضية وأحذية وملابس أداء عالمية.",
        "Zara": "أزياء عصرية سريعة وملابس وإكسسوارات للجميع.",
        "Nintendo": "ألعاب فيديو شهيرة وأجهزة ألعاب وترفيه.",
        "IKEA": "أثاث جاهز للتركيب وديكور وحلول منزلية.",
        "Penguin Books": "نشر الأدب الكلاسيكي والروايات والكتب المعرفية.",
        "Apple": "أجهزة حاسوب وهواتف ذكية وبرمجيات وخدمات متكاملة.",
        "Patagonia": "ملابس خارجية تركز على الاستدامة وحماية البيئة.",
        "Steam": "منصة رقمية لتوزيع الألعاب والمجتمع على الحاسوب.",
        "Sony": "إلكترونيات استهلاكية وصوتيات وكاميرات وترفيه بلايستيشن."
    },
    es: {
        "Nike": "Calzado y ropa deportiva diseñados para correr y entrenar.",
        "Adidas": "Equipación deportiva, zapatillas y ropa de rendimiento global.",
        "Zara": "Moda rápida actual, ropa y accesorios para todos.",
        "Nintendo": "Videojuegos icónicos, consolas y franquicias de entretenimiento.",
        "IKEA": "Muebles modulares, decoración y soluciones para el hogar.",
        "Penguin Books": "Editorial de clásicos literarios, ficción y no ficción.",
        "Apple": "Hardware informático, smartphones, software y servicios.",
        "Patagonia": "Ropa de exterior centrada en la sostenibilidad y el medio ambiente.",
        "Steam": "Plataforma digital de distribución y comunidad de juegos para PC.",
        "Sony": "Electrónica de consumo, audio, cámaras y entretenimiento."
    },
    de: {
        "Nike": "Sportschuhe und Sportbekleidung für Laufen und Training.",
        "Adidas": "Globale Sportausrüstung, Schuhe und Performance-Bekleidung.",
        "Zara": "Aktuelle Fast Fashion, Kleidung und Accessoires.",
        "Nintendo": "Bekannte Videospiele, Konsolen und Entertainment-Marken.",
        "IKEA": "Möbel, Wohnaccessoires und Einrichtungslösungen.",
        "Penguin Books": "Klassiker, Belletristik und Sachbücher im Verlag.",
        "Apple": "Computer-Hardware, Smartphones, Software und Dienste.",
        "Patagonia": "Outdoor-Bekleidung mit Fokus auf Nachhaltigkeit und Umweltschutz.",
        "Steam": "Digitale Spieleplattform und Community für den PC.",
        "Sony": "Unterhaltungselektronik, Audio, Kameras und PlayStation."
    },
    it: {
        "Nike": "Calzature e abbigliamento sportivo per corsa e allenamento.",
        "Adidas": "Articoli sportivi, scarpe e abbigliamento tecnico globale.",
        "Zara": "Moda veloce, abbigliamento e accessori per tutti.",
        "Nintendo": "Videogiochi iconici, console e intrattenimento.",
        "IKEA": "Mobili, arredo e soluzioni per la casa.",
        "Penguin Books": "Classici della letteratura, narrativa e saggistica.",
        "Apple": "Hardware, smartphone, software e servizi dell'ecosistema.",
        "Patagonia": "Abbigliamento outdoor attento a sostenibilità e ambiente.",
        "Steam": "Piattaforma digitale e community per giochi PC.",
        "Sony": "Elettronica di consumo, audio, fotocamere e intrattenimento."
    },
    pt: {
        "Nike": "Calçados e roupas esportivas voltados para corrida e treino.",
        "Adidas": "Artigos esportivos, tênis e roupas de performance.",
        "Zara": "Moda rápida, roupas e acessórios para todos.",
        "Nintendo": "Jogos icônicos, consoles e franquias de entretenimento.",
        "IKEA": "Móveis, decoração e soluções para casa.",
        "Penguin Books": "Clássicos literários, ficção e não ficção.",
        "Apple": "Hardware, smartphones, software e serviços integrados.",
        "Patagonia": "Roupas outdoor focadas em sustentabilidade e meio ambiente.",
        "Steam": "Plataforma digital e comunidade de jogos para PC.",
        "Sony": "Eletrônicos de consumo, áudio, câmeras e entretenimento."
    }
};

let currentUser = null;
let currentProfile = null;
let isSignupMode = true;
let activeCategory = "All";
let currentSort = "verified-desc";
let searchQuery = "";
let currentLang = "en";
let activeDetailBrandId = null;
let activeReviewFilter = "all";
let activeReviewSort = "recent";
let pendingUnverifiedEmail = "";

let brands = [];
let reviews = [];
let userVotes = {};

const DEFAULT_BRANDS = [
    { id: 1, name: "Nike", logo: "NK", category: "Sports", description: "Athletic footwear and performance apparel built for running and training.", url: "https://www.nike.com", banner: "images/nike-gfm.png", visits: 0, listed_date: "2023-04" },
    { id: 2, name: "Adidas", logo: "AD", category: "Sports", description: "Global sportswear, footwear, and performance athletic gear.", url: "https://www.adidas.com", banner: "images/adidas-gfm.png", visits: 0, listed_date: "2023-05" },
    { id: 3, name: "Zara", logo: "ZR", category: "Fashion", description: "Fast-moving contemporary apparel, footwear, and accessories.", url: "https://www.zara.com", banner: "images/apc-gfm.png", visits: 0, listed_date: "2024-01" },
    { id: 4, name: "Nintendo", logo: "NT", category: "Games", description: "Iconic video games, consoles, and family-friendly entertainment.", url: "https://www.nintendo.com", banner: "images/nintendo-gfm.png", visits: 0, listed_date: "2023-02" },
    { id: 5, name: "IKEA", logo: "IK", category: "Everyday Life", description: "Ready-to-assemble furniture, home decor, and practical living solutions.", url: "https://www.ikea.com", banner: "images/muji-gfm.png", visits: 0, listed_date: "2023-06" },
    { id: 6, name: "Penguin Books", logo: "PB", category: "Books", description: "Publishing house known for classic literature, fiction, and non-fiction.", url: "https://www.penguin.com", banner: "images/penguin-books-gfm.png", visits: 0, listed_date: "2024-03" },
    { id: 7, name: "Apple", logo: "AP", category: "Technology", description: "Consumer hardware, smartphones, operating systems, and ecosystem services.", url: "https://www.apple.com", banner: "images/cos-gfm.png", visits: 0, listed_date: "2023-01" },
    { id: 8, name: "Patagonia", logo: "PT", category: "Everyday Life", description: "Outdoor apparel focused on durability, repairs, and environmental activism.", url: "https://www.patagonia.com", banner: "images/framework-gfm.png", visits: 0, listed_date: "2024-09" },
    { id: 9, name: "Steam", logo: "ST", category: "Games", description: "Digital PC game storefront, cloud saves, and community platform.", url: "https://store.steampowered.com", banner: "images/arc-teryx-gfm.png", visits: 0, listed_date: "2023-08" },
    { id: 10, name: "Sony", logo: "SN", category: "Technology", description: "Consumer electronics, audio, imaging sensors, and PlayStation entertainment.", url: "https://www.sony.com", banner: "images/aesop-gfm.png", visits: 0, listed_date: "2024-05" }
];

function getBannerSrc(brand) {
    const defaultMatch = DEFAULT_BRANDS.find(d => d.name === brand.name || d.id === brand.id);
    if (!brand.banner || brand.banner.includes("wikimedia.org")) {
        return defaultMatch?.banner || "";
    }
    if (brand.banner.startsWith("images/") && brand.banner.includes(" ")) {
        return encodeURI(brand.banner.replace(/\s+/g, "-"));
    }
    return brand.banner.includes(" ") ? encodeURI(brand.banner) : brand.banner;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

function getFlagSvg(code) {
    return FLAGS[code] || `<span class="flag-icon" style="background:#e5e7eb;"></span>`;
}

function getCountryName(code) {
    const found = COUNTRY_LANGUAGES.find(c => c.code === code);
    return found ? found.name : "Morocco";
}

function getBrandDescription(brand) {
    if (currentLang !== "en" && BRAND_TRANSLATIONS[currentLang]?.[brand.name]) {
        return BRAND_TRANSLATIONS[currentLang][brand.name];
    }
    return brand.description || "";
}

function isNewBrand(listedDate) {
    if (!listedDate) return false;
    const parts = listedDate.split("-");
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1] || "1", 10) - 1;
    if (isNaN(year)) return false;
    const brandDate = new Date(year, month, 1);
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return brandDate >= oneYearAgo;
}

function calculateBrandStats(brandId) {
    const brandReviews = reviews.filter(r => r.brand_id === brandId);
    const verifiedList = brandReviews.filter(r => r.is_verified);
    const unverifiedList = brandReviews.filter(r => !r.is_verified);

    const avg = arr => {
        if (!arr.length) return null;
        return arr.reduce((acc, item) => acc + Number(item.rating), 0) / arr.length;
    };

    const verifiedAvg = avg(verifiedList);
    const unverifiedAvg = avg(unverifiedList);
    const globalAvg = avg(brandReviews);

    return {
        verifiedAvg,
        unverifiedAvg,
        globalAvg,
        totalCount: brandReviews.length,
        verifiedCount: verifiedList.length
    };
}

function formatScore(val) {
    return val === null || val === undefined || isNaN(val) ? "0.0" : Number(val).toFixed(1);
}

function getCardScoreBadge(stats) {
    if (currentSort.startsWith("verified")) {
        return stats.verifiedAvg !== null ? `${formatScore(stats.verifiedAvg)}/10` : `${formatScore(stats.globalAvg)}/10`;
    }
    if (currentSort.startsWith("unverified")) {
        return stats.unverifiedAvg !== null ? `${formatScore(stats.unverifiedAvg)}/10` : `${formatScore(stats.globalAvg)}/10`;
    }
    return `${formatScore(stats.globalAvg)}/10`;
}

function toggleMobileSidebar(forceState) {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (!sidebar || !backdrop) return;
    const shouldOpen = typeof forceState === "boolean" ? forceState : !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", shouldOpen);
    backdrop.classList.toggle("open", shouldOpen);
}
window.toggleMobileSidebar = toggleMobileSidebar;

function applyTranslations() {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    document.documentElement.lang = currentLang;
    document.documentElement.dir = t.dir;

    const sidebarTitle = document.getElementById("sidebarTitle");
    if (sidebarTitle) sidebarTitle.textContent = t.categoriesTitle;

    const sortLabel = document.getElementById("sortLabel");
    if (sortLabel) sortLabel.textContent = t.sortLabel;

    const searchInput = document.getElementById("search");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    document.querySelectorAll(".cat-label").forEach(el => {
        const key = el.getAttribute("data-cat-name");
        if (key && t.catNames[key]) {
            el.textContent = t.catNames[key];
        }
    });

    const sectionTitle = document.getElementById("section-title");
    if (sectionTitle) {
        sectionTitle.textContent = t.catNames[activeCategory] || activeCategory;
    }

    renderAuthUI();
    renderCatalog();
    if (activeDetailBrandId !== null) {
        renderBrandDetail(activeDetailBrandId);
    }
    const profilePage = document.getElementById("profilePage");
    if (profilePage && profilePage.classList.contains("active")) {
        renderProfilePage();
    }
}

function changeLanguage(lang) {
    currentLang = UI_TEXT[lang] ? lang : "en";
    localStorage.setItem("gfm_lang", currentLang);
    applyTranslations();
}
window.changeLanguage = changeLanguage;

function renderAuthUI() {
    const container = document.getElementById("authContainer");
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!container) return;

    if (!currentUser) {
        container.innerHTML = `<button class="auth-btn" onclick="openModal()">${t.signIn}</button>`;
        return;
    }

    const displayName = currentProfile?.username || currentUser.email?.split("@")[0] || "User";
    const avatarUrl = currentProfile?.avatar_url;
    const avatarHtml = avatarUrl
        ? `<img src="${avatarUrl}" alt="${displayName}">`
        : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;

    container.innerHTML = `
        <div class="user-trigger" onclick="openProfilePage()">
            <div class="avatar-container">${avatarHtml}</div>
            <span class="username-label">${displayName}</span>
        </div>
    `;
}

function openModal(mode = "signup") {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    isSignupMode = mode === "signup";
    const overlay = document.getElementById("modalOverlay");
    const usernameWrap = document.getElementById("usernameWrap");
    const title = document.getElementById("modalTitle");
    const subtitle = document.getElementById("modalSubtitle");
    const submitBtn = document.getElementById("modalSubmit");
    const toggleSpan = document.getElementById("modalToggle");
    const errEl = document.getElementById("authError");
    const infoEl = document.getElementById("authInfo");
    const boxEl = document.getElementById("authFeedbackBox");
    const resendBtn = document.getElementById("resendVerificationBtn");

    if (errEl) errEl.textContent = "";
    if (infoEl) infoEl.textContent = "";
    if (boxEl) boxEl.classList.remove("has-content");
    if (resendBtn) resendBtn.classList.remove("visible");

    if (isSignupMode) {
        if (usernameWrap) usernameWrap.style.display = "flex";
        if (title) title.textContent = t.createAccount;
        if (subtitle) subtitle.textContent = t.authSubtitleSignup;
        if (submitBtn) submitBtn.textContent = t.signUp;
        if (toggleSpan) toggleSpan.innerHTML = `${t.alreadyAccount} <strong>${t.signIn}</strong>`;
    } else {
        if (usernameWrap) usernameWrap.style.display = "none";
        if (title) title.textContent = t.signIn;
        if (subtitle) subtitle.textContent = t.authSubtitleSignin;
        if (submitBtn) submitBtn.textContent = t.signIn;
        if (toggleSpan) toggleSpan.innerHTML = `${t.needAccount} <strong>${t.signUp}</strong>`;
    }

    if (overlay) overlay.classList.add("open");
}
window.openModal = openModal;

function closeModal() {
    const overlay = document.getElementById("modalOverlay");
    if (overlay) overlay.classList.remove("open");
}
window.closeModal = closeModal;

function toggleAuthMode() {
    openModal(isSignupMode ? "signin" : "signup");
}
window.toggleAuthMode = toggleAuthMode;

function togglePasswordVisibility() {
    const input = document.getElementById("passwordInput");
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
}
window.togglePasswordVisibility = togglePasswordVisibility;

function setAuthFeedback({ error = "", info = "", showResend = false }) {
    const errEl = document.getElementById("authError");
    const infoEl = document.getElementById("authInfo");
    const boxEl = document.getElementById("authFeedbackBox");
    const resendBtn = document.getElementById("resendVerificationBtn");

    if (errEl) errEl.textContent = error;
    if (infoEl) infoEl.textContent = info;
    if (resendBtn) resendBtn.classList.toggle("visible", Boolean(showResend));
    if (boxEl) boxEl.classList.toggle("has-content", Boolean(error || info || showResend));
}

async function resendVerificationEmail() {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    const emailInput = document.getElementById("emailInput");
    const targetEmail = (emailInput?.value.trim() || pendingUnverifiedEmail || "").trim();
    if (!targetEmail) {
        setAuthFeedback({ error: "Enter your email address first." });
        return;
    }

    const resendBtn = document.getElementById("resendVerificationBtn");
    if (resendBtn) resendBtn.disabled = true;

    const { error } = await supabase.auth.resend({
        type: "signup",
        email: targetEmail,
        options: { emailRedirectTo: DEFAULT_REDIRECT_URL }
    });

    if (resendBtn) resendBtn.disabled = false;

    if (error) {
        setAuthFeedback({ error: error.message, showResend: true });
    } else {
        setAuthFeedback({ info: t.verificationSent, showResend: true });
    }
}
window.resendVerificationEmail = resendVerificationEmail;

async function handleAuth() {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    const usernameInput = document.getElementById("usernameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const submitBtn = document.getElementById("modalSubmit");

    const username = usernameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value || "";

    setAuthFeedback({});

    if (!email || !password) {
        setAuthFeedback({ error: "Please fill in email and password." });
        return;
    }

    if (submitBtn) submitBtn.disabled = true;

    try {
        if (isSignupMode) {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: DEFAULT_REDIRECT_URL,
                    data: { username: username || email.split("@")[0] }
                }
            });
            if (error) {
                setAuthFeedback({ error: error.message });
                return;
            }
            pendingUnverifiedEmail = email;
            if (data.user && !data.session) {
                setAuthFeedback({ info: t.signupVerifyNotice, showResend: true });
            } else if (data.user) {
                await ensureProfileExists(data.user, username);
                closeModal();
                showToast(t.profileUpdated);
            }
        } else {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                const isUnconfirmed = /confirm|verify|email not confirmed/i.test(error.message);
                pendingUnverifiedEmail = email;
                setAuthFeedback({
                    error: isUnconfirmed ? t.emailNotVerified : error.message,
                    showResend: isUnconfirmed
                });
                return;
            }
            if (data.user) {
                await loadUserSessionData(data.user);
                closeModal();
                showToast(t.profileUpdated);
            }
        }
    } finally {
        if (submitBtn) submitBtn.disabled = false;
    }
}
window.handleAuth = handleAuth;

async function ensureProfileExists(user, fallbackUsername = "") {
    if (!user) return;
    const defaultCountry = COUNTRY_LANGUAGES.find(c => c.lang === currentLang)?.code || "ma";
    const chosenUsername = (fallbackUsername || user.user_metadata?.username || user.email?.split("@")[0] || "User").trim();

    const { data: existing } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

    if (existing) {
        currentProfile = existing;
    } else {
        const { data: inserted } = await supabase
            .from("profiles")
            .upsert({
                id: user.id,
                username: chosenUsername,
                country: defaultCountry,
                favorites: []
            })
            .select()
            .single();
        currentProfile = inserted || {
            id: user.id,
            username: chosenUsername,
            country: defaultCountry,
            favorites: []
        };
    }
}

async function loadUserSessionData(user) {
    currentUser = user;
    if (!user) {
        currentProfile = null;
        userVotes = {};
        renderAuthUI();
        return;
    }
    await ensureProfileExists(user);
    const { data: votesData } = await supabase
        .from("review_votes")
        .select("review_id, vote_type")
        .eq("user_id", user.id);

    userVotes = {};
    if (Array.isArray(votesData)) {
        votesData.forEach(v => {
            userVotes[v.review_id] = v.vote_type;
        });
    }
    renderAuthUI();
}

async function signOutUser() {
    await supabase.auth.signOut();
    currentUser = null;
    currentProfile = null;
    userVotes = {};
    closeProfilePage();
    renderAuthUI();
    renderCatalog();
}
window.signOutUser = signOutUser;

async function toggleFavorite(brandId, event) {
    if (event) event.stopPropagation();
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!currentUser) {
        showToast(t.loginRequired);
        openModal("signin");
        return;
    }

    const favs = Array.isArray(currentProfile?.favorites) ? [...currentProfile.favorites] : [];
    const idx = favs.indexOf(brandId);
    if (idx >= 0) {
        favs.splice(idx, 1);
    } else {
        favs.push(brandId);
    }

    currentProfile = { ...(currentProfile || { id: currentUser.id }), favorites: favs };
    await supabase.from("profiles").update({ favorites: favs }).eq("id", currentUser.id);

    renderCatalog();
    if (activeDetailBrandId === brandId) {
        renderBrandDetail(brandId);
    }
    const profilePage = document.getElementById("profilePage");
    if (profilePage && profilePage.classList.contains("active")) {
        renderProfilePage();
    }
}
window.toggleFavorite = toggleFavorite;

function openProfilePage() {
    if (!currentUser) return;
    const page = document.getElementById("profilePage");
    if (!page) return;
    renderProfilePage();
    page.classList.add("active");
}
window.openProfilePage = openProfilePage;

function closeProfilePage() {
    const page = document.getElementById("profilePage");
    if (page) page.classList.remove("active");
    const menu = document.getElementById("countryMenu");
    if (menu) menu.classList.remove("open");
}
window.closeProfilePage = closeProfilePage;

function toggleCountryMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById("countryMenu");
    if (!menu) return;
    const isOpen = menu.classList.toggle("open");
    if (isOpen) {
        const searchInput = document.getElementById("countrySearchInput");
        if (searchInput) {
            searchInput.value = "";
            filterCountryOptions("");
            setTimeout(() => searchInput.focus(), 20);
        }
    }
}
window.toggleCountryMenu = toggleCountryMenu;

function filterCountryOptions(query) {
    const q = (query || "").trim().toLowerCase();
    document.querySelectorAll("#countryOptionsList .country-option").forEach(btn => {
        const name = (btn.getAttribute("data-country-name") || "").toLowerCase();
        const code = (btn.getAttribute("data-country-code") || "").toLowerCase();
        btn.style.display = (!q || name.includes(q) || code.includes(q)) ? "flex" : "none";
    });
}
window.filterCountryOptions = filterCountryOptions;

function selectCountryOption(code) {
    const hiddenInput = document.getElementById("profileCountryInput");
    const triggerCode = document.getElementById("selectedCountryFlag");
    const triggerName = document.getElementById("selectedCountryName");
    const previewFlag = document.getElementById("previewCountryFlag");
    const previewName = document.getElementById("previewCountryName");
    const previewLang = document.getElementById("previewCountryLang");

    const countryObj = COUNTRY_LANGUAGES.find(c => c.code === code) || COUNTRY_LANGUAGES[0];
    if (hiddenInput) hiddenInput.value = countryObj.code;
    if (triggerCode) triggerCode.innerHTML = getFlagSvg(countryObj.code);
    if (triggerName) triggerName.textContent = countryObj.name;
    if (previewFlag) previewFlag.innerHTML = getFlagSvg(countryObj.code);
    if (previewName) previewName.textContent = countryObj.name;
    if (previewLang) previewLang.textContent = `Language: ${countryObj.lang.toUpperCase()}`;

    document.querySelectorAll("#countryOptionsList .country-option").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-country-code") === countryObj.code);
    });

    const menu = document.getElementById("countryMenu");
    if (menu) menu.classList.remove("open");
}
window.selectCountryOption = selectCountryOption;

function renderProfilePage() {
    const container = document.getElementById("profileContentContainer");
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!container || !currentUser) return;

    const userReviews = reviews.filter(r => r.user_id === currentUser.id);
    const verifiedUserReviews = userReviews.filter(r => r.is_verified);
    const favIds = Array.isArray(currentProfile?.favorites) ? currentProfile.favorites : [];
    const favBrands = brands.filter(b => favIds.includes(b.id));
    const currentCountryCode = currentProfile?.country || "ma";
    const currentCountryObj = COUNTRY_LANGUAGES.find(c => c.code === currentCountryCode) || COUNTRY_LANGUAGES[0];

    const avatarHtml = currentProfile?.avatar_url
        ? `<img src="${currentProfile.avatar_url}" alt="Avatar">`
        : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;

    const favHtml = favBrands.length
        ? favBrands.map(b => `
            <div class="favorite-item">
                <div class="favorite-brand-info">
                    <strong>${b.name}</strong>
                    <span style="font-size:12px;color:#666;">${t.catNames[b.category] || b.category}</span>
                </div>
                <div class="favorite-actions">
                    <button class="back-btn" onclick="closeProfilePage(); openBrandDetail(${b.id});">Open</button>
                    <button class="vote-btn" onclick="toggleFavorite(${b.id}, event)">♥</button>
                </div>
            </div>
        `).join("")
        : `<p style="color:#666;font-size:13.5px;">${t.noFavorites}</p>`;

    const countryOptionsHtml = COUNTRY_LANGUAGES.map(c => `
        <button type="button" class="country-option ${c.code === currentCountryObj.code ? "active" : ""}"
            data-country-code="${c.code}" data-country-name="${c.name}" onclick="selectCountryOption('${c.code}')">
            <span class="country-option-left">
                ${getFlagSvg(c.code)}
                <span>${c.name}</span>
            </span>
            <span class="country-lang-badge">${c.lang.toUpperCase()}</span>
        </button>
    `).join("");

    container.innerHTML = `
        <div class="profile-hero-card">
            <div class="profile-main-info">
                <div class="profile-avatar-wrapper" onclick="document.getElementById('avatarUpload').click()">
                    <div class="profile-big-avatar">${avatarHtml}</div>
                    <span class="avatar-edit-badge">Edit</span>
                </div>
                <div class="profile-details">
                    <h2>${currentProfile?.username || "User"}</h2>
                    <p>${currentUser.email || ""}</p>
                    <div class="profile-meta-chips">
                        <span class="meta-chip">${getFlagSvg(currentCountryObj.code)} ${currentCountryObj.name}</span>
                        <span class="meta-chip verified-chip">✓ ${verifiedUserReviews.length} ${t.verifiedReviews}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <h5>${t.totalReviews}</h5>
                <div class="number">${userReviews.length}</div>
                <span class="stat-sub">${t.favoriteBrands}: ${favBrands.length}</span>
            </div>
            <div class="stat-card">
                <h5>${t.verifiedReviews}</h5>
                <div class="number verified">${verifiedUserReviews.length}</div>
                <span class="stat-sub">${currentCountryObj.name}</span>
            </div>
        </div>

        <div class="favorites-section">
            <div class="section-card-header">
                <h3>${t.favoriteBrands}</h3>
                <span class="result-count">${favBrands.length}</span>
            </div>
            <div class="favorites-list">${favHtml}</div>
        </div>

        <div class="settings-section">
            <div class="section-card-header">
                <h3>${t.accountSettings}</h3>
            </div>
            <div class="form-group">
                <label for="profileUsernameInput">${t.usernamePlaceholder}</label>
                <input type="text" id="profileUsernameInput" value="${currentProfile?.username || ""}">
            </div>
            <div class="form-group">
                <label>${t.countryLabel}</label>
                <input type="hidden" id="profileCountryInput" value="${currentCountryObj.code}">
                <div class="country-picker" id="countryPicker">
                    <button type="button" class="country-trigger" onclick="toggleCountryMenu(event)">
                        <span class="country-trigger-left">
                            <span id="selectedCountryFlag">${getFlagSvg(currentCountryObj.code)}</span>
                            <span id="selectedCountryName">${currentCountryObj.name}</span>
                        </span>
                        <span>▾</span>
                    </button>
                    <div class="country-menu" id="countryMenu" onclick="event.stopPropagation()">
                        <input type="text" id="countrySearchInput" class="country-search-input"
                            placeholder="${t.countryPlaceholder}" oninput="filterCountryOptions(this.value)">
                        <div id="countryOptionsList">${countryOptionsHtml}</div>
                    </div>
                </div>
                <div class="country-preview-row">
                    <span id="previewCountryFlag">${getFlagSvg(currentCountryObj.code)}</span>
                    <strong id="previewCountryName">${currentCountryObj.name}</strong>
                    <span id="previewCountryLang">Language: ${currentCountryObj.lang.toUpperCase()}</span>
                </div>
            </div>
            <div class="profile-actions-bar">
                <button class="logout-profile-btn" onclick="signOutUser()">${t.signOut}</button>
                <div class="profile-actions-right">
                    <button class="save-profile-btn" onclick="saveProfileChanges()">${t.saveChanges}</button>
                </div>
            </div>
        </div>
    `;
}

async function saveProfileChanges() {
    if (!currentUser) return;
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    const usernameInput = document.getElementById("profileUsernameInput");
    const countryInput = document.getElementById("profileCountryInput");

    const nextUsername = usernameInput?.value.trim() || currentProfile?.username || "User";
    const nextCountry = countryInput?.value || currentProfile?.country || "ma";

    const { data, error } = await supabase
        .from("profiles")
        .update({ username: nextUsername, country: nextCountry })
        .eq("id", currentUser.id)
        .select()
        .single();

    if (!error) {
        currentProfile = data || { ...(currentProfile || {}), username: nextUsername, country: nextCountry };
        const matchedCountry = COUNTRY_LANGUAGES.find(c => c.code === nextCountry);
        if (matchedCountry && matchedCountry.lang !== currentLang && UI_TEXT[matchedCountry.lang]) {
            currentLang = matchedCountry.lang;
            localStorage.setItem("gfm_lang", currentLang);
            const langSelect = document.getElementById("langSelect");
            if (langSelect) langSelect.value = currentLang;
            applyTranslations();
        }
        renderAuthUI();
        renderProfilePage();
        showToast(t.profileUpdated);
    }
}
window.saveProfileChanges = saveProfileChanges;

async function handleAvatarChange(event) {
    const file = event?.target?.files?.[0];
    if (!file || !currentUser) return;
    const t = UI_TEXT[currentLang] || UI_TEXT.en;

    const ext = file.name.split(".").pop() || "png";
    const path = `${currentUser.id}/avatar.${ext}`;

    const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(path, file, { upsert: true });

    if (!uploadError) {
        const { data: urlData } = supabase.storage.from("avatars").getPublicUrl(path);
        const publicUrl = `${urlData.publicUrl}?t=${Date.now()}`;
        await supabase.from("profiles").update({ avatar_url: publicUrl }).eq("id", currentUser.id);
        currentProfile = { ...(currentProfile || {}), avatar_url: publicUrl };
        renderAuthUI();
        renderProfilePage();
        showToast(t.avatarUpdated);
    }
}
window.handleAvatarChange = handleAvatarChange;

async function openBrandDetail(brandId) {
    const brand = brands.find(b => b.id === brandId);
    if (!brand) return;

    activeDetailBrandId = brandId;
    activeReviewFilter = "all";
    activeReviewSort = "recent";

    const nextVisits = (brand.visits || 0) + 1;
    brand.visits = nextVisits;
    renderCatalog();

    await supabase.from("brands").update({ visits: nextVisits }).eq("id", brandId);

    const page = document.getElementById("brandDetailPage");
    if (page) {
        renderBrandDetail(brandId);
        page.classList.add("active");
    }
}
window.openBrandDetail = openBrandDetail;

function closeBrandDetail() {
    activeDetailBrandId = null;
    const page = document.getElementById("brandDetailPage");
    if (page) page.classList.remove("active");
}
window.closeBrandDetail = closeBrandDetail;

function setReviewFilter(filter) {
    activeReviewFilter = filter;
    if (activeDetailBrandId !== null) renderBrandDetail(activeDetailBrandId);
}
window.setReviewFilter = setReviewFilter;

function setReviewSort(sortVal) {
    activeReviewSort = sortVal;
    if (activeDetailBrandId !== null) renderBrandDetail(activeDetailBrandId);
}
window.setReviewSort = setReviewSort;

function renderBrandDetail(brandId) {
    const brand = brands.find(b => b.id === brandId);
    const contentEl = document.getElementById("brandDetailContent");
    const bannerEl = document.querySelector("#brandDetailPage .brand-banner");
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!brand || !contentEl) return;

    const bannerSrc = getBannerSrc(brand);

    if (bannerEl) {
        bannerEl.style.backgroundImage = bannerSrc ? `url("${bannerSrc}")` : "none";
        bannerEl.classList.toggle("banner-framework", brand.name === "Patagonia");
    }

    const stats = calculateBrandStats(brand.id);
    const favIds = Array.isArray(currentProfile?.favorites) ? currentProfile.favorites : [];
    const isFav = favIds.includes(brand.id);

    let brandReviews = reviews.filter(r => r.brand_id === brand.id);
    if (activeReviewFilter === "verified") {
        brandReviews = brandReviews.filter(r => r.is_verified);
    }

    brandReviews = [...brandReviews].sort((a, b) => {
        if (activeReviewSort === "helpful") return (b.upvotes || 0) - (a.upvotes || 0);
        if (activeReviewSort === "highest") return Number(b.rating) - Number(a.rating);
        if (activeReviewSort === "lowest") return Number(a.rating) - Number(b.rating);
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });

    const reviewsHtml = brandReviews.length
        ? brandReviews.map(rev => {
            const myVote = userVotes[rev.id] || null;
            const dateStr = rev.created_at ? new Date(rev.created_at).toLocaleDateString() : "";
            return `
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <span>${rev.username || "User"}</span>
                            <span style="font-size:12px;color:${rev.is_verified ? "#00a86b" : "#888"};">
                                ${rev.is_verified ? t.verifiedBuyer : t.unverifiedReviewer}
                            </span>
                        </div>
                        <span class="score">${Number(rev.rating).toFixed(1)}/10</span>
                    </div>
                    <p class="review-text">${rev.comment || ""}</p>
                    <div class="review-footer">
                        <span class="review-date">${dateStr}</span>
                        <div class="vote-area">
                            <button class="vote-btn ${myVote === "up" ? "active-up" : ""}" onclick="voteReview(${rev.id}, 'up')">
                                ▲ <span>${rev.upvotes || 0}</span>
                            </button>
                            <button class="vote-btn ${myVote === "down" ? "active-down" : ""}" onclick="voteReview(${rev.id}, 'down')">
                                ▼ <span>${rev.downvotes || 0}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join("")
        : `<div class="empty">${t.noBrands}</div>`;

    contentEl.innerHTML = `
        <div class="brand-detail-top-bar">
            <button class="back-btn" onclick="closeBrandDetail()">${t.backToCatalog}</button>
            <div class="action-buttons-group">
                <button class="favorite-btn ${isFav ? "active" : ""}" onclick="toggleFavorite(${brand.id}, event)">
                    ${isFav ? t.inFav : t.addFav}
                </button>
                <a class="official-link-btn" href="${brand.url}" target="_blank" rel="noopener noreferrer">${t.visitSite} ↗</a>
            </div>
        </div>

        <div class="brand-header-info">
            <div class="brand-detail-logo">${brand.logo}</div>
            <div class="brand-detail-title-area">
                <h2>${brand.name}</h2>
                <span class="cat-tag">${t.catNames[brand.category] || brand.category} · ${t.visits}: ${brand.visits || 0} · ${t.listed}: ${brand.listed_date || ""}</span>
            </div>
        </div>

        <p class="description">${getBrandDescription(brand)}</p>

        <div class="brand-ratings-summary">
            <div class="summary-box">
                <span>${t.globalRating}</span>
                <strong>${formatScore(stats.globalAvg)} / 10</strong>
            </div>
            <div class="summary-box">
                <span>${t.verifiedScore}</span>
                <strong style="color:#00a86b;">${formatScore(stats.verifiedAvg)} / 10</strong>
            </div>
            <div class="summary-box">
                <span>${t.unverifiedScore}</span>
                <strong>${formatScore(stats.unverifiedAvg)} / 10</strong>
            </div>
        </div>

        <div class="add-review-box">
            <h4>${t.writeReview}</h4>
            <textarea id="reviewCommentInput" placeholder="${t.reviewPlaceholder}"></textarea>
            <div class="review-form-controls">
                <div class="form-row">
                    <label for="reviewRatingInput">${t.ratingLabel}</label>
                    <input type="number" id="reviewRatingInput" min="0" max="10" step="0.5" value="8" style="width:76px;">
                    <label style="display:inline-flex;align-items:center;gap:6px;cursor:pointer;">
                        <input type="checkbox" id="reviewVerifiedInput">
                        <span>${t.verifiedCheckbox}</span>
                    </label>
                </div>
                <button class="submit-review-btn" onclick="submitReview(${brand.id})">${t.postReview}</button>
            </div>
            <div class="form-error" id="reviewError"></div>
        </div>

        <div class="reviews-section">
            <div class="reviews-toolbar">
                <h3>${t.totalReviews} (${brandReviews.length})</h3>
                <div class="reviews-filters">
                    <button class="filter-pill ${activeReviewFilter === "all" ? "active" : ""}" onclick="setReviewFilter('all')">${t.allFilter}</button>
                    <button class="filter-pill ${activeReviewFilter === "verified" ? "active" : ""}" onclick="setReviewFilter('verified')">${t.verifiedFilter}</button>
                    <select class="reviews-sort-select" onchange="setReviewSort(this.value)">
                        <option value="recent" ${activeReviewSort === "recent" ? "selected" : ""}>${t.sortRecent}</option>
                        <option value="helpful" ${activeReviewSort === "helpful" ? "selected" : ""}>${t.sortHelpful}</option>
                        <option value="highest" ${activeReviewSort === "highest" ? "selected" : ""}>${t.sortHighest}</option>
                        <option value="lowest" ${activeReviewSort === "lowest" ? "selected" : ""}>${t.sortLowest}</option>
                    </select>
                </div>
            </div>
            ${reviewsHtml}
        </div>
    `;
}

async function submitReview(brandId) {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    const errEl = document.getElementById("reviewError");
    if (errEl) errEl.textContent = "";

    if (!currentUser) {
        showToast(t.loginRequired);
        openModal("signin");
        return;
    }

    const commentInput = document.getElementById("reviewCommentInput");
    const ratingInput = document.getElementById("reviewRatingInput");
    const verifiedInput = document.getElementById("reviewVerifiedInput");

    const comment = commentInput?.value.trim() || "";
    const rating = parseFloat(ratingInput?.value || "0");
    const isVerified = Boolean(verifiedInput?.checked);

    if (!comment) {
        if (errEl) errEl.textContent = "Please write a review comment.";
        return;
    }
    if (isNaN(rating) || rating < 0 || rating > 10) {
        if (errEl) errEl.textContent = "Rating must be between 0 and 10.";
        return;
    }

    const username = currentProfile?.username || currentUser.email?.split("@")[0] || "User";
    const { data, error } = await supabase
        .from("reviews")
        .insert({
            brand_id: brandId,
            user_id: currentUser.id,
            username,
            rating,
            comment,
            is_verified: isVerified,
            upvotes: 0,
            downvotes: 0
        })
        .select()
        .single();

    if (error) {
        if (errEl) errEl.textContent = error.message;
        return;
    }

    if (data) {
        reviews.unshift(data);
    }
    renderCatalog();
    renderBrandDetail(brandId);
    showToast(t.reviewPosted);
}
window.submitReview = submitReview;

async function voteReview(reviewId, voteType) {
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!currentUser) {
        showToast(t.loginRequired);
        openModal("signin");
        return;
    }

    const rev = reviews.find(r => r.id === reviewId);
    if (!rev) return;

    const prevVote = userVotes[reviewId] || null;
    let up = rev.upvotes || 0;
    let down = rev.downvotes || 0;

    if (prevVote === "up") up = Math.max(0, up - 1);
    if (prevVote === "down") down = Math.max(0, down - 1);

    if (prevVote === voteType) {
        delete userVotes[reviewId];
        await supabase.from("review_votes").delete().eq("review_id", reviewId).eq("user_id", currentUser.id);
    } else {
        userVotes[reviewId] = voteType;
        if (voteType === "up") up += 1;
        if (voteType === "down") down += 1;
        await supabase.from("review_votes").upsert({
            review_id: reviewId,
            user_id: currentUser.id,
            vote_type: voteType
        });
    }

    rev.upvotes = up;
    rev.downvotes = down;
    await supabase.from("reviews").update({ upvotes: up, downvotes: down }).eq("id", reviewId);

    if (activeDetailBrandId !== null) {
        renderBrandDetail(activeDetailBrandId);
    }
}
window.voteReview = voteReview;

function updateCategoryCounts() {
    const counts = {
        "All": brands.length,
        "Sports": 0,
        "Fashion": 0,
        "Games": 0,
        "Everyday Life": 0,
        "Books": 0,
        "Technology": 0
    };

    brands.forEach(b => {
        if (counts[b.category] !== undefined) {
            counts[b.category] += 1;
        }
    });

    Object.entries(counts).forEach(([cat, count]) => {
        const el = document.getElementById(`count-${cat}`);
        if (el) el.textContent = String(count);
    });
}

function renderCatalog() {
    const grid = document.getElementById("grid");
    const countEl = document.getElementById("result-count");
    const t = UI_TEXT[currentLang] || UI_TEXT.en;
    if (!grid) return;

    updateCategoryCounts();

    let filtered = brands.filter(b => {
        const matchesCat = activeCategory === "All" || b.category === activeCategory;
        const q = searchQuery.trim().toLowerCase();
        const desc = getBrandDescription(b).toLowerCase();
        const matchesSearch = !q ||
            b.name.toLowerCase().includes(q) ||
            (b.category || "").toLowerCase().includes(q) ||
            desc.includes(q);
        const matchesNew = currentSort !== "new" || isNewBrand(b.listed_date);
        return matchesCat && matchesSearch && matchesNew;
    });

    const statsMap = new Map();
    filtered.forEach(b => statsMap.set(b.id, calculateBrandStats(b.id)));

    filtered.sort((a, b) => {
        const sa = statsMap.get(a.id);
        const sb = statsMap.get(b.id);
        switch (currentSort) {
            case "verified-desc":
                return (sb.verifiedAvg ?? -1) - (sa.verifiedAvg ?? -1);
            case "verified-asc":
                return (sa.verifiedAvg ?? 999) - (sb.verifiedAvg ?? 999);
            case "unverified-desc":
                return (sb.unverifiedAvg ?? -1) - (sa.unverifiedAvg ?? -1);
            case "unverified-asc":
                return (sa.unverifiedAvg ?? 999) - (sb.unverifiedAvg ?? 999);
            case "rating-desc":
                return (sb.globalAvg ?? -1) - (sa.globalAvg ?? -1);
            case "rating-asc":
                return (sa.globalAvg ?? 999) - (sb.globalAvg ?? 999);
            case "trending":
                return (b.visits || 0) - (a.visits || 0);
            case "niche":
                return (a.visits || 0) - (b.visits || 0);
            default:
                return (sb.verifiedAvg ?? sb.globalAvg ?? -1) - (sa.verifiedAvg ?? sa.globalAvg ?? -1);
        }
    });

    if (countEl) {
        countEl.textContent = `${filtered.length} ${filtered.length === 1 ? "brand" : "brands"}`;
    }

    if (!filtered.length) {
        grid.innerHTML = `<div class="empty">${t.noBrands}</div>`;
        return;
    }

    const favIds = Array.isArray(currentProfile?.favorites) ? currentProfile.favorites : [];

    grid.innerHTML = filtered.map(brand => {
        const stats = statsMap.get(brand.id);
        const isFav = favIds.includes(brand.id);
        const zoomClass = brand.name === "Patagonia" ? "zoom-framework" : "";
        const bannerSrc = getBannerSrc(brand);

        return `
            <article class="card" onclick="openBrandDetail(${brand.id})">
                <div>
                    <div class="card-header">
                        <div class="brand-identity">
                            <div class="logo">${brand.logo}</div>
                            <div>
                                <div class="brand-name">${brand.name}</div>
                                <div class="brand-category">${t.catNames[brand.category] || brand.category}</div>
                            </div>
                        </div>
                        <div class="card-header-right">
                            <button type="button" class="quick-fav-btn ${isFav ? "active" : ""}"
                                onclick="toggleFavorite(${brand.id}, event)" aria-label="Favorite">♥</button>
                            <span class="score">${getCardScoreBadge(stats)}</span>
                        </div>
                    </div>

                    ${bannerSrc ? `
                        <div class="card-banner-box">
                            <img class="card-banner ${zoomClass}" src="${bannerSrc}" alt="${brand.name}" loading="lazy"
                                onerror="this.closest('.card-banner-box').style.display='none';">
                        </div>
                    ` : ""}

                    <div class="description-container">
                        <p class="description">${getBrandDescription(brand)}</p>
                        <div class="metrics">
                            <span>${t.visits}: ${brand.visits || 0}</span>
                            <span>${t.listed}: ${brand.listed_date || ""}</span>
                        </div>
                    </div>
                </div>

                <div class="ratings">
                    <span class="verified-badge">✓ ${t.verifiedScore}: ${formatScore(stats.verifiedAvg)}</span>
                    <span>${t.unverifiedScore}: ${formatScore(stats.unverifiedAvg)}</span>
                    <span class="reviews">${stats.totalCount} ${stats.totalCount === 1 ? "review" : "reviews"}</span>
                </div>
            </article>
        `;
    }).join("");
}

async function fetchInitialData() {
    const [{ data: brandsData }, { data: reviewsData }] = await Promise.all([
        supabase.from("brands").select("*").order("id", { ascending: true }),
        supabase.from("reviews").select("*").order("created_at", { ascending: false })
    ]);

    brands = Array.isArray(brandsData) && brandsData.length ? brandsData : DEFAULT_BRANDS;
    reviews = Array.isArray(reviewsData) ? reviewsData : [];
    renderCatalog();
}

document.addEventListener("DOMContentLoaded", async () => {
    const savedLang = localStorage.getItem("gfm_lang");
    if (savedLang && UI_TEXT[savedLang]) {
        currentLang = savedLang;
    }
    const langSelect = document.getElementById("langSelect");
    if (langSelect) langSelect.value = currentLang;

    document.querySelectorAll(".category-item").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-item").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category") || "All";
            applyTranslations();
            toggleMobileSidebar(false);
        });
    });

    const sortSelect = document.getElementById("sort");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            currentSort = sortSelect.value;
            renderCatalog();
        });
    }

    const searchInput = document.getElementById("search");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            searchQuery = searchInput.value;
            renderCatalog();
        });
    }

    document.addEventListener("click", () => {
        const menu = document.getElementById("countryMenu");
        if (menu) menu.classList.remove("open");
    });

    applyTranslations();
    await fetchInitialData();

    const { data: { session } } = await supabase.auth.getSession();
    await loadUserSessionData(session?.user || null);

    supabase.auth.onAuthStateChange(async (_event, sessionData) => {
        await loadUserSessionData(sessionData?.user || null);
        renderCatalog();
    });
});
