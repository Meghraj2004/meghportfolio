import React from 'react';
import { motion } from 'framer-motion';
import resume from "../assets/Megharaj_Dandgavhal_Resume.pdf"
import profilepic from "../assets/profile pic.jpg"

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            className="lg:w-3/5 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-sm font-medium text-primary-light mb-4">
              B.Tech Information Technology Student
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I'm <span className="text-primary-light text-shimmer">Megharaj Dandgavhal</span>
            </h1>
             <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Passionate about <span className="text-primary-light font-medium border-glow px-2 py-1 rounded-md">Full-stack development</span> and creating interactive web experiences.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jalgaon, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:megharajdandgavhal2004@gmail.com"
                className="flex items-center space-x-2 bg-background-surface px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>megharajdandgavhal2004@gmail.com</span>
              </a>
              <a
                href="tel:+919421612110"
                className="flex items-center space-x-2 bg-background-surface px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-9421612110</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/megharaj-dandgavhal-832683259/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-DEFAULT hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center hover-lift"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Meghraj2004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-surface hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center hover-lift"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download="MegharajDandgavhal_Resume.pdf"
                className="relative bg-gradient-to-r from-primary-light to-primary-DEFAULT text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center btn-pulse hover-lift overflow-hidden group border border-primary-DEFAULT"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>

            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.hackerrank.com/profile/megharajdandgav1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/megharaj_2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.297 2.734.619.57.366 1.008.835 1.367 1.368.322.501.557 1.368.619 2.734.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.297 2.233-.619 2.734-.36.57-.835 1.008-1.368 1.367-.501.322-1.368.557-2.734.619-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.233-.297-2.734-.619-.57-.36-1.008-.835-1.367-1.368-.322-.501-.557-1.368-.619-2.734-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.297-2.233.619-2.734.366-.57.835-1.008 1.368-1.367.501-.322 1.368-.557 2.734-.619 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.308.065-2.197.28-2.965.617-.904.389-1.656.901-2.267 1.512-.611.611-1.123 1.363-1.512 2.267-.337.768-.552 1.657-.617 2.965-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.308.28 2.197.617 2.965.389.904.901 1.656 1.512 2.267.611.611 1.363 1.123 2.267 1.512.768.337 1.657.552 2.965.617 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.308-.065 2.197-.28 2.965-.617.904-.389 1.656-.901 2.267-1.512.611-.611 1.123-1.363 1.512-2.267.337-.768.552-1.657.617-2.965.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.308-.28-2.197-.617-2.965-.389-.904-.901-1.656-1.512-2.267-.611-.611-1.363-1.123-2.267-1.512-.768-.337-1.657-.552-2.965-.617-1.277-.058-1.688-.072-4.947-.072z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                  </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light shadow-lg floating">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-primary-DEFAULT/20 transform hover:scale-110 transition-transform duration-700"></div>
                <img
                  src={profilepic}
                  alt="Professional Headshot"
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover bg-gray-700 relative z-10"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-background-surface p-3 rounded-full border-2 border-primary-light hover-lift border-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="absolute -top-4 -left-4 p-3 rounded-full bg-background-surface border-2 border-primary-light hover-lift btn-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
