import EmotionalHero from "@/components/EmotionalHero";
import ProductGrid from "@/components/ProductGrid";
import { TestimonialSection } from "@/components/TestimonialsSection";
import MomentsSection from "@/components/MomentsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EmotionalHero />
      <ProductGrid />
      <TestimonialSection />
      <MomentsSection />
      <ReviewsSection />
      <CallToAction />
    </div>
  );
};

export default Index;
