//==================================================
// BARQAT ALWARD GALLERY
//==================================================


Object.assign(trans.ar, {

    backDesign: "العودة للتصاميم",

    galleryTitle: " معرض ميروز  ",

    galleryDesc: "لحظات صُممت لتبقى",

    all: "الكل",

    invitations: "دعوات",

    themes: "ثيمات",

    commercial: "تجاري",

    digital: "رقمي",

    photos: "صور",

    videos: "فيديو",

    identity: "هوية",

    social: "سوشال",

    ai: "AI",

    emptyTitle: "لا توجد أعمال في هذا القسم حالياً",

    emptyText: "نعمل حالياً على إضافة أعمال جديدة لهذا القسم."

});



Object.assign(trans.en, {

    backDesign: "Back to Designs",

    galleryTitle: " MEROSE Gallery ",

    galleryDesc: "Moments Designed to Last",

    all: "All",

    invitations: "Invitations",

    themes: "Themes",

    commercial: "Commercial",

    digital: "Digital",

    photos: "Photos",

    videos: "Videos",

    identity: "Identity",

    social: "Social",

    ai: "AI",

    emptyTitle: "No Works Available",

    emptyText: "New works will be added soon."

});



//==================================================
// APPLY LANGUAGE
//==================================================

function applyGalleryLang() {

    const lang = localStorage.getItem("lang") || "ar";

    const t = trans[lang];

    document.querySelectorAll("[data-key]").forEach(el => {

        const key = el.dataset.key;

        if (t[key]) {

            el.textContent = t[key];

        }

    });

}



//==================================================
// URL TYPE
//==================================================

const params = new URLSearchParams(window.location.search);

const galleryType = params.get("type") || "photos";



//==================================================
// ELEMENTS
//==================================================

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryFilter =
    document.getElementById("galleryFilter");

const gallerySectionInfo =
    document.getElementById("gallerySectionInfo");

const gallerySectionDescription =
    document.getElementById("gallerySectionDescription");

const emptyGallery =
    document.getElementById("emptyGallery");



//==================================================
// GALLERY FILTERS
//==================================================

function createGalleryFilters() {

    if (!galleryFilter) return;

    galleryFilter.innerHTML = "";

    let filters = [];

    if (galleryType === "ai") {

        filters = [

            {
                key: "all",
                data: "all",
                ar: "الكل",
                en: "All"
            },

            {
                key: "photos",
                data: "photos",
                ar: "صور",
                en: "Photos"
            },

            {
                key: "videos",
                data: "videos",
                ar: "فيديو",
                en: "Videos"
            }

        ];

    } else {

        filters = [

            {
                key: "all",
                data: "all",
                ar: "الكل",
                en: "All"
            },

            {
                key: "invitations",
                data: "invitations",
                ar: "دعوات",
                en: "Invitations"
            },

            {
                key: "themes",
                data: "themes",
                ar: "ثيمات",
                en: "Themes"
            },

            {
                key: "commercial",
                data: "commercial",
                ar: "تجاري",
                en: "Commercial"
            },

            {
                key: "digital",
                data: "digital",
                ar: "رقمي",
                en: "Digital"
            }

        ];

    }

    const lang =
        localStorage.getItem("lang") || "ar";

    filters.forEach((filter, index) => {

        const button =
            document.createElement("button");

        button.className = "filter-btn";

        if (index === 0) {

            button.classList.add("active");

        }

        button.dataset.filter =
            filter.data;

        button.dataset.key =
            filter.key;

        button.textContent =
            filter[lang];

        galleryFilter.appendChild(button);

    });

}



//==================================================
// SECTION DESCRIPTIONS
//==================================================

const galleryDescriptions = {

    invitations: {

        ar: {
            title: "دعوات",
            description:
                "تصاميم دعوات أنيقة ومميزة لمختلف المناسبات، بتفاصيل مصممة بعناية لتناسب كل لحظة."
        },

        en: {
            title: "Invitations",
            description:
                "Elegant and distinctive invitation designs for different occasions, carefully crafted to suit every special moment."
        }

    },

    themes: {

        ar: {
            title: "ثيمات",
            description:
                "ثيمات وتوزيعات متكاملة ومتناسقة تضيف لمسة خاصة ومميزة لكل مناسبة."
        },

        en: {
            title: "Themes",
            description:
                "Complete and coordinated themes and party favors that add a special and distinctive touch to every occasion."
        }

    },

    commercial: {

        ar: {
            title: "تجاري",
            description:
                "تصاميم تجارية عصرية تساعد على إبراز العلامة التجارية وتقديمها بصورة احترافية."
        },

        en: {
            title: "Commercial",
            description:
                "Modern commercial designs created to highlight brands and present them in a professional way."
        }

    },

    digital: {

        ar: {
            title: "رقمي",
            description:
                "تصاميم رقمية مبتكرة تناسب المحتوى والمنصات الرقمية بأسلوب عصري ومميز."
        },

        en: {
            title: "Digital",
            description:
                "Creative digital designs made for content and digital platforms with a modern and distinctive style."
        }

    },

    special: {

        ar: {
            title: "خاصة",
            description:
                "تصاميم خاصة تُنفذ بأفكار وتفاصيل مميزة لتناسب الطلبات والمناسبات المختلفة."
        },

        en: {
            title: "Special",
            description:
                "Special designs created with unique ideas and details to suit different requests and occasions."
        }

    },

    photos: {

        ar: {
            title: "صور الذكاء الاصطناعي",
            description:
                "أعمال بصرية مبتكرة تم تصميمها باستخدام تقنيات الذكاء الاصطناعي بأسلوب إبداعي."
        },

        en: {
            title: "AI Images",
            description:
                "Creative visual works designed using artificial intelligence with an artistic approach."
        }

    },

    videos: {

        ar: {
            title: "فيديوهات الذكاء الاصطناعي",
            description:
                "فيديوهات إبداعية مصممة باستخدام تقنيات الذكاء الاصطناعي لإضافة تجربة بصرية مختلفة."
        },

        en: {
            title: "AI Videos",
            description:
                "Creative videos designed using artificial intelligence to create a distinctive visual experience."
        }

    }

};



//==================================================
// UPDATE SECTION INFO
//==================================================

function updateSectionInfo(sectionKey) {

    if (!gallerySectionInfo) return;

    const lang =
        localStorage.getItem("lang") || "ar";

    const info =
        galleryDescriptions[sectionKey];

    if (!info) {

        gallerySectionInfo.style.display =
            "none";

        return;

    }

    gallerySectionDescription.textContent =
        info[lang].description;

    gallerySectionInfo.style.display =
        "block";

}



//==================================================
// DATE + SORTING
//==================================================

const englishMonths = {

    January: 0,

    February: 1,

    March: 2,

    April: 3,

    May: 4,

    June: 5,

    July: 6,

    August: 7,

    September: 8,

    October: 9,

    November: 10,

    December: 11

};


const arabicMonths = [

    "يناير",

    "فبراير",

    "مارس",

    "أبريل",

    "مايو",

    "يونيو",

    "يوليو",

    "أغسطس",

    "سبتمبر",

    "أكتوبر",

    "نوفمبر",

    "ديسمبر"

];


function getTodayDateObject() {

    const today = new Date();

    const day = today.getDate();

    const month = today.getMonth();

    const year = today.getFullYear();

    const monthName =
        Object.keys(englishMonths)[month];

    return {

        ar:
            `${day} ${arabicMonths[month]} ${year}`,

        en:
            `${day} ${monthName} ${year}`

    };

}


function ensureItemDate(item) {

    if (
        item.date &&
        item.date.ar &&
        item.date.en
    ) {

        return;

    }

    item.date =
        getTodayDateObject();

}


function getItemTime(item) {

    ensureItemDate(item);

    const match =
        item.date.en.match(
            /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
        );

    if (!match) return 0;

    const day =
        Number(match[1]);

    const month =
        englishMonths[match[2]];

    const year =
        Number(match[3]);

    if (month === undefined) return 0;

    return new Date(
        year,
        month,
        day
    ).getTime();

}


function sortGalleryItems(items) {

    return [...items].sort(
        (a, b) =>
            getItemTime(b) -
            getItemTime(a)
    );

}



//==================================================
// GET ALL ITEMS
//==================================================

function getItems() {

    const section =
        galleryData[galleryType];

    if (!section) return [];

    if (galleryType === "ai") {

        return sortGalleryItems([

            ...section.photos,

            ...section.videos

        ]);

    }

    return sortGalleryItems([

        ...section.invitations,

        ...section.themes,

        ...section.commercial,

        ...section.digital

    ]);

}



//==================================================
// IMPORTANT
// ALL ITEMS = SOURCE
// CURRENT ITEMS = WHAT IS CURRENTLY SHOWN
//==================================================

const allItems = getItems();

let currentItems = [...allItems];



//==================================================
// CREATE FILTERS
//==================================================

createGalleryFilters();



//==================================================
// UPDATE HERO COUNT
//==================================================

function updateGalleryCount() {

    const hero =
        document.getElementById("galleryCount");

    if (!hero) return;

    const lang =
        localStorage.getItem("lang") || "ar";

    const target =
        currentItems.length;

    if (target === 0) {

        hero.textContent =
            lang === "ar"
                ? "0 عمل"
                : "0 Works";

        return;

    }

    let count = 0;

    const speed =
        Math.max(1, Math.ceil(target / 60));

    clearInterval(window.galleryCountTimer);

    window.galleryCountTimer =
        setInterval(() => {

            count += speed;

            if (count >= target) {

                count = target;

                clearInterval(
                    window.galleryCountTimer
                );

            }

            hero.textContent =
                lang === "ar"
                    ? `${count} عمل`
                    : `${count} Works`;

        }, 20);

}



//==================================================
// RENDER GALLERY
//==================================================

function renderGallery(items = currentItems) {

    galleryGrid.innerHTML = "";

    if (items.length === 0) {

        galleryGrid.style.display =
            "none";

        emptyGallery.style.display =
            "block";

        updateGalleryCount();

        return;

    }

    galleryGrid.style.display =
        "grid";

    emptyGallery.style.display =
        "none";

    const lang =
        localStorage.getItem("lang") || "ar";


    items.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className =
            "gallery-item";

        /*
        IMPORTANT:
        نخزن الصورة نفسها داخل البطاقة
        بدل الاعتماد على رقم من قائمة أخرى.
        */

        card.dataset.index =
            index;

        card.dataset.image =
            item.image;

        card.dataset.category =
            item.category.key;


        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title[lang]}"
                loading="lazy"
            >

            <div class="preview-cover">

                <img
                    src="${
                        lang === "ar"
                            ? "images/logo-ar.png"
                            : "images/logo-en.png"
                    }"
                    class="preview-logo"
                >

            </div>

            <div class="overlay">

                <div>

                    <h3>
                        ${item.title[lang]}
                    </h3>

                    <p>
                        ${item.category[lang]}
                    </p>

                </div>

                <div class="overlay-arrow">
                    ↗
                </div>

            </div>

        `;

        galleryGrid.appendChild(card);

        card.classList.add("show");

    });


    updateGalleryCount();

}



//==================================================
// FIRST LOAD
//==================================================

renderGallery();



//==================================================
// LUCIDE
//==================================================

if (window.lucide) {

    lucide.createIcons();

}



//==================================================
// FILTERS
//==================================================

galleryFilter.addEventListener(
    "click",
    (e) => {

        const button =
            e.target.closest(".filter-btn");

        if (!button) return;

        const buttons =
            galleryFilter.querySelectorAll(
                ".filter-btn"
            );

        buttons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        //==========================================
        // ALL
        //==========================================

        if (filter === "all") {

            /*
            نرجع القائمة الأصلية كاملة
            */

            currentItems =
                sortGalleryItems(allItems);


            /*
            الكل = بدون وصف
            */

            gallerySectionInfo.style.display =
                "none";


            animateGallery(currentItems);

            return;

        }


        //==========================================
        // FILTERED SECTION
        //==========================================

        updateSectionInfo(filter);


        /*
        نفلتر من allItems وليس currentItems
        */

        const filtered =
            allItems.filter(
                item =>
                    item.category.key === filter
            );


        /*
        هذه أهم نقطة:
        currentItems تصبح هي الصور المعروضة
        */

        currentItems =
            sortGalleryItems(filtered);


        animateGallery(currentItems);

    }
);


