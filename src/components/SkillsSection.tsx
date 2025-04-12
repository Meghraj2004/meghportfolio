
import { Code, Database, Terminal, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: <Terminal size={24} />,
      skills: ["React", "Node.js", "Express.js", "Vite", "Bootstrap", "Next.js", "Spring Boot"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools & Concepts",
      icon: <Wrench size={24} />,
      skills: ["VS Code", "Android Studio", "PyCharm", "DSA", "REST APIs", "DBMS", "Data Science", "Android"]
    }
  ];

  return (
    <section id="skills" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="portfolio-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-purple-primary/10 p-3 mr-3 text-purple-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl text-white font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-dark px-3 py-1.5 rounded-full text-gray-300 text-sm border border-gray-700 hover:border-purple-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
