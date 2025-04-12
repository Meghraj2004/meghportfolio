
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-dark-secondary py-20">
      <div className="section-container">
        <h2 className="section-title text-white">Experience</h2>
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="portfolio-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-primary/10 p-3 mr-4 text-purple-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold">Web Developer Intern</h3>
                  <p className="text-purple-primary">Pinnacle Labs</p>
                </div>
              </div>
              <div className="flex items-center mt-3 md:mt-0 ml-14 md:ml-0">
                <Calendar size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-400">June - August 2024</span>
              </div>
            </div>
            
            <div className="ml-14 md:ml-16">
              <p className="text-gray-300 leading-relaxed">
                Contributed to front-end UI development and implemented REST API integration using Node.js 
                and MySQL. Collaborated with team members to enhance website functionality and user experience.
                Gained hands-on experience in full-stack development and agile methodologies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="portfolio-card max-w-sm text-center animate-on-scroll" style={{animationDelay: "0.2s"}}>
            <h3 className="text-white font-semibold mb-2">Looking for Opportunities</h3>
            <p className="text-gray-400">
              I'm actively seeking opportunities to apply my skills and knowledge in real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
