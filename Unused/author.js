/**
 * author.js - Handles dynamic author profiles, images, and filtering their articles
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. قاعدة البيانات الشاملة لـ 12 عضو (البيانات الشخصية + المقالات + الصور)
  const database = {
    omnia: {
      name: "Omnia Ebrahim",
      role: "Lead Archaeologist",
      image: "images/Omnia.jpeg",
      bio: "Specialising in Late Period burial customs and funerary iconography. Over 12 years in the field across Luxor and Saqqara, leading ground-penetrating radar initiatives.",
      articles: [
        {
          cat: "Archaeology",
          title: "Secrets of the Sphinx",
          desc: "New ground-penetrating radar surveys have revealed concealed chambers beneath the Great Sphinx, challenging everything archaeologists believed about Giza's ancient blueprint.",
          bgClass: "sphinx-bg",
          date: "2026",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
        {
          cat: "Excavation",
          title: "The Lost Tombs of Saqqara Rediscovered",
          desc: "An in-depth analysis of recently uncovered 26th Dynasty burial shafts, revealing untouched anthropoid sarcophagi and rare protective spells.",
          bgClass: "valley-bg",
          date: "2025",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    zizo: {
      name: "AbdEL-Aziz Moustafa",
      role: "Architectural Historian",
      image: "images/zizo.jpeg",
      bio: "Expert in Old Kingdom temple complexes with a focus on structural engineering methods, mathematical alignment, and grand pharaonic mechanics of the 4th Dynasty builders.",
      articles: [
        {
          cat: "Architecture",
          title: "Architectural Marvels of Karnak",
          desc: "The Hypostyle Hall's 134 colossal columns still astonish engineers who study how ancient builders achieved such impossible precision without modern machinery.",
          bgClass: "karnak-bg",
          date: "2026",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    kepa: {
      name: "AbdEl-Rahman Mamdouh",
      role: "Hieroglyphic Linguist",
      image: "images/Kepa.jpeg",
      bio: "Dedicated to decoding Middle Egyptian funerary scripts, stelae text, and the Book of the Dead by utilizing cutting-edge computational linguistics and digital restoration.",
      articles: [
        {
          cat: "Treasures",
          title: "The Golden Mask of Tutankhamun",
          desc: "Eleven kilograms of solid gold, lapis lazuli and quartz — Howard Carter's 1922 discovery remains the most spectacular funerary artefact ever unearthed.",
          bgClass: "tut-bg",
          date: "2026",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
        {
          cat: "Language",
          title: "The Rosetta Stone Decoded",
          desc: "A single slab of granodiorite inscribed in three scripts unlocked a civilisation's entire written heritage, giving modern scholars access to 3,000 years of pharaonic records.",
          bgClass: "rosetta-bg",
          date: "2026",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    ali: {
      name: "Mohamed Ali",
      role: "Digital Media Director",
      image: "images/M.Ali.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Tombs",
          title: "Valley of the Kings",
          desc: "Carved into Theban limestone, this necropolis holds sixty-three royal tombs spanning five centuries, each a masterpiece of devotion to the afterlife.",
          bgClass: "valley-bg",
          date: "2026",
          driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    walid: {
      name: "Mohamed Walid",
      role: "Digital Media Director",
      image: "images/M.Walid.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Monuments",
          title: "Abu Simbel — Monument to Eternity",
          desc: "Ramesses II ordered twin temples hewn directly from a sandstone cliff; twice a year, sunlight penetrates 55 metres inside to illuminate the pharaoh's likeness alone.",
          bgClass: "abu-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    hema: {
      name: "Ahmed Ebrahim",
      role: "Digital Media Director",
      image: "images/Hema.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Tombs",
          title: "Valley of the Kings",
          desc: "Carved into Theban limestone, this necropolis holds sixty-three royal tombs spanning five centuries, each a masterpiece of devotion to the afterlife.",
          bgClass: "valley-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    ziad: {
      name: "Ziad Sayed",
      role: "Digital Media Director",
      image: "images/Ziad.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Monuments",
          title: "Abu Simbel — Monument to Eternity",
          desc: "Ramesses II ordered twin temples hewn directly from a sandstone cliff; twice a year, sunlight penetrates 55 metres inside to illuminate the pharaoh's likeness alone.",
          bgClass: "abu-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    mayar: {
      name: "Mayar Mohamed",
      role: "Digital Media Director",
      image: "images/Mayar.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Tombs",
          title: "Valley of the Kings",
          desc: "Carved into Theban limestone, this necropolis holds sixty-three royal tombs spanning five centuries, each a masterpiece of devotion to the afterlife.",
          bgClass: "valley-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    dareen: {
      name: "Dareen Mohamed",
      role: "Digital Media Director",
      image: "images/Dareen.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Monuments",
          title: "Abu Simbel — Monument to Eternity",
          desc: "Ramesses II ordered twin temples hewn directly from a sandstone cliff; twice a year, sunlight penetrates 55 metres inside to illuminate the pharaoh's likeness alone.",
          bgClass: "abu-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    aya: {
      name: "Aya Essam",
      role: "Digital Media Director",
      image: "images/Aya.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Tombs",
          title: "Valley of the Kings",
          desc: "Carved into Theban limestone, this necropolis holds sixty-three royal tombs spanning five centuries, each a masterpiece of devotion to the afterlife.",
          bgClass: "valley-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    ahmed: {
      name: "Ahmed Mohamed",
      role: "Digital Media Director",
      image: "images/A.Tawfik.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Monuments",
          title: "Abu Simbel — Monument to Eternity",
          desc: "Ramesses II ordered twin temples hewn directly from a sandstone cliff; twice a year, sunlight penetrates 55 metres inside to illuminate the pharaoh's likeness alone.",
          bgClass: "abu-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    amira: {
      name: "Amira Fouad",
      role: "Digital Media Director",
      image: "images/Amira.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Tombs",
          title: "Valley of the Kings",
          desc: "Carved into Theban limestone, this necropolis holds sixty-three royal tombs spanning five centuries, each a masterpiece of devotion to the afterlife.",
          bgClass: "valley-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
    moustafa: {
      name: "Moustafa Saad",
      role: "Digital Media Director",
      image: "images/Moustafa.jpeg",
      bio: "Responsible for the visual storytelling and digital architecture of this project, merging ancient heritage with contemporary multi-page luxury user experiences.",
      articles: [
        {
          cat: "Monuments",
          title: "Abu Simbel — Monument to Eternity",
          desc: "Ramesses II ordered twin temples hewn directly from a sandstone cliff; twice a year, sunlight penetrates 55 metres inside to illuminate the pharaoh's likeness alone.",
          bgClass: "abu-bg",
          date: "2026",
            driveLink: "https://drive.google.com/file/d/157u4exS-X8EULAgfTb29H4Q-44gO1ugY/view?usp=drive_link"
        },
      ],
    },
  };

  // 2. قراءة الـ ID المبعوث في رابط الصفحة (URL) وتحويله لـ Lowercase منعاً للأخطاء
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get("id");
  const authorId = rawId ? rawId.toLowerCase() : "omnia";

  // 3. استدعاء بيانات الكاتب المستهدف أو استخدام "omnia" كـ Default fallback
  const author = database[authorId] || database.omnia;

  // 4. حقن النص والبيانات الأساسية في عناصر الـ HTML
  document.getElementById("authorName").innerText = author.name;
  document.getElementById("authorRole").innerText = author.role;
  document.getElementById("authorBio").innerText = author.bio;
  document.title = `ERTH of the Pharaohs — ${author.name}`;

  // 5. تحديث الصورة الشخصية للبروفايل بذكاء من الـ JS
  const profileImg = document.getElementById("profileImg");
  if (author.image) {
    profileImg.src = author.image;
    profileImg.alt = author.name;
  } else {
    profileImg.src = "images/default-avatar.jpg"; // صورة احتياطية لو المسار ممسوح
    profileImg.alt = "Ancient Egypt Researcher";
  }

  // 6. بناء كروت مقالات الكاتب ديناميكياً لتطابق الـ index.html
  const grid = document.getElementById("authorArticlesGrid");
  grid.innerHTML = ""; // تنظيف اللودر

  if (author.articles && author.articles.length > 0) {
    author.articles.forEach((article) => {
      const card = document.createElement("article");
      card.className = "disc-card reveal visible";

      card.innerHTML = `
        <div class="disc-card-img">
          <div class="disc-card-img-inner ${article.bgClass}"></div>
          <div class="disc-card-overlay"></div>
        </div>
        <div class="disc-card-body">
          <span class="disc-cat">${article.cat}</span>
          <h3 class="disc-title">${article.title}</h3>
          <p class="disc-desc">${article.desc}</p>
          <div class="disc-meta">
            <span class="disc-author">${author.name}</span>
            <span class="disc-divider">·</span>
            <span class="disc-date">${article.date}</span>
          </div>
          <a href="${article.driveLink}" class="disc-link" target="_blank">Read Discovery <span>→</span></a>
        </div>
      `;
      grid.appendChild(card);
    });
  } else {
    grid.innerHTML = `<p class="dim-text" style="grid-column: 1/-1; text-align: center;">No articles published yet by this scholar.</p>`;
  }
});
