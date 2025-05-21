
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bakery-cream/30 px-4">
      <h1 className="font-playfair text-5xl md:text-7xl font-bold text-bakery-brown mb-4 text-center">
        404
      </h1>
      <div className="text-8xl mb-6">🍰</div>
      <p className="text-xl md:text-2xl text-bakery-brown/80 mb-8 text-center max-w-lg">
        Oops! Seems like this page has been eaten. Let's find you something sweet instead!
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button className="bg-bakery-brown hover:bg-bakery-brown/90 text-white">
            Return Home
          </Button>
        </Link>
        <Link to="/menu">
          <Button variant="outline" className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white">
            Browse Our Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
