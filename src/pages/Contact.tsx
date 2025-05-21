
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
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-4 md:mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-bakery-brown/80 text-base md:text-lg max-w-2xl mx-auto">
              Have questions, special requests, or want to place an order? We'd love to hear from you!
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-start">
            
            {/* Contact Info */}
            <div className="flex-1 w-full">
              <ScrollReveal>
                <div className="bg-bakery-cream/30 p-6 md:p-8 rounded-2xl shadow-md h-full w-full">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-bakery-brown mb-6 text-center">
                    Contact Information
                  </h2>
                  <div className="space-y-6 mb-10">
                    {[
                      {
                        icon: <MapPin size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />,
                        title: "Visit Us",
                        desc: "123 Main Street, Sweet Town, CA 12345",
                      },
                      {
                        icon: <Clock size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />,
                        title: "Opening Hours",
                        desc: `Monday - Friday: 7:00 AM - 7:00 PM\nSaturday: 8:00 AM - 8:00 PM\nSunday: 8:00 AM - 5:00 PM`,
                      },
                      {
                        icon: <Phone size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />,
                        title: "Call Us",
                        desc: "+1 (555) 123-4567",
                      },
                      {
                        icon: <Mail size={22} className="text-bakery-pink mt-1 mr-3 flex-shrink-0" />,
                        title: "Email Us",
                        desc: "hello@sweetcrumbs.com",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        {item.icon}
                        <div>
                          <h3 className="font-semibold text-bakery-brown text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-bakery-brown/80 whitespace-pre-line">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-bakery-brown text-lg mb-4 text-center">
                      Need a quick response?
                    </h3>
                    <Button
                      className="bg-[#25D366] hover:bg-[#20BD5C] text-white w-full flex items-center justify-center transition duration-200 py-2 text-base font-medium shadow-lg rounded-lg"
                      onClick={() => window.open("https://wa.me/15551234567", "_blank")}
                    >
                      {/* Lucide WhatsApp Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mr-2"
                        style={{ minWidth: 24, minHeight: 24 }}
                      >
                        <path
                          d="M16.472 13.714c-.246-.123-1.453-.719-1.678-.801-.225-.082-.389-.123-.553.123-.164.246-.633.801-.775.967-.143.164-.287.184-.533.061-.246-.123-1.037-.382-1.977-1.217-.731-.652-1.225-1.457-1.37-1.703-.143-.246-.015-.379.108-.501.111-.111.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.553-1.336-.757-1.832-.2-.48-.403-.414-.553-.422l-.47-.008c-.164 0-.43.061-.656.287-.225.225-.86.84-.86 2.048 0 1.209.88 2.377 1.002 2.541.123.164 1.732 2.646 4.2 3.6.588.202 1.045.322 1.402.412.589.141 1.126.121 1.551.073.473-.055 1.453-.594 1.658-1.168.205-.574.205-1.066.143-1.168-.061-.102-.225-.164-.471-.287z"
                          fill="#fff"
                        />
                        <path
                          d="M12 21c-1.657 0-3.313-.432-4.75-1.25l-4.25 1.25 1.25-4.25C3.432 15.313 3 13.657 3 12c0-4.971 4.029-9 9-9s9 4.029 9 9-4.029 9-9 9z"
                          stroke="#fff"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                      <span className="font-sans text-base font-medium">
                        WhatsApp Us
                      </span>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Google Map */}
            <div className="flex-1 w-full">
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full min-h-[350px]">
                  <iframe
                    src="https://maps.google.com/maps?q=28.6700,77.2700&z=11&output=embed"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ border: 0, minHeight: 350 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bakery Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>    
  );
};

export default ContactPage;
