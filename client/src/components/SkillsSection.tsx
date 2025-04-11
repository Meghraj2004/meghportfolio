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
        { name: "HTML", color: "text-orange-400" },
        { name: "CSS", color: "text-blue-300" }
      ]
    },
    {
      title: "Frameworks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      bgColor: "bg-green-500/20",
      iconColor: "text-green-500",
      skills: [
        { name: "React", color: "text-blue-400" },
        { name: "Node.js", color: "text-green-400" },
        { name: "Express.js", color: "text-gray-400" },
        { name: "Vite", color: "text-purple-400" },
        { name: "Bootstrap", color: "text-purple-400" },
        { name: "Next.js", color: "text-blue-400" },
        { name: "Spring Boot", color: "text-green-400" }
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
        { name: "MongoDB", color: "text-green-400" }
      ]
    },
    {
      title: "Tools & Concepts",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      bgColor: "bg-red-500/20",
      iconColor: "text-red-500",
      skills: [
        { name: "VS Code", color: "text-blue-400" },
        { name: "Android Studio", color: "text-green-400" },
        { name: "PyCharm", color: "text-blue-300" },
        { name: "DSA", color: "text-orange-400" },
        { name: "REST APIs", color: "text-red-400" },
        { name: "DBMS", color: "text-yellow-400" }
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
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-background-surface rounded-xl p-6 border border-gray-800"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className={`${category.bgColor} p-3 rounded-lg mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-badge bg-background-card rounded-lg p-3 text-center transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
                  >
                    <div className={`${skill.color} font-medium`}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
