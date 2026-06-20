"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, TreePine, Sun, Waves } from "lucide-react";

const facts = [
  { icon: MapPin, text: "Adrasan, Kumluca, Antalya" },
  { icon: Clock, text: "Denize yalnızca 5 dakika" },
  { icon: TreePine, text: "Kızılçam ormanı içinde" },
  { icon: Sun, text: "Yıllık 300 günden fazla güneş" },
];

export default function NatureLocation() {
  return (
    <section className="py-8 px-4 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[520px] grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[320px] lg:min-h-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/adrasan.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F0EBE1]/20" />

            {/* Floating beach badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-5 right-5 glass rounded-2xl overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Turquoise accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#3DA8B2] to-[#6CCFDC]" />
              <div className="px-5 py-4 flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#3DA8B2]/20 flex items-center justify-center shrink-0">
                  <Waves size={18} className="text-[#3DA8B2]" />
                </div>
                {/* Text */}
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl font-semibold text-white leading-none">5</span>
                    <span className="font-body text-sm text-white/70 leading-none">dk</span>
                  </div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/50 mt-0.5">Sahile uzaklık</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 lg:py-16 bg-[#EDE6DC]/60 backdrop-blur-sm"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4873A]/12 border border-[#C4873A]/20 mb-6 w-fit">
              <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
              <span className="font-body text-xs tracking-[0.28em] uppercase text-[#A66220]">Konum</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-[#1B3A2D] leading-tight mb-5">
              Doğanın İçinde,<br />Denizin Yanında
            </h2>
            <p className="font-body text-[#5C4A3C] text-base leading-relaxed mb-8 max-w-sm">
              Adrasan, Türkiye'nin en el değmemiş koylarından birine ev sahipliği yapar. Kızılçam ormanlarıyla çevrili EsmaApart'ta, şehrin gürültüsünden uzak, tam anlamıyla huzuru bulacaksınız.
            </p>

            <ul className="flex flex-col gap-3">
              {facts.map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#1B3A2D]/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#1B3A2D]" />
                  </div>
                  <span className="font-body text-sm text-[#3D3028]">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
