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
    "announcement.content2": "为提升平台使用体验，我们已于2026年3月4日完成公告功能的全新升级，本次升级包含以下核心优化：",
    "announcement.content3": "1. 公告列表支持按发布时间、类型筛选，快速定位所需信息；",
    "announcement.content4": "2. 新增公告已读状态标记，重要信息不遗漏；",
    "announcement.content5": "3. 移动端适配优化，公告内容展示更清晰；",
    "announcement.content6": "如在使用过程中遇到任何问题，可通过平台客服通道反馈，我们将及时处理。",
    "announcement.content7": "感谢您的支持与理解！",
    "announcement.content8": "LzxOffice 运营团队<br>2026年3月4日"
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
    "announcement.content2": "To improve the platform experience, we completed the full upgrade of the announcement function on March 4, 2026. The upgrade includes the following core optimizations:",
    "announcement.content3": "1. The announcement list supports filtering by release time and type for quick access to required information;",
    "announcement.content4": "2. Added read status marking for announcements to ensure important information is not missed;",
    "announcement.content5": "3. Optimized mobile adaptation for clearer display of announcement content;",
    "announcement.content6": "If you encounter any issues during use, please feedback through the platform customer service channel, and we will handle it in a timely manner.",
    "announcement.content7": "Thank you for your support and understanding!",
    "announcement.content8": "LzxOffice Operation Team<br>March 4, 2026"
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