
import { useEffect, useRef, ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  threshold?: number;
  delay?: number;
};

const ScrollReveal = ({ children, threshold = 0.1, delay = 0 }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-active");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default ScrollReveal;
