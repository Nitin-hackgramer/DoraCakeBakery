
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const OrderPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    product: "",
    size: "",
    flavor: "",
    quantity: "1",
    specialRequirements: "",
    allergies: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
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
        title: "Order Received!",
        description: "We'll contact you shortly to confirm your order details.",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        orderType: "",
        product: "",
        size: "",
        flavor: "",
        quantity: "1",
        specialRequirements: "",
        allergies: "",
      });
      setDate(undefined);
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
              Place Your Order
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              Custom cakes, bulk orders, or special occasions - we're here to create something delicious just for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-bakery-cream/30 p-8 rounded-lg shadow-md">
              <div className="mb-8">
                <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                  Order Request Form
                </h2>
                <p className="text-bakery-brown/80">
                  Please fill out the form below with your order details. We'll contact you to confirm availability and finalize your order.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-4">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
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
                      <Label htmlFor="email">Email Address *</Label>
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
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-4">
                    Order Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="orderType">Order Type *</Label>
                      <Select
                        value={formData.orderType}
                        onValueChange={(value) => handleSelectChange("orderType", value)}
                      >
                        <SelectTrigger className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink">
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom-cake">Custom Cake</SelectItem>
                          <SelectItem value="standard-cake">Standard Cake</SelectItem>
                          <SelectItem value="pastries">Pastries</SelectItem>
                          <SelectItem value="bread">Bread</SelectItem>
                          <SelectItem value="bulk-order">Bulk Order</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="product">Product *</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => handleSelectChange("product", value)}
                      >
                        <SelectTrigger className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday-cake">Birthday Cake</SelectItem>
                          <SelectItem value="wedding-cake">Wedding Cake</SelectItem>
                          <SelectItem value="special-occasion">Special Occasion Cake</SelectItem>
                          <SelectItem value="cupcakes">Cupcakes</SelectItem>
                          <SelectItem value="pastry-selection">Pastry Selection</SelectItem>
                          <SelectItem value="bread-selection">Bread Selection</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="size">Size</Label>
                      <Select
                        value={formData.size}
                        onValueChange={(value) => handleSelectChange("size", value)}
                      >
                        <SelectTrigger className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (6-8 servings)</SelectItem>
                          <SelectItem value="medium">Medium (10-12 servings)</SelectItem>
                          <SelectItem value="large">Large (14-16 servings)</SelectItem>
                          <SelectItem value="x-large">X-Large (20+ servings)</SelectItem>
                          <SelectItem value="custom">Custom Size</SelectItem>
                          <SelectItem value="na">Not Applicable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="flavor">Flavor</Label>
                      <Select
                        value={formData.flavor}
                        onValueChange={(value) => handleSelectChange("flavor", value)}
                      >
                        <SelectTrigger className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink">
                          <SelectValue placeholder="Select flavor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chocolate">Chocolate</SelectItem>
                          <SelectItem value="vanilla">Vanilla</SelectItem>
                          <SelectItem value="red-velvet">Red Velvet</SelectItem>
                          <SelectItem value="carrot">Carrot</SelectItem>
                          <SelectItem value="lemon">Lemon</SelectItem>
                          <SelectItem value="strawberry">Strawberry</SelectItem>
                          <SelectItem value="other">Other (please specify)</SelectItem>
                          <SelectItem value="na">Not Applicable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                      />
                    </div>

                    <div>
                      <Label htmlFor="date">Delivery/Pickup Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal border-bakery-brown/20 ${!date && "text-muted-foreground"}`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable dates in the past
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-4">
                    Additional Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        placeholder="Any special design requests, message on cake, etc."
                        rows={3}
                        className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                      />
                    </div>

                    <div>
                      <Label htmlFor="allergies">Allergies or Dietary Restrictions</Label>
                      <Textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="Please mention any allergies or dietary restrictions we should know about."
                        rows={2}
                        className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-bakery-brown hover:bg-bakery-brown/90 text-white w-full"
                >
                  {loading ? "Submitting Order..." : "Submit Order Request"}
                </Button>

                <p className="text-center text-sm text-bakery-brown/70">
                  * Required fields. We'll contact you within 24 hours to confirm your order details.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Order Options */}
      <section className="py-16 bg-bakery-cream/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
                Need a Quick Order?
              </h2>
              <p className="text-bakery-brown/80 max-w-2xl mx-auto">
                For immediate assistance or same-day orders (subject to availability), please contact us directly.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={200}>
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
                  onClick={() => window.location.href = "tel:+15551234567"}
                >
                  Call (555) 123-4567
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
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
                  onClick={() => window.open("https://wa.me/15551234567", "_blank")}
                >
                  Chat on WhatsApp
                </Button>
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

export default OrderPage;
