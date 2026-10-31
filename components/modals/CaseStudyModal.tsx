"use client";

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
                        className={`${isWide ? "md:col-span-2" : "col-span-1"} flex flex-col bg-obsidian rounded-2xl border border-borderSubtle overflow-hidden`}
                      >
                        {item.type === "video" ? (
                          <VideoPlayer
                            src={item.src}
                            poster={item.poster}
                            title={project.title}
                            sizeLabel={project.videoSource?.sizeLabel}
                          />
                        ) : (
                          <div
                                className={`relative w-full ${
                                  item.aspect === "aspect-[16/9]"
                                    ? "aspect-[16/9] min-h-[220px]"
                                    : "aspect-[4/5] min-h-[350px]"
                                } bg-obsidian overflow-hidden`}
                              >
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
