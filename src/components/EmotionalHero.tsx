import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Coffee } from "lucide-react";
import heroImage from "@/assets/kinga-howard.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const EmotionalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-mocha/80 via-primary/60 to-transparent" />

      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Coffee
            key={i}
            className="absolute text-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `floatUp ${
                3 + Math.random() * 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Steam Animation */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-6 bg-white/30 rounded-full steam-particle"
            style={{
              left: `${i * 8}px`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-black max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            ☕ More than just coffee
          </span>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            variants={fadeUp}
            custom={1}
          >
            Every Sip Tells a
            <span className="block text-accent drop-shadow-lg">Story</span>
          </motion.h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
        >
          From the first gentle aroma that fills your kitchen to that perfect
          moment of warmth between your hands,
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 text-accent font-medium max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
        >
          Nescafé creates memories, one cup at a time.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={4}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              75+
            </div>
            <div className="text-sm text-white/80">Years of Comfort</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              50M+
            </div>
            <div className="text-sm text-white/80">Daily Moments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              ∞
            </div>
            <div className="text-sm text-white/80">Memories Made</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={5}
        >
          <Button
            size="lg"
            className="coffee-gradient text-primary-foreground px-10 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 coffee-shadow group"
          >
            Create Your Moment
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/20 px-10 py-6 text-lg backdrop-blur-sm group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Our Story
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={6}
        >
          <p className="text-white/70 mb-4">
            Trusted by coffee lovers worldwide
          </p>
          <div className="flex justify-center items-center gap-6 text-accent">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-2xl">⭐</span>
              </div>
            ))}
            <span className="text-white/80 ml-2">
              4.8/5 from 50,000+ reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EmotionalHero;
