
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';
import { FaHackerrank } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">
              <span className="text-purple-primary">M</span>egharaj
            </h3>
            <p className="text-gray-400 mt-2">B.Tech Information Technology Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/megharaj-dandgavhal-832683259/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Meghraj2004" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.hackerrank.com/profile/megharajdandgav1" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-primary transition-colors"
              aria-label="HackerRank"
            >
              <FaHackerrank size={20} />
            </a>
            <a 
              href="mailto:megharajdandgavhal2004@gmail.com" 
              className="text-gray-400 hover:text-purple-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Megharaj Dandgavhal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Made with ❤️ by Megharaj
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
