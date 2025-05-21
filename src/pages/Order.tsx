import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const OrderPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-bakery-cream">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Place Your Order
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              Custom cakes, bulk orders, or special occasions - we're here to create something delicious just for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Order Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-bakery-cream/30 p-8 rounded-lg shadow-md">
              <div className="mb-8 text-center">
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                  Quick Order
                </h2>
                <p className="text-bakery-brown/80">
                  For immediate assistance or same-day orders (subject to availability), please contact us directly by phone or WhatsApp.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
                  <Clock className="w-10 h-10 mx-auto text-bakery-pink mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-2">
                    Call Us
                  </h3>
                  <p className="text-bakery-brown/80 mb-4">
                    Call us directly for immediate assistance with your order.
                  </p>
                  <Button
                    className="bg-bakery-brown hover:bg-bakery-brown/90 text-white w-full"
                    onClick={() => window.location.href = "tel:+9968358455"}
                  >
                    Call +91 9988776655
                  </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 mx-auto text-[#25D366] mb-4"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-bakery-brown/80 mb-4">
                    Message us on WhatsApp for fast responses and order status updates.
                  </p>
                  <Button
                    className="bg-[#25D366] hover:bg-[#20BD5C] text-white w-full"
                    onClick={() => window.open("https://wa.me/9968358455", "_blank")}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default OrderPage;
