
/*==================================================
                    ABOUT PAGE JS
==================================================*/


/*==================================================
                    TRANSLATIONS
==================================================*/

const aboutTranslations = {

    ar: {

        heroSub:
            "برقة الورد نصنع لحظات خالدة",

        heroTitle:
            "كل فكرة تبدأ بخيال، وكل خيال يستحق أن يتحول إلى تصميم يروي قصته بأجمل صورة.",

        storyLabel:
            "قصتنا",

        storyTitle:
            "بدأت برقة الورد بفكرة بسيطة...",

        storyText:
            "بدأت برقة الورد من شغف حقيقي بالتفاصيل، وإيمان بأن كل فكرة تستحق أن تُقدَّم بأسلوب يليق بها. بالنسبة لنا، التصميم ليس مجرد ألوان أو عناصر جميلة، بل لغة تعبّر عن الهوية، وتحكي قصة، وتترك أثرًا يدوم. نؤمن أن لكل مشروع شخصيته الخاصة، لذلك نتعامل مع كل عمل بعناية واهتمام، لنحوّل الأفكار إلى تصاميم متقنة تجمع بين الجمال والوضوح والاحترافية. لأننا نؤمن أن أجمل الأعمال تبدأ بفكرة... وتنمو مع الإبداع، حتى تزهر في أجمل صورة.",

        valuesTitle:
            "قيمنا",

        valuesText:
            "قيم بسيطة... لكنها أساس كل تصميم نقدمه.",

        valueTitles: [
            "الإبداع",
            "الاهتمام بالتفاصيل",
            "الجودة",
            "الالتزام"
        ],

        valueTexts: [
            "نبحث دائمًا عن أفكار جديدة، لأننا نؤمن أن لكل مشروع شخصية تستحق أن تظهر بطريقة مختلفة ومميزة.",
            "نهتم بأدق التفاصيل، لأننا نؤمن أن الجمال الحقيقي يكمن في الأشياء الصغيرة التي تُحدث الفرق.",
            "نحرص على أن يخرج كل تصميم بأفضل صورة ممكنة، ليعكس مستوى يليق بعملائنا وبهوية برقة الورد.",
            "نلتزم بالوضوح والدقة واحترام الوقت، لأن ثقة العميل بالنسبة لنا هي أساس كل تعاون ناجح."
        ],

        ctaTitle:
            " ربما تبدأ أجمل التصاميم بفكرة صغيرة.",

        ctaText:
            "إذا كنت تبحث عن تصميم يحمل هويتك ويليق بتفاصيلك، اكتشف أعمالنا في معرضنا.",

        ctaButton:
            "المعرض"

    },


    en: {

        heroSub:
            "With elegance, we create unforgettable moments",

        heroTitle:
            "Every idea begins with imagination, and every imagination deserves to become a design that tells its story beautifully.",

        storyLabel:
            "Our Story",

        storyTitle:
            "With elegance, began with a simple idea...",

        storyText:
            "With elegance, began with a genuine passion for details and a belief that every idea deserves to be presented in a way that truly reflects it. To us, design is not simply about colors or beautiful elements. It is a language that expresses identity, tells a story, and leaves a lasting impression. We believe every project has its own personality, which is why we approach every piece with care and attention, transforming ideas into refined designs that bring together beauty, clarity, and professionalism. Because we believe the most beautiful work begins with an idea... and grows through creativity until it blooms into its best form.",

        valuesTitle:
            "Our Values",

        valuesText:
            "Simple values... yet they are the foundation of every design we create.",

        valueTitles: [
            "Creativity",
            "Attention to Detail",
            "Quality",
            "Commitment"
        ],

        valueTexts: [
            "We are always looking for new ideas because we believe every project has its own personality and deserves to stand out in a unique way.",
            "We care about the smallest details because true beauty often lies in the little things that make a difference.",
            "We strive to deliver every design in the best possible form, reflecting a level that represents our clients and the identity of Barqat Alward.",
            "We value clarity, precision, and respect for time because our clients' trust is the foundation of every successful collaboration."
        ],

        ctaTitle:
            "Perhaps The most beautiful designs begin with a small idea.",

        ctaText:
            "If you are looking for a design that carries your identity and reflects your details, discover our work in our gallery.",

        ctaButton:
            "Gallery"

    }

};


/*==================================================
                    APPLY LANGUAGE
==================================================*/

function applyAboutLang() {

    const lang =
        localStorage.getItem("lang") || "ar";

    const t =
        aboutTranslations[lang];


    /*----------------------------------------------
                    HERO
    ----------------------------------------------*/

    const heroSub =
        document.querySelector(".hero-sub");

    const heroTitle =
        document.querySelector(".about-hero h1");


    if (heroSub) {
        heroSub.textContent = t.heroSub;
    }

    if (heroTitle) {
        heroTitle.textContent = t.heroTitle;
    }


    /*----------------------------------------------
                    STORY
    ----------------------------------------------*/

    const storyLabel =
        document.querySelector(".story-label");

    const storyTitle =
        document.querySelector(".story-content h2");

    const storyText =
        document.querySelector(".story-content p");


    if (storyLabel) {
        storyLabel.textContent = t.storyLabel;
    }

    if (storyTitle) {
        storyTitle.textContent = t.storyTitle;
    }

    if (storyText) {
        storyText.textContent = t.storyText;
    }


    /*----------------------------------------------
                    VALUES
    ----------------------------------------------*/

    const valuesTitle =
        document.querySelector(".section-title");

    const valuesText =
        document.querySelector(".section-heading p");

    const valueTitles =
        document.querySelectorAll(".timeline-content h3");

    const valueTexts =
        document.querySelectorAll(".timeline-content p");


    if (valuesTitle) {
        valuesTitle.textContent = t.valuesTitle;
    }

    if (valuesText) {
        valuesText.textContent = t.valuesText;
    }


    valueTitles.forEach((element, index) => {

        if (t.valueTitles[index]) {
            element.textContent =
                t.valueTitles[index];
        }

    });


    valueTexts.forEach((element, index) => {

        if (t.valueTexts[index]) {
            element.textContent =
                t.valueTexts[index];
        }

    });


    /*----------------------------------------------
                    CTA
    ----------------------------------------------*/

    const ctaTitle =
        document.querySelector(".cta-glass h2");

    const ctaText =
        document.querySelector(".cta-glass p");

    const ctaButton =
        document.querySelector(".cta-btn");


    if (ctaTitle) {

        const lines =
            t.ctaTitle.split("|");

        ctaTitle.innerHTML =
            lines.join("<br>");

    }

    if (ctaText) {
        ctaText.textContent =
            t.ctaText;
    }

    if (ctaButton) {
        ctaButton.textContent =
            t.ctaButton;
    }


    /*----------------------------------------------
                    ABOUT LOGO
    ----------------------------------------------*/

    const aboutLogo =
        document.querySelector("#aboutLogo");


    if (aboutLogo) {

        aboutLogo.src =
            lang === "ar"
                ? "images/logo-ar.png"
                : "images/logo-en.png";

        aboutLogo.alt =
            lang === "ar"
                ? "برقة الورد"
                : "Barqat Alward";

    }

}


/*==================================================
                    HERO ANIMATION
==================================================*/

function startHeroAnimation() {

    const heroSub =
        document.querySelector(".hero-sub");

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

}


/*==================================================
                    SCROLL REVEAL
==================================================*/

function startAboutReveal() {

    const revealElements =
        document.querySelectorAll(
            ".timeline-item, .about-image, .story-section, .cta-glass"
        );


    if (!("IntersectionObserver" in window)) {

        revealElements.forEach(element => {
            element.classList.add("show");
        });

        return;

    }


    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/*==================================================
                    PAGE START
==================================================*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applyAboutLang();

        startHeroAnimation();

        startAboutReveal();

    }
);
