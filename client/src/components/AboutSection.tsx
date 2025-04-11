import React from 'react';
import { motion } from 'framer-motion';
import ResumeComponent from '../assets/ResumeComponent';

const AboutSection: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <h2 className="text-3xl font-bold text-white mb-6 relative">
              <span className="bg-primary-light h-1 w-12 absolute -top-3 left-0"></span>
              About Me
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate B.Tech Information Technology student at Walchand Institute of Technology, Solapur, with a strong interest in software development. My goal is to contribute to real-world projects in e-commerce, security systems, and disaster response platforms.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm dedicated to developing innovative solutions that make a difference in people's lives. With hands-on experience in web development and a solid foundation in various programming languages and frameworks, I aim to create impactful technology that solves real problems.
            </p>
            
            <div className="bg-background-card rounded-xl p-6 border border-gray-800 mb-6 border-glow">
              <h3 className="text-lg font-bold text-white mb-4 text-shimmer">My Resume</h3>
              <p className="text-gray-300 mb-4">
                Download my comprehensive resume to learn more about my skills, experiences, and qualifications as a Frontend Developer.
              </p>
              <ResumeComponent className="w-full md:w-auto" />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...variants,
              visible: {
                ...variants.visible,
                transition: {
                  duration: 0.6,
                  delay: 0.2
                }
              }
            }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 relative">
              <span className="bg-primary-light h-1 w-12 absolute -top-3 left-0"></span>
              Education
            </h2>
            
            <div className="bg-background-card rounded-xl p-6 mb-6 border border-gray-800">
              <div className="flex items-start">
                <div className="bg-primary-DEFAULT/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">B.Tech Information Technology</h3>
                  <p className="text-primary-light">Walchand Institute of Technology, Solapur</p>
                  <div className="mt-2 text-gray-400">CGPA: 8.46</div>
                </div>
              </div>
            </div>
            
            <div className="bg-background-card rounded-xl p-6 border border-gray-800">
              <div className="flex items-start">
                <div className="bg-primary-DEFAULT/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">HSC</h3>
                  <p className="text-primary-light">Gram Vikas Vidyalaya</p>
                  <div className="mt-2 text-gray-400">Percentage: 73.83%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
