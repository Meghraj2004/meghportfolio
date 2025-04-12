
import { Github, Linkedin, ExternalLink, Mail, Phone, MapPin, } from 'lucide-react';
import resume from "../asseets/resu_April.pdf"
import heropic from "../asseets/heropic.jpg"
import { FaHackerrank } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-dark to-dark-secondary">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-slideInFromLeft">
          <h4 className="text-purple-primary font-medium mb-2 animate-pulse">Hello, I'm</h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white text-gradient">
            Megharaj Dandgavhal
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mb-6 typing">
            {typedText}<span className="cursor">|</span>
          </h2>

          <div className="flex flex-wrap items-center mb-6 text-gray-300 gap-4">
            <div className="flex items-center hover:text-purple-primary transition-colors">
              <MapPin size={16} className="mr-2 text-purple-primary" />
              <span>Jalgaon, Maharashtra, India</span>
            </div>
            <div className="flex items-center hover:text-purple-primary transition-colors">
              <Phone size={16} className="mr-2 text-purple-primary" />
              <span>+91-9421612110</span>
            </div>
            <div className="flex items-center hover:text-purple-primary transition-colors">
              <Mail size={16} className="mr-2 text-purple-primary" />
              <span>megharajdandgavhal2004@gmail.com</span>
            </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/megharaj-dandgavhal-832683259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-primary transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Meghraj2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-primary transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/megharajdandgav1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300"
              aria-label="HackerRank"
            >
              <FaHackerrank size={20} />
            </a>



          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-purple-primary hover:bg-purple-light text-white btn-hover-effect"
              onClick={() => window.open(resume, "_blank")}
            >
              Download Resume
            </Button>
            <Button variant="outline" asChild className="border-gray-600 hover:border-purple-primary btn-hover-effect">
              <a href="#contact" className="text-white hover:text-purple-primary">
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center animate-slideInFromRight">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 floating">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary to-purple-light opacity-30 blur-xl animate-pulse"></div>
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-purple-primary to-purple-light opacity-75 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-dark border-2 border-purple-primary overflow-hidden flex items-center justify-center">
              <img
                src={heropic}
                alt="Megharaj Dandgavhal"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
