
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category?: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="h-48 sm:h-60 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        {post.category && (
          <span className="inline-block bg-bakery-pink text-bakery-brown text-xs px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
        )}
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-bakery-brown mb-2 hover:text-bakery-brown-light transition-colors">
            {post.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-bakery-brown/70 mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <p className="text-bakery-brown/80 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="font-medium text-bakery-brown inline-flex items-center hover:text-bakery-pink transition-colors"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
