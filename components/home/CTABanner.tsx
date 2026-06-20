"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const WA_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function CTABanner() {
  return (
    <section className="py-8 pb-24 px-4 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden py-24 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #0d1f17 0%, #1B3A2D 50%, #1a2e1a 100%)" }}
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-[500px] h-[500px] rounded-full -top-32 -right-32 opacity-20" style={{ background: "radial-gradient(circle, #C4873A, transparent 70%)" }} />
            <div className="absolute w-[400px] h-[400px] rounded-full -bottom-24 -left-24 opacity-15" style={{ background: "radial-gradient(circle, #3DA8B2, transparent 70%)" }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-xl mx-auto"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass mb-7">
              <span className="w-1 h-1 rounded-full bg-[#C4873A]" />
              <span className="font-body text-xs tracking-[0.28em] uppercase text-white/70">Rezervasyon</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-5 leading-tight">
              Hayalinizdeki Tatil<br />
              <span className="italic text-[#E0B070]">Burada Başlıyor</span>
            </h2>
            <p className="font-body text-white/55 text-base mb-10 leading-relaxed">
              Müsait tarihleri öğrenmek ve rezervasyon için WhatsApp'tan yazın ya da formumuzu doldurun.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/905383999618?text=Merhaba%2C%20rezervasyon%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white font-body text-sm font-medium tracking-wide shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-220 cursor-pointer"
              >
                {WA_ICON}
                WhatsApp ile Yazın
              </a>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass text-white font-body text-sm font-medium tracking-wide hover:bg-white/20 transition-all duration-220 cursor-pointer"
              >
                Rezervasyon Formu
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
