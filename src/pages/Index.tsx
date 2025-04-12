
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import ScrollToTop from '@/components/ScrollToTop';
import { setupScrollAnimation, setupHoverAnimations, pageTransition } from '@/utils/animation';

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    // Apply page loading animation with slight delay for visual effect
    const loadTimer = setTimeout(() => {
      document.body.classList.add('page-loaded');
      setPageLoaded(true);
    }, 300);
    
    // Setup other animations
    const cleanup = setupScrollAnimation();
    const hoverCleanup = setupHoverAnimations();
    pageTransition();
    
    // Add cursor trail effect with enhanced interaction
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);
    
    let trailSize = 20;
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top = e.clientY + 'px';
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.closest('.portfolio-card');
      
      // Modify cursor trail based on interaction
      if (isInteractive) {
        trailSize = 30;
        cursorTrail.style.width = `${trailSize}px`;
        cursorTrail.style.height = `${trailSize}px`;
        cursorTrail.style.background = 'radial-gradient(circle, rgba(139,92,246,0.9) 0%, rgba(139,92,246,0) 70%)';
      } else {
        trailSize = 20;
        cursorTrail.style.width = `${trailSize}px`;
        cursorTrail.style.height = `${trailSize}px`;
        cursorTrail.style.background = 'radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(139,92,246,0) 70%)';
      }
    };
    
    // Add click effect
    const handleClick = (e: MouseEvent) => {
      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'cursor-trail';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '5px';
      ripple.style.height = '5px';
      ripple.style.background = 'radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(139,92,246,0) 70%)';
      document.body.appendChild(ripple);
      
      // Animate the ripple
      let size = 0;
      const growRipple = setInterval(() => {
        size += 3;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.opacity = `${1 - size/100}`;
        
        if (size > 50) {
          clearInterval(growRipple);
          document.body.removeChild(ripple);
        }
      }, 10);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      clearTimeout(loadTimer);
      cleanup();
      hoverCleanup();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (cursorTrail.parentNode) {
        cursorTrail.parentNode.removeChild(cursorTrail);
      }
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <div className={`min-h-screen bg-dark text-white page-content ${pageLoaded ? 'fade-in-up' : ''}`}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
