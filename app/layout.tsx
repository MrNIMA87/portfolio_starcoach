import type { Metadata } from "next";
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
