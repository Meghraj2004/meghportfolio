
import { BookOpen, Lightbulb, Braces, Database, Share2, Brain } from 'lucide-react';

const ResearchInterestsSection = () => {
  const researchTopics = [
    {
      icon: <Braces size={24} />,
      title: "Machine Learning Algorithms",
      description: "Exploring neural networks, deep learning frameworks, and their applications in practical scenarios."
    },
    {
      icon: <Database size={24} />,
      title: "Big Data Processing",
      description: "Research on efficient data processing techniques and distributed computing frameworks."
    },
    {
      icon: <Share2 size={24} />,
      title: "Blockchain Technologies",
      description: "Investigating smart contracts and decentralized applications for secure transactions."
    },
    {
      icon: <Brain size={24} />,
      title: "Natural Language Processing",
      description: "Studying sentiment analysis and language models for improved human-computer interaction."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "IoT & Edge Computing",
      description: "Exploring embedded systems and their integration with cloud infrastructure for real-time processing."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Academic Publications",
      description: "Working on research papers in collaboration with faculty members on emerging technologies."
    },
  ];

  return (
    <section id="research" className="bg-dark py-20">
      <div className="section-container">
        <h2 className="section-title text-white text-reveal">Research Interests</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 animate-on-scroll">
          As a 3rd year Information Technology student, I'm actively exploring these emerging fields through coursework, 
          self-study, and collaboration with professors. My goal is to contribute meaningful research that addresses 
          real-world challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {researchTopics.map((topic, index) => (
            <div 
              key={topic.title} 
              className="portfolio-card hover-animate stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-purple-primary/10 p-3 mr-3 text-purple-primary pulse">
                  {topic.icon}
                </div>
                <h3 className="text-xl text-white font-semibold">{topic.title}</h3>
              </div>
              
              <p className="text-gray-300">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
