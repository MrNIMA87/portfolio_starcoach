export type ProjectCategory = "all" | "ai-fashion" | "automation" | "art-direction";

export interface CategoryOption {
  id: ProjectCategory;
  label: string;
}

export interface Metric {
  label: string;
  value: string;
  desc: string;
}

export interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  aspect: "aspect-[4/5]" | "aspect-[16/9]" | "aspect-square";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  badge: string;
  coverImage: string;
  coverAspect: "aspect-[4/5]" | "aspect-[16/9]" | "aspect-square";
  accentColor: string;
  client: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  metrics: Metric[];
  gallery: MediaItem[];
  videoSource?: {
    src: string;
    poster: string;
    sizeLabel: string;
  };
}

export const CATEGORIES: CategoryOption[] = [
  { id: "all", label: "همه" },
  { id: "ai-fashion", label: "هوش مصنوعی و فشن" },
  { id: "automation", label: "اتوماسیون" },
  { id: "art-direction", label: "آرت‌دایرکشن و ویدیو" },
];

export const GLOBAL_METRICS: Metric[] = [
  { label: "ثبات چهره کاراکتر (Character Consistency)", value: "۱۰۰٪", desc: "حفظ دقیق میمیک و آناتومی در ۶ زاویه اصلی" },
  { label: "کاهش هزینه‌های تولید و مدلینگ", value: "۸۵٪-", desc: "حذف کامل هزینه‌های آفیش، استودیو و لجستیک" },
  { label: "سرعت تولید محتوای اسلایدی", value: "۱۰ برابر", desc: "اتوماسیون کامل با موتور اختصاصی Claude Code" },
  { label: "کیفیت بصری خروجی‌های تبلیغاتی", value: "Ultra-Luxury", desc: "استاندارد بصری در تراز ویترین‌های پاریس و لندن" },
];

export const PROJECTS: Project[] = [
  {
    id: "iranpoosh-virtual-ambassador",
    title: "خلق سفیر و مدل مجازی اختصاصی ایران‌پوش",
    subtitle: "طراحی کاراکتر اختصاصی با ۱۰۰٪ ثبات چهره در شیت ۶ زاویه‌ای و لوک‌بوک‌های شهری در استایل‌های متنوع بدون نیاز به عکاسی فیزیکی.",
    category: "ai-fashion",
    categoryLabel: "هوش مصنوعی و فشن",
    badge: "100% Facial Consistency",
    coverImage: "/images/influencer-main.jpg",
    coverAspect: "aspect-[4/5]",
    accentColor: "#4A1521",
    client: "برند پوشاک ایران‌پوش (IranPoosh)",
    challenge: "بزرگ‌ترین چالش استفاده از هوش مصنوعی در صنعت مد و پوشاک، تغییر چهره مدل در هر تصویر جدید و هزینه‌های سنگین عکاسی مداوم، آفیش مدل، اجاره لوکیشن و زمان‌بر بودن تولید لوک‌بوک برای کالکشن‌های فصلی بود.",
    solution: "طراحی و آموزش یک مدل مجازی اختصاصی (AI Virtual Ambassador) با قفل آناتومیک چهره. در این پروژه یک شیت مرجع ۶ زاویه‌ای شامل تمام زوایای صورت و میمیک‌های حسی ساخته شد که به برند اجازه می‌دهد هر نوع پوشش (از پالتو زرشکی لوکس تا استایل‌های کژوال خیابانی) را با ۱۰۰٪ ثبات هویت بصری تولید کند.",
    deliverables: [
      "شیت مرجع ۶ زاویه‌ای با ثبات ۱۰۰٪ اجزای صورت و میمیک",
      "لوک‌بوک کامل استایل پالتو زرشکی در فضای شهری سینمایی",
      "ست کامل استایل‌های جایگزین (Outfit 2 & Outfit 3) با حفظ هویت کاراکتر",
      "دارایی بصری انحصاری و دائمی برای برند بدون محدودیت قرارداد مدلینگ"
    ],
    techStack: ["Custom Character LoRA", "ComfyUI Pipeline", "Facial Landmark Locking", "Editorial Color Grading"],
    metrics: [
      { label: "ثبات چهره در زوایای مختلف", value: "۱۰۰٪", desc: "تطابق کامل در شیت ۶ زاویه‌ای و لوک‌بوک‌ها" },
      { label: "کاهش هزینه عکاسی و مدلینگ", value: "۸۵٪", desc: "حذف کامل هزینه‌های استودیو و آفیش مدل" },
      { label: "تنوع استایل‌های اجرایی", value: "+۳ کالکشن", desc: "تغییر پوشش کامل با حفظ بافت پارچه و نورپردازی" }
    ],
    gallery: [
      {
        type: "image",
        src: "/images/influencer-main.jpg",
        alt: "کاور اصلی سفیر مجازی ایران‌پوش با پالتو زرشکی",
        caption: "استایل اصلی: پالتو زرشکی لوکس در لوکیشن شهری با نورپردازی سینمایی",
        aspect: "aspect-[4/5]"
      },
      {
        type: "image",
        src: "/images/influencer-sheet.jpg",
        alt: "شیت ۶ زاویه چهره و میمیک سفیر مجازی",
        caption: "شیت یکپارچه ۶ زاویه‌ای (Character Consistency Sheet): اثبات ۱۰۰٪ ثبات چهره و میمیک در زوایای مختلف",
        aspect: "aspect-[16/9]"
      },
      {
        type: "image",
        src: "/images/influencer-outfit2.jpg",
        alt: "استایل دوم سفیر مجازی ایران‌پوش",
        caption: "استایل دوم (Outfit 02): حفظ کامل هویت چهره در پوشش و نورپردازی متفاوت",
        aspect: "aspect-[4/5]"
      },
      {
        type: "image",
        src: "/images/influencer-outfit3.jpg",
        alt: "استایل سوم سفیر مجازی ایران‌پوش",
        caption: "استایل سوم (Outfit 03): هماهنگی دقیق بافت پارچه، فیزیک اندام و چهره کاراکتر",
        aspect: "aspect-[4/5]"
      }
    ]
  },
  {
    id: "luxury-export-campaigns",
    title: "کمپین بین‌المللی صادرات لوکس (زعفران، پسته و سوهان)",
    subtitle: "ارتقای جایگاه کالاهای اصیل ایرانی از فروش فله‌ای به محصولات فوق‌لوکس در سطح ویترین‌های پاریس و لندن با بسته‌بندی کریستال و فلزی طلایی.",
    category: "art-direction",
    categoryLabel: "آرت‌دایرکشن و ویدیو",
    badge: "Global Luxury Positioning",
    coverImage: "/images/export-saffron.jpg",
    coverAspect: "aspect-[4/5]",
    accentColor: "#D4AF37",
    client: "مجموعه برندهای صادراتی پریمیوم",
    challenge: "محصولات استراتژیک ایران مانند زعفران، پسته و سوهان اغلب با بسته‌بندی‌های سنتی و ضعیف صادر می‌شوند که باعث از دست رفتن ارزش افزوده در بازارهای جهانی می‌شود.",
    solution: "کارگردانی هنری و طراحی ویژوال‌های تبلیغاتی خیره‌کننده با الهام از برندهای عطر و جواهرات اروپایی. استفاده از ظروف کریستال تراش‌خورده برای زعفران، جعبه‌های فلزی حکاکی‌شده طلایی برای سوهان و نورپردازی دراماتیک استودیویی برای پسته صادراتی تا محصول نهایی شایسته ویترین فروشگاه‌های تراز اول پاریس و لندن باشد.",
    deliverables: [
      "کی‌ویژوال تبلیغاتی زعفران سوپرنگین در ظرف کریستال لوکس",
      "عکاسی و صحنه‌آرایی صنعتی سوهان اصیل در باکس فلزی طلایی",
      "تصویرسازی تجاری پسته صادراتی با کنتراست و بافت استودیویی",
      "هویت بصری یکپارچه ویژه کاتالوگ‌های بین‌المللی B2B و B2C"
    ],
    techStack: ["Luxury Art Direction", "Product Visualization", "Caustic Lighting Design", "High-End Retouching"],
    metrics: [
      { label: "ارتقای ارزش درک‌شده برند", value: "۳.۵ برابر", desc: "تغییر جایگاه از کالای خام به هدیه لوکس جهانی" },
      { label: "استاندارد بصری کمپین", value: "Tier-1", desc: "هم‌تراز با استانداردهای بسته‌بندی پاریس و لندن" },
      { label: "محصولات پوشش داده شده", value: "۳ محصول", desc: "زعفران کریستالی، سوهان سلطنتی و پسته صادراتی" }
    ],
    gallery: [
      {
        type: "image",
        src: "/images/export-saffron.jpg",
        alt: "زعفران صادراتی در ظرف کریستال لوکس",
        caption: "زعفران در ظرف کریستال: نمایش درخشش کلاله‌های سرخ در کنار تراش‌های کریستالی",
        aspect: "aspect-[4/5]"
      },
      {
        type: "image",
        src: "/images/export-sohan.jpg",
        alt: "سوهان لوکس در جعبه فلزی طلایی",
        caption: "سوهان در باکس فلزی طلایی: ترکیب نقوش اصیل ایرانی با متریال فلزی برس‌خورده",
        aspect: "aspect-[4/5]"
      },
      {
        type: "image",
        src: "/images/export-pistachio.jpg",
        alt: "پسته صادراتی لوکس",
        caption: "پسته صادراتی پریمیوم: نورپردازی تیره و گرم برای برجسته‌سازی کیفیت و تازگی محصول",
        aspect: "aspect-[4/5]"
      }
    ]
  },
  {
    id: "claude-code-carousel-automation",
    title: "اتوماسیون هوشمند پست‌های اسلایدی با Claude Code",
    subtitle: "توسعه موتور تولید محتوای خودکار برای جایگذاری آنی عکس لباس، تایتل، مشخصات و قیمت روی تمپلیت مستر جهت حذف کامل کارهای تکراری گرافیکی.",
    category: "automation",
    categoryLabel: "اتوماسیون",
    badge: "Claude Code Engine",
    coverImage: "/images/carousel-tool.png",
    coverAspect: "aspect-[16/9]",
    accentColor: "#E5A93C",
    client: "سیستم اتوماسیون دپارتمان مارکتینگ مد",
    challenge: "طراحی روزانه ده‌ها اسلاید اینستاگرامی برای معرفی محصولات جدید، درج قیمت، سایزبندی و چیدمان عکس‌ها در فتوشاپ، ساعت‌ها زمان تیم طراحی را تلف می‌کرد و باعث ناهماهنگی بصری می‌شد.",
    solution: "مهندسی یک ابزار اتوماسیون اختصاصی با بهره‌گیری از Claude Code که به صورت هوشمند تصاویر لباس، متون مارکتینگی و قیمت‌ها را دریافت کرده و با دقت پیکسلی روی تمپلیت مستر برند جایگذاری و رندر می‌کند. این سیستم عملیات چندساعته طراحی کاروسل را به چند ثانیه کاهش داده است.",
    deliverables: [
      "موتور رندر خودکار پست‌های اسلایدی (Carousel Generator)",
      "تمپلیت مستر هوشمند با قابلیت تطبیق خودکار تایتل و قیمت",
      "پایش و پردازش دسته‌ای (Batch Processing) محصولات فروشگاه",
      "خروجی آماده انتشار با حفظ کامل استانداردهای برندینگ"
    ],
    techStack: ["Claude Code CLI", "Automated Graphic Pipeline", "Dynamic Template Engine", "Batch Image Processing"],
    metrics: [
      { label: "صرفه‌جویی در زمان تولید", value: "۹۰٪", desc: "تبدیل پروسه ۲ ساعته طراحی به کمتر از ۲ دقیقه" },
      { label: "خطای انسانی در درج قیمت", value: "صفر", desc: "خوانش مستقیم اطلاعات و جایگذاری خودکار" },
      { label: "ظرفیت خروجی روزانه", value: "+۵۰ اسلاید", desc: "آماده‌سازی سریع پست‌های اسلایدی در کمپین‌های فروش" }
    ],
    gallery: [
      {
        type: "image",
        src: "/images/carousel-tool.png",
        alt: "رابط کاربری و خروجی ابزار اتوماسیون پست اسلایدی",
        caption: "نمایی از سیستم اتوماسیون پست اسلایدی: جایگذاری خودکار محصول، تیتر و قیمت روی قالب مستر",
        aspect: "aspect-[16/9]"
      }
    ]
  },
  {
    id: "cinematic-launch-teaser",
    title: "تیزر سینمایی ۳۰ ثانیه‌ای افتتاحیه فروشگاه آنلاین",
    subtitle: "کارگردانی، تدوین ریتمیک و مهندسی پخش بهینه (Lazy-Load Video Architecture) برای تیزر ۱۹ مگابایتی کمپین لانچ بدون افت سرعت لندینگ‌پیج.",
    category: "art-direction",
    categoryLabel: "آرت‌دایرکشن و ویدیو",
    badge: "30s Launch Teaser",
    coverImage: "/images/influencer-main.jpg",
    coverAspect: "aspect-[16/9]",
    accentColor: "#D4AF37",
    client: "کمپین افتتاحیه فروشگاه آنلاین پوشاک",
    challenge: "خلق یک تیزر ۳۰ ثانیه‌ای کوبنده که در ۳ ثانیه اول مخاطب را میخکوب کند و هم‌زمان، نمایش این فایل ویدیویی باکیفیت (۱۹ مگابایت) در وب‌سایت بدون اینکه سرعت بارگذاری اولیه صفحه (LCP) را مختل کند.",
    solution: "کارگردانی تیزر با ضرباهنگ تند، رنگ‌پردازی دارک-لاگژری و کات‌های سینمایی هماهنگ با هویت بصری سفیر مجازی. در بخش فنی وب‌سایت نیز معماری Click-to-Load پیاده‌سازی شد تا ابتدا پوستر بهینه نمایش داده شود و تنها با کلیک کاربر، استریم ویدیوی ۱۹ مگابایتی آغاز گردد.",
    deliverables: [
      "تیزر سینمایی ۳۰ ثانیه‌ای با کیفیت Master 1080p/4K",
      "طراحی صدا (Sound Design) و سینک ضرباهنگ تصویر",
      "کامپوننت اختصاصی VideoPlayer با معماری Zero-Initial-Bandwidth",
      "نسخه بهینه‌سازی شده برای ریلز اینستاگرام و هدر وب‌سایت"
    ],
    techStack: ["Cinematic Video Directing", "Dynamic Motion Pacing", "Next.js Lazy Video Stream", "Zero-CLS Poster Lock"],
    metrics: [
      { label: "مدت زمان تیزر", value: "۳۰ ثانیه", desc: "سناریوی فشرده با نرخ نگهداشت بالای مخاطب" },
      { label: "حجم فایل مستر", value: "۱۹ مگابایت", desc: "بارگذاری هوشمند فقط پس از کلیک کاربر (Lazy-Load)" },
      { label: "تاثیر بر سرعت لود اولیه سایت", value: "۰ میلی‌ثانیه", desc: "حذف کامل بار ترافیکی ویدیو در لحظه ورود" }
    ],
    videoSource: {
      src: "/videos/teaser.mp4",
      poster: "/images/influencer-main.jpg",
      sizeLabel: "19 MB • Full HD Cinematic"
    },
    gallery: [
      {
        type: "video",
        src: "/videos/teaser.mp4",
        poster: "/images/influencer-main.jpg",
        alt: "تیزر سینمایی ۳۰ ثانیه‌ای افتتاحیه فروشگاه آنلاین",
        caption: "پلیر اختصاصی Lazy-Load: برای تماشای تیزر ۳۰ ثانیه‌ای (۱۹ مگابایت) روی دکمه پخش کلیک کنید",
        aspect: "aspect-[16/9]"
      }
    ]
  }
];
