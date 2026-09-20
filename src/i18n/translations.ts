export type Language = 'en' | 'fa';

export interface Translation {
  appName: string;
  appTagline: string;
  menu: string;
  close: string;
  search: string;
  searchPlaceholder: string;
  emergencyGuide: string;
  quickAccess: string;
  tapToView: string;
  step: string;
  of: string;
  warning: string;
  doNot: string;
  doNotList: string;
  back: string;
  callEmergency: string;
  emergencyNumber: string;
  policeNumber: string;
  offlineSharing: string;
  offlineSharingDesc: string;
  scanToDownload: string;
  offlineReady: string;
  offlineReadyDesc: string;
  language: string;
  english: string;
  dari: string;
  critical: string;
  criticalDesc: string;
  urgent: string;
  urgentDesc: string;
  guidance: string;
  guidanceDesc: string;
  mentalHealth: string;
  mentalHealthDesc: string;
  about: string;
  aboutDesc: string;
  aboutCreator: string;
  aboutCreatorBio: string;
  aboutCreatorBio2: string;
  aboutCreatorBio3: string;
  aboutImportantNotice: string;
  aboutNoticeText: string;
  aboutNoticeText2: string;
  aboutNoticeText3: string;
  whenToCallWarning: string;
  ambulance: string;
  police: string;
  stayCalm: string;
  actFast: string;
  notAMedicalProfessional: string;
  callEmergencyFull: string;
  home: string;
  noResults: string;
  tapAnytime: string;
  savedOffline: string;
  whenToCall: string;
  hotline: string;
  allEmergencies: string;
  showingResults: string;
  clearSearch: string;
  mentalHealthNote: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    appName: 'First Aid Guide',
    appTagline: 'Life-saving steps at your fingertips',
    menu: 'Menu',
    close: 'Close',
    search: 'Search',
    searchPlaceholder: 'Search by symptom or name... (e.g. "can\'t breathe")',
    emergencyGuide: 'Emergency Guide',
    quickAccess: 'Quick Access',
    tapToView: 'Tap to view steps',
    step: 'Step',
    of: 'of',
    warning: 'Warning',
    doNot: 'Do NOT',
    doNotList: 'Things to Avoid',
    back: 'Back',
    callEmergency: 'Call Emergency',
    emergencyNumber: '102',
  policeNumber: '119',
    offlineSharing: 'Offline Sharing',
    offlineSharingDesc: 'Scan this QR code to download this app. You only need a moment of internet connection to load it — then it works fully offline.',
    scanToDownload: 'Scan to download this app',
    offlineReady: 'Offline Ready',
    offlineReadyDesc: 'This app works without internet. All guides are saved on your device.',
    language: 'Language',
    english: 'English',
    dari: 'دری',
    critical: 'Critical',
    criticalDesc: 'Life-threatening — act immediately',
    urgent: 'Urgent',
    urgentDesc: 'Serious — get help soon',
    guidance: 'Guidance',
    guidanceDesc: 'Common injuries — treat at home',
    mentalHealth: 'Mental Health',
    mentalHealthDesc: 'Emotional crisis — you are not alone',
    about: 'About',
    aboutDesc: 'This app provides simple first aid guidance for emergencies. It is not a substitute for professional medical care. Always call emergency services.',
  aboutCreator: 'Created by Mohammad Omid',
  aboutCreatorBio: "I'm Mohammad Omid, a student and technology enthusiast from Afghanistan. I created this app with a simple goal: to make basic first-aid information easier to access when people need it most.",
  aboutCreatorBio2: 'In emergency situations, many people may not know what to do, especially when professional medical help is not immediately available. I wanted to create a simple and accessible resource that can provide clear, step-by-step guidance during those critical moments.',
  aboutCreatorBio3: 'This project is designed with Afghanistan in mind, with a focus on making emergency information understandable and accessible to people with different levels of medical knowledge and literacy.',
  aboutImportantNotice: 'Important Notice',
  aboutNoticeText: 'This web app is intended for first-aid guidance and educational purposes only. It does not replace a doctor, medical professional, or emergency service.',
  aboutNoticeText2: 'In a serious or life-threatening emergency, contact emergency medical services or seek professional medical help immediately.',
  aboutNoticeText3: 'Do not delay professional medical care because of information provided by this app.',
  whenToCallWarning: 'If the phone does not connect or no contact can be made, do not wait — take the person to the nearest hospital right away.',
  ambulance: 'Ambulance',
  police: 'Police',
    stayCalm: 'Stay Calm',
    actFast: 'Act Fast',
    notAMedicalProfessional: 'This guide is for emergencies only. Always seek professional medical help.',
    callEmergencyFull: 'Call Emergency Services',
    home: 'Home',
    noResults: 'No emergencies found',
    tapAnytime: 'Available anytime, even offline',
    savedOffline: 'Saved offline on your device',
    whenToCall: 'When to Call for Help',
    hotline: 'Crisis Hotline',
    allEmergencies: 'All Emergencies',
    showingResults: 'results found',
    clearSearch: 'Clear search',
    mentalHealthNote: 'If you or someone you know is struggling, please reach out. Help is available.',
  },
  fa: {
    appName: 'راهنمای کمک‌های اولیه',
    appTagline: 'مراحل نجات‌بخش در دسترس شما',
    menu: 'فهرست',
    close: 'بستن',
    search: 'جستجو',
    searchPlaceholder: 'جستجو بر اساس علامت یا نام... (مثلاً «نفس نمی‌کشد»)',
    emergencyGuide: 'راهنمای اضطراری',
    quickAccess: 'دسترسی سریع',
    tapToView: 'برای دیدن مراحل ضربه بزنید',
    step: 'مرحله',
    of: 'از',
    warning: 'هشدار',
    doNot: 'ممنوع',
    doNotList: 'کارهایی که نباید انجام دهید',
    back: 'بازگشت',
    callEmergency: 'تماس اضطراری',
    emergencyNumber: '۱۰۲',
  policeNumber: '۱۱۹',
    offlineSharing: 'اشتراک‌گذاری آفلاین',
    offlineSharingDesc: 'این کد QR را اسکن کنید تا این برنامه را دانلود کنید. فقط برای لحظه‌ای به اینترنت نیاز دارید — سپس کاملاً آفلاین کار می‌کند.',
    scanToDownload: 'برای دانلود برنامه اسکن کنید',
    offlineReady: 'آماده آفلاین',
    offlineReadyDesc: 'این برنامه بدون اینترنت کار می‌کند. تمام راهنماها روی دستگاه شما ذخیره شده‌اند.',
    language: 'زبان',
    english: 'English',
    dari: 'دری',
    critical: 'بحرانی',
    criticalDesc: 'تهدیدکننده جان — بلافاصله عمل کنید',
    urgent: 'فوری',
    urgentDesc: 'جدی — زود کمک بگیرید',
    guidance: 'راهنمایی',
    guidanceDesc: 'آسیب‌های رایج — در خانه درمان کنید',
    mentalHealth: 'سلامت روان',
    mentalHealthDesc: 'بحران عاطفی — تنها نیستید',
    about: 'درباره',
    aboutDesc: 'این برنامه راهنمایی ساده کمک‌های اولیه برای موارد اضطراری ارائه می‌دهد. جایگزین مراقبت پزشکی حرفه‌ای نیست. همیشه با اضطراری تماس بگیرید.',
  aboutCreator: 'ساخته شده توسط محمد امید',
  aboutCreatorBio: 'من محمد امید هستم، دانش‌آموز و علاقه‌مند به فناوری از افغانستان. این برنامه را با هدفی ساده ساختم: دسترسی به اطلاعات اولیه کمک‌های اولیه را در زمانی که بیشترین نیاز است، آسان‌تر کنم.',
  aboutCreatorBio2: 'در شرایط اضطراری، بسیاری از مردم ممکن است ندانند چه کنند، به‌ویژه زمانی که کمک پزشکی حرفه‌ای بلافاصله در دسترس نیست. می‌خواستم یک منبع ساده و در دسترس ایجاد کنم که راهنمایی واضح و گام‌به‌گام در آن لحظات بحرانی ارائه دهد.',
  aboutCreatorBio3: 'این پروژه با توجه به افغانستان طراحی شده، با تمرکز بر قابل فهم و در دسترس کردن اطلاعات اضطراری برای مردم با سطوح مختلف دانش پزشکی و سواد.',
  aboutImportantNotice: 'اعلان مهم',
  aboutNoticeText: 'این برنامه وب فقط برای راهنمایی کمک‌های اولیه و مقاصد آموزشی است. جایگزین پزشک، متخصص پزشکی یا خدمات اضطراری نیست.',
  aboutNoticeText2: 'در یک اضطراری جدی یا تهدیدکننده جان، بلافاصله با خدمات پزشکی اضطراری تماس بگیرید یا کمک پزشکی حرفه‌ای بگیرید.',
  aboutNoticeText3: 'به دلیل اطلاعات ارائه شده توسط این برنامه، مراقبت پزشکی حرفه‌ای را به تأخیر نیندازید.',
  whenToCallWarning: 'اگر تلفن وصل نمی‌شود یا تماس ممکن نیست، منتظر نمانید — فرد را بلافاصله به نزدیک‌ترین بیمارستان ببرید.',
  ambulance: 'امبولانس',
  police: 'پلیس',
    stayCalm: 'آرام بمانید',
    actFast: 'سریع عمل کنید',
    notAMedicalProfessional: 'این راهنما فقط برای موارد اضطراری است. همیشه کمک پزشکی حرفه‌ای بگیرید.',
    callEmergencyFull: 'با اضطراری تماس بگیرید',
    home: 'خانه',
    noResults: 'مورد اضطراری یافت نشد',
    tapAnytime: 'همیشه در دسترس، حتی آفلاین',
    savedOffline: 'روی دستگاه شما ذخیره شده',
    whenToCall: 'چه زمانی برای کمک تماس بگیرید',
    hotline: 'خط بحران',
    allEmergencies: 'تمام موارد اضطراری',
    showingResults: 'نتیجه یافت شد',
    clearSearch: 'پاک کردن جستجو',
    mentalHealthNote: 'اگر شما یا کسی که می‌شناسید در دست‌وپنجه هست، لطفاً تماس بگیرید. کمک در دسترس است.',
  },
};
