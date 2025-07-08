
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import resume from "../assets/Megharaj_Dandgavhal_Resume.pdf";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') as string;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white group">
          <span className="bg-gradient-to-r from-purple-primary to-purple-light bg-clip-text text-transparent group-hover:animate-pulse">M</span>
          <span className="group-hover:text-purple-light transition-colors">egharaj</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.href.substring(1) 
                  ? 'text-purple-primary' 
                  : 'text-gray-300 hover:text-purple-primary'
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-purple-primary rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Resume Button - Desktop */}
        <Button 
          className="hidden md:block bg-purple-primary hover:bg-purple-light text-white btn-hover-effect"
          onClick={() => window.open(resume, "_blank")}
        >
          Resume
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} className="text-purple-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-secondary/90 backdrop-blur-md border-t border-gray-800 animate-fadeIn">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-purple-primary'
                    : 'text-gray-300 hover:text-purple-primary'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="w-full bg-purple-primary hover:bg-purple-light text-white mt-4 btn-hover-effect"
              onClick={() => {
                window.open(resume, "_blank");
                setIsMenuOpen(false);
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
