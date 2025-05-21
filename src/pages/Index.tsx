import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard, { Product } from "@/components/ProductCard";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramFeed from "@/components/InstagramFeed";

const HomePage = () => {
  // Featured products data
  const featuredProducts: Product[] = [
    {
      id: "classic-chocolate-cake",
      name: "Classic Chocolate Cake",
      category: "Cakes",
      description: "Rich, moist chocolate cake with smooth ganache and chocolate shavings.",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1780&auto=format&fit=crop",
    },
    {
      id: "croissant",
      name: "Butter Croissant",
      category: "Pastries",
      description: "Flaky, buttery layers with a golden crust and soft interior.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1226&auto=format&fit=crop",
      tags: ["Bestseller"],
    },
    {
      id: "sourdough",
      name: "Artisan Sourdough",
      category: "Bread",
      description: "Traditional sourdough with a crispy crust and tangy flavor.",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1172&auto=format&fit=crop",
    },
    {
      id: "macarons",
      name: "French Macarons",
      category: "Pastries",
      description: "Delicate almond meringue cookies with ganache filling.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1170&auto=format&fit=crop",
      tags: ["Gluten-Free"],
    },
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Priya Sharma",
      content: "DoraCake Bakery's cakes remind me of home! The flavors are authentic and every bite is a treat. Highly recommended for anyone craving real Indian bakery taste.",
      rating: 5,
    },
    {
      id: "2",
      name: "Rahul Mehta",
      role: "IT Professional",
      content: "We ordered assorted pastries for our Diwali office party and everyone loved them. The quality and freshness were top-notch. Will definitely order again!",
      rating: 5,
    },
    {
      id: "3",
      name: "Anjali Patel",
      content: "Their eggless cakes are perfect for our family celebrations. Soft, delicious, and beautifully decorated. Thank you for making our occasions special!",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1170&auto=format&fit=crop"
            alt="Fresh baked goods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Freshly Baked <span className="text-bakery-pink">Happiness</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
              Artisan breads, decadent pastries, and custom cakes made fresh daily with locally sourced ingredients.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button className="bg-white hover:bg-white/90 text-bakery-brown text-lg px-8 py-6">
                  View Menu
                </Button>
              </Link>
              <Link to="/order">
                <Button className="bg-bakery-pink hover:bg-bakery-pink/90 text-bakery-brown text-lg px-8 py-6">
                  Order Now
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1170&auto=format&fit=crop"
                  alt="Baker making bread"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bakery-brown mb-6">
                  Our Passion for Baking
                </h2>
                <p className="text-bakery-brown/80 mb-6">
                  DoraCake Bakery has been a family-owned business for over a decade. What started as a small operation in our home kitchen has grown into a beloved local bakery that brings joy to our community every day.
                </p>
                <p className="text-bakery-brown/80 mb-8">
                  We take pride in using only the finest ingredients, sourced locally whenever possible. Every item is made fresh daily with love and attention to detail.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bakery-brown mb-4">
                Our Signature Creations
              </h2>
              <p className="text-bakery-brown/80 max-w-2xl mx-auto">
                Discover our most loved creations that keep our customers coming back for more.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 150}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button className="bg-bakery-brown hover:bg-bakery-brown/90 text-white">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bakery-brown mb-4">
                What Our Customers Say
              </h2>
              <p className="text-bakery-brown/80 max-w-2xl mx-auto">
                Don't just take our word for it - hear from some of our happy customers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 200}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials">
              <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-bakery-pink/30">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bakery-brown mb-6">
              Ready to Place an Order?
            </h2>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto mb-8">
              Whether you need a custom cake for a special occasion or want to pre-order your daily bread, we're here to help make your experience sweet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white px-8">
                  Contact Us
                </Button>
              </Link>
              <Link to="/order">
                <Button className="bg-bakery-brown hover:bg-bakery-brown/90 text-white px-8">
                  Order Now
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
