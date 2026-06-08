/**
 * article.js - Dynamically loads full article content based on URL parameter
 */

document.addEventListener("DOMContentLoaded", () => {

  // 1. قاعدة بيانات المقالات الكاملة (Full Content)
  const articlesDB = {
    sphinx: {
      title: "كيف اعاد المتحف المصري الملوك للحياه",
      authorName: "Omnia Ebrahim",
      authorId: "m.ali",
      date: "June 2026",
      bgClass: "sphinx-bg",
      content: `
        <p>يعد السفر عبر الزمن ضرب من ضروب الخيال الي ان يثبت العكس و يتحول الخيال الي حقيقه كما قال جورج برناد شو ان الخيال هو حقيقه تنتظر التنفيذ ولكن داخل المتحف المصري الكبير فيما يحتويه هذا الصرح من عبق التاريخ و حضاراه لم يتم الكشف عن كامل علومها و عظمتها حيث اصبح بداخل المتحف المصري الكبير وحده مخصصه للسفر عبر الزمن باستخدام نضارات الواقع الافتراضي المدمج .</p>
        
        <p>Our team deployed state-of-the-art ground-penetrating radar (GPR) and seismic tomography to scan the bedrock beneath the Sphinx's paws. The results were nothing short of revolutionary. The scans revealed distinct anomalous voids—geometrical spaces that suggest deliberate excavation rather than natural geological fissures.</p>
        
        <blockquote class="article-quote">
          "We are no longer looking at solid bedrock. We are looking at a designed subterranean complex that has been hidden for over 4,500 years."
        </blockquote>
        
        <p>These chambers appear to connect via a narrow corridor leading towards the Pyramid of Khafre. While physical excavation remains strictly prohibited to preserve the monument's structural integrity, the digital models suggest that the ancient Egyptians possessed a subterranean architectural masterplan far more intricate than previously documented. The implications of this discovery challenge our entire understanding of Giza's ancient blueprint.</p>
      `
    },
    karnak: {
      title: "Architectural Marvels of Karnak",
      category: "Architecture",
      authorName: "AbdEL-Aziz Moustafa",
      authorId: "zizo",
      date: "September 2026",
      bgClass: "karnak-bg",
      content: `
        <p>The Karnak Temple Complex is not merely a ruin; it is a sprawling encyclopedia of stone. Covering over 200 acres, it was the Vatican of ancient Egypt, developed and expanded by over thirty pharaohs across two thousand years.</p>
        
        <p>At the heart of this sacred precinct lies the Great Hypostyle Hall. Walking through this forest of 134 massive sandstone columns is an exercise in humbling human perspective. The central twelve columns soar to a height of 21 meters, their architraves weighing up to 70 tons each. The enduring mystery is not just why they were built, but how.</p>
        
        <p>Our architectural analysis confirms that the builders utilized inclined mud-brick ramps to drag these massive stones into place, backfilling the hall with earth as the columns rose. Once the roof was secured, the earth was systematically removed, allowing artisans to carve the intricate hieroglyphs from the top down. It is a testament to an era where human ambition knew no mechanical bounds, relying solely on mathematics, manpower, and absolute devotion to the gods.</p>
      `
    },
    // تقدر تضيف هنا باقي المقالات (tut, rosetta, valley, abu) بنفس الهيكل
  };

  // 2. قراءة الـ ID من الرابط
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get("id");
  const articleId = rawId ? rawId.toLowerCase() : "sphinx"; // Default to Sphinx if none

  // 3. جلب بيانات المقال
  const article = articlesDB[articleId];

  if (article) {
    // 4. تعبئة البيانات في الصفحة
    document.title = `ERTH — ${article.title}`;
    document.getElementById("articleTitle").innerText = article.title;
    document.getElementById("articleCategory").innerText = article.category;
    document.getElementById("articleDate").innerText = article.date;
    
    // ربط اسم الكاتب بصفحته الشخصية! (UX ممتاز)
    const authorLink = document.getElementById("articleAuthorLink");
    authorLink.innerText = article.authorName;
    authorLink.href = `author.html?id=${article.authorId}`;

    // إضافة كلاس الخلفية (الرسمة الفرعونية المضيئة)
    document.getElementById("articleHeroBg").classList.add(article.bgClass);

    // حقن محتوى المقال
    document.getElementById("articleContent").innerHTML = article.content;
  } else {
    // لو الـ ID غلط أو مش موجود
    document.getElementById("articleTitle").innerText = "Discovery Not Found";
    document.getElementById("articleContent").innerHTML = "<p>The archives do not contain the chronicle you are seeking. It may have been lost to the sands of time.</p>";
  }
});