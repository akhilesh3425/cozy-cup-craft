import { Card } from "@/components/ui/card";
import coupleImage from "@/assets/couple-coffee.jpg";

const MomentsSection = () => {
  const moments = [
    {
      title: "Morning Rituals",
      description: "Start each day with the comforting aroma and rich taste that awakens your senses.",
      image: coupleImage,
      time: "6:30 AM"
    },
    {
      title: "Afternoon Breaks",
      description: "Take a moment to pause and recharge with the perfect midday coffee companion.",
      image: coupleImage,
      time: "2:00 PM"
    },
    {
      title: "Evening Comfort",
      description: "Wind down your day with the familiar warmth of your favorite coffee blend.",
      image: coupleImage,
      time: "7:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Coffee for Every
            <span className="text-accent"> Moment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From the first sip that starts your day to the last that helps you unwind, 
            Nescafé is there for all of life's precious moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:scale-105 transition-transform duration-300 coffee-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={moment.image} 
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {moment.time}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  {moment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {moment.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-card p-8 rounded-2xl coffee-shadow">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              "The perfect cup, every single time"
            </h3>
            <p className="text-muted-foreground">
              ★★★★★ Over 10,000 happy customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;