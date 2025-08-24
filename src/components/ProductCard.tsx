import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const generateWhatsAppMessage = () => {
    const message = `Hi! I'm interested in ordering:
    
    Product: ${product.name}
    Category: ${product.category}
    Price: $${product.price.toFixed(2)}
    Description: ${product.description}

    Could you please help me with this order?`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9968358455/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-2 left-2 flex gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-bakery-pink text-bakery-brown text-xs px-2 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-playfair text-xl font-semibold text-bakery-brown">
              {product.name}
            </h3>
            <span className="font-semibold text-bakery-brown">${product.price.toFixed(2)}</span>
          </div>
          <p className="text-bakery-brown/70 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          {/* Collapsible Description */}
          {showDescription && (
            <div className="mb-4 p-3 bg-bakery-cream/30 rounded-lg transition-all duration-300 ease-in-out">
              <p className="text-bakery-brown text-sm">
                {product.description}
              </p>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              className="text-bakery-brown border-bakery-brown hover:bg-bakery-brown hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setShowDescription(!showDescription);
              }}
            >
              {showDescription ? "Hide Details" : "Details"}
            </Button>
            <Button 
              className="bg-bakery-pink hover:bg-bakery-pink/80 text-bakery-brown"
              onClick={(e) => {
                e.stopPropagation();
                generateWhatsAppMessage();
              }}
            >
              Order via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Dialog Modal - Centered with Strong Backdrop */}
      {showDialog && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300 ease-out p-4"
          onClick={() => setShowDialog(false)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] shadow-2xl transform transition-all duration-500 ease-out scale-100 flex flex-col overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 hover:rotate-90 shadow-lg"
            >
              <X size={20} className="text-gray-700" />
            </button>
            
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags && product.tags.length > 0 && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="bg-bakery-pink text-bakery-brown text-sm px-3 py-1 rounded-full font-medium shadow-lg"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-playfair text-3xl font-bold text-bakery-brown">
                    {product.name}
                  </h2>
                  <span className="text-2xl font-bold text-bakery-brown bg-bakery-cream/50 px-4 py-2 rounded-full">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-bakery-brown/60 text-lg font-medium">
                  {product.category}
                </p>
              </div>
              
              {/* Description */}
              <div className="flex-1 mb-6">
                <h3 className="font-semibold text-bakery-brown mb-3 text-lg">
                  Description
                </h3>
                <p className="text-bakery-brown/80 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 text-bakery-brown border-bakery-brown/30 hover:bg-bakery-cream hover:border-bakery-brown transition-all duration-300"
                  onClick={() => setShowDialog(false)}
                >
                  Close
                </Button>
                <Button
                  className="flex-1 bg-bakery-pink hover:bg-bakery-pink/80 text-bakery-brown transition-all duration-300 shadow-lg"
                  onClick={() => {
                    generateWhatsAppMessage();
                    setShowDialog(false);
                  }}
                >
                  Order via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
