import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  bgColor: string;
  iconColor: string;
  skills: Array<{
    name: string;
    color: string;
  }>;
}

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-500",
      skills: [
        { name: "Python", color: "text-blue-400" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "TypeScript", color: "text-blue-500" },
        { name: "HTML", color: "text-orange-400" },
        { name: "CSS", color: "text-blue-300" }
      ]
    },
    {
      title: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-cyan-500/20",
      iconColor: "text-cyan-500",
      skills: [
        { name: "React", color: "text-blue-400" },
        { name: "Next.js", color: "text-gray-300" },
        { name: "React Native", color: "text-cyan-400" },
        { name: "Expo", color: "text-purple-400" },
        { name: "Vite", color: "text-purple-500" },
        { name: "Bootstrap", color: "text-purple-400" }
      ]
    },
    {
      title: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      bgColor: "bg-green-500/20",
      iconColor: "text-green-500",
      skills: [
        { name: "Node.js", color: "text-green-400" },
        { name: "Express.js", color: "text-gray-400" },
        { name: "NestJS", color: "text-red-400" },
        { name: "Spring Boot", color: "text-green-500" },
        { name: "REST APIs", color: "text-orange-400" }
      ]
    },
    {
      title: "Databases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      bgColor: "bg-indigo-500/20",
      iconColor: "text-indigo-500",
      skills: [
        { name: "MySQL", color: "text-blue-400" },
        { name: "MongoDB", color: "text-green-400" },
        { name: "PostgreSQL", color: "text-indigo-400" },
        { name: "DBMS", color: "text-blue-300" }
      ]
    },
    {
      title: "AI & Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: "bg-purple-500/20",
      iconColor: "text-purple-500",
      skills: [
        { name: "GenAI", color: "text-purple-400" },
        { name: "VS Code", color: "text-blue-400" },
        { name: "Android Studio", color: "text-green-400" },
        { name: "PyCharm", color: "text-blue-300" },
        { name: "DSA", color: "text-orange-400" },
        { name: "Data Science", color: "text-pink-400" }
      ]
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
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">My Skills</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            I've developed a diverse set of technical skills through coursework, projects, and internships.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-background-surface rounded-xl p-6 border border-gray-800 hover:border-primary-light/50 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className={`${category.bgColor} p-3 rounded-lg mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="skill-badge bg-background-card rounded-lg p-3 text-center transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
                    >
                      <div className={`${skill.color} font-medium text-sm`}>{skill.name}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
