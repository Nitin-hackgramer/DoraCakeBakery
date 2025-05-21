
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="/DoraCake.webp"
            alt="DoraCake Bakery" 
            className="h-12 w-12 mr-3 object-cover rounded-full" 
          />
          <span className="font-playfair text-xl md:text-2xl font-bold text-bakery-brown">
            DoraCake
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-bakery-brown hover:text-bakery-brown-light font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="/order">
            <Button className="bg-bakery-pink hover:bg-bakery-pink/80 text-bakery-brown">
              Order Now
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="text-bakery-brown hover:text-bakery-brown-light p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-bakery-cream absolute top-full left-0 w-full shadow-md animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-bakery-brown hover:text-bakery-brown-light py-2 border-b border-bakery-brown/10"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-bakery-pink hover:bg-bakery-pink/80 text-bakery-brown w-full mt-2"
              onClick={closeMenu}
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
