// 翻译文案库
const translations = {
  zh: {
    "announcement.listTitle": "最新公告",
    "announcement.cardTitle": "新增公告功能通知",
    "announcement.cardTitle2": "系统升级维护通知",
    "announcement.metaTime": "发布时间：2026 /03 /04",
    "announcement.metaAuthor": "发布人：Lzx",
    "announcement.readMore": "查看详情",
    // 新增公告详情页文案
    "announcement.backToList": "← 返回公告首页",
    "announcement.detailTitle": "新增公告功能通知",
    "announcement.content1": "尊敬的用户：",
    "announcement.content2": "为提升平台使用体验，我们已于 2026 年 3 月 4 日完成公告功能的初步开发，详情如下：",
    "announcement.content3": "1. 公告页面 UI 与主页面保持大致相同；",
    "announcement.content4": "2. 公告页面支持与主页面相同的中英切换功能；",
    "announcement.content5": "3. 之后的更新与升级将在公告同步；",
    "announcement.content6": "如在使用过程中遇到任何问题，可通过联系工作室人员反馈，我们将及时处理。",
    "announcement.content7": "感谢您的支持与理解！",
    "announcement.content8": "LzxOffice 团队<br>2026 年 3 月 4 日"
  },
  en: {
    "announcement.listTitle": "Latest Announcements",
    "announcement.cardTitle": "New Announcement Function Notification",
    "announcement.cardTitle2": "System Upgrade & Maintenance Notice",
    "announcement.metaTime": "Published: 2026 /03 /04",
    "announcement.metaAuthor": "Publisher: Lzx",
    "announcement.readMore": "View Details",
    // 新增公告详情页英文文案
    "announcement.backToList": "← Back to Announcement Home",
    "announcement.detailTitle": "New Announcement Function Notification",
    "announcement.content1": "Dear Users:",
    "announcement.content2": "To improve the platform experience, we developed the announcement function on March 4, 2026. Here are the details:",
    "announcement.content3": "1. The UI of the announcement pages is similar to the UI in the main pages;",
    "announcement.content4": "2. Translation between Chinese and English are supported in the announcement pages, just as the main ones;",
    "announcement.content5": "3. The upgrade in the future will announce you in the announcement pages, and the links in the upgrade publicities will be announcement links, too.",
    "announcement.content6": "If you encounter any issues during use, please connect with the workers of LzxOffice to give your feedback, and we will handle it in a timely manner.",
    "announcement.content7": "Thank you for your support and understanding!",
    "announcement.content8": "LzxOffice Team<br>March 4, 2026"
  }
};

// 第一步：先读取本地存储
let savedLang = localStorage.getItem('currentLang');
// 第二步：如果本地存储不存在/不是有效语言，就设为中文
let currentLang = (savedLang && ['zh', 'en'].includes(savedLang)) ? savedLang : 'zh';
const langToggleBtn = document.getElementById('lang-toggle');

function updatePageText(lang) {
  const langElements = document.querySelectorAll('[data-lang]');
  langElements.forEach(el => {
    const key = el.getAttribute('data-lang');
    // 处理带换行的文案（如落款）
    if (key === "announcement.content8") {
      el.innerHTML = translations[lang][key];
    } else {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  langToggleBtn.textContent = lang === 'zh' ? 'English' : '中文';
  localStorage.setItem('currentLang', lang);
}

langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  updatePageText(currentLang);
});

updatePageText(currentLang);