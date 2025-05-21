
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
        <div className="flex justify-between items-center">
          <Link to={`/menu/${product.id}`}>
            <Button variant="outline" className="text-bakery-brown border-bakery-brown hover:bg-bakery-brown hover:text-white">
              Details
            </Button>
          </Link>
          <Button className="bg-bakery-pink hover:bg-bakery-pink/80 text-bakery-brown">
            Add to Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
