"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Özel bahçe & oturma alanı",
  "Tam donanımlı mutfak",
  "Klima & ısıtma sistemi",
  "Ahşap iç mekan tasarımı",
  "Ücretsiz Wi-Fi & otopark",
  "Sessiz, huzurlu konum",
];

export default function CabinSection() {
  return (
    <section id="kabin" className="py-4 px-4 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="glass-sand rounded-3xl overflow-hidden p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5441]/12 border border-[#2D5441]/20 mb-5 w-fit">
              <span className="w-1 h-1 rounded-full bg-[#2D5441]" />
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-[#2D5441]">Doğal Huzur · 4 Adet</span>
            </div>
            <h2 className="font-heading text-4xl text-[#1B3A2D] mb-3">Ahşap Bungalov</h2>
            <p className="font-body text-[#5C4A3C] text-sm max-w-lg leading-relaxed">
              Ahşabın doğal sıcaklığını seven misafirlerimiz için özel bahçeli ve tam donanımlı dört bungalov.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative rounded-2xl overflow-hidden mb-8 group"
            style={{ height: "clamp(260px, 38vw, 480px)" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ backgroundImage: "url('/kabin.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17]/60 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="font-body text-[10px] tracking-[0.22em] uppercase text-white/70 bg-[#2D5441]/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                4 Adet · Müstakil Bungalov
              </span>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-x-8 gap-y-2.5 mb-8">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 font-body text-sm text-[#3D3028]">
                <div className="w-5 h-5 rounded-full bg-[#1B3A2D]/10 flex items-center justify-center shrink-0">
                  <Check size={11} className="text-[#2D5441]" />
                </div>
                {f}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/905383999618?text=Merhaba%2C%20Ahşap%20Bungalov%20için%20rezervasyon%20sorgusu%20yapmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1B3A2D] hover:bg-[#2D5441] text-white font-body text-sm font-medium tracking-wide shadow-md shadow-[#1B3A2D]/20 hover:shadow-[#1B3A2D]/35 transition-all duration-220 cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp ile Rezervasyon
          </a>
        </div>
      </div>
    </section>
  );
}
