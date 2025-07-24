import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      title: "Perfect Morning Companion",
      content:
        "This coffee has transformed my mornings. The aroma alone is enough to wake me up, and the taste is absolutely divine. It's become an essential part of my daily routine.",
      date: "2 days ago",
      verified: true,
      product: "Classic Gold Blend",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg",
      rating: 4,
      title: "Rich and Smooth",
      content:
        "As someone who drinks 4-5 cups a day, I can confidently say this is one of the best instant coffees I've tried. The consistency is remarkable.",
      date: "1 week ago",
      verified: true,
      product: "Premium Espresso",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg",
      rating: 5,
      title: "Exceeded Expectations",
      content:
        "I was skeptical about instant coffee, but this completely changed my mind. The flavor profile is complex and satisfying. Will definitely reorder!",
      date: "2 weeks ago",
      verified: true,
      product: "French Vanilla",
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/placeholder.svg",
      rating: 5,
      title: "Family Favorite",
      content:
        "Our whole family loves this coffee. From teenagers to grandparents, everyone finds something to enjoy. It's our go-to choice for family gatherings.",
      date: "3 weeks ago",
      verified: true,
      product: "Classic Gold Blend",
    },
    {
      id: 5,
      name: "Lisa Park",
      avatar: "/placeholder.svg",
      rating: 4,
      title: "Great Value",
      content:
        "The quality-to-price ratio is excellent. You get premium taste without the premium price tag. Perfect for everyday enjoyment.",
      date: "1 month ago",
      verified: true,
      product: "Decaf Delight",
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "/placeholder.svg",
      rating: 5,
      title: "Coffee Shop Quality",
      content:
        "I'm impressed by how close this comes to my favorite coffee shop's taste. Now I can enjoy premium coffee at home anytime I want.",
      date: "1 month ago",
      verified: false,
      product: "Premium Espresso",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-accent text-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-20 latte-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            Customer Reviews
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Coffee Lovers
            <span className="text-accent"> Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Nescafé their
            daily choice for perfect coffee moments.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 mb-12 text-center latte-shadow">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.8</div>
              <div className="flex items-center justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-muted-foreground">
                Based on 1,247 reviews
              </div>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-sm w-8">{stars}</span>
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{
                        width: `${
                          stars === 5
                            ? 75
                            : stars === 4
                            ? 20
                            : stars === 3
                            ? 3
                            : stars === 2
                            ? 1
                            : 1
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">
                    {stars === 5 ? "75%" : stars === 4 ? "20%" : "3%"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 latte-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              <div className="flex items-center gap-2 mb-4">
                <div className="star-rating">{renderStars(review.rating)}</div>
                <span className="text-sm text-muted-foreground">
                  {review.date}
                </span>
              </div>

              <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                {review.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {review.content}
              </p>

              {/* Product Badge */}
              <Badge className="mb-4 bg-accent/20 text-accent-foreground text-xs">
                {review.product}
              </Badge>

              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback className="bg-accent/20 text-accent-foreground">
                    {getInitials(review.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-primary">
                      {review.name}
                    </span>
                    {review.verified && (
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card p-8 rounded-2xl latte-shadow max-w-md mx-auto">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground mb-6">
              Tried our coffee? We'd love to hear from you!
            </p>
            <div className="flex gap-3 justify-center">
              <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
