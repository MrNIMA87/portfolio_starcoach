"use client";

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
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                    isActive ? "text-obsidian" : "text-textMuted hover:text-textPrimary"
                  }`}
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
              تیزر سینمایی ۳۰ ثانیه‌ای افتتاحیه ایجنت کالینگ
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
