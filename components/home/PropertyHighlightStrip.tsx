"use client";

import { motion } from "framer-motion";
import { Waves, Sparkles, Car, Wifi } from "lucide-react";

const highlights = [
  { icon: Waves, label: "Özel Havuz & Jakuzi" },
  { icon: Sparkles, label: "Plaja 5 Dakika" },
  { icon: Car, label: "Ücretsiz Otopark" },
  { icon: Wifi, label: "Ücretsiz Wi-Fi" },
];

export default function PropertyHighlightStrip() {
  return (
    <section className="relative px-4 pt-6 pb-2">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
        >
          {highlights.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.35 + i * 0.07 }}
              className="glass-sand rounded-2xl flex flex-col sm:flex-row items-center justify-center gap-2 px-4 py-4 shadow-sm"
            >
              <div className="w-8 h-8 rounded-xl bg-[#1B3A2D]/10 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-[#1B3A2D]" />
              </div>
              <span className="font-body text-xs text-[#3D3028] font-medium text-center sm:text-left leading-tight">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
