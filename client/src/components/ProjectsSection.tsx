import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  role: string;
  tags: Array<{
    name: string;
    color: string;
    bgColor: string;
  }>;
  image: JSX.Element;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'MensFyt',
      description: 'E-commerce platform specialized for men\'s fashion with personalized recommendations, smart filtering, and an intuitive shopping experience.',
      role: 'Frontend Developer - Designed and implemented responsive user interface components using React, managed state with Redux, and created custom product filtering and recommendation system.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Redux', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
        { name: 'TailwindCSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
        { name: 'REST API', color: 'text-green-400', bgColor: 'bg-green-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>MensFyt E-commerce Platform</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="200" height="200" rx="5" fill="#374151" />
          <rect x="380" y="100" width="270" height="40" rx="5" fill="#4B5563" />
          <rect x="380" y="160" width="270" height="20" rx="5" fill="#6B7280" />
          <rect x="380" y="200" width="270" height="20" rx="5" fill="#6B7280" />
          <rect x="380" y="240" width="150" height="40" rx="5" fill="#1E40AF" />
        </svg>
      )
    },
    {
      title: 'Graphical Password Authentication',
      description: 'Enhanced security system using image/color/alphanumeric based login mechanisms to prevent common password vulnerabilities.',
      role: 'Frontend Developer - Built interactive authentication interface with drag-and-drop functionality, color selection mechanism, and pattern recognition features using vanilla JavaScript.',
      tags: [
        { name: 'HTML5', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'CSS3', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'JavaScript', color: 'text-yellow-400', bgColor: 'bg-yellow-500/20' },
        { name: 'Responsive Design', color: 'text-pink-400', bgColor: 'bg-pink-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>Graphical Password Authentication</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="150" y="75" width="500" height="250" rx="10" fill="#272727" />
          <circle cx="250" cy="150" r="40" fill="#3B82F6" />
          <circle cx="350" cy="150" r="40" fill="#EF4444" />
          <circle cx="450" cy="150" r="40" fill="#10B981" />
          <circle cx="550" cy="150" r="40" fill="#F59E0B" />
          <rect x="250" y="220" width="300" height="40" rx="5" fill="#4B5563" />
          <rect x="350" y="280" width="100" height="30" rx="15" fill="#1E40AF" />
        </svg>
      )
    },
    {
      title: 'Restaurant Reservation System',
      description: 'Real-time reservation platform allowing customers to book tables with integrated calendar and live availability updates.',
      role: 'Frontend Developer - Developed interactive seat selection interface, implemented real-time availability updates with WebSockets, and created custom date/time picker component.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-600/20' },
        { name: 'WebSockets', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
        { name: 'Styled Components', color: 'text-pink-400', bgColor: 'bg-pink-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>Restaurant Reservation System</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="200" height="200" rx="5" fill="#374151" />
          <circle cx="250" cy="150" r="30" fill="#4B5563" />
          <circle cx="310" cy="200" r="30" fill="#4B5563" />
          <circle cx="190" cy="200" r="30" fill="#4B5563" />
          <rect x="380" y="100" width="270" height="40" rx="5" fill="#4B5563" />
          <rect x="380" y="160" width="270" height="60" rx="5" fill="#6B7280" />
          <rect x="380" y="240" width="150" height="40" rx="5" fill="#1E40AF" />
        </svg>
      )
    },
    {
      title: 'Disaster Response Platform',
      description: 'Real-time platform for coordinating shelters and volunteers during emergency situations with interactive mapping and resource management.',
      role: 'Frontend Developer - Created interactive mapping system with real-time updates, implemented data visualization for resource allocation, and built responsive volunteer coordination dashboard.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Leaflet Maps', color: 'text-green-400', bgColor: 'bg-green-500/20' },
        { name: 'D3.js', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'Material UI', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>Disaster Response Platform</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <path d="M400,100 L500,200 L300,200 Z" fill="#EF4444" />
          <circle cx="400" cy="250" r="40" fill="#3B82F6" />
          <rect x="200" y="280" width="400" height="30" rx="5" fill="#4B5563" />
          <circle cx="220" cy="150" r="30" fill="#10B981" />
          <circle cx="580" cy="150" r="30" fill="#F59E0B" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center relative inline-block">
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-light rounded-full"></span>
            Frontend Development Projects
          </h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto mt-6">
            As a frontend developer, I've created engaging user interfaces and interactive experiences for various applications. Here are some highlighted projects:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card bg-background-surface rounded-xl overflow-hidden border border-gray-800 card-hover"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden img-zoom">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-primary-light transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4 bg-background-card p-3 rounded-lg border-l-4 border-primary-light hover-lift">
                  <p className="text-primary-light font-medium text-sm mb-1">MY ROLE</p>
                  <p className="text-gray-300 text-sm">
                    {project.role}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 ${tag.bgColor} ${tag.color} rounded-full text-sm transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href="#" className="btn-pulse text-primary-light font-medium hover:underline inline-flex items-center group transition-all duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
