import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Heart, Coffee } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Elena Rodriguez",
      role: "Mother of Three",
      location: "Barcelona, Spain",
      avatar: "/placeholder.svg",
      content: "Every morning starts the same way - with the rich aroma of Nescafé filling our kitchen. It's not just coffee, it's the beginning of our family's day together. My children now associate that smell with home, love, and warm conversations.",
      highlight: "It's the beginning of our family's day together",
      emotion: "Family Love"
    },
    {
      id: 2,
      name: "James Mitchell",
      role: "Night Shift Nurse",
      location: "Toronto, Canada",
      avatar: "/placeholder.svg",
      content: "Working 12-hour shifts in the hospital, I need something reliable that gives me comfort during tough times. That first sip of Nescafé during my break isn't just caffeine - it's a moment of peace, a reminder that simple pleasures can get you through anything.",
      highlight: "A moment of peace in the chaos",
      emotion: "Comfort"
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      role: "University Student",
      location: "Tokyo, Japan",
      avatar: "/placeholder.svg",
      content: "Studying abroad, far from home, Nescafé became my companion through late-night study sessions. The familiar taste reminds me of my grandmother's kitchen back home. It's amazing how a cup of coffee can bridge continents and bring back the warmest memories.",
      highlight: "It bridges continents and brings back memories",
      emotion: "Nostalgia"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      role: "Small Business Owner",
      location: "Cairo, Egypt",
      avatar: "/placeholder.svg",
      content: "Starting my café three years ago, I tried dozens of coffee brands. But when I serve Nescafé to my customers, I see their faces light up. There's something universal about it - it brings people together, creates conversations, builds community.",
      highlight: "It brings people together and builds community",
      emotion: "Connection"
    },
    {
      id: 5,
      name: "Sophie Williams",
      role: "Retired Teacher",
      location: "London, UK",
      avatar: "/placeholder.svg",
      content: "For forty years, I started every school day with Nescafé. Now in retirement, that morning ritual continues. It's been my constant through career changes, moving homes, and life's ups and downs. Some traditions are just too precious to change.",
      highlight: "My constant through life's ups and downs",
      emotion: "Tradition"
    },
    {
      id: 6,
      name: "Carlos Mendoza",
      role: "Remote Developer",
      location: "Mexico City, Mexico",
      avatar: "/placeholder.svg",
      content: "Working from home can be isolating, but my coffee breaks with Nescafé have become sacred. It's my transition between work mode and family time. That ten-minute pause with a warm cup helps me reset and be present for what matters most.",
      highlight: "Helps me reset and be present for what matters",
      emotion: "Mindfulness"
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case 'Family Love': return <Heart className="w-4 h-4" />;
      case 'Comfort': return <Coffee className="w-4 h-4" />;
      case 'Nostalgia': return <Coffee className="w-4 h-4" />;
      case 'Connection': return <Heart className="w-4 h-4" />;
      case 'Tradition': return <Coffee className="w-4 h-4" />;
      case 'Mindfulness': return <Heart className="w-4 h-4" />;
      default: return <Coffee className="w-4 h-4" />;
    }
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'Family Love': return 'bg-red-100 text-red-700';
      case 'Comfort': return 'bg-blue-100 text-blue-700';
      case 'Nostalgia': return 'bg-purple-100 text-purple-700';
      case 'Connection': return 'bg-green-100 text-green-700';
      case 'Tradition': return 'bg-orange-100 text-orange-700';
      case 'Mindfulness': return 'bg-teal-100 text-teal-700';
      default: return 'bg-accent/20 text-accent-foreground';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground">
            Real Stories
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Stories That Warm
            <span className="text-accent"> The Heart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond the perfect blend and rich aroma, Nescafé creates moments that matter. 
            Here are real stories from real people whose lives are touched by coffee.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-16">
          <Card className="latte-gradient p-12 text-center latte-shadow">
            <Quote className="w-16 h-16 text-accent/30 mx-auto mb-6" />
            <blockquote className="font-serif text-2xl md:text-3xl text-primary mb-8 leading-relaxed max-w-4xl mx-auto">
              "Coffee isn't just a drink - it's a daily ritual that connects us to ourselves, our loved ones, and memories that span generations."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg" alt="Dr. Elena Vasquez" />
                <AvatarFallback className="bg-accent/20 text-accent-foreground text-lg">
                  EV
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold text-primary text-lg">Dr. Elena Vasquez</div>
                <div className="text-muted-foreground">Coffee Culture Researcher</div>
                <div className="text-sm text-accent">Universidad de Barcelona</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`p-6 latte-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index % 2 === 0 ? 'lg:translate-y-8' : ''
              }`}
            >
              {/* Emotion Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Badge className={`${getEmotionColor(testimonial.emotion)} flex items-center gap-1`}>
                  {getEmotionIcon(testimonial.emotion)}
                  {testimonial.emotion}
                </Badge>
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                {testimonial.content}
              </p>

              {/* Highlight */}
              <div className="bg-accent/10 p-4 rounded-lg mb-6 border-l-4 border-accent">
                <p className="font-medium text-primary italic">
                  "{testimonial.highlight}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-accent/20 text-accent-foreground">
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-accent">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-20 text-center">
          <div className="bg-card p-12 rounded-2xl latte-shadow max-w-4xl mx-auto">
            <Coffee className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">
              Join Our Coffee Community
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Share your own Nescafé moments and become part of a global family that celebrates 
              the simple joy of perfect coffee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 coffee-gradient text-primary-foreground rounded-lg hover:scale-105 transition-transform font-semibold">
                Share Your Story
              </button>
              <button className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                Explore More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;