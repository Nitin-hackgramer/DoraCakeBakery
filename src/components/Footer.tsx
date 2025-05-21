
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bakery-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img 
                src="/DoraCake.webp" 
                alt="DoraCake Bakery" 
                className="h-12 w-12 mr-3 object-cover rounded-full" 
              />
              <span className="font-playfair text-xl font-bold text-bakery-brown">
                DoraCake
              </span>
            </div>
            <p className="text-bakery-brown/80 pr-4">
              Bringing joy through freshly baked goods made with love and the finest ingredients since 2010.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com" aria-label="Instagram" className="text-bakery-brown hover:text-bakery-pink transition-colors">
                <Instagram size={22} />
              </a>
              <a href="mailto:doracake@gmail.com" aria-label="Email" className="text-bakery-brown hover:text-bakery-pink transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-bakery-brown">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "About Us", "Blog", "Testimonials", "Order"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`} 
                    className="text-bakery-brown/80 hover:text-bakery-pink transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-bakery-brown">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-bakery-pink mt-1 mr-2" />
                <p className="text-bakery-brown/80">Main Road, Maujpur, Delhi 110053, India</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-bakery-pink mr-2" />
                <p className="text-bakery-brown/80">+91 9968358455</p>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-bakery-pink mr-2" />
                <p className="text-bakery-brown/80">doracake@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4 text-bakery-brown">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock size={18} className="text-bakery-pink mt-1 mr-2" />
                <div>
                  <p className="text-bakery-brown/80">Mon - Fri: 7:00 AM - 7:00 PM</p>
                  <p className="text-bakery-brown/80">Saturday: 8:00 AM - 8:00 PM</p>
                  <p className="text-bakery-brown/80">Sunday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bakery-brown/10 mt-10 pt-6 text-center text-sm text-bakery-brown/70">
          <p>© {new Date().getFullYear()} DoraCake Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
