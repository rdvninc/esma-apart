"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const accommodations = [
  {
    id: "villa",
    tag: "Öne Çıkan",
    title: "Lüks Villa",
    subtitle: "Özel Havuz · 2 Katlı · Büyük Bahçe",
    description: "Geniş özel yüzme havuzu, iki katlı modern mimari ve büyük özel bahçesiyle en üst düzey konaklama deneyimi.",
    image: "/villa.jpg",
    tagColor: "bg-[#C4873A]/90",
    accent: "#C4873A",
  },
  {
    id: "aframe",
    tag: "Romantik",
    title: "A-Frame Bungalov",
    subtitle: "Özel Jakuzi · 2 Adet",
    description: "Ahşap çatılı üçgen tasarımı ve özel jakuzisiyle çiftlere özel romantik bir kaçış.",
    image: "/aframe.jpg",
    tagColor: "bg-[#3DA8B2]/85",
    accent: "#3DA8B2",
  },
  {
    id: "kabin",
    tag: "Doğal Huzur",
    title: "Ahşap Bungalov",
    subtitle: "Özel Bahçe · 4 Adet",
    description: "Doğayla iç içe, özel bahçeli, tam donanımlı ahşap bungalovlarda sakin bir tatil.",
    image: "/kabin.jpg",
    tagColor: "bg-[#2D5441]/85",
    accent: "#5A9A7A",
  },
];

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.04,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.55, ease: EASE },
  }),
};

export default function FeaturedAccommodations() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    const n = (next + accommodations.length) % accommodations.length;
    setDir(next > index || (index === accommodations.length - 1 && next === 0) ? 1 : -1);
    setIndex(n);
  }, [index]);

  const prev = () => {
    const n = (index - 1 + accommodations.length) % accommodations.length;
    setDir(-1);
    setIndex(n);
  };

  const next = () => {
    const n = (index + 1) % accommodations.length;
    setDir(1);
    setIndex(n);
  };

  // Auto-advance every 5 s
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % accommodations.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const current = accommodations[index];

  return (
    <section className="pt-20 pb-24 px-6 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1B3A2D]/8 border border-[#1B3A2D]/12 mb-5">
            <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
            <span className="font-body text-xs tracking-[0.28em] uppercase text-[#1B3A2D]/70">Konaklama</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B3A2D] mb-4">Size Özel Bir Alan</h2>
          <p className="font-body text-[#7A6252] text-base max-w-md mx-auto leading-relaxed">
            Her bütçeye ve tercihe uygun, gizlilik odaklı konaklama seçeneklerimizi keşfedin.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15"
          style={{ height: "clamp(420px, 55vw, 680px)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={dir} mode="popLayout" initial={false}>
            <motion.div
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${current.image}')` }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a10]/90 via-[#0d1f17]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a10]/40 to-transparent" />

              {/* Tag */}
              <div className="absolute top-6 left-6">
                <span className={`font-body text-[10px] tracking-[0.22em] uppercase ${current.tagColor} backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full`}>
                  {current.tag}
                </span>
              </div>

              {/* Content */}
              <Link href={`/konaklama#${current.id}`} className="absolute inset-x-0 bottom-0 p-8 md:p-12 group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                >
                  <p className="font-body text-[11px] tracking-[0.28em] uppercase mb-2" style={{ color: current.accent }}>
                    {current.subtitle}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-display text-4xl md:text-6xl font-light text-white leading-none">
                      {current.title}
                    </h3>
                    <div className="shrink-0 w-11 h-11 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                  <p className="font-body text-white/60 text-sm mt-3 max-w-lg leading-relaxed">
                    {current.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-200 cursor-pointer"
            aria-label="Önceki"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-200 cursor-pointer"
            aria-label="Sonraki"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2">
            {accommodations.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`transition-all duration-350 rounded-full cursor-pointer ${
                  i === index
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/65"
                }`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          {!paused && (
            <motion.div
              key={`progress-${index}`}
              className="absolute bottom-0 left-0 h-[2px] z-20"
              style={{ backgroundColor: current.accent }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          )}
        </div>

        {/* See all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/konaklama"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1B3A2D]/20 bg-[#1B3A2D]/5 hover:bg-[#1B3A2D]/10 font-body text-sm text-[#1B3A2D] tracking-wide transition-all duration-200 cursor-pointer"
          >
            Tüm Konaklamaları Gör
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
