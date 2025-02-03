'use client';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  introduction: string;
  keyPoints: string[];
  conclusion: string;
  readTime: string;
  category: string;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Discover Your Passion: A Teen's Guide to Unlocking Potential",
      introduction: "Finding your passion can be a transformative experience, leading to both personal and professional fulfillment. It begins with self-reflection and exploration.",
      keyPoints: [
        "Identify what excites you: Reflect on activities that make you feel alive and motivated",
        "Explore opportunities: Experiment with new hobbies or fields of interest",
        "Set achievable goals: Turn your passion into a project or long-term vision"
      ],
      conclusion: "Passion is the foundation for building a rewarding future. Start exploring today to uncover what truly drives you.",
      readTime: "5 min read",
      category: "Personal Growth"
    },
    {
      id: 2,
      title: "The Power of Networking: Building Meaningful Connections",
      introduction: "Networking is not just for professionals it's a valuable skill that teens can start developing early. Building connections can open doors to opportunities and personal growth.",
      keyPoints: [
        "Start with your circle: Engage with peers, teachers, and online communities",
        "Be authentic: Build relationships with genuine interest and kindness",
        "Maintain connections: Follow up and keep in touch to strengthen your network"
      ],
      conclusion: "Networking is about collaboration and mutual growth. Begin building meaningful connections now to support your future endeavors.",
      readTime: "4 min read",
      category: "Networking"
    },
    {
      id: 3,
      title: "Balancing Academics and Passion Projects",
      introduction: "Balancing schoolwork and personal interests can be challenging, but it's possible with the right strategies. Finding this balance can enhance both your academic performance and personal fulfillment.",
      keyPoints: [
        "Prioritize tasks: Identify what requires immediate attention and work accordingly",
        "Create a schedule: Allocate specific times for studying and pursuing your passion",
        "Practice self-care: Taking care of yourself helps maintain focus and energy"
      ],
      conclusion: "With effective planning and determination, you can excel in academics while nurturing your personal interests.",
      readTime: "6 min read",
      category: "Academic Success"
    },
    {
      id: 4,
      title: "Navigating Career Choices: Advice for Teens",
      introduction: "Deciding on a career path doesn't have to be overwhelming. By exploring options and seeking guidance, you can make informed choices that align with your skills and interests.",
      keyPoints: [
        "Research industries: Learn about emerging fields and traditional professions",
        "Identify your strengths: Focus on areas where you excel naturally",
        "Stay adaptable: Your career path may evolve, so keep an open mind"
      ],
      conclusion: "Career exploration is a journey. Take the time to discover what aligns with your values and aspirations.",
      readTime: "5 min read",
      category: "Career"
    },
    {
      id: 5,
      title: "The Future of Work: Skills Every Teen Must Develop",
      introduction: "The workplace is evolving rapidly, and the skills required for success are changing too. Developing future-ready abilities can set you apart in a competitive world.",
      keyPoints: [
        "Focus on tech skills: Learn coding, data analysis, and digital tools",
        "Build communication skills: Clear and effective communication is always essential",
        "Cultivate adaptability: Be ready to learn and unlearn as industries change"
      ],
      conclusion: "Preparing for the future begins today. Invest in developing skills that will keep you ahead of the curve.",
      readTime: "4 min read",
      category: "Skills Development"
    },
    {
      id: 6,
      title: "Real Friendships, Real Support: The Role of Peer Networks",
      introduction: "Friendships are more than just social connections—they can play a significant role in your growth and success. A strong peer network provides emotional and collaborative support.",
      keyPoints: [
        "Choose wisely: Surround yourself with positive and supportive peers",
        "Build trust: Strong friendships are based on honesty and understanding",
        "Collaborate: Work together on projects to share ideas and learn from each other"
      ],
      conclusion: "A good peer network can inspire and motivate you. Invest time in building meaningful relationships.",
      readTime: "5 min read",
      category: "Relationships"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-theme-orange mb-4">Blog</h1>
        <p className="text-xl text-gray-300">Insights and guidance for your journey</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-theme-dark rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-theme-orange/20 text-theme-orange px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-4 hover:text-theme-orange transition-colors">
                {post.title}
              </h2>
              
              <div className="h-px bg-gradient-to-r from-theme-orange/50 to-transparent my-4"></div>
              
              <p className="text-gray-300 mb-6 line-clamp-3">
                {post.introduction}
              </p>
              <div className="space-y-2 mb-6">
                {post.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-theme-orange">•</span>
                    <p className="text-gray-400 text-sm">{point}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 italic text-sm">{post.conclusion}</p>

              <button className="mt-6 text-theme-orange hover:text-orange-400 transition-colors">
                Read More →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
