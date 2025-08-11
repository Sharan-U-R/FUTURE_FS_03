'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Target, Smartphone, Cpu } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Design',
    description: 'Machine learning algorithms analyze your movement patterns to create personalized gear recommendations.',
    color: 'text-primary-600'
  },
  {
    icon: Zap,
    title: 'Real-Time Optimization',
    description: 'Smart sensors continuously adjust performance metrics and provide instant feedback during workouts.',
    color: 'text-accent-500'
  },
  {
    icon: Shield,
    title: 'Injury Prevention',
    description: 'Advanced biomechanical analysis helps prevent injuries before they happen with predictive insights.',
    color: 'text-green-600'
  },
  {
    icon: Target,
    title: 'Precision Fit',
    description: '3D foot scanning technology ensures every shoe fits perfectly, reducing discomfort and improving performance.',
    color: 'text-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Smart Integration',
    description: 'Seamlessly connect with your favorite fitness apps and wearables for a unified training experience.',
    color: 'text-blue-600'
  },
  {
    icon: Cpu,
    title: 'Neural Networks',
    description: 'Deep learning models continuously evolve to understand and predict your athletic needs better.',
    color: 'text-red-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Innovation Meets
            <span className="text-primary-600"> Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artificial intelligence is revolutionizing athletic performance with cutting-edge technology that adapts to your unique needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join millions of athletes who are already using AI-powered Nike gear to push their limits and achieve new personal bests.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Your AI Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}