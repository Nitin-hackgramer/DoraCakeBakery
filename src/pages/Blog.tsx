
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogPostCard, { BlogPost } from "@/components/BlogPostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Blog posts data
  const allBlogPosts: BlogPost[] = [
    {
      id: "perfect-sourdough",
      title: "The Secret to Perfect Sourdough Bread",
      excerpt: "Learn the techniques and tips for creating bakery-quality sourdough bread in your home kitchen.",
      content: "Full article content here...",
      image: "/src/assets/blog-sourdough.jpg",
      date: "2023-05-15",
      author: "Emma Wilson",
      category: "Bread Making",
    },
    {
      id: "cake-decorating",
      title: "Cake Decorating Basics Every Home Baker Should Know",
      excerpt: "Master these fundamental cake decorating skills to take your homemade cakes to the next level.",
      content: "Full article content here...",
      image: "/src/assets/blog-cake-decorating.jpg",
      date: "2023-04-22",
      author: "David Chen",
      category: "Cake Decorating",
    },
    {
      id: "seasonal-ingredients",
      title: "Baking with Seasonal Ingredients: Spring Edition",
      excerpt: "Discover how to incorporate fresh spring produce into your baking for vibrant flavors and textures.",
      content: "Full article content here...",
      image: "/src/assets/blog-seasonal.jpg",
      date: "2023-03-10",
      author: "Sophie Miller",
      category: "Seasonal",
    },
    {
      id: "gluten-free",
      title: "Gluten-Free Baking That Doesn't Compromise on Taste",
      excerpt: "Explore our favorite gluten-free recipes and techniques that deliver on flavor and texture.",
      content: "Full article content here...",
      image: "/src/assets/blog-gluten-free.jpg",
      date: "2023-02-18",
      author: "Emma Wilson",
      category: "Dietary Alternatives",
    },
    {
      id: "bread-history",
      title: "The Rich History of Bread Around the World",
      excerpt: "Take a journey through time and across cultures to explore how bread has evolved throughout human history.",
      content: "Full article content here...",
      image: "/src/assets/blog-bread-history.jpg",
      date: "2023-01-30",
      author: "David Chen",
      category: "Food History",
    },
    {
      id: "kitchen-tools",
      title: "Essential Baking Tools Every Home Baker Needs",
      excerpt: "Our master bakers share their must-have tools and equipment for successful home baking.",
      content: "Full article content here...",
      image: "/src/assets/blog-tools.jpg",
      date: "2022-12-12",
      author: "Sophie Miller",
      category: "Baking Tips",
    },
  ];

  // Filter blog posts based on search query
  const filteredPosts = searchQuery
    ? allBlogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allBlogPosts;

  // Get all unique categories
  const categories = Array.from(
    new Set(allBlogPosts.map((post) => post.category).filter(Boolean))
  );

  // Handle category click
  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-bakery-cream">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bakery-brown mb-6">
              Baking Journal
            </h1>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto">
              Tips, techniques, recipes, and stories from our bakery kitchen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Search */}
              <ScrollReveal>
                <div className="relative w-full md:w-96">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
                  />
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bakery-brown/50"
                  />
                </div>
              </ScrollReveal>

              {/* Categories */}
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    className={`text-sm ${
                      searchQuery === ""
                        ? "bg-bakery-pink text-bakery-brown border-bakery-pink"
                        : "text-bakery-brown border-bakery-brown/30"
                    }`}
                    onClick={() => setSearchQuery("")}
                  >
                    All
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className={`text-sm ${
                        searchQuery === category
                          ? "bg-bakery-pink text-bakery-brown border-bakery-pink"
                          : "text-bakery-brown border-bakery-brown/30"
                      }`}
                      onClick={() => handleCategoryClick(category!)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-bakery-brown/70 text-lg">
                No articles found matching your search.
              </p>
              <Button
                className="mt-4 bg-bakery-brown hover:bg-bakery-brown/90 text-white"
                onClick={() => setSearchQuery("")}
              >
                View All Articles
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={index * 150}>
                  <BlogPostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-bakery-pink/20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-playfair text-3xl font-bold text-bakery-brown mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-bakery-brown/80 max-w-2xl mx-auto mb-8">
              Subscribe to receive our latest recipes, baking tips, and special offers directly in your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-bakery-brown/20 focus:border-bakery-pink focus:ring-bakery-pink"
              />
              <Button className="bg-bakery-brown hover:bg-bakery-brown/90 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
