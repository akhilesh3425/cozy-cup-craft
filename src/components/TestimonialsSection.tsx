"use client";
import { useEffect, useState } from "react";

import { TestimonialCard, Testimonial } from "./TestimonialCard";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Asha",
    avatar: "avatar.jpg",
    content: "Every morning, this tiny cup brings me home. Feels like a hug!",
    highlight: "Feels Like Home",
    emotion: "Comfort",
    delay: 0.1,
  },
  {
    id: 2,
    name: "Ravi",
    avatar: "avatar.jpg",
    content: "This is more than coffee. It's emotion, it's warmth, it's us.",
    highlight: "A Daily Ritual",
    emotion: "Love",
    delay: 0.2,
  },
  {
    id: 3,
    name: "Neha",
    avatar: "avatar.jpg",
    content: "Takes me back to hostel nights and long late-night talks.",
    highlight: "Nostalgia in a Sip",
    emotion: "Nostalgia",
    delay: 0.3,
  },
];

export const TestimonialSection = () => {
  const [activeindex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 px-4 latte-gradient" id="testimonials">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-serif"
        >
          What People Feel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground text-base md:text-lg"
        >
          Here's how Nescafe becomes more than just a coffee for people.
        </motion.p>

        <div className="hidden md:grid mt-10 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
