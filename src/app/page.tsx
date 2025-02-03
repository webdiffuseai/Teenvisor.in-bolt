'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Award, BookOpen, Target, MessageCircle, ArrowRight, Star, Globe } from 'lucide-react';
import { fadeIn, staggerContainer, slideIn } from '@/utils/motion';

export default function Home() {
  const testimonials = [
    {
      text: "Teenvisor has been a game-changer for me. I found clarity in my career path and amazing friends to support me!",
      author: "Student Member"
    },
    {
      text: "The teenvisor workshop was the best experience I've had. It really challenged me to think creatively!",
      author: "Workshop Participant"
    },
    {
      text: "I love how safe and welcoming the community is. It's a place where I can truly be myself.",
      author: "Community Member"
    }
  ];

  const services = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Career Guidance",
      description: "Resources and mentorship for career planning and development."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Skill Development",
      description: "Workshops and courses to enhance essential life and professional skills."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "A space to connect with like-minded teens and role models."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitions & Events",
      description: "Ideathons, hackathons, and creative contests for skill showcasing."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Teen-Focused Resources",
      description: "Blogs, articles, and tools made for teenagers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community Engagement",
      description: "Forums and discussion groups to collaborate and share ideas."
    }
  ];

  return (
    <main className="min-h-screen bg-theme-dark text-white">
      {/* Hero Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-theme-orange/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeIn('up', 'spring', 0, 1)}
              className="relative"
            >
              <Rocket className="w-20 h-20 text-theme-orange" />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 text-theme-orange/30"
              >
                <Rocket className="w-20 h-20" />
              </motion.div>
            </motion.div>

            <motion.h1 
              variants={fadeIn('up', 'spring', 0.2, 1)}
              className="text-6xl font-bold tracking-tight"
            >
              <span className="text-theme-orange">Teenvisor</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn('up', 'spring', 0.4, 1)}
              className="text-2xl font-medium"
            >
              Empowering Teens, Inspiring Futures.
            </motion.p>

            <motion.p 
              variants={fadeIn('up', 'spring', 0.6, 1)}
              className="text-xl text-gray-400"
            >
              A social networking platform designed exclusively for teenagers to explore, connect, and grow in their careers, fellowships, and passions.
            </motion.p>

            <motion.button
              variants={fadeIn('up', 'spring', 0.8, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-theme-orange hover:bg-theme-orange/90 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all"
            >
              Join Our Community <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-theme-gray py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn('up', 'spring', 0, 1)}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 1)}
                whileHover={{ scale: 1.02 }}
                className="bg-theme-dark p-6 rounded-xl border border-theme-orange/20 hover:border-theme-orange/40 transition-all group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="text-theme-orange mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn('up', 'spring', 0, 1)}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Impact
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={slideIn('left', 'spring', 0, 1)}
              className="bg-theme-gray p-8 rounded-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="text-4xl font-bold text-theme-orange mb-2"
              >
                78+
              </motion.div>
              <div className="text-gray-400">Schools Connected Globally</div>
            </motion.div>
            <motion.div
              variants={slideIn('left', 'spring', 0.2, 1)}
              className="bg-theme-gray p-8 rounded-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="text-4xl font-bold text-theme-orange mb-2"
              >
                35+
              </motion.div>
              <div className="text-gray-400">Events Hosted</div>
            </motion.div>
            <motion.div
              variants={slideIn('left', 'spring', 0.4, 1)}
              className="bg-theme-gray p-8 rounded-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="text-4xl font-bold text-theme-orange mb-2"
              >
                <Star className="w-10 h-10 inline-block" />
              </motion.div>
              <div className="text-gray-400">Industry Recognition</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-theme-gray py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={slideIn('left', 'tween', 0, 1)}
              className="bg-theme-dark p-8 rounded-xl border border-theme-orange/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-theme-orange">Our Mission</h3>
              <p className="text-gray-400">
                To create a supportive digital ecosystem where teenagers can discover their passions, develop their talents, and achieve their dreams through collaboration and guidance.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn('right', 'tween', 0, 1)}
              className="bg-theme-dark p-8 rounded-xl border border-theme-orange/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-theme-orange">Our Vision</h3>
              <p className="text-gray-400">
                To become the world's leading teen-focused platform that inspires a generation to shape their future and make meaningful contributions to society.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn('up', 'spring', 0, 1)}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Members Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.2, 1)}
                whileHover={{ scale: 1.05 }}
                className="bg-theme-gray p-8 rounded-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="text-theme-orange mb-4"
                >
                  <MessageCircle className="w-8 h-8" />
                </motion.div>
                <p className="text-gray-400 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm text-theme-orange font-medium">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-theme-gray py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Teenvisor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}