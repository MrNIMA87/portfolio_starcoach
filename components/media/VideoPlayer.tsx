"use client";

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
