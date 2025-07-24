import { motion } from "framer-motion";
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
}

const TestimonialCard = ({ 
  highlight, 
  emotion, 
  content, 
  author, 
  emotionColor = "bg-primary/10 text-primary" 
}: TestimonialCardProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      whileHover={{ y: -5 }}
      className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
    >
      {/* Emotion Badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge className={`${emotionColor} font-medium`}>
          {emotion}
        </Badge>
        <Quote className="w-6 h-6 text-muted-foreground/30" />
      </div>

      {/* Review Highlight */}
      <h3 className="font-bold text-lg text-foreground mb-3 leading-tight">
        "{highlight}"
      </h3>

      {/* Review Content */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
        {content}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
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
        
        <div className="flex-1">
          <div className="font-bold text-foreground text-sm">
            {author.name}
          </div>
          {author.role && (
            <div className="text-xs text-muted-foreground">
              {author.role}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;