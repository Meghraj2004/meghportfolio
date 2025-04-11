import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-background-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Professional Experience</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            My journey in the technology industry so far.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-background-card rounded-xl p-8 border border-gray-800 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-8 left-8 -mt-1 -ml-1 w-4 h-4 rounded-full bg-primary-light"></div>
            <div className="absolute top-8 left-8 -mt-1 -ml-1 w-4 h-4 rounded-full bg-primary-light animate-ping opacity-75"></div>
            
            <div className="pl-8 border-l-2 border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Web Developer Intern</h3>
                <div className="text-primary-light font-medium mt-2 md:mt-0">June – August 2024</div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Pinnacle Labs</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Contributed to front-end UI development and REST API integration for client projects. Worked with Node.js and MySQL to create robust database solutions and improve application performance.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'REST API', 'MySQL', 'UI Development'].map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary-DEFAULT/20 text-primary-light rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
