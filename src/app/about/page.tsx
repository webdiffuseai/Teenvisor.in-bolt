'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutUs() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 max-w-5xl mx-auto text-gray-200"
    >
      <motion.div {...fadeIn}>
        <h1 className="text-5xl font-bold text-theme-orange bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          About Teenvisor
        </h1>
        <p className="mt-6 text-xl leading-relaxed">
          Teenvisor is a social network designed specifically for teenagers, helping them explore their passions, 
          connect with peers, and receive guidance for their careers and personal growth. Our platform empowers young minds 
          by offering mentorship opportunities, skill-building resources, and a collaborative environment.
        </p>
      </motion.div>
      
      <motion.div {...fadeIn} className="mt-16">
        <h2 className="text-4xl font-semibold text-theme-orange bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="mt-4 text-xl leading-relaxed">
          Our mission is to create a safe and engaging space where teens can discover their potential, develop their skills, 
          and build meaningful connections that guide them towards a brighter future.
        </p>
      </motion.div>
      
      <motion.div {...fadeIn} className="mt-16">
        <h2 className="text-4xl font-semibold text-theme-orange bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-theme-orange/20 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="w-full text-left p-6 bg-theme-dark hover:bg-theme-dark/80 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium text-theme-orange">{faq.question}</h3>
                  <span className={`transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {expandedFaq === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-300 text-lg"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const faqData = [
  { question: "What is Teenvisor?", answer: "Teenvisor is a social network designed for teenagers to explore their passions, connect with peers, and receive guidance for their careers and personal growth." },
  { question: "Who can join Teenvisor?", answer: "Teenvisor is exclusively for teenagers. Anyone within this age group can join and become part of the community." },
  { question: "What features does Teenvisor offer?", answer: "Teenvisor provides career and skill development resources, mentor connections, collaborative spaces for projects, and more." },
  { question: "Is Teenvisor free to use?", answer: "Yes, Teenvisor offers free access to core features. A premium version is available for exclusive features and resources." },
  { question: "How is Teenvisor different from other social platforms?", answer: "Teenvisor focuses on personal and professional growth, mentorship, and a safe, collaborative environment." },
  { question: "How can I connect with mentors on Teenvisor?", answer: "You can explore mentor profiles and request guidance based on your career interests." },
  { question: "How does Teenvisor ensure safety and privacy?", answer: "Teenvisor follows strict safety guidelines, protects user data, and monitors platform activity for security." },
  { question: "Can parents or teachers participate in Teenvisor?", answer: "Teenvisor is for teens, but parents and teachers can encourage its use for skill-building." },
  { question: "What types of events or competitions are available?", answer: "Teenvisor hosts hackathons, career-building challenges, and skill-development workshops." },
  { question: "How can I get started with Teenvisor?", answer: "Sign up, create a profile, and start connecting with peers and mentors." },
  { question: "Can I collaborate with peers on Teenvisor?", answer: "Yes! You can join groups, work on projects, and brainstorm with others." },
  { question: "How can I provide feedback or suggest improvements?", answer: "Use the feedback feature or contact our support team through the official email." }
];
