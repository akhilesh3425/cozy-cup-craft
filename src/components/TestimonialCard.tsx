import { motion } from "framer-motion";
<<<<<<< HEAD
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
  name,
  avatar,
  content,
  highlight,
  emotion,
  delay = 0,
}: Testimonial) => {
=======
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  highlight: string;
  emotion: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  emotionColor?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  highlight, 
  emotion, 
  content, 
  author, 
  emotionColor, 
  delay = 0 
}: TestimonialCardProps) => {
  const getInitials = (name: string) => {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  };

  const defaultEmotionColor = emotionClass(emotion);

>>>>>>> a3154d9c9c5d2c3977f6b0a2067f78615be5e805
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
<<<<<<< HEAD
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
=======
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <Badge className={`${emotionColor ?? defaultEmotionColor} font-medium`}>
          {emotion}
        </Badge>
        <Quote className="w-5 h-5 text-muted-foreground/30" />
      </div>

      {/* Highlight */}
      <h3 className="font-bold text-lg text-foreground leading-tight">
        "{highlight}"
      </h3>

      {/* Content */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-2">
        <Avatar className="w-12 h-12 ring-2 ring-border">
          <AvatarImage 
            src={author.avatar} 
            alt={author.name} 
            className="object-cover"
          />
          <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
            {getInitials(author.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="font-bold text-sm text-foreground">{author.name}</span>
          {author.role && (
            <span className="text-xs text-muted-foreground">{author.role}</span>
          )}
        </div>
>>>>>>> a3154d9c9c5d2c3977f6b0a2067f78615be5e805
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

<<<<<<< HEAD
export type { Testimonial };
=======
export default TestimonialCard;
>>>>>>> a3154d9c9c5d2c3977f6b0a2067f78615be5e805
