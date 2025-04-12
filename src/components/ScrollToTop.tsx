
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-purple-primary hover:bg-purple-light text-white p-3 rounded-full shadow-lg transition-all duration-500 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-purple-primary before:z-[-1] 
      before:animate-ping-slow before:opacity-70 before:scale-[0.85]`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="animate-bounce" />
    </button>
  );
};

export default ScrollToTop;
