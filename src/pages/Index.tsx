import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import MomentsSection from "@/components/MomentsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <MomentsSection />
      <CallToAction />
    </div>
  );
};

export default Index;
