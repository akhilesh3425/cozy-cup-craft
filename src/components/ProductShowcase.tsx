import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/nescafe-sachet.jpg";

const ProductShowcase = () => {
  return (
    <section className="py-20 warm-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground">Premium Quality</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Crafted for Perfection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every sachet contains the perfect blend of premium coffee beans, 
            carefully selected and expertly roasted for that signature Nescafé taste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 coffee-gradient rounded-3xl blur-3xl opacity-20 scale-110" />
            <Card className="relative overflow-hidden coffee-shadow float-animation">
              <img 
                src={productImage} 
                alt="Nescafé Coffee Sachet" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                Premium Instant Coffee
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our carefully crafted sachets deliver the perfect cup every time. 
                Rich, aromatic, and made from the finest coffee beans sourced from 
                the world's best coffee-growing regions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-xl border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Premium Beans</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <div className="text-2xl font-bold text-primary">30sec</div>
                <div className="text-sm text-muted-foreground">Brewing Time</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <div className="text-2xl font-bold text-primary">Rich</div>
                <div className="text-sm text-muted-foreground">Aroma</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border">
                <div className="text-2xl font-bold text-primary">Perfect</div>
                <div className="text-sm text-muted-foreground">Every Time</div>
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-xl">
              <h4 className="font-semibold text-primary mb-2">What Makes It Special</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Sustainably sourced coffee beans
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Individual sachets for perfect freshness
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  Rich, full-bodied flavor profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;