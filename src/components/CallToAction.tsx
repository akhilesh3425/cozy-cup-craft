import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => {
  return (
    <section className="py-20 coffee-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Steam Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-white rounded-full steam-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Ready to Start Your
          <span className="block text-accent">Perfect Day?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          Join thousands of coffee lovers who have made Nescafé their daily ritual. 
          Experience the difference that premium quality makes.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <div className="flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 flex-1"
            />
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Get Started
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-2">
            Get exclusive offers and brewing tips delivered to your inbox
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
          >
            Find in Stores
          </Button>
          
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold"
          >
            Order Online Now
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">50M+</div>
            <div className="text-sm opacity-80">Cups Served Daily</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">75+</div>
            <div className="text-sm opacity-80">Countries Worldwide</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">150+</div>
            <div className="text-sm opacity-80">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;