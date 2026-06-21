"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/konaklama", label: "Konaklama" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={`w-full max-w-5xl h-14 flex items-center justify-between px-5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass-sand shadow-lg shadow-black/8"
              : "glass shadow-md shadow-black/10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="cursor-pointer shrink-0">
            <Image src="/logo.png" alt="EsmaApart Logo" width={110} height={44} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-full font-body text-sm transition-all duration-200 cursor-pointer ${
                  pathname === href
                    ? scrolled
                      ? "bg-[#1B3A2D]/10 text-[#1B3A2D] font-medium"
                      : "bg-white/15 text-white font-medium"
                    : scrolled
                    ? "text-[#3D3028]/80 hover:text-[#1B3A2D] hover:bg-[#1B3A2D]/8"
                    : "text-white/80 hover:text-white hover:bg-white/12"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/iletisim"
              className={`px-5 py-2 rounded-full font-body text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                scrolled
                  ? "bg-[#1B3A2D] hover:bg-[#2D5441] text-white shadow-sm"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              }`}
            >
              Rezervasyon
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
              scrolled ? "bg-[#1B3A2D]/10 text-[#1B3A2D]" : "bg-white/15 text-white"
            }`}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0d1f17] flex flex-col items-center justify-center gap-3 md:hidden pt-0"
          >
            {/* Logo in drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Image src="/logo.png" alt="EsmaApart Logo" width={150} height={60} className="h-16 w-auto object-contain" />
            </motion.div>

            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <Link
                  href={href}
                  className="block px-10 py-4 rounded-2xl font-display text-3xl text-white/90 hover:text-white hover:bg-white/10 tracking-wider transition-all duration-200 cursor-pointer text-center"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.35 }}
              className="mt-6"
            >
              <Link
                href="/iletisim"
                className="px-10 py-3.5 rounded-full font-body text-sm tracking-widest uppercase text-white border border-white/25 bg-white/10 hover:bg-white/20 transition-all duration-200 cursor-pointer"
              >
                Rezervasyon Yap
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
