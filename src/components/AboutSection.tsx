
import { GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-dark-secondary py-20">
      <div className="section-container">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 animate-on-scroll">
            <h3 className="text-xl text-white font-semibold mb-3">Objective</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate Information Technology student aiming to contribute to real-world projects 
              in e-commerce, security, and disaster response systems. Driven by a desire to create 
              innovative solutions that address practical challenges and enhance user experiences.
            </p>
            
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex items-center space-x-2 mb-2 md:mb-0">
                <span className="text-gray-400">Name:</span>
                <span className="text-white font-medium">Megharaj Dandgavhal</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:megharajdandgavhal2004@gmail.com" className="text-white font-medium hover:text-purple-primary">
                  megharajdandgavhal2004@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl text-white font-semibold mb-3">Education</h3>
            
            <div className="space-y-4">
              <div className="portfolio-card">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-primary/10 p-3 mr-4">
                    <GraduationCap className="text-purple-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">B.Tech Information Technology</h4>
                    <p className="text-gray-400">Walchand Institute of Technology, Solapur</p>
                    <div className="mt-1 flex justify-between">
                      <span className="text-gray-500 text-sm">Current</span>
                      <span className="text-purple-primary">CGPA: 8.56</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-card">
                <div className="flex items-start">
                  <div className="rounded-full bg-purple-primary/10 p-3 mr-4">
                    <GraduationCap className="text-purple-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">HSC</h4>
                    <p className="text-gray-400">Gram Vikas Vidyalaya</p>
                    <div className="mt-1 flex justify-between">
                      <span className="text-gray-500 text-sm">Completed</span>
                      <span className="text-purple-primary">73.83%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
