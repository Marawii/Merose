const designTrans = {

 ar: {

  designTitle: "التصاميم",

  designSub: "كل تصميم يبدأ بفكرة وينتهي بذكرى لا تُنسى.",

  photos: "معرض الصور",
  photosDesc: "تصاميم الدعوات والمناسبات والمنشورات",

  videos: "معرض الفيديو",
  videosDesc: "مونتاج وموشن جرافيك",

  ai: "الذكاء الاصطناعي",
  aiDesc: "أعمال إبداعية تم إنشاؤها باستخدام الذكاء الاصطناعي"

},

  en: {

  designTitle: "Designs",

  designSub: "Every design begins with an idea and ends as an unforgettable memory.",

  photos: "Photo Gallery",
  photosDesc: "Invitations, Event & Social Media Designs",

  videos: "Video Gallery",
  videosDesc: "Video Editing & Motion Graphics",

  ai: "Artificial Intelligence",
  aiDesc: "Creative works powered by Artificial Intelligence"

}

};

function applyDesignLang() {

    const lang = localStorage.getItem("lang") || "ar";

    const t = designTrans[lang] || designTrans.ar;

    document.querySelectorAll("[data-key]").forEach((el) => {

        const key = el.dataset.key;

        if (t[key] !== undefined) {

            el.textContent = t[key];

        }

    });

}window.addEventListener("load", applyDesignLang);

window.addEventListener("storage", applyDesignLang);



/*==========================================
            DESIGN BOXES
==========================================*/

const boxes = document.querySelectorAll(".design-boxes .box");

const designObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

boxes.forEach((box) => {

    designObserver.observe(box);

});

/*==========================================
            FEATURED WORK
==========================================*/

window.addEventListener("load", () => {

    const latestGrid = document.getElementById("latestGrid");

    if (!latestGrid) return;

    if (typeof galleryData === "undefined") {
        console.error("gallery-data.js لم يتم تحميله");
        return;
    }

    const allPhotos = [
        ...(galleryData.photos?.invitations || []),
        ...(galleryData.photos?.themes || []),
        ...(galleryData.photos?.commercial || []),
        ...(galleryData.photos?.digital || [])
    ];

    const months = {
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

    function getDate(item) {

        const date = item?.date?.en;

        if (!date) return 0;

        const parts = date.split(" ");

        if (parts.length !== 3) return 0;

        const day = Number(parts[0]);
        const month = months[parts[1]];
        const year = Number(parts[2]);

        if (
            Number.isNaN(day) ||
            month === undefined ||
            Number.isNaN(year)
        ) {
            return 0;
        }

        return new Date(year, month, day).getTime();
    }

    const latestPhotos = [...allPhotos]
        .sort((a, b) => getDate(b) - getDate(a))
        .slice(0, 5);

    const lang = localStorage.getItem("lang") || "ar";

  latestGrid.innerHTML = "";

const track = document.createElement("div");

track.className = "latest-track";

latestGrid.appendChild(track);

latestPhotos.forEach(item => {

        const title =
            item.title?.[lang] ||
            item.title?.ar ||
            item.title?.en ||
            "";

        const card = document.createElement("a");

        card.className = "latest-card";

        card.href = "gallery.html?type=photos";

        card.setAttribute("aria-label", title);

        card.innerHTML = `
            <img
                src="${item.image}"
                alt="${title}"
                loading="lazy"
                decoding="async"
            >

            <div class="latest-preview-cover">
                <img
                    src="${
                        lang === "ar"
                        ? "images/logo-ar.png"
                        : "images/logo-en.png"
                    }"
                    class="latest-preview-logo"
                    alt="Merose"
                >
            </div>
        `;

track.appendChild(card);

    });

  /*======================================
            AUTO SLIDER
======================================*/

let sliderTimer;

function moveRight() {

    const cards = track.querySelectorAll(".latest-card");

    if (cards.length <= 3) return;

    const lastCard = cards[cards.length - 1];

    const cardWidth = cards[0].offsetWidth;

    const gap =
        parseFloat(getComputedStyle(track).gap) || 20;

    const step = cardWidth + gap;

    /* نضع آخر صورة قبل الأولى */
    track.insertBefore(lastCard, track.firstChild);

    /* نثبتها خارج الشاشة لحظة واحدة */
    track.style.transition = "none";

    track.style.transform =
        `translateX(-${step}px)`;

    /* ثم نحركها بسلاسة إلى اليمين */
    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            track.style.transition =
                "transform .7s ease";

            track.style.transform =
                "translateX(0)";

        });

    });

}

sliderTimer = setInterval(moveRight, 3500);

});
/*==========================================
            GLASS SECTIONS
==========================================*/

const glassSections = document.querySelectorAll(".glass-section");

glassSections.forEach((section, index) => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 150);

            }

        });

    }, {

        threshold: 0.15

    });

    observer.observe(section);

});

/*==========================================
            LATEST IMAGE LIGHTBOX
==========================================*/

window.addEventListener("load", () => {

    const latestCards = document.querySelectorAll(".latest-card");

    if (!latestCards.length) return;

    /* إنشاء نافذة التكبير */
    const lightbox = document.createElement("div");

    lightbox.className = "latest-lightbox";

    lightbox.innerHTML = `
        <button class="latest-lightbox-close" aria-label="إغلاق">
            ×
        </button>

        <img
            class="latest-lightbox-image"
            src=""
            alt=""
        >
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(".latest-lightbox-image");

    const closeButton =
        lightbox.querySelector(".latest-lightbox-close");

    /* فتح الصورة */
    latestCards.forEach(card => {

        card.addEventListener("click", event => {

            event.preventDefault();

            const image = card.querySelector(".latest-card > img");

            if (!image) return;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "";

            lightbox.classList.add("show");

            document.body.classList.add("lightbox-open");

        });

    });

    /* إغلاق */
    function closeLightbox() {

        lightbox.classList.remove("show");

        document.body.classList.remove("lightbox-open");

    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});