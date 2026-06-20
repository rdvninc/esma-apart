"use client";

import { motion } from "framer-motion";
import { Wifi, Car, Utensils, Waves, TreePine, Shield, Wind, Coffee, Sun, Moon } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Yüksek Hızlı Wi-Fi" },
  { icon: Car, label: "Ücretsiz Otopark" },
  { icon: Waves, label: "Özel Havuz & Jakuzi" },
  { icon: Utensils, label: "Tam Donanımlı Mutfak" },
  { icon: TreePine, label: "Özel Bahçe Alanı" },
  { icon: Shield, label: "7/24 Güvenlik" },
  { icon: Wind, label: "Klima & Isıtma" },
  { icon: Coffee, label: "Açık Hava Oturma" },
  { icon: Sun, label: "Güneş Terası & Şezlong" },
  { icon: Moon, label: "Sessiz & Huzurlu Ortam" },
];

export default function AmenitiesGrid() {
  return (
    <section className="py-8 px-4 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden py-20 px-6"
          style={{
            background: "linear-gradient(135deg, #1B3A2D 0%, #0d1f17 60%, #1a2e22 100%)",
          }}
        >
          {/* Subtle bg texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, #C4873A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3DA8B2 0%, transparent 50%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center mb-12"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-5">
              <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
              <span className="font-body text-xs tracking-[0.28em] uppercase text-white/75">Olanaklar</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-3">Her Konfor, Burada</h2>
            <p className="font-body text-white/50 text-base max-w-sm mx-auto">
              Eksiksiz bir tatil için ihtiyacınız olan her şey EsmaApart'ta sizi bekliyor.
            </p>
          </motion.div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {amenities.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl flex flex-col items-center gap-3 px-4 py-6 text-center group hover:bg-white/18 transition-all duration-250 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C4873A]/20 flex items-center justify-center group-hover:bg-[#C4873A]/30 transition-colors duration-250">
                  <Icon size={18} className="text-[#E0B070]" />
                </div>
                <span className="font-body text-xs text-white/65 group-hover:text-white/90 leading-relaxed transition-colors duration-250">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
