import HeroSection from "@/components/home/HeroSection";
import PropertyHighlightStrip from "@/components/home/PropertyHighlightStrip";
import FeaturedAccommodations from "@/components/home/FeaturedAccommodations";
import NatureLocation from "@/components/home/NatureLocation";
import AmenitiesGrid from "@/components/home/AmenitiesGrid";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PropertyHighlightStrip />
      <FeaturedAccommodations />
      <NatureLocation />
      <AmenitiesGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}
