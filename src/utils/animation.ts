
export const setupScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Add staggered animation for child elements with the .stagger class
        if (entry.target.classList.contains('stagger-children')) {
          const staggerItems = entry.target.querySelectorAll('.stagger-item');
          staggerItems.forEach((item, index) => {
            (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
            item.classList.add('is-visible');
          });
        }
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

// Animation for cursor hover effects
export const setupHoverAnimations = () => {
  const hoverElements = document.querySelectorAll('.hover-animate');
  
  const handleMouseEnter = (e: Event) => {
    const element = e.currentTarget as HTMLElement;
    element.classList.add('is-hovered');
    
    // Add ripple effect for cards
    if (element.classList.contains('portfolio-card')) {
      const ripple = document.createElement('div');
      ripple.classList.add('ripple-effect');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = '0';
      ripple.style.top = '0';
      element.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode === element) {
          element.removeChild(ripple);
        }
      }, 1000);
    }
  };
  
  const handleMouseLeave = (e: Event) => {
    const element = e.currentTarget as HTMLElement;
    element.classList.remove('is-hovered');
  };
  
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
  });
  
  return () => {
    hoverElements.forEach(element => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    });
  };
};

// Page transition animation
export const pageTransition = () => {
  const content = document.querySelector('.page-content');
  if (content) {
    content.classList.add('fade-in-up');
    
    // Add staggered entrance for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      (section as HTMLElement).style.animationDelay = `${0.2 + (index * 0.1)}s`;
      section.classList.add('section-enter');
    });
  }
  
  // Add text splitting effect to section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    title.classList.add('split-text-animation');
  });
};
