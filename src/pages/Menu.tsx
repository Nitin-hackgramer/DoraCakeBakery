import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard, { Product } from "@/components/ProductCard";
import { useMenu } from "../hooks/useMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Filter, Loader2 } from "lucide-react";

const MenuPage = () => {
  const menuProducts = useMenu();
  
  // Static fallback products data
  const staticProducts: Product[] = [
    // Cakes
    {
      id: "classic-chocolate-cake",
      name: "Classic Chocolate Cake",
      category: "Cakes",
      description: "Rich, moist chocolate cake with smooth ganache and chocolate shavings.",
      price: 32.99,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    },
    {
      id: "red-velvet-cake",
      name: "Red Velvet Cake",
      category: "Cakes",
      description: "Velvety smooth cake with cream cheese frosting and a hint of cocoa.",
      price: 35.99,
      image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800",
      tags: ["Bestseller"],
    },
    {
      id: "vanilla-bean-cake",
      name: "Vanilla Bean Cake",
      category: "Cakes",
      description: "Light, fluffy vanilla cake with real vanilla bean and buttercream frosting.",
      price: 30.99,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
    },
    {
      id: "carrot-cake",
      name: "Carrot Cake",
      category: "Cakes",
      description: "Spiced carrot cake with walnuts and cream cheese frosting.",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800",
    },
    // Pastries
    {
      id: "croissant",
      name: "Butter Croissant",
      category: "Pastries",
      description: "Flaky, buttery layers with a golden crust and soft interior.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
      tags: ["Bestseller"],
    },
    {
      id: "pain-au-chocolat",
      name: "Pain au Chocolat",
      category: "Pastries",
      description: "Flaky pastry filled with rich dark chocolate.",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800",
    },
    {
      id: "fruit-tart",
      name: "Fruit Tart",
      category: "Pastries",
      description: "Buttery shortcrust pastry filled with vanilla custard and topped with fresh seasonal fruits.",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=800",
    },
    {
      id: "macarons",
      name: "French Macarons",
      category: "Pastries",
      description: "Delicate almond meringue cookies with ganache filling.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800",
      tags: ["Gluten-Free"],
    },
    // Breads
    {
      id: "sourdough",
      name: "Artisan Sourdough",
      category: "Bread",
      description: "Traditional sourdough with a crispy crust and tangy flavor.",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800",
    },
    {
      id: "baguette",
      name: "French Baguette", 
      category: "Bread",
      description: "Classic French bread with a crisp crust and soft, chewy interior.",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800",
    },
    {
      id: "multigrain",
      name: "Multigrain Loaf",
      category: "Bread", 
      description: "Hearty bread with a mix of grains and seeds for extra nutrition and flavor.",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      tags: ["Healthy"],
    },
    {
      id: "ciabatta",
      name: "Ciabatta Bread",
      category: "Bread",
      description: "Italian bread with a crisp crust and soft, airy interior.",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800",
    },
    // Seasonal
    {
      id: "pumpkin-spice-cake",
      name: "Pumpkin Spice Cake",
      category: "Seasonal",
      description: "Moist pumpkin cake with warm spices and cream cheese frosting.",
      price: 33.99,
      image: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=800",
      tags: ["Seasonal"],
    },
    {
      id: "gingerbread-cookies",
      name: "Gingerbread Cookies",
      category: "Seasonal",
      description: "Spiced cookies with the perfect balance of sweetness and warmth.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1481390915718-84930b788814?w=800",
      tags: ["Seasonal"],
    },
  ];

  // Transform API data to match Product interface
  const transformApiData = (apiData: any[]): Product[] => {
    if (!apiData || !Array.isArray(apiData)) return [];
    
    return apiData.map((item: any) => ({
      id: item.id?.toString() || item._id?.toString() || Math.random().toString(),
      name: item.name || item.title || "Unknown Product",
      category: item.category['name'] || "Uncategorized",
      description: item.description || "No description available",
      price: parseFloat(item.price) || 0,
      image: item.image || item.imageUrl || item.img || "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
      tags: item.tags.map((tag: any) => tag.name) || [],
    }));
  };

  // Combine API products with static products
  const allProducts: Product[] = [
    ...transformApiData(menuProducts || []),
    ...staticProducts
  ];

  // State for filtering
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [currentFilter, setCurrentFilter] = useState<string>("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [showFilter, setShowFilter] = useState(false);

  // Get unique categories from all products
  const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];

  // All available filters
  const filters = ["All", "Bestseller", "Gluten-Free", "Healthy", "Seasonal"];

  // Handle filtering
  useEffect(() => {
    let result = [...allProducts];

    // Filter by category
    if (currentCategory !== "All") {
      result = result.filter((product) => product.category === currentCategory);
    }

    // Apply additional filter
    if (currentFilter !== "All") {
      result = result.filter(
        (product) => product.tags && product.tags.includes(currentFilter)
      );
    }

    setFilteredProducts(result);
  }, [currentCategory, currentFilter, menuProducts]);

  // Loading state - simple check if menuProducts is empty initially
  const isLoading = menuProducts.length === 0;

  return (
    <div>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bakery-cream/80 backdrop-blur-sm">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-bakery-brown mx-auto mb-4" />
            <p className="text-bakery-brown text-lg">Loading delicious products...</p>
          </div>
        </div>
      )}
      
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32 bg-bakery-cream">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Our Delicious Menu
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              Explore our handcrafted selection of freshly baked goods, made with love and the finest ingredients.
            </p>
            {/* Show API status */}
            {menuProducts && menuProducts.length > 0 && (
              <div className="mt-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Fresh from our kitchen: {menuProducts.length} new items loaded
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="mb-8 flex flex-wrap justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={currentCategory === category ? "default" : "ghost"}
                className={`mx-1 mb-2 ${
                  currentCategory === category
                    ? "bg-bakery-pink text-bakery-brown hover:bg-bakery-pink/80"
                    : "text-bakery-brown hover:bg-bakery-cream"
                }`}
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center border-bakery-brown/50 text-bakery-brown"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Filter size={18} className="mr-2" />
              {showFilter ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div
              className={`md:w-64 ${
                showFilter ? "block" : "hidden md:block"
              }`}
            >
              <div className="bg-bakery-cream/30 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-bakery-brown mb-4">
                  Dietary Preferences
                </h3>
                <div className="space-y-2">
                  {filters.map((filter) => (
                    <div
                      key={filter}
                      className="flex items-center"
                    >
                      <input
                        type="radio"
                        id={`filter-${filter}`}
                        name="filter"
                        className="mr-2 accent-bakery-pink"
                        checked={currentFilter === filter}
                        onChange={() => setCurrentFilter(filter)}
                      />
                      <label
                        htmlFor={`filter-${filter}`}
                        className="text-bakery-brown cursor-pointer"
                      >
                        {filter}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-bakery-brown/70 text-lg">
                    No items match your selection. Try a different filter.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ScrollReveal key={product.id} delay={index * 100}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 bg-bakery-cream/50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto mb-8">
              We can create custom orders tailored to your preferences and dietary needs. Contact us to discuss your requirements.
            </p>
            <a href="/order">
              <Button className="bg-bakery-brown hover:bg-bakery-brown/90 text-white">
                Request Custom Order
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default MenuPage;
