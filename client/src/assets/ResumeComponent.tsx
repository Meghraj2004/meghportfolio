import React, { useState } from 'react';
import resume from "../assets/Megharaj_Dandgavhal_Resume.pdf";

interface ResumeComponentProps {
  className?: string;
}

const ResumeComponent: React.FC<ResumeComponentProps> = ({ className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a download link
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'MegharajDandgavhal_Resume.pdf');
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    
    // Reset the state after a delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };
  
  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`relative bg-gradient-to-r from-primary-light to-primary-DEFAULT text-white font-medium 
                  px-6 py-3 rounded-lg transition-all duration-300 flex items-center btn-pulse hover-lift 
                  overflow-hidden group border border-primary-DEFAULT ${className}`}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
      
      {isDownloading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-shimmer">Downloading...</span>
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="relative z-10">Download Resume</span>
        </>
      )}
    </button>
  );
};

export default ResumeComponent;
