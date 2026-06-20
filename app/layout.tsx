import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EsmaApart — Adrasan'da Lüks Tatil",
  description:
    "Adrasan'ın kalbinde özel havuzlu villa, jakuzili A-frame bungalov ve ahşap bungalov ile eşsiz bir tatil deneyimi. Denize 5 dakika.",
  keywords: "Adrasan, villa kiralama, bungalov, jakuzi, özel havuz, lüks tatil, EsmaApart",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAF7F2]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
