
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
        name: "Priya Sharma",
        content: "DoraCake's rasmalai cake was the highlight of my daughter's birthday! The fusion of traditional Indian flavors with modern cake design was spectacular. Their attention to detail and quality is unmatched.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      },
      {
        id: "2",
        name: "Rajesh Patel",
        role: "Restaurant Owner",
        content: "We regularly order tea cakes and cookies for our restaurant's dessert menu. Their eggless options are perfect for our vegetarian customers. The quality and taste are consistently excellent!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      },
      {
        id: "3",
        name: "Anjali Gupta",
        content: "Their paan-flavored macarons are innovative and delicious! It's wonderful to see Indian flavors being incorporated so beautifully into French pastries. Also, their dry fruit cake during Diwali is a must-try!",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
      },
      {
        id: "4",
        name: "Arjun Mehta",
        content: "Ordered a designer cake for my parents' 25th anniversary. The gold-themed decorations and butterscotch flavor were perfect. Everyone at the party was impressed!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      },
      {
        id: "5",
        name: "Meera Iyer",
        role: "Food & Lifestyle Blogger",
        content: "Being a food blogger, I've tried countless bakeries, but DoraCake's fusion desserts are unique. Their mango-coconut pastry during summer season is absolutely divine!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
      },
      {
        id: "6",
        name: "Kabir Sinha",
        content: "Their sugar-free options are a blessing! As a diabetic, I can finally enjoy quality desserts. The sugar-free kaju katli cake during festivals is my favorite.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      },
      {
        id: "7",
        name: "Zara Khan",
        content: "The staff is extremely courteous and helpful. Their Eid special box of assorted pastries was a hit with my family. The quality of ingredients used is evident in every bite!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
      },
      {
        id: "8",
        name: "Vikram Reddy",
        content: "Our wedding cake from DoraCake was spectacular! They perfectly executed the traditional South Indian design elements we wanted. The red velvet flavor was loved by all guests.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3",
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
                  We'd love to hear about your experience with DoraCake Bakery. Your feedback helps us improve!
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
