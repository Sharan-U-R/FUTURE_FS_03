'use client'

import { motion } from 'framer-motion'
import { Cpu, Shield, Zap, Brain } from 'lucide-react'

const innovations = [
  {
    icon: Brain,
    title: 'Apple Intelligence',
    description: 'Personal intelligence that helps you write, express yourself, and get things done effortlessly.',
    color: 'text-purple-600'
  },
  {
    icon: Cpu,
    title: 'A17 Pro Chip',
    description: 'The most powerful chip ever in a smartphone, built on 3-nanometer technology.',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Your personal information stays private and secure, processed on-device when possible.',
    color: 'text-green-600'
  },
  {
    icon: Zap,
    title: 'All-Day Battery',
    description: 'Advanced power management delivers incredible battery life that lasts all day.',
    color: 'text-orange-600'
  }
]

export default function Innovation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Innovation that matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every Apple product is designed to make a meaningful difference in your daily life, 
            powered by breakthrough technologies that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-apple-lightgray rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white mb-6`}>
                <innovation.icon className={`w-6 h-6 ${innovation.color}`} />
              </div>
              
              <h3 className="text-2xl font-semibold text-black mb-4">
                {innovation.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {innovation.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black rounded-3xl overflow-hidden text-white"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-6">
                Carbon Neutral by 2030
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're committed to making our entire manufacturing supply chain carbon neutral by 2030. 
                Every Apple product will have net-zero climate impact.
              </p>
              <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-colors">
                Learn about our commitment
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                alt="Environmental commitment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}