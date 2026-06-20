"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ tag, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[380px] flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/85 via-[#0d1f17]/35 to-[#0d1f17]/15" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-12"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-4">
          <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-white/80">{tag}</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-3">{title}</h1>
        <p className="font-body text-white/65 text-base md:text-lg max-w-lg">{subtitle}</p>
      </motion.div>
    </section>
  );
}
