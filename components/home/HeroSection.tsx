"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
 * PIXEL CANVAS ENGINE
 * ------------------------------------------------------------------ */

type Pixel = {
  x: number; y: number; color: string; ctx: CanvasRenderingContext2D;
  speed: number; size: number; sizeStep: number; minSize: number;
  maxSizeInt: number; maxSize: number; delay: number; counter: number;
  counterStep: number; isIdle: boolean; isReverse: boolean; isShimmer: boolean;
  draw: () => void; appear: () => void; disappear: () => void; shimmer: () => void;
};

function createPixel(
  ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,
  x: number, y: number, color: string, baseSpeed: number, delay: number
): Pixel {
  const rand = (min: number, max: number) => Math.random() * (max - min) + min;
  const p: Pixel = {
    x, y, color, ctx,
    speed: rand(0.08, 0.4) * baseSpeed,
    size: 0, sizeStep: rand(0.12, 0.28), minSize: 0.5,
    maxSizeInt: 2, maxSize: rand(0.5, 2),
    delay, counter: 0,
    counterStep: rand(1.8, 3.2) + (canvas.width + canvas.height) * 0.008,
    isIdle: false, isReverse: false, isShimmer: false,
    draw() {
      const offset = p.maxSizeInt * 0.5 - p.size * 0.5;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x + offset, p.y + offset, p.size, p.size);
    },
    appear() {
      p.isIdle = false;
      if (p.counter <= p.delay) { p.counter += p.counterStep; return; }
      if (p.size >= p.maxSize) p.isShimmer = true;
      if (p.isShimmer) p.shimmer(); else p.size += p.sizeStep;
      p.draw();
    },
    disappear() {
      p.isShimmer = false; p.counter = 0;
      if (p.size <= 0) { p.isIdle = true; return; }
      p.size -= 0.1; p.draw();
    },
    shimmer() {
      if (p.size >= p.maxSize) p.isReverse = true;
      else if (p.size <= p.minSize) p.isReverse = false;
      if (p.isReverse) p.size -= p.speed; else p.size += p.speed;
    },
  };
  return p;
}

function PixelCanvas({ colors, gap = 6, speed = 28 }: { colors: string[]; gap?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animRef = useRef<number>(0);
  const lastRef = useRef(performance.now());
  const rmRef = useRef(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current; const wrap = wrapRef.current;
    if (!canvas || !wrap || colors.length === 0) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const { width, height } = wrap.getBoundingClientRect();
    const w = Math.floor(width); const h = Math.floor(height);
    canvas.width = w; canvas.height = h;
    canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
    const spd = rmRef.current ? 0 : Math.min(speed, 100) * 0.001;
    const pixels: Pixel[] = [];
    for (let x = 0; x < w; x += gap) {
      for (let y = 0; y < h; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = x - w / 2; const dy = y - h / 2;
        const delay = rmRef.current ? 0 : Math.sqrt(dx * dx + dy * dy) * 0.65;
        pixels.push(createPixel(ctx, canvas, x, y, color, spd, delay));
      }
    }
    pixelsRef.current = pixels;
  }, [colors, gap, speed]);

  const animate = useCallback((mode: "appear" | "disappear") => {
    cancelAnimationFrame(animRef.current);
    const loop = () => {
      animRef.current = requestAnimationFrame(loop);
      const now = performance.now(); const elapsed = now - lastRef.current;
      if (elapsed < 1000 / 60) return;
      lastRef.current = now - (elapsed % (1000 / 60));
      const canvas = canvasRef.current; const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pixels = pixelsRef.current;
      for (const pixel of pixels) pixel[mode]();
      if (pixels.every((p) => p.isIdle)) cancelAnimationFrame(animRef.current);
    };
    animRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    rmRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    init();
    const ro = new ResizeObserver(() => init());
    if (wrapRef.current) ro.observe(wrapRef.current);
    animate("appear");
    return () => { ro.disconnect(); cancelAnimationFrame(animRef.current); };
  }, [init, animate]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

/* ------------------------------------------------------------------
 * HERO SECTION
 * ------------------------------------------------------------------ */

// EsmaApart brand pixel colors — amber, turquoise, sand, pine
const PIXEL_COLORS = [
  "rgba(196,135,58,0.18)",   // amber
  "rgba(61,168,178,0.14)",   // turquoise
  "rgba(250,247,242,0.08)",  // sand
  "rgba(90,154,122,0.12)",   // pine accent
  "rgba(196,135,58,0.10)",   // amber dim
  "rgba(61,168,178,0.08)",   // turquoise dim
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], [0, -40]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden isolate">
      {/* Parallax villa photo */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="w-full h-[125%] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f17]/65 via-[#0d1f17]/30 to-[#0d1f17]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f17]/20 to-transparent" />
      </motion.div>

      {/* Pixel canvas overlay — sits above photo, below content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <PixelCanvas colors={PIXEL_COLORS} gap={6} speed={28} />
        {/* Radial vignette so pixels fade toward center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,rgba(13,31,23,0.45)_100%)]" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto w-full"
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-full glass"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4873A] inline-block" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-white/90">
            Adrasan · Antalya · Türkiye
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3DB8C8] inline-block" />
        </motion.div>

        {/* Headline — glass shimmer style */}
        <style>{`
          .esma-glass-title {
            color: transparent;
            background: linear-gradient(135deg,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.5) 25%,
              rgba(255,255,255,0.15) 45%,
              rgba(255,255,255,0.95) 55%,
              rgba(255,255,255,0.3) 75%,
              rgba(255,255,255,1) 100%
            );
            background-size: 220% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-stroke: 1px rgba(255,255,255,0.2);
            filter: drop-shadow(0 12px 32px rgba(0,0,0,0.45)) drop-shadow(0 4px 8px rgba(0,0,0,0.2));
            animation: esma-shimmer 9s linear infinite;
          }
          @keyframes esma-shimmer {
            0%   { background-position: 220% center; }
            100% { background-position: 0%   center; }
          }
        `}</style>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="esma-glass-title font-display font-light leading-[1.02] mb-7"
          style={{ fontSize: "clamp(2.8rem,8vw,8rem)" }}
        >
          Adrasan&apos;ın<br />Kalbinde Lüks
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="font-body font-light text-white/70 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Özel havuzlu villa, jakuzili bungalov ve ahşap bungalov — denize 5 dakika.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className={cn(
            "flex flex-col sm:flex-row gap-3 justify-center items-center transition-all duration-700",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href="/konaklama"
            className="relative inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full bg-gradient-to-b from-[#D49A4A] to-[#C4873A] text-white font-body text-sm font-medium tracking-wide shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.2),0_12px_28px_rgba(196,135,58,0.35)] ring-1 ring-[#C4873A]/30 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 cursor-pointer"
          >
            Konaklamayı Keşfet
          </Link>
          <a
            href="https://wa.me/905383999618?text=Merhaba%2C%20rezervasyon%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-12 items-center justify-center gap-2 px-8 rounded-full glass text-white font-body text-sm font-medium tracking-wide hover:bg-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            WhatsApp ile Yazın
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-7 rounded-full glass flex items-center justify-center"
        >
          <ChevronDown size={13} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
