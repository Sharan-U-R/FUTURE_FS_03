'use client'

import { motion } from 'framer-motion'
import { Award, Users, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '50M+', label: 'Active Athletes' },
  { icon: Globe, value: '180+', label: 'Countries' },
  { icon: Award, value: '500+', label: 'Awards Won' },
  { icon: TrendingUp, value: '99%', label: 'Satisfaction Rate' }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Redefining Athletic
              <span className="text-primary-400"> Excellence</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over 50 years, Nike has been at the forefront of athletic innovation. Now, we're pioneering the next revolution with AI-powered technology that understands, adapts, and evolves with every athlete.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">AI-First Approach</h4>
                  <p className="text-gray-300">Every product is designed with artificial intelligence at its core, ensuring optimal performance for each individual athlete.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent-400 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">Sustainable Innovation</h4>
                  <p className="text-gray-300">Our AI systems optimize material usage and reduce waste, creating high-performance gear that's better for the planet.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">Global Community</h4>
                  <p className="text-gray-300">Connect with millions of athletes worldwide through our AI-powered platform that learns from collective performance data.</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary">
              Learn Our Story
            </button>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                alt="Nike Innovation Lab"
                className="w-full h-64 object-cover rounded-2xl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.button>
              </div>
              
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold">Innovation in Action</div>
                <div className="text-sm opacity-80">See how AI transforms athletics</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}