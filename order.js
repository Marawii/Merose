
// ==================================================
// SERVICE + DETAILS
// ==================================================
document.addEventListener("DOMContentLoaded", () => {


const hint = document.getElementById("detailsHint");
const selectedServiceName =
    document.querySelector(".selected-service .selected-service-name");

const selectedServiceIcon =
    document.getElementById("selectedServiceIcon");
    const textarea =
    document.getElementById("orderText");
const cards = document.querySelectorAll(".service-card");
const serviceSection = document.querySelector(".service-section");


// ==================================================
// SERVICE DATA — AR / EN
// ==================================================

const serviceData = {

    branding: {
        ar: {
            name: "هوية بصرية",
            title: "صف لنا هوية مشروعك والألوان أو الأسلوب الذي تتخيله.",
            placeholder: "مثال: أحتاج شعار وهوية فاخرة بألوان بيج وذهبي..."
        },
        en: {
            name: "Visual Identity",
            title: "Tell us about your brand identity, colors, or style.",
            placeholder: "Example: I need a luxury logo and visual identity in beige and gold..."
        }
    },

    invitation: {
        ar: {
            name: "دعوة",
            title: "أخبرنا عن المناسبة والتاريخ والطابع الذي ترغب به.",
            placeholder: "مثال: دعوة زفاف بطابع هادئ وأنيق..."
        },
        en: {
            name: "Invitation",
            title: "Tell us about the occasion, date, and style you want.",
            placeholder: "Example: An elegant and minimal wedding invitation..."
        }
    },

    editing: {
        ar: {
            name: "مونتاج",
            title: "اشرح فكرة الفيديو والمدة التقريبية.",
            placeholder: "مثال: فيديو افتتاح لمحل مدته 30 ثانية..."
        },
        en: {
            name: "Video Editing",
            title: "Tell us about the video idea and approximate duration.",
            placeholder: "Example: A 30-second opening video for a new store..."
        }
    },

    ai: {
        ar: {
            name: "ذكاء اصطناعي",
            title: "صف المشهد أو الصورة التي تتخيلها.",
            placeholder: "مثال: مجلس عربي فاخر وقت الغروب..."
        },
        en: {
            name: "AI Design",
            title: "Describe the scene or image you have in mind.",
            placeholder: "Example: A luxurious Arabic majlis at sunset..."
        }
    },

    social: {
        ar: {
            name: "سوشال ميديا",
            title: "اذكر نوع المنشور والمنصة والجمهور المستهدف.",
            placeholder: "مثال: منشور إنستغرام لإطلاق منتج جديد..."
        },
        en: {
            name: "Social Media",
            title: "Tell us the post type, platform, and target audience.",
            placeholder: "Example: An Instagram post for launching a new product..."
        }
    },

    other: {
        ar: {
            name: "أخرى",
            title: "أخبرنا عن الخدمة أو الفكرة التي ترغب بها.",
            placeholder: "مثال: لدي فكرة مختلفة وأرغب في تنفيذها..."
        },
        en: {
            name: "Other",
            title: "Tell us about the service or idea you have in mind.",
            placeholder: "Example: I have a different idea and would like to bring it to life..."
        }
    }

};

const orderTranslations = {

    ar: {
        servicesTitle: "الخدمات",
        servicesDescription: "شاركنا فكرتك، وسنعمل على تحويلها إلى تصميم يليق بها",

        brandingName: "هوية بصرية",
brandingDesc: "شعار • ألوان • هوية متكاملة",

invitationName: "دعوة",
invitationDesc: "دعوات رقمية ومطبوعة",

editingName: "مونتاج",
editingDesc: "فيديوهات وموشن جرافيك",

aiName: "ذكاء اصطناعي",
aiDesc: "تصاميم وصور إبداعية",

socialName: "سوشال ميديا",
socialDesc: "منشورات وقوالب احترافية",

otherName: "أخرى",
otherDesc: "فكرة أو خدمة مختلفة",

        stepService: "الخدمة",
        stepDetails: "التفاصيل",
        stepFiles: "الملفات",
        stepContact: "التواصل",

        detailsTitle: "التفاصيل",
        detailsTip: "كلما وصفت فكرتك بشكل أوضح، استطعنا تنفيذها بصورة أقرب لما تتخيله.",
        orderPlaceholder: "اكتب تفاصيل فكرتك هنا...",

        filesTitle: "الملفات",
        filesDescription: "يمكنك إرفاق الشعار، الصور، أو أي ملفات تساعدنا على فهم فكرتك بشكل أفضل.",
        uploadTitle: "اسحب الملفات هنا",
        uploadClick: "أو اضغط لاختيار الملفات",

        contactTitle: "التواصل",
        contactDescription: "سنستخدم هذه المعلومات فقط للتواصل معك بخصوص فكرتك.",
        nameLabel: "الاسم",
        namePlaceholder: "اكتب اسمك",
        phoneLabel: "رقم الواتساب",
        phonePlaceholder: "+968",

        detailsRequired: "يرجى كتابة تفاصيل فكرتك.",
detailsTooShort: "يرجى كتابة وصف أكثر من 7 أحرف وأكثر من كلمة.",
nameRequired: "يرجى كتابة الاسم.",
phoneRequired: "يرجى كتابة رقم الواتساب.",
phoneLength: "يرجى إدخال رقم واتساب مكوّن من 8 أرقام.",
phoneInvalid: "يرجى كتابة رقم صحيح.",

        back: "السابق",
        next: "التالي",
        sendOrder: "إرسال إلى برقة الورد",

        backHome: "العودة للرئيسية",
        contactWhatsApp: "التواصل عبر واتساب",

        successMessage: "تم استلام طلبك بنجاح، وسنعمل على تحويل فكرتك إلى تصميم يليق بها."
    },

    en: {
        servicesTitle: "Services",
        servicesDescription: "Share your idea with us, and we will turn it into a design that brings it to life.",

        brandingName: "Visual Identity",
brandingDesc: "Logo • Colors • Complete Brand Identity",

invitationName: "Invitation",
invitationDesc: "Digital and Printed Invitations",

editingName: "Video Editing",
editingDesc: "Videos and Motion Graphics",

aiName: "AI Design",
aiDesc: "Creative Designs and Images",

socialName: "Social Media",
socialDesc: "Professional Posts and Templates",

otherName: "Other",
otherDesc: "A Different Idea or Service",

        stepService: "Service",
        stepDetails: "Details",
        stepFiles: "Files",
        stepContact: "Contact",

        detailsTitle: "Details",
        detailsTip: "The clearer your idea is, the closer we can bring it to what you imagine.",
        orderPlaceholder: "Write your idea details here...",

        filesTitle: "Files",
        filesDescription: "You can attach your logo, images, or any files that help us understand your idea better.",
        uploadTitle: "Drag your files here",
        uploadClick: "Or click to choose files",

        contactTitle: "Contact",
        contactDescription: "We will only use this information to contact you about your idea.",
        nameLabel: "Name",
        namePlaceholder: "Enter your name",
        phoneLabel: "WhatsApp number",
        phonePlaceholder: "+968",

        detailsRequired: "Please enter your idea details.",
detailsTooShort: "Please write a description longer than 7 characters and more than one word.",
nameRequired: "Please enter your name.",
phoneRequired: "Please enter your WhatsApp number.",
phoneLength: "Please enter an 8-digit WhatsApp number.",
phoneInvalid: "Please enter a valid number.",

        back: "Back",
        next: "Next",
        sendOrder: "Send to Barqat Al Ward",

        backHome: "Back to Home",
        contactWhatsApp: "Contact via WhatsApp",

        successMessage: "Your order has been received successfully. We will work on turning your idea into a design that brings it to life."
    }

};


// ==================================================
// WIZARD
// ==================================================

const steps = document.querySelectorAll(".wizard-step");

console.log("عدد الخطوات:", steps.length);

let currentStep = 0;

const nextUpload = document.getElementById("toUpload");
const orderText = document.getElementById("orderText");
const detailsError = document.getElementById("detailsError");
const nextContact = document.getElementById("toContact");

const backDetails = document.getElementById("backDetails");
const backService = document.getElementById("backService");
const backUpload = document.getElementById("backUpload");


function showStep(index) {

    steps.forEach(step => {
        step.classList.remove("active");
    });

    if (steps[index]) {
        steps[index].classList.add("active");
    }

    currentStep = index;


    // تحديث شريط الخطوات

    const progress =
        document.querySelectorAll(".order-steps .step");

    progress.forEach(step => {
        step.classList.remove("active");
    });


    // الخطوة الأولى في الشريط هي الخدمة
    // لذلك نضيف 1

    if (progress[index + 1]) {
        progress[index + 1].classList.add("active");
    }

}


// ==================================================
// SERVICE CARDS
// ==================================================

cards.forEach(card => {

    card.addEventListener("click", () => {


        // إزالة الحالة القديمة

        cards.forEach(c => {

            c.classList.remove("active");
            c.classList.remove("fade-out");

        });


        // تفعيل البطاقة

        card.classList.add("active");


    // اسم الخدمة

const serviceId = card.dataset.service;

const lang =
    localStorage.getItem("lang") || "ar";

const service =
    serviceData[serviceId][lang];

selectedServiceName.textContent =
    lang === "ar"
        ? `اختيارك: ${service.name}`
        : `Your choice: ${service.name}`;


        // استخدام نفس أيقونة الخدمة

        selectedServiceIcon.className =
            card.querySelector("i").className;


       // تحديث النص

hint.textContent =
    service.title;


// تحديث placeholder

textarea.placeholder =
    service.placeholder;


        // إخفاء باقي الخدمات

        cards.forEach(c => {

            if (c !== card) {
                c.classList.add("fade-out");
            }

        });


        // إخفاء قسم الخدمات

        serviceSection.classList.add("hide");


        // الانتقال للتفاصيل

        setTimeout(() => {

            serviceSection.style.display = "none";

            requestAnimationFrame(() => {
                showStep(0);
            });

        }, 700);

    });

});


// ==================================================
// NEXT BUTTONS
// ==================================================

nextUpload.addEventListener("click", () => {

    const description = orderText.value.trim();
    const words = description.split(/\s+/).filter(word => word.length > 0);

    if (description === "") {

 detailsError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].detailsRequired;

        detailsError.classList.add("show");

        orderText.focus();
        orderText.style.borderColor = "#f31515";

        return;
    }

    if (description.length <= 7 || words.length < 2) {
detailsError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].detailsTooShort;

        detailsError.classList.add("show");

        orderText.focus();
        orderText.style.borderColor = "#f31515";

        return;
    }

    detailsError.textContent = "";
    detailsError.classList.remove("show");

    orderText.style.borderColor = "";

    showStep(1);

});
orderText.addEventListener("input", () => {

    if (orderText.value.trim() !== "") {

        detailsError.textContent = "";
        detailsError.classList.remove("show");

        orderText.style.borderColor = "";
    }

});

nextContact.addEventListener("click", () => {

    showStep(2);

});


// ==================================================
// BACK BUTTONS
// ==================================================

backDetails.addEventListener("click", () => {

    showStep(0);

});


backUpload.addEventListener("click", () => {

    showStep(1);

});


// ==================================================
// BACK TO SERVICES
// ==================================================

backService.addEventListener("click", () => {

    serviceSection.style.display = "block";

    requestAnimationFrame(() => {
        serviceSection.classList.remove("hide");
    });

    steps.forEach(step => {
        step.classList.remove("active");
    });

    cards.forEach(card => {
        card.classList.remove("active");
        card.classList.remove("fade-out");
    });

    const progress =
        document.querySelectorAll(".order-steps .step");

    progress.forEach(step => {
        step.classList.remove("active");
    });

    progress[0].classList.add("active");

    currentStep = 0;
});


// ==================================================
// FILE UPLOAD
// ==================================================

const uploadInput =
    document.getElementById("uploadInput");

const uploadBox =
    document.querySelector(".upload-box");

const uploadTitle =
    document.getElementById("uploadTitle");

const fileList =
    document.getElementById("fileList");


uploadInput.addEventListener("change", () => {


    fileList.innerHTML = "";


    Array.from(uploadInput.files).forEach(file => {


        const item =
            document.createElement("div");


        const isImage =
            file.type.startsWith("image/");


        item.className = "file-item";


        item.innerHTML = `

            ${
                isImage
                    ? '<img class="preview-image">'
                    : '📄'
            }

            <span>
                ${file.name}
            </span>

            <small>
                ${(file.size / 1024).toFixed(1)} KB
            </small>

            <button
                type="button"
                class="remove-file">
                ✕
            </button>

        `;


        fileList.appendChild(item);


        // معاينة الصور

        if (isImage) {

            const reader =
                new FileReader();


            reader.onload = e => {

                item.querySelector(
                    ".preview-image"
                ).src = e.target.result;

            };


            reader.readAsDataURL(file);

        }


        // حذف الملف

        const removeBtn =
            item.querySelector(".remove-file");


        removeBtn.addEventListener("click", () => {

            item.remove();

        });

    });

});


// ==================================================
// DRAG & DROP
// ==================================================

uploadBox.addEventListener("dragover", e => {

    e.preventDefault();

    uploadBox.classList.add("dragging");

    uploadTitle.textContent =
        "أفلت الملف هنا...";

});


uploadBox.addEventListener("dragleave", () => {

    uploadBox.classList.remove("dragging");

    uploadTitle.textContent =
        "اسحب الملفات هنا";

});


uploadBox.addEventListener("drop", e => {

    e.preventDefault();

    uploadBox.classList.remove("dragging");

    uploadTitle.textContent =
        "اسحب الملفات هنا";


    uploadInput.files =
        e.dataTransfer.files;


    uploadInput.dispatchEvent(
        new Event("change")
    );

});


// ==================================================
// CONTACT
// ==================================================

const sendBtn =
    document.querySelector(".send-btn");

const popup =
    document.getElementById("successPopup");

const customerName =
    document.getElementById("customerName");

const customerPhone =
    document.getElementById("customerPhone");

const nameError =
    document.getElementById("nameError");

const phoneError =
    document.getElementById("phoneError");


// ==================================================
// SEND
// ==================================================

sendBtn.addEventListener("click", e => {

    e.preventDefault();


    let valid = true;


    nameError.textContent = "";
    phoneError.textContent = "";

    nameError.classList.remove("show");
    phoneError.classList.remove("show");


    // الاسم

    if (customerName.value.trim() === "") {

       phoneError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].phoneRequired;

        nameError.classList.add("show");

        valid = false;

    }
// رقم الواتساب

const phone = customerPhone.value.trim();

if (phone === "") {

   phoneError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].phoneRequired;

    phoneError.classList.add("show");

    valid = false;

} else if (!/^\d{8}$/.test(phone)) {

    phoneError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].phoneLength;

    phoneError.classList.add("show");

    valid = false;

} else if (!/^[79]\d{7}$/.test(phone)) {

phoneError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].phoneInvalid;

    phoneError.classList.add("show");

    valid = false;

}
else if (/^(\d)\1{7}$/.test(phone)) {

    phoneError.textContent =
    orderTranslations[localStorage.getItem("lang") || "ar"].phoneInvalid;

    phoneError.classList.add("show");

    valid = false;

}

    if (!valid) {
        return;
    }


    // إظهار رسالة النجاح

    popup.classList.add("show");

});


// ==================================================
// REMOVE ERRORS WHILE TYPING
// ==================================================

customerName.addEventListener("input", () => {

    nameError.textContent = "";

    nameError.classList.remove("show");

});


customerPhone.addEventListener("input", () => {

    // السماح بالأرقام فقط
    customerPhone.value =
        customerPhone.value.replace(/\D/g, "");

    // منع أكثر من 8 أرقام
    if (customerPhone.value.length > 8) {
        customerPhone.value =
            customerPhone.value.slice(0, 8);
    }

    // إزالة رسالة الخطأ أثناء الكتابة
    phoneError.textContent = "";
    phoneError.classList.remove("show");

    
});


// تحديث الخدمة المختارة عند تغيير اللغة
window.updateSelectedServiceLanguage = function () {

    const selectedCard =
        document.querySelector(".service-card.active");

    if (!selectedCard) return;

    const serviceId =
        selectedCard.dataset.service;

    const lang =
        localStorage.getItem("lang") || "ar";

    const service =
        serviceData[serviceId]?.[lang];

    if (!service) return;

    selectedServiceName.textContent =
        lang === "ar"
            ? `اختيارك: ${service.name}`
            : `Your choice: ${service.name}`;

    hint.textContent =
        service.title;

    textarea.placeholder =
        service.placeholder;
};

window.applyOrderLang = function () {

    const lang = localStorage.getItem("lang") || "ar";
    const t = orderTranslations[lang];

    if (!t) return;

    document.querySelectorAll("[data-key]").forEach(el => {

        const key = el.dataset.key;

        if (t[key]) {
            el.textContent = t[key];
        }

    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {

        const key = el.dataset.keyPlaceholder;

        if (t[key]) {
            el.placeholder = t[key];
        }

    });

    updateSelectedServiceLanguage();
};

});

