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

const latestCards = document.querySelectorAll(".latest-card");

latestCards.forEach((card) => {

    designObserver.observe(card);

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

