'use client';
import { motion } from 'framer-motion';

export default function FeaturesPage() {
  const features = [
    {
      title: "Career Development",
      description: "Access comprehensive career guidance, industry insights, and personalized roadmaps for your dream career.",
      icon: "🎯",
      tools: ["Career Assessment", "Industry Guides", "Job Shadowing", "Resume Builder"]
    },
    {
      title: "Skill Building",
      description: "Learn and master new skills through interactive courses, workshops, and hands-on projects.",
      icon: "💡",
      tools: ["Online Courses", "Project Challenges", "Skill Assessments", "Learning Paths"]
    },
    {
      title: "Mentorship",
      description: "Connect with experienced mentors who guide you through your personal and professional journey.",
      icon: "🤝",
      tools: ["1-on-1 Mentoring", "Group Sessions", "Expert Q&A", "Success Stories"]
    },
    {
      title: "Collaboration",
      description: "Work on real projects with peers, join study groups, and participate in team challenges.",
      icon: "👥",
      tools: ["Project Teams", "Study Groups", "Hackathons", "Peer Reviews"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-dark to-black p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-theme-orange bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-12">
          Powerful Features for Your Growth
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-theme-dark/50 p-6 rounded-xl border border-theme-orange/20 hover:border-theme-orange/40 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-semibold text-theme-orange mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {feature.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    whileHover={{ scale: 1.05 }}
                    className="bg-theme-dark/40 p-3 rounded-lg text-gray-200 text-sm text-center"
                  >
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold text-theme-orange mb-6">
            Ready to Start Your Journey?
          </h2>
          <button className="bg-theme-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Get Started Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
