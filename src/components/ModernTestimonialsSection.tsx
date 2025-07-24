import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const ModernTestimonialsSection = () => {
  const testimonials = [
    {
      highlight: "Best Coffee Experience Ever!",
      emotion: "Love",
      content: "I've been drinking Nescafé for over 10 years, and it never fails to deliver that perfect morning boost. The rich aroma and smooth taste make every sip feel like a warm hug. It's not just coffee, it's my daily ritual of comfort.",
      author: {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        avatar: "/placeholder.svg"
      },
      emotionColor: "bg-red-100 text-red-700"
    },
    {
      highlight: "Perfect for Busy Mornings",
      emotion: "Comfort",
      content: "As a working mom with three kids, I need something quick and reliable. Nescafé gives me that perfect balance of convenience and quality. The instant preparation saves me precious time while still giving me that authentic coffee taste I crave.",
      author: {
        name: "Maria Rodriguez",
        role: "Working Mother",
        avatar: "/placeholder.svg"
      },
      emotionColor: "bg-blue-100 text-blue-700"
    },
    {
      highlight: "Brings Back Home Memories",
      emotion: "Nostalgia",
      content: "Living abroad as a student, Nescafé reminds me of home. Every cup takes me back to breakfast with my family. It's amazing how a simple coffee can bridge distances and make me feel connected to my roots no matter where I am.",
      author: {
        name: "Ahmed Hassan",
        role: "University Student",
        avatar: "/placeholder.svg"
      },
      emotionColor: "bg-purple-100 text-purple-700"
    },
    {
      highlight: "Consistently Amazing Quality",
      emotion: "Trust",
      content: "I've tried many coffee brands, but Nescafé remains my go-to choice. The consistency in taste and quality is remarkable. Whether I'm at home, office, or traveling, I know I can always count on Nescafé for that perfect cup.",
      author: {
        name: "James Wilson",
        role: "Business Consultant",
        avatar: "/placeholder.svg"
      },
      emotionColor: "bg-green-100 text-green-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Orange Banner */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Where Coffee
              <br />
              <span className="text-orange-400">Meets Love</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 rounded-lg transform -rotate-1 shadow-2xl">
              <span className="text-white font-bold text-xl md:text-2xl">
                What users say about us
              </span>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={index % 2 === 0 ? 'lg:translate-y-8' : ''}
            >
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <TestimonialCard
                  highlight={testimonial.highlight}
                  emotion={testimonial.emotion}
                  content={testimonial.content}
                  author={testimonial.author}
                  emotionColor={testimonial.emotionColor}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-6">
            Join thousands of coffee lovers who trust Nescafé
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Share Your Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTestimonialsSection;