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
  repoUrl: string;
  demoUrl: string; // Added demoUrl field
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'StockEase Nexus Analytics',
      description: 'A comprehensive inventory and sales management system with web and mobile applications for real-time business monitoring, featuring stock alerts, analytics visualization, and cross-platform support.',
      role: 'Full Stack Developer - Built complete web dashboard using React and TypeScript with Firebase Firestore for real-time stock alerts. Integrated Firebase Authentication for secure, role-based access. Developed cross-platform mobile app using React Native for on-the-go inventory tracking. Implemented analytics visualization with Chart.js and responsive UI optimized for multiple devices.',
      tags: [
        { name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-600/20' },
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Firebase', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'React Native', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
        { name: 'Chart.js', color: 'text-pink-400', bgColor: 'bg-pink-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>StockEase Nexus Analytics</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="500" height="40" rx="5" fill="#374151" />
          <rect x="150" y="160" width="240" height="140" rx="5" fill="#4B5563" />
          <rect x="410" y="160" width="240" height="140" rx="5" fill="#374151" />
          <polyline points="170,250 200,220 230,240 260,200 290,210 320,180 350,200" 
                    stroke="#10B981" strokeWidth="3" fill="none" />
          <circle cx="450" cy="200" r="30" fill="#3B82F6" />
          <circle cx="520" cy="200" r="30" fill="#EF4444" />
          <circle cx="590" cy="200" r="30" fill="#F59E0B" />
        </svg>
      ),
      repoUrl: 'https://github.com/Meghraj2004/stockease-nexus',
      demoUrl: 'https://stockease.onrender.com/'
    },
    {
      title: 'EduPath Pro',
      description: 'A personalized education and career guidance platform for students using Next.js and Firebase, with recommendation features based on interests, skills, and academic goals.',
      role: 'Full Stack Developer - Developed complete platform using Next.js and Firebase. Implemented intelligent recommendation system based on student interests and goals. Integrated Firebase Authentication and Firestore for user profiles and dynamic data storage. Built modern, SEO-optimized interface with responsive design for mobile and desktop.',
      tags: [
        { name: 'Next.js', color: 'text-gray-300', bgColor: 'bg-gray-500/20' },
        { name: 'Firebase', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'Tailwind CSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
        { name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-600/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>EduPath Pro Platform</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <circle cx="250" cy="150" r="50" fill="#3B82F6" />
          <circle cx="400" cy="150" r="50" fill="#10B981" />
          <circle cx="550" cy="150" r="50" fill="#F59E0B" />
          <rect x="150" y="240" width="500" height="60" rx="5" fill="#374151" />
          <path d="M 250 150 L 400 150 M 400 150 L 550 150" stroke="#6B7280" strokeWidth="3" />
        </svg>
      ),
      repoUrl: 'https://github.com/Meghraj2004/edupath-pro',
      demoUrl: 'https://edupath-pro.vercel.app'
    },
    {
      title: 'MessMate Smart Hub',
      description: 'A comprehensive mess management system to streamline hostel and organization meal operations with smart QR attendance, automated menu planning, and digital payment tracking.',
      role: 'Full Stack Developer - Developed complete mess management system with React, TypeScript, and Firebase. Integrated smart QR attendance system for automated tracking. Used Firebase Firestore for real-time data updates and authentication. Designed clean, responsive UI using Tailwind CSS with modular TypeScript architecture.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-600/20' },
        { name: 'Firebase', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'Tailwind CSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>MessMate Smart Hub</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="200" height="200" rx="5" fill="#374151" />
          <rect x="180" y="130" width="140" height="140" fill="#000000" />
          <rect x="190" y="140" width="30" height="30" fill="#FFFFFF" />
          <rect x="230" y="140" width="30" height="30" fill="#FFFFFF" />
          <rect x="270" y="140" width="30" height="30" fill="#FFFFFF" />
          <rect x="380" y="100" width="270" height="200" rx="5" fill="#4B5563" />
          <rect x="400" y="130" width="230" height="30" rx="5" fill="#6B7280" />
          <rect x="400" y="180" width="230" height="30" rx="5" fill="#6B7280" />
          <rect x="400" y="230" width="150" height="40" rx="5" fill="#10B981" />
        </svg>
      ),
      repoUrl: 'https://github.com/Meghraj2004/messmate-hub',
      demoUrl: 'https://messmate-hub.vercel.app'
    },
    {
      title: 'MensFyt',
      description: 'Sponsored e-commerce platform specialized for men\'s fashion with personalized recommendations, dynamic filtering, and a secure checkout system.',
      role: 'Full Stack Developer - Built complete e-commerce platform with React frontend and Node.js backend. Implemented responsive UI with React and Tailwind CSS. Designed RESTful APIs using Express.js for real-time inventory updates and user authentication. Created personalized recommendation system and dynamic product filtering.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Node.js', color: 'text-green-400', bgColor: 'bg-green-500/20' },
        { name: 'Express.js', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
        { name: 'MySQL', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'TailwindCSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' }
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
      ),
      repoUrl: 'https://github.com/Meghraj2004/mensfyt',
      demoUrl: 'https://mensfyt.com/?srsltid=AfmBOooPgTyNZCdc-UlUGl2YSRbm5K_9KITJu28azFTudfp1Guf2TNZz'
    },
    {
      title: 'Bookverse',
      description: 'A modern web application that allows users to manage their personal book collections through a clean, intuitive interface with search, categorization, and tracking features.',
      role: 'Full Stack Developer - Developed the frontend using React and Tailwind CSS, implemented user authentication with Firebase, managed state with React hooks, and created a RESTful backend.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Firebase', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { name: 'TailwindCSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
        { name: 'REST API', color: 'text-green-400', bgColor: 'bg-green-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>Bookverse Collection Manager</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="150" height="200" rx="5" fill="#374151" />
          <rect x="320" y="100" width="150" height="200" rx="5" fill="#4B5563" />
          <rect x="490" y="100" width="150" height="200" rx="5" fill="#374151" />
        </svg>
      ),
      repoUrl: 'https://github.com/Meghraj2004/bookverse',
      demoUrl: 'https://bookverse-wine.vercel.app'
    },
    {
      title: 'Blogspace',
      description: 'A full-stack blogging platform enabling users to create, edit, and manage blog posts with a modern and responsive design, featuring rich text editing and user authentication.',
      role: 'Full Stack Developer - Built both frontend and backend components, implemented RESTful APIs with Express.js, integrated PostgreSQL database using Drizzle ORM, and designed a responsive UI with Tailwind CSS.',
      tags: [
        { name: 'React', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
        { name: 'Express.js', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
        { name: 'PostgreSQL', color: 'text-indigo-400', bgColor: 'bg-indigo-500/20' },
        { name: 'TailwindCSS', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' }
      ],
      image: (
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <title>Blogspace Platform</title>
          <rect width="800" height="400" fill="#1E1E1E" />
          <rect x="100" y="50" width="600" height="300" rx="10" fill="#272727" />
          <rect x="150" y="100" width="500" height="80" rx="5" fill="#374151" />
          <rect x="150" y="200" width="500" height="100" rx="5" fill="#4B5563" />
          <rect x="550" y="320" width="100" height="30" rx="5" fill="#1E40AF" />
        </svg>
      ),
      repoUrl: 'https://github.com/Meghraj2004/blogspace',
      demoUrl: 'https://blogspace-1-2af1.onrender.com/'
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
                <div className="flex justify-end gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pulse text-primary-light font-medium hover:underline inline-flex items-center group transition-all duration-300"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pulse text-primary-light font-medium hover:underline inline-flex items-center group transition-all duration-300"
                  >
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