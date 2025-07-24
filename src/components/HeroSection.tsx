import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kinga-howard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/30" />

      {/* Steam Animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-8 bg-background/20 rounded-full steam-particle"
            style={{
              left: `${i * 10}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Start Your Day
          <span className="block text-accent">Right</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience the perfect blend of comfort and quality with every sip of
          Nescafé. Your morning ritual, perfected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="coffee-gradient text-primary-foreground px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform coffee-shadow"
          >
            Start Your Day Right
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Discover Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
