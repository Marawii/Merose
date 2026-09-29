/* ================= LANGUAGE ================= */

if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "ar");
}

/* ================= THEME ================= */

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
}

function setLangData() {
    document.documentElement.setAttribute("data-lang", localStorage.getItem("lang"));
}

const trans = {
    ar: {
        home: "الرئيسية",
        designs: "التصاميم",
        order: "الطلبات",
        about: "عنا",
        aiGenerator: "الذكاء الاصطناعي",
        comingSoon: "قريبًا",
        aiServiceText: 'ستتوفر خدمة جديدة، "خدمة توليد الصور بالذكاء الاصطناعي" تتيح لك إنشاء صور مميزة بطريقة سهلة ومبتكرة، لتساعدك على تحويل أفكارك إلى تصاميم تحمل لمستك الخاصة.',
        hero: "برقة الورد نصنع لحظات خالدة",
        footerText: "برقة الورد نصنع لحظات خالدة",
        footerCopy: "© 2026 ميروز",
    },

    en: {
        home: "Home",
        designs: "Designs",
        order: "Order",
        about: "About",
        aiGenerator: "AI",
        comingSoon: "Coming Soon",
        aiServiceText: 'A new service will soon be available: "AI Image Generation" allowing you to create unique images in an easy and creative way, helping you turn your ideas into designs with your own personal touch.',
        hero: "With elegance, we create unforgettable moments",
        footerText: "Barqat Alward Creates Timeless Moments",
        footerCopy: "© 2026 MEROSE",
    }
};

/* ================= APPLY LANGUAGE ================= */
function applyLang() {

    const lang = localStorage.getItem("lang") || "ar";
    const t = trans[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    /* ================= ترجمة العناصر ================= */

    document.querySelectorAll("[data-key]").forEach(el => {

        const key = el.dataset.key;

        if (t[key]) {
            el.textContent = t[key];
        }

    });


    /* ================= ترجمة الـ Placeholder ================= */

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {

        const key = el.dataset.keyPlaceholder;

        if (t[key]) {
            el.placeholder = t[key];
        }

    });


    /* ================= زر اللغة ================= */

    const btn = document.querySelector(".lang-btn");

    if (btn) {
        btn.textContent = lang === "ar" ? "EN" : "AR";
    }


    /* ================= تحديث الثيم ================= */

    updateTheme();
    setLangData();


    /* ================= صفحة التصاميم ================= */

    if (typeof applyDesignLang === "function") {
        applyDesignLang();
    }


    /* ================= معرض التصاميم ================= */

    if (typeof applyGalleryLang === "function") {
        applyGalleryLang();
    }


    /* ================= صفحة الطلبات ================= */
    if (typeof applyOrderLang === "function") {
    applyOrderLang();
}

   /* ================= صفحة عنا ================= */
 if (typeof applyAboutLang === "function") {
    applyAboutLang();
}

}

/* ================= BACKGROUND + LOGO ================= */

function updateTheme() {

    const lang = localStorage.getItem("lang");
    const theme = localStorage.getItem("theme");

    /* الخلفية */

    const bg = document.querySelector(".bg-layer");

    if (bg) {

        bg.style.backgroundImage =
            theme === "light"
                ? "url('images/bg-light.png')"
                : "url('images/bg-dark.png')";

    }

    /* اللوجو */

    const logo = document.querySelector(".main-logo");

    if (logo) {

        logo.src =
            lang === "ar"
                ? "images/logo-ar.png"
                : "images/logo-en.png";

    }

}
/* ================= THEME ================= */

function applyTheme() {

    const theme = localStorage.getItem("theme");

    document.body.classList.remove("light", "dark");

    document.body.classList.add(theme);

    updateTheme();

}

function toggleTheme() {

    const current = localStorage.getItem("theme");

    const next = current === "light" ? "dark" : "light";

    localStorage.setItem("theme", next);

    applyTheme();

}
/* ================= TOGGLE ================= */

function toggleLang() {

    const current = localStorage.getItem("lang");

    const newLang = current === "ar"
        ? "en"
        : "ar";

    localStorage.setItem("lang", newLang);

    applyLang();

}

/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".nav");

    if (!nav) return;

    nav.classList.toggle("scrolled", window.scrollY > 50);

});

/* ================= START ================= */

window.addEventListener("DOMContentLoaded", () => {

    applyTheme();
    applyLang();

});

lucide.createIcons();

const langBtn = document.querySelector(".lang-btn");

if (langBtn) {

    langBtn.classList.add("pop");

    setTimeout(() => {

        langBtn.classList.remove("pop");

    }, 350);

}
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

});

/* ================= AI SERVICE ================= */

document.addEventListener("DOMContentLoaded", () => {

    const aiBox = document.getElementById("aiBox");
    const aiInfo = document.getElementById("aiServiceInfo");

    if (!aiBox || !aiInfo) return;

    aiBox.addEventListener("click", () => {

        aiInfo.classList.toggle("show");

    });

});

/* ================= HERO ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    const heroSub = document.querySelector(".hero-sub");

    if (!heroSub) return;

    heroSub.classList.remove("done");

    heroSub.addEventListener(
        "animationend",
        function handleTyping(event) {

            if (event.animationName === "typing") {

                heroSub.classList.add("done");

                heroSub.removeEventListener(
                    "animationend",
                    handleTyping
                );

            }

        }
    );

});