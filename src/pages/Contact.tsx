
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
              Get in Touch
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              Have questions, special requests, or want to place an order? We'd love to hear from you!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <ScrollReveal>
              <div className="bg-bakery-cream/30 p-8 rounded-lg h-full">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-bakery-brown mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-bakery-brown text-lg mb-1">
                        Visit Us
                      </h3>
                      <p className="text-bakery-brown/80">
                        123 Main Street, Sweet Town, CA 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-bakery-brown text-lg mb-1">
                        Opening Hours
                      </h3>
                      <p className="text-bakery-brown/80">
                        Monday - Friday: 7:00 AM - 7:00 PM
                        <br />
                        Saturday: 8:00 AM - 8:00 PM
                        <br />
                        Sunday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-bakery-brown text-lg mb-1">
                        Call Us
                      </h3>
                      <p className="text-bakery-brown/80">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-bakery-brown text-lg mb-1">
                        Email Us
                      </h3>
                      <p className="text-bakery-brown/80">
                        hello@sweetcrumbs.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="mt-8">
                  <h3 className="font-semibold text-bakery-brown text-lg mb-3">
                    Need a quick response?
                  </h3>
                  <Button
                    className="bg-[#25D366] hover:bg-[#20BD5C] text-white w-full flex items-center justify-center"
                    onClick={() => window.open("https://wa.me/15551234567", "_blank")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="mr-2"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-bakery-brown mb-6">
                  Send Us a Message
                </h2>

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
                      placeholder="John Doe"
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
                      placeholder="johndoe@example.com"
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Order Inquiry"
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-bakery-brown mb-1"
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you today?"
                      rows={5}
                      required
                      className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-bakery-brown hover:bg-bakery-brown/90 text-white w-full mt-4"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606179137!2d-122.42047248482573!3d37.77059997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1d00462111%3A0xbf4f45d20081d745!2sGolden%20Gate%20Bakery!5e0!3m2!1sen!2sus!4v1653018932699!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sweet Crumbs Bakery Location"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
