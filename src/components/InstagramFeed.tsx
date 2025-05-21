
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?q=80&w=1286&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=986&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1050&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557925923-cd4648e211a0?q=80&w=1287&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1287&auto=format&fit=crop",
    ]);

  return (
    <section className="py-16 bg-bakery-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bakery-brown mb-3">
            Follow us on Instagram
          </h2>
          <div className="flex items-center justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-bakery-brown hover:text-bakery-pink transition-colors"
            >
              <Instagram className="mr-2" />
              @DoraCake
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-bakery-brown/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <Instagram className="text-white" size={32} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
