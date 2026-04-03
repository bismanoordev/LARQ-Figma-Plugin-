import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import ProductShowcaseSection from "../components/ProductShowcaseSection";
import DualSectionRow from "../components/DualSectionRow";
import SmartDrinkingSection from "../components/SmartDrinkingSection";
import PlasticUsageSection from "../components/PlasticUsageSection";
import FooterSection from "../components/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewsSection />
      <ProductShowcaseSection />
      <DualSectionRow />
      <SmartDrinkingSection />
      <PlasticUsageSection />
      <FooterSection />
    </main>
  );
}
