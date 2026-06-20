import PageHero from "@/components/konaklama/PageHero";
import VillaShowcase from "@/components/konaklama/VillaShowcase";
import AFrameSection from "@/components/konaklama/AFrameSection";
import CabinSection from "@/components/konaklama/CabinSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "Konaklama — EsmaApart Adrasan",
  description: "Villa, A-Frame bungalov ve ahşap bungalov seçenekleriyle EsmaApart'ta lüks konaklama fırsatlarını keşfedin.",
};

export default function KonaklamaPage() {
  return (
    <>
      <PageHero
        tag="Konaklama Seçenekleri"
        title="Eviniz Gibi, Cennetten"
        subtitle="Her zevke ve bütçeye uygun, doğayla iç içe konaklama deneyimleri."
        image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80&auto=format"
      />
      <VillaShowcase />
      <AFrameSection />
      <CabinSection />
      <CTABanner />
    </>
  );
}
