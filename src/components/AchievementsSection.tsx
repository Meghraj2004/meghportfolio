
import { Award } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "2nd Runner-Up",
      event: "Avinya Hackathon 2025",
      date: "2025",
    },
    {
      title: "2nd Runner-Up",
      event: "Avinya Hackathon 2024",
      date: "2024",
    },
    {
      title: "Participant",
      event: "VCET Hackathon",
      date: "2024",
    },
  ];

  const certifications = [
    {
      name: "Python Programming",
      issuer: "Infosys",
    },
    {
      name: "JavaScript",
      issuer: "Infosys",
    },
    {
      name: "Bootstrap 4",
      issuer: "Infosys",
    },
    {
      name: "AWS Cloud Architecting",
      issuer: "Amazon Web Services",
    },
    {
      name: "Google Cloud Skills Boost",
      issuer: "Google Cloud",
    },
  ];

  return (
    <section id="achievements" className="bg-dark-secondary py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="section-title text-white">Achievements</h2>
            <div className="space-y-4 animate-on-scroll">
              {achievements.map((achievement, index) => (
                <div key={index} className="portfolio-card">
                  <div className="flex items-center">
                    <div className="rounded-full bg-purple-primary/10 p-3 mr-4 text-purple-primary">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{achievement.title}</h3>
                      <p className="text-purple-primary">{achievement.event}</p>
                      <span className="text-gray-500 text-sm">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title text-white">Certifications</h2>
            <div className="portfolio-card animate-on-scroll" style={{animationDelay: "0.2s"}}>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="border-b border-gray-800 last:border-0 pb-3 last:pb-0">
                    <div className="flex justify-between">
                      <span className="text-white">{cert.name}</span>
                      <span className="text-gray-400 text-sm">{cert.issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
