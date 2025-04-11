import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full ${scrolled ? 'bg-background-DEFAULT/90' : 'bg-background-DEFAULT'} backdrop-blur-sm z-50 border-b border-gray-800 transition-colors duration-300`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold text-white font-display tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('hero');
            }}
          >
            Megharaj<span className="text-primary-light">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a 
              href="/assets/MegharajDandgavhal_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="MegharajDandgavhal_Resume.pdf"
              className="text-gray-300 hover:text-primary-light transition-colors flex items-center group btn-pulse"
            >
              Resume
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transform group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden pt-4 pb-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            {['about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            
            <a 
              href="/assets/MegharajDandgavhal_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="MegharajDandgavhal_Resume.pdf"
              className="text-gray-300 hover:text-primary-light transition-colors flex items-center group mt-2 border-t border-gray-700 pt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="border-glow px-2 py-1 rounded-md">Resume</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transform group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
