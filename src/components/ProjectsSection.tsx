
import { Github, ExternalLink, Store, Shield, Calendar, AlertCircle, Code, Layers,Book,Space } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';


const ProjectsSection = () => {
  const projects = [
    {
      title: "MensFyt",
      description: "E-commerce platform for men's fashion with personalized recommendations and streamlined shopping experience.",
      stack: ["React", "Node.js", "MySQL"],
      icon: <Store size={24} />,
      github: "https://github.com/Meghraj2004/Mensfyt",
      liveLink: "https://mensfyt.com/?srsltid=AfmBOooPgTyNZCdc-UlUGl2YSRbm5K_9KITJu28azFTudfp1Guf2TNZz",
      role: "Frontend Developer Lead - Designed and implemented responsive UI components using React and custom CSS. Built interactive product galleries and user dashboards. Integrated with backend APIs for seamless data flow."
    },
    {
      title: "Graphical Password Authentication",
      description: "Enhanced security system using image/color/alphanumeric login methods to prevent password-based vulnerabilities.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      icon: <Shield size={24} />,
      github: "https://github.com/Meghraj2004/graphical-password-authentication",
      liveLink: "https://github.com/Meghraj2004/graphical-password-authentication",
      role: "Frontend Developer - Created intuitive interface for novel authentication methods. Implemented client-side validation and interactive visual selection components."
    },
    {
      title: "Restaurant Reservation System",
      description: "Real-time reservation platform with table management and integrated MySQL backend for data persistence.",
      stack: ["React", "Node.js", "Express", "MySQL"],
      icon: <Calendar size={24} />,
      github: "https://github.com/Meghraj2004/meghresto",
      liveLink: "https://meghresto.onrender.com/",
      role: "Frontend Developer - Built responsive reservation interface with real-time table availability visualization. Implemented user dashboard for booking management."
    },
    {
      title: "Disaster Response Platform",
      description: "Real-time coordination system for shelter allocation and volunteer management during disaster scenarios.",
      stack: ["Spring Boot", "Java", "MySQL", "React"],
      icon: <AlertCircle size={24} />,
      github: "https://github.com/Meghraj2004/Avinya-3.0",
      liveLink: "https://github.com/Meghraj2004/Avinya-3.0",
      role: "Frontend Developer - Developed intuitive dashboards and interactive maps for resource coordination. Created responsive UI for real-time data visualization."
    },
    {
      title: "BookVerse – Personal Book Management App",
      description: "A modern web application that allows users to manage their personal book collections through a clean, intuitive interface.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Vite"],
      icon: <Book size={24} />,
      github: "https://github.com/Meghraj2004/bookverse",
      liveLink: "https://bookverse-wine.vercel.app",
      role: "Full Stack Developer – Developed the frontend using React and Tailwind CSS, implemented user authentication with Firebase, and managed state with React hooks."
    },    
    {
      title: "BlogSpace – Full-Stack Blogging Platform",
      description: "A full-stack blogging platform enabling users to create, edit, and manage blog posts with a modern and responsive design.",
      stack: ["React", "Tailwind CSS", "TypeScript", "Express.js", "Drizzle ORM", "PostgreSQL", "Vite"],
      icon: <FileText size={24} />,
      github: "https://github.com/Meghraj2004/blogspace",
      liveLink: "https://blogspace-1-2af1.onrender.com/", // Replace with actual live link if different
      role: "Full Stack Developer – Built both frontend and backend components, implemented RESTful APIs with Express.js, integrated PostgreSQL database using Drizzle ORM, and designed a responsive UI with Tailwind CSS."
    },
    
  ];

  return (
    <section id="projects" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="portfolio-card glass-effect flex flex-col h-full animate-on-scroll hover:translate-y-[-5px] transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 to-purple-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="flex items-center mb-4 relative">
                <div className="rounded-full bg-purple-primary/10 p-3 mr-3 text-purple-primary group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-xl text-white font-semibold group-hover:text-purple-primary transition-colors duration-300">{project.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 relative">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 relative">
                {project.stack.map(tech => (
                  <span 
                    key={`${project.title}-${tech}`}
                    className="bg-dark-secondary px-2.5 py-1 rounded-full text-gray-300 text-xs border border-gray-700 hover:border-purple-primary hover:text-purple-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mb-4 relative">
                <h4 className="text-purple-primary font-medium mb-1">My Role:</h4>
                <p className="text-gray-400 text-sm">{project.role}</p>
              </div>
              
              <div className="flex space-x-3 mt-auto relative">
                <Button variant="outline" size="sm" className="group border-gray-700 hover:border-purple-primary btn-hover-effect" asChild>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github size={16} className="mr-2 text-gray-400 group-hover:text-purple-primary" />
                    <span className="text-gray-300 group-hover:text-purple-primary">Code</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="group border-gray-700 hover:border-purple-primary btn-hover-effect" asChild>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2 text-gray-400 group-hover:text-purple-primary" />
                    <span className="text-gray-300 group-hover:text-purple-primary">Live Demo</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
