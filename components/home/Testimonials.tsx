"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Elif & Murat",
    location: "İstanbul",
    text: "Villanın özel havuzu ve geniş bahçesiyle tam anlamıyla bir cennet köşesi. Her şey son derece temiz ve bakımlıydı. Adrasan'ın sessizliğinde mükemmel bir tatil geçirdik.",
    rating: 5,
    stay: "Lüks Villa",
  },
  {
    name: "Ayşe K.",
    location: "Ankara",
    text: "A-Frame bungalov gerçekten harikaydı! Jakuzi akşam yıldızların altında eşsizdi. İlk geldiğimizde aşık olduk, kesinlikle döneceğiz. Herkese tavsiye ederim.",
    rating: 5,
    stay: "A-Frame Bungalov",
  },
  {
    name: "Sarah M.",
    location: "Berlin, Almanya",
    text: "Stunning property, incredibly peaceful. The wooden cabin had everything we needed and the private garden was magical. Only 5 minutes from the beach — perfect location.",
    rating: 5,
    stay: "Ahşap Bungalov",
  },
  {
    name: "Mehmet & Fatma",
    location: "İzmir",
    text: "Çocuklarımızla geldiğimizde herkes için yer vardı. Bahçede güzel vakit geçirdik, bungalov tam donanımlıydı. Ev sahibi son derece ilgili ve yardımseverdi.",
    rating: 5,
    stay: "Lüks Villa",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIndex((i) => (i + 1) % reviews.length); }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => { setDir(d); setIndex((i) => (i + d + reviews.length) % reviews.length); };
  const r = reviews[index];

  return (
    <section className="py-8 px-4 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto">
        <div className="glass-sand rounded-3xl px-8 md:px-14 py-14 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1B3A2D]/8 border border-[#1B3A2D]/12 mb-4">
              <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
              <span className="font-body text-xs tracking-[0.28em] uppercase text-[#1B3A2D]/70">Yorumlar</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1B3A2D]">Misafirlerimiz Anlatıyor</h2>
          </motion.div>

          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -36 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#C4873A" className="text-[#C4873A]" />
                  ))}
                </div>
                <blockquote className="font-display text-xl md:text-2xl font-light text-[#3D3028] leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="font-body font-medium text-[#1B3A2D] text-sm">{r.name}</span>
                  <span className="font-body text-xs text-[#9A7E6A]">{r.location} · {r.stay}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={() => go(-1)}
              aria-label="Önceki"
              className="w-9 h-9 rounded-full bg-[#1B3A2D]/8 hover:bg-[#1B3A2D]/15 border border-[#1B3A2D]/12 flex items-center justify-center text-[#1B3A2D]/60 hover:text-[#1B3A2D] transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Yorum ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === index ? "w-6 bg-[#C4873A]" : "w-1.5 bg-[#C4873A]/25"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Sonraki"
              className="w-9 h-9 rounded-full bg-[#1B3A2D]/8 hover:bg-[#1B3A2D]/15 border border-[#1B3A2D]/12 flex items-center justify-center text-[#1B3A2D]/60 hover:text-[#1B3A2D] transition-all duration-200 cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
