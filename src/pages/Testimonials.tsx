
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const TestimonialsPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  });

  // All testimonials data
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      content: "The cakes from Sweet Crumbs are absolutely divine! I've ordered birthday cakes three years in a row and they never disappoint. The flavors are always balanced perfectly and the decoration is beautiful. Everyone always asks where I got the cake!",
      rating: 5,
      avatar: "/src/assets/testimonial-1.jpg",
    },
    {
      id: "2",
      name: "Mike Thompson",
      role: "Local Business Owner",
      content: "We order pastries weekly for our office meetings and everyone looks forward to Sweet Crumbs day! Fresh, delicious and always on time. The selection is great and they're always willing to accommodate our special requests.",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      content: "Their sourdough bread is the best I've ever tasted. You can tell they put real care into every loaf. I've tried making sourdough at home but nothing compares to theirs. It's worth the trip across town!",
      rating: 4,
      avatar: "/src/assets/testimonial-2.jpg",
    },
    {
      id: "4",
      name: "David Wilson",
      content: "I ordered a custom cake for my daughter's graduation and it exceeded all expectations. Not only was it stunning visually, but it tasted amazing too. The team worked with me to create exactly what I wanted.",
      rating: 5,
      avatar: "/src/assets/testimonial-3.jpg",
    },
    {
      id: "5",
      name: "Lisa Chen",
      role: "Food Blogger",
      content: "As someone who reviews bakeries professionally, I can say that Sweet Crumbs stands out for quality and consistency. Their croissants are particularly exceptional - perfectly flaky and buttery. A true neighborhood gem.",
      rating: 5,
      avatar: "/src/assets/testimonial-4.jpg",
    },
    {
      id: "6",
      name: "James Martinez",
      content: "I appreciate that they offer gluten-free options that actually taste good! As someone with celiac disease, finding delicious baked goods can be challenging, but Sweet Crumbs never makes me feel like I'm missing out.",
      rating: 4,
    },
    {
      id: "7",
      name: "Olivia Taylor",
      content: "The friendly service is just as good as the amazing pastries. Everyone who works there is so knowledgeable and passionate about what they sell. They always have great recommendations!",
      rating: 5,
      avatar: "/src/assets/testimonial-5.jpg",
    },
    {
      id: "8",
      name: "Robert Kim",
      content: "My wedding cake from Sweet Crumbs was a showstopper! Guests are still talking about it months later. The design process was collaborative and fun, and the final product was even better than I imagined.",
      rating: 5,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      rating: parseInt(e.target.value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank You!",
        description: "Your testimonial has been submitted successfully.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        rating: 5,
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-bakery-cream">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Customer Reviews
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              See what our wonderful customers have to say about our bakery and treats.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                  Share Your Experience
                </h2>
                <p className="text-bakery-brown/80">
                  We'd love to hear about your experience with Sweet Crumbs Bakery. Your feedback helps us improve!
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="rating"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Your Rating *
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className="cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            value={star}
                            checked={formData.rating === star}
                            onChange={handleRatingChange}
                            className="sr-only"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-8 w-8 ${
                              formData.rating >= star
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Your Review *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-bakery-brown hover:bg-bakery-brown/90 text-white w-full"
                  >
                    {loading ? "Submitting..." : "Submit Review"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default TestimonialsPage;
