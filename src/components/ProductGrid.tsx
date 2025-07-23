import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Package } from "lucide-react";
import productImage from "@/assets/nescafe-sachet.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Classic Gold Blend",
      description: "Rich, aromatic instant coffee with a smooth finish",
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.8,
      reviews: 324,
      image: productImage,
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Espresso",
      description: "Bold and intense flavor for the perfect espresso experience",
      price: 16.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 198,
      image: productImage,
      badge: "Premium",
      inStock: true
    },
    {
      id: 3,
      name: "Decaf Delight",
      description: "All the flavor without the caffeine - perfect for evenings",
      price: 13.99,
      originalPrice: 16.99,
      rating: 4.6,
      reviews: 156,
      image: productImage,
      badge: "Decaf",
      inStock: false
    },
    {
      id: 4,
      name: "French Vanilla",
      description: "Smooth coffee with delicate vanilla notes",
      price: 14.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 289,
      image: productImage,
      badge: "New",
      inStock: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-accent text-accent"
            : index < rating
            ? "fill-accent/50 text-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground">
            Our Collection
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Discover Your Perfect
            <span className="text-accent"> Coffee Blend</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From bold espressos to smooth decafs, find the perfect cup that matches your mood and moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="product-card group relative overflow-hidden">
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge 
                  className={`
                    ${product.badge === 'Best Seller' ? 'bg-accent text-accent-foreground' : ''}
                    ${product.badge === 'Premium' ? 'bg-primary text-primary-foreground' : ''}
                    ${product.badge === 'New' ? 'bg-green-500 text-white' : ''}
                    ${product.badge === 'Decaf' ? 'bg-blue-500 text-white' : ''}
                  `}
                >
                  {product.badge}
                </Badge>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
              </button>

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-primary">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="star-rating">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full coffee-gradient text-primary-foreground hover:scale-105 transition-transform"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Notify Me'}
                </Button>

                {/* Stock Status */}
                <div className="flex items-center gap-2 text-sm">
                  <Package className="w-4 h-4" />
                  <span className={product.inStock ? 'text-green-600' : 'text-red-500'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;