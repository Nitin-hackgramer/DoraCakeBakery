
import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  const [images, setImages] = useState([
    "/src/assets/instagram-1.jpg",
    "/src/assets/instagram-2.jpg",
    "/src/assets/instagram-3.jpg",
    "/src/assets/instagram-4.jpg",
    "/src/assets/instagram-5.jpg",
    "/src/assets/instagram-6.jpg",
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
              @sweetcrumbsbakery
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
