
import { Card, CardContent } from "@/components/ui/card";

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="rounded-full w-12 h-12 object-cover"
            />
          ) : (
            <div className="rounded-full w-12 h-12 bg-bakery-pink flex items-center justify-center text-bakery-brown font-medium">
              {testimonial.name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-bakery-brown">
              {testimonial.name}
            </h4>
            {testimonial.role && (
              <p className="text-bakery-brown/70 text-sm">{testimonial.role}</p>
            )}
          </div>
        </div>

        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < testimonial.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-bakery-brown/80 italic">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
