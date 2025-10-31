import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  period: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

interface Certification {
  title: string;
  provider: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

const AchievementSection: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "2nd Runner-Up, Avinya Hackathons",
      period: "2024, 2025",
      description: "Recognized for innovative solution development in competitive hackathon environments. Designed and implemented a cutting-edge solution that impressed judges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-500"
    },
    {
      title: "Participant, VCET Hackathon",
      period: "2024",
      description: "Developed and presented technical solutions under tight deadlines in a collaborative team environment. Created innovative software for real-world problems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-500"
    },
    
  ];

  const certifications: Certification[] = [
    {
      title: "Python, JavaScript, Bootstrap 4",
      provider: "Infosys",
      description: "Core web development technologies certification covering fundamentals and advanced concepts for modern application development.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: "bg-green-500/20",
      textColor: "text-green-500"
    },
    {
      title: "AWS Cloud Architecting",
      provider: "Amazon Web Services",
      description: "Designing scalable, reliable, and secure cloud infrastructure on AWS platform. Implementation of best practices for cloud architecture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      bgColor: "bg-orange-500/20",
      textColor: "text-orange-500"
    },
    {
      title: "Google Cloud Skills Boost",
      provider: "Google Cloud",
      description: "Comprehensive training in Google Cloud Platform services and solutions architecture. Implementation of best practices for cloud computing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-500"
    },
   
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="achievements" className="py-20 bg-gradient-to-b from-background to-background-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 text-center relative inline-block">
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-light rounded-full"></span>
            Qualifications
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My achievements and professional certifications that demonstrate my expertise and commitment to continuous learning.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6 relative inline-flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-primary-light to-primary-DEFAULT h-1 w-12 absolute -bottom-2 left-0"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Achievements
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-background-card rounded-xl p-6 border border-gray-800 hover:border-primary-light/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-start">
                    <div className={`${achievement.bgColor} p-3 rounded-lg mr-4 shadow-inner`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <p className="text-primary-light font-medium">{achievement.period}</p>
                      <div className="mt-2 text-gray-400">{achievement.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6 relative inline-flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-primary-light to-primary-DEFAULT h-1 w-12 absolute -bottom-2 left-0"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Certifications
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((certification, index) => (
                <motion.div 
                  key={index}
                  className="bg-background-card rounded-xl p-6 border border-gray-800 hover:border-primary-light/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-start">
                    <div className={`${certification.bgColor} p-3 rounded-lg mr-4 shadow-inner`}>
                      {certification.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{certification.title}</h3>
                      <p className="text-primary-light font-medium">{certification.provider}</p>
                      <div className="mt-2 text-gray-400">{certification.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
