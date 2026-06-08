/**
 * main.js - Core functionality for ERTH of the Pharaohs
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ── 1. MOBILE MENU TOGGLE ──────────────────────────────── */
  const hamburger = document.getElementById("navHamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("mobileClose");

  if (hamburger && mobileMenu && closeBtn) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  /* ── 2. SCROLL REVEAL ANIMATIONS ────────────────────────── */
  const revealElements = document.querySelectorAll(".reveal");

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  /* ── 3. SEAMLESS PAGE TRANSITIONS ───────────────────────── */
  const transitionVeil = document.getElementById("pageTransition");
  // Select all internal links that navigate to .html pages
  const internalLinks = document.querySelectorAll('a[href$=".html"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetUrl = this.getAttribute("href");

      // If holding CMD/CTRL to open in new tab, ignore transition
      if (e.ctrlKey || e.metaKey) return;

      // Prevent immediate jump
      e.preventDefault();

      // Trigger the black fade overlay
      if (transitionVeil) {
        transitionVeil.classList.add("active");
      }

      // Wait for CSS transition to finish before actually changing URL
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 400); // Matches the 0.4s duration in styles.css
    });
  });
});
let lastScrollY = window.scrollY;
const nav = document.querySelector(".site-nav");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // 1. تحديد اتجاه السكرول (لتحت أو لفوق)
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // سكرول لتحت -> إخفاء الناف بار
    nav.classList.add("nav-hidden");
  } else {
    // سكرول لفوق -> إظهار الناف بار فوراً
    nav.classList.remove("nav-hidden");
  }

  // 2. تلوين الخلفية بلون داكن خفيف عند النزول بدون أي بلور (Blur) ليظل النص مقروءاً
  if (currentScrollY > 50) {
    nav.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    // يرجع شفاف تماماً لما تطلع لأول الصفحة فوق
    nav.style.background = "transparent";
  }

  // تحديث قيمة السكرول الأخيرة
  lastScrollY = currentScrollY;
});
document.addEventListener("DOMContentLoaded", () => {
  // بيمسك كل الفيديوهات اللي واخدة كلاس luxury-video
  const videos = document.querySelectorAll(".luxury-video");

  videos.forEach((video) => {
    video.addEventListener("click", () => {
      if (video.paused) {
        // (اختياري) لو عايز أول ما تشغل فيديو يقفل أي فيديو تاني شغال، شغل السطرين دول:
        // videos.forEach(v => v.pause());

        video.play();
      } else {
        video.pause();
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("tutViewer");
  const images = viewer.querySelectorAll(".artefact-img");
  let currentImageIndex = 0; // مؤشر الصورة الحالية
  let rotationInterval; // متغير لحفظ العداد

  // وظيفة لتبديل الصورة
  const showNextImage = () => {
    // 1. إزالة كلاس active من الصورة الحالية
    images[currentImageIndex].classList.remove("active");

    // 2. زيادة المؤشر للصورة التالية
    currentImageIndex++;

    // 3. لو وصلنا لآخر صورة، نرجع للصورة الأولى
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    // 4. إضافة كلاس active للصورة الجديدة
    images[currentImageIndex].classList.add("active");
  };

  // وظيفة لتصفير الصور (الرجوع للأمامية)
  const resetImages = () => {
    // إزالة كلاس active من أي صورة نشطة
    images.forEach((img) => img.classList.remove("active"));
    // إضافة كلاس active للصورة الأولى فقط
    currentImageIndex = 0;
    images[0].classList.add("active");
  };

  // 1. عند وقوف الماوس (Hover) - نبدأ العداد
  viewer.addEventListener("mouseenter", () => {
    // نشغل العداد ليقلب كل 500 مللي ثانية (نص ثانية) - تقدر تغير الرقم ده
    rotationInterval = setInterval(showNextImage, 500);
  });

  // 2. عند خروج الماوس (Mouse Leave) - نوقف العداد ونرجع للأمامية
  viewer.addEventListener("mouseleave", () => {
    // إيقاف العداد فوراً
    clearInterval(rotationInterval);
    // الرجوع للصورة الأولى
    resetImages();
  });
});
