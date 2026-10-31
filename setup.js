const fs = require('fs');
const path = require('path');

const files = {
  'tailwind.config.ts': `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#08080A",
        surface: "#121216",
        borderSubtle: "#23232A",
        gold: "#D4AF37",
        saffron: "#E5A93C",
        burgundy: "#4A1521",
        textPrimary: "#F5F5F7",
        textMuted: "#9E9EA8",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "radial-gradient(circle at 50% 0%, rgba(74, 21, 33, 0.35), rgba(8, 8, 10, 0) 70%)",
        "gold-glow": "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12), transparent 65%)",
      },
    },
  },
  plugins: [],
};
export default config;
`,

  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-obsidian: #08080A;
  --surface-card: #121216;
  --gold-brushed: #D4AF37;
  --amber-saffron: #E5A93C;
  --burgundy-coat: #4A1521;
}

body {
  background-color: #08080A;
  color: #F5F5F7;
  overflow-x: hidden;
}

/* Custom Luxury Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #08080A;
}
::-webkit-scrollbar-thumb {
  background: #23232A;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #D4AF37;
}
`,

  'app/layout.tsx': `import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پورتفولیو کارگردان هنری و معمار هوش مصنوعی | Dark Luxury Portfolio",
  description: "خلق کمپین‌های تبلیغاتی لوکس، سفیران مجازی با ثبات چهره ۱۰۰٪، اتوماسیون محتوا با Claude Code و تیزرهای سینمایی.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans antialiased bg-obsidian text-textPrimary selection:bg-gold selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
`,

  'data/projects.ts': `export type ProjectCategory = "all" | "ai-fashion" | "automation" | "art-direction";

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
`,

  'components/ui/TiltCard.tsx': `"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TiltCard({ children, className = "", onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate\`radial-gradient(circle at \${glareX} \${glareY}, rgba(212, 175, 55, 0.16), transparent 60%)\`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.25 }}
        className={\`relative group cursor-pointer rounded-2xl bg-surface border border-borderSubtle hover:border-gold/50 transition-colors duration-300 overflow-hidden transform-gpu will-change-transform \${className}\`}
      >
        <motion.div
          style={{ background: glareBackground }}
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        {children}
      </motion.div>
    </div>
  );
}
`,

  'components/media/VideoPlayer.tsx': `"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Film, Loader2, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  sizeLabel?: string;
}

export default function VideoPlayer({
  src = "/videos/teaser.mp4",
  poster = "/images/influencer-main.jpg",
  title = "تیزر سینمایی ۳۰ ثانیه‌ای افتتاحیه",
  sizeLabel = "19 MB • Lazy-Load Stream",
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartVideo = () => {
    setIsBuffering(true);
    setIsLoaded(true);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-obsidian border border-borderSubtle shadow-2xl group">
      {!isLoaded ? (
        <div
          onClick={handleStartVideo}
          className="relative w-full h-full cursor-pointer select-none"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover object-center brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

          {/* Top Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-obsidian/80 backdrop-blur-md border border-gold/30 px-3.5 py-1.5 rounded-full text-xs text-gold">
            <Film className="w-3.5 h-3.5" />
            <span>{sizeLabel}</span>
          </div>

          {/* Center Play Trigger */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gold/90 text-obsidian shadow-[0_0_50px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:bg-saffron transition-all duration-300">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-30" />
              <Play className="w-8 h-8 fill-obsidian ml-1" />
            </div>
            <p className="mt-4 text-lg md:text-xl font-bold text-textPrimary drop-shadow">
              {title}
            </p>
            <p className="mt-1 text-xs md:text-sm text-textMuted bg-obsidian/70 px-3 py-1 rounded-full border border-borderSubtle">
              کلیک برای بارگذاری و پخش ویدیو (حفظ سرعت اولیه صفحه)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full bg-black">
          {isBuffering && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-obsidian/60 backdrop-blur-sm">
              <Loader2 className="w-10 h-10 text-gold animate-spin mb-2" />
              <span className="text-xs text-textMuted">در حال استریم تیزر سینمایی...</span>
            </div>
          )}

          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            onCanPlay={() => setIsBuffering(false)}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            className="w-full h-full object-contain"
          />

          <button
            onClick={toggleMute}
            type="button"
            aria-label="Toggle Mute"
            className="absolute top-4 left-4 z-30 p-2.5 rounded-full bg-obsidian/80 text-gold border border-gold/30 hover:bg-gold hover:text-obsidian transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
`,

  'components/modals/CaseStudyModal.tsx': `"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Layers, Cpu, ArrowUpLeft } from "lucide-react";
import { Project } from "@/data/projects";
import VideoPlayer from "@/components/media/VideoPlayer";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-gold/30 shadow-[0_25px_90px_rgba(0,0,0,0.85)] text-right"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-surface/90 backdrop-blur-md border-b border-borderSubtle">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-burgundy/60 text-gold border border-gold/30">
                  {project.categoryLabel}
                </span>
                <span className="hidden sm:inline-block text-xs text-textMuted">
                  کارفرما: {project.client}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="بستن مودال"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian border border-borderSubtle text-textMuted hover:text-gold hover:border-gold transition-colors text-xs"
              >
                <span>بستن</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-10">
              {/* Title & Overview */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-saffron mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{project.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-textPrimary leading-tight">
                  {project.title}
                </h2>
                <p className="mt-3 text-base sm:text-lg text-textMuted leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-obsidian/90 border border-borderSubtle flex flex-col justify-between"
                  >
                    <span className="text-xs text-textMuted">{m.label}</span>
                    <span className="my-2 text-2xl sm:text-3xl font-black text-gold">
                      {m.value}
                    </span>
                    <span className="text-xs text-textMuted/80">{m.desc}</span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-obsidian/60 border border-borderSubtle space-y-2">
                  <h3 className="text-sm font-bold text-saffron flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>چالش مارکتینگ و تولید</span>
                  </h3>
                  <p className="text-sm text-textMuted leading-7">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-burgundy/20 border border-gold/25 space-y-2">
                  <h3 className="text-sm font-bold text-gold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>راهکار خلاقانه و معماری اجرایی</span>
                  </h3>
                  <p className="text-sm text-textPrimary/90 leading-7">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Visual Assets & Gallery */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-textPrimary border-r-2 border-gold pr-3">
                  گالری خروجی‌ها و مستندات بصری پروژه
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((item, index) => {
                    const isWide = item.aspect === "aspect-[16/9]";
                    return (
                      <div
                        key={index}
                        className={\`\${isWide ? "md:col-span-2" : "col-span-1"} flex flex-col bg-obsidian rounded-2xl border border-borderSubtle overflow-hidden\`}
                      >
                        {item.type === "video" ? (
                          <VideoPlayer
                            src={item.src}
                            poster={item.poster}
                            title={project.title}
                            sizeLabel={project.videoSource?.sizeLabel}
                          />
                        ) : (
                          <div className={\`relative w-full \${item.aspect} bg-obsidian overflow-hidden\`}>
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes={isWide ? "(max-width: 1024px) 100vw, 900px" : "(max-width: 768px) 100vw, 450px"}
                              className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        )}
                        <div className="p-4 text-xs sm:text-sm text-textMuted border-t border-borderSubtle bg-surface/50">
                          {item.caption}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deliverables & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-borderSubtle">
                <div>
                  <h4 className="text-sm font-bold text-textPrimary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>خروجی‌های تحویل‌شده (Deliverables)</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {project.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-textMuted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-textPrimary mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-saffron" />
                    <span>تکنولوژی‌ها و پایپ‌لاین اجرا</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-obsidian border border-borderSubtle text-xs text-textPrimary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-l from-burgundy/40 via-surface to-obsidian border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-textPrimary">
                    نیاز به اجرای کمپین مشابه برای برند خود دارید؟
                  </h4>
                  <p className="text-xs text-textMuted mt-1">
                    طراحی سفیر مجازی، اتوماسیون محتوا یا آرت‌دایرکشن لوکس صادراتی
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-obsidian font-bold text-sm hover:bg-saffron transition-colors shrink-0"
                >
                  <span>درخواست مشاوره پروژه</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
`,

  'app/page.tsx': `"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpLeft,
  Play,
  Layers,
  Cpu,
  Award,
  CheckCircle2,
  Send,
  PhoneCall,
  MessageSquare,
  Eye,
  Wand2,
  Video,
} from "lucide-react";
import {
  PROJECTS,
  CATEGORIES,
  GLOBAL_METRICS,
  ProjectCategory,
  Project,
} from "@/data/projects";
import TiltCard from "@/components/ui/TiltCard";
import CaseStudyModal from "@/components/modals/CaseStudyModal";
import VideoPlayer from "@/components/media/VideoPlayer";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-obsidian text-textPrimary relative selection:bg-gold selection:text-obsidian">
      {/* Ambient Luxury Top Glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[550px] bg-luxury-gradient z-0" />

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-obsidian/80 border-b border-borderSubtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-burgundy flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Sparkles className="w-5 h-5 text-obsidian" />
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-textPrimary block leading-none">
                CREATIVE AI STUDIO
              </span>
              <span className="text-[11px] text-gold tracking-widest uppercase">
                Art Direction & AI Architecture
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-textMuted">
            <a href="#projects" className="hover:text-gold transition-colors">
              پروژه‌ها و کمپین‌ها
            </a>
            <a href="#showreel" className="hover:text-gold transition-colors">
              تیزر سینمایی
            </a>
            <a href="#capabilities" className="hover:text-gold transition-colors">
              تخصص‌ها
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              همکاری
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold/10 border border-gold/40 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-xs sm:text-sm font-bold"
          >
            <span>شروع پروژه</span>
            <ArrowUpLeft className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO SECTION (No Personal Photo - Pure Visual Impact) */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface border border-gold/30 text-xs sm:text-sm text-gold shadow-[0_0_30px_rgba(212,175,55,0.12)]"
          >
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>ترکیب کارگردانی هنری لوکس، هوش مصنوعی مولد و اتوماسیون مهندسی</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.25] tracking-tight"
          >
            خلق کمپین‌های <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold via-saffron to-amber-200">دارک-لاگژری</span>، سفیران مجازی و سیستم‌های هوشمند محتوا
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-textMuted max-w-3xl mx-auto leading-relaxed font-normal"
          >
            از طراحی مدل‌های مجازی اختصاصی با <strong className="text-textPrimary">۱۰۰٪ ثبات چهره</strong> برای برندهای فشن، تا کمپین‌های صادراتی در تراز ویترین‌های پاریس و لندن و اتوماسیون کامل محتوا با <strong className="text-gold">Claude Code</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gold text-obsidian font-black text-sm sm:text-base shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:bg-saffron hover:scale-[1.02] transition-all"
            >
              <span>مشاهده کیس‌استادی‌ها و نمونه‌کارها</span>
              <Eye className="w-5 h-5" />
            </a>
            <a
              href="#showreel"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-surface border border-borderSubtle hover:border-gold/50 text-textPrimary font-bold text-sm sm:text-base transition-all"
            >
              <Play className="w-4 h-4 text-gold fill-gold" />
              <span>تماشای تیزر ۳۰ ثانیه‌ای</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* METRICS BANNER (CRO Trust Builder) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GLOBAL_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface/90 border border-borderSubtle hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <span className="text-xs text-textMuted group-hover:text-textPrimary transition-colors">
                {metric.label}
              </span>
              <div className="my-3 text-3xl sm:text-4xl font-black text-gold tracking-tight">
                {metric.value}
              </div>
              <p className="text-xs text-textMuted/80 leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERABLE PROJECT GALLERY */}
      <section id="projects" className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold block mb-2">
              SELECTED CAMPAIGNS & SYSTEMS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-textPrimary">
              گالری پروژه‌ها و کیس‌استادی‌های اجرایی
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-2xl border border-borderSubtle">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={\`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors \${
                    isActive ? "text-obsidian" : "text-textMuted hover:text-textPrimary"
                  }\`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gold"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <TiltCard onClick={() => setSelectedProject(project)}>
                  {/* Fixed Aspect Ratio Image Container for Zero-CLS */}
                  <div className="relative w-full aspect-[16/10] bg-obsidian overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                    {/* Category & Badge Overlay */}
                    <div className="absolute top-4 right-4 left-4 flex items-center justify-between gap-2 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-obsidian/80 backdrop-blur-md text-gold border border-gold/30">
                        {project.categoryLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-burgundy/80 backdrop-blur-md text-textPrimary border border-white/10">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-textPrimary group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-textMuted line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Quick Highlight Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-borderSubtle">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="bg-obsidian/60 p-2.5 rounded-xl border border-borderSubtle/60">
                          <div className="text-sm sm:text-base font-black text-saffron">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-textMuted truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Footer */}
                    <div className="flex items-center justify-between pt-2 text-xs sm:text-sm font-bold text-gold">
                      <span>مشاهده جزئیات کمپین و شیت‌های اجرایی</span>
                      <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-obsidian transition-all">
                        <ArrowUpLeft className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* DEDICATED SHOWREEL SECTION (Lazy-load 19MB Teaser) */}
      <section id="showreel" className="relative z-10 py-16 md:py-24 bg-surface/40 border-y border-borderSubtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">
              CINEMATIC LAUNCH TEASER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-textPrimary">
              تیزر سینمایی ۳۰ ثانیه‌ای افتتاحیه فروشگاه آنلاین
            </h2>
            <p className="text-sm sm:text-base text-textMuted">
              مجهز به معماری بارگذاری تنبل (Click-to-Load)؛ فایل ۱۹ مگابایتی ویدیو تنها پس از کلیک شما استریم می‌شود تا سرعت بارگذاری صفحه در بالاترین سطح باقی بماند.
            </p>
          </div>

          <VideoPlayer
            src="/videos/teaser.mp4"
            poster="/images/influencer-main.jpg"
            title="پخش تیزر سینمایی ۳۰ ثانیه‌ای (۱۹ مگابایت)"
            sizeLabel="19 MB • Zero-CLS Lazy Player"
          />
        </div>
      </section>

      {/* CAPABILITIES & SKILLS */}
      <section id="capabilities" className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold">
            CORE COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-textPrimary">
            ستون‌های تخصصی و مزیت رقابتی
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-surface border border-borderSubtle hover:border-gold/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-burgundy/40 border border-gold/30 flex items-center justify-center text-gold">
              <Wand2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-textPrimary">
              مهندسی سفیران مجازی و فشن AI
            </h3>
            <p className="text-sm text-textMuted leading-7">
              خلق کاراکترهای انحصاری با ۱۰۰٪ ثبات چهره در شیت‌های ۶ زاویه‌ای و تولید لوک‌بوک‌های تبلیغاتی بدون نیاز به استودیو و مدل واقعی.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-borderSubtle hover:border-gold/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-burgundy/40 border border-gold/30 flex items-center justify-center text-gold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-textPrimary">
              آرت‌دایرکشن کمپین‌های صادراتی لوکس
            </h3>
            <p className="text-sm text-textMuted leading-7">
              تصویرسازی و جایگاه‌سازی فوق‌لوکس برای محصولات اصیل ایرانی (زعفران، پسته، سوهان) در تراز استانداردهای بصری پاریس و لندن.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-borderSubtle hover:border-gold/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-burgundy/40 border border-gold/30 flex items-center justify-center text-gold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-textPrimary">
              اتوماسیون محتوا با Claude Code
            </h3>
            <p className="text-sm text-textMuted leading-7">
              توسعه ابزارهای هوشمند برای تولید خودکار پست‌های اسلایدی، جایگذاری آنی محصول و قیمت روی تمپلیت مستر و حذف کامل کارهای تکراری.
            </p>
          </div>
        </div>
      </section>

      {/* FRICTIONLESS CONTACT / CRO FOOTER */}
      <section id="contact" className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-br from-burgundy/40 via-surface to-obsidian border border-gold/30 p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30">
                آماده همکاری در پروژه‌های لوکس و سیستم‌های هوش مصنوعی
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-textPrimary leading-tight">
                برند خود را با ترکیب هنر لوکس و اتوماسیون هوشمند ارتقا دهید
              </h2>
              <p className="text-sm sm:text-base text-textMuted leading-relaxed">
                برای سفارش طراحی سفیر مجازی اختصاصی، کارگردانی هنری کمپین‌های صادراتی یا راه‌اندازی سیستم اتوماسیون محتوا، مستقیماً در ارتباط باشید.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-gold text-obsidian font-black text-sm hover:bg-saffron transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>ارتباط مستقیم در تلگرام</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-obsidian border border-borderSubtle hover:border-gold text-textPrimary font-bold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
                  <span>ارسال پیام در واتساپ</span>
                </a>
                <a
                  href="tel:+989120000000"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-obsidian border border-borderSubtle hover:border-gold text-textPrimary font-bold text-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-saffron" />
                  <span>تماس تلفنی مستقیم</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-obsidian/80 p-6 sm:p-8 rounded-2xl border border-borderSubtle space-y-4">
              <h3 className="text-base font-bold text-gold">
                چرا برندهای پیشرو این معماری را انتخاب می‌کنند؟
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-textMuted">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>مالکیت ۱۰۰٪ کاراکتر و مدل مجازی بدون محدودیت زمانی</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>کاهش ۸۵ درصدی هزینه‌های تولید محتوا و عکاسی صنعتی</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>تولید خودکار ده‌ها اسلاید فروشگاهی در چند ثانیه</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>بسته‌بندی و تصویرسازی در سطح بازارهای جهانی</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-borderSubtle py-8 text-center text-xs text-textMuted">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© تمامی حقوق این پورتفولیو و آثار بصری محفوظ است.</span>
          <span className="text-gold">Dark Luxury UI • Next.js 14 • Framer Motion</span>
        </div>
      </footer>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
`
};

console.log('🚀 در حال ساخت ساختار پروژه پورتفولیو Dark Luxury...');

Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('📁 پوشه ساخته شد:', dir);
  }

  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('✅ فایل با موفقیت ساخته شد:', filePath);
});

// Create public directories if not exist
['public/images', 'public/videos'].forEach((pubDir) => {
  const fullPubDir = path.join(process.cwd(), pubDir);
  if (!fs.existsSync(fullPubDir)) {
    fs.mkdirSync(fullPubDir, { recursive: true });
    console.log('📁 پوشه دارایی‌ها آماده شد:', pubDir);
  }
});

console.log('\n✨ تمام فایل‌های پورتفولیو با موفقیت ایجاد شدند!');
console.log('📌 کافیست فایل‌های عکس را در public/images و ویدیو را در public/videos قرار داده و دستور npm run dev را اجرا کنید.');
