import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  content: string;
  highlight: string;
  emotion: string;
  delay?: number;
};

export const TestimonialCard = ({
  id,
  name,
  avatar,
  content,
  highlight,
  emotion,
  delay = 0,
}: Testimonial) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white text-brown rounded-xl shadow-md p-5 w-full max-w-md space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold font-sans text-lg">{highlight}</h3>
        <Badge className={emotionClass(emotion)}>{emotion}</Badge>
      </div>

      <p className="text-sm leading-relaxed text-white-700">{content}</p>

      <div className="flex items-center gap-3 mt-2">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-sm font-bold">
            {name.charAt(0)}
          </div>
        )}
        <span className="font-semibold">{name}</span>
      </div>
    </motion.div>
  );
};

function emotionClass(emotion: string) {
  switch (emotion.toLowerCase()) {
    case "love":
      return "bg-red-100 text-red-600";
    case "comfort":
      return "bg-yellow-100 text-yellow-600";
    case "nostalgia":
      return "bg-blue-100 text-blue-600";
    case "excitement":
      return "bg-purple-100 text-purple-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export type { Testimonial };
