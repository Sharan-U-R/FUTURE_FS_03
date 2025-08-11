'use client'

import { motion } from 'framer-motion'
import { Cpu, Monitor, Zap, Palette } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Apple silicon',
    description: 'Game-changing performance and efficiency. M3 delivers up to 35% faster CPU performance than M1.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  },
  {
    icon: Monitor,
    title: 'Stunning displays',
    description: 'Brilliant Retina displays with True Tone technology. See every detail with incredible clarity.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop'
  },
  {
    icon: Zap,
    title: 'All-day battery',
    description: 'Work all day without plugging in. MacBook Air delivers up to 18 hours of battery life.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop'
  },
  {
    icon: Palette,
    title: 'macOS Sonoma',
    description: 'The most advanced desktop operating system in the world. Powerful, intuitive, and secure.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
  }
]

export default function MacFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Why Mac
          </h2>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-apple-blue rounded-2xl mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  {feature.title}
                </h3>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <button className="text-apple-blue hover:underline font-medium text-lg">
                  Learn more
                </button>
              </div>

              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}