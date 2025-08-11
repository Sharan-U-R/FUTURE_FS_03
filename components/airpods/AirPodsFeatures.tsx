'use client'

import { motion } from 'framer-motion'
import { Volume2, Headphones, Mic, Battery } from 'lucide-react'

const features = [
  {
    icon: Volume2,
    title: 'Adaptive Audio',
    description: 'Automatically adjusts noise control based on your environment for the perfect listening experience.'
  },
  {
    icon: Headphones,
    title: 'Active Noise Cancellation',
    description: 'Block out unwanted noise and immerse yourself in your music, calls, and content.'
  },
  {
    icon: Mic,
    title: 'Conversation Awareness',
    description: 'Automatically lowers media volume and enhances voices in front of you when you start speaking.'
  },
  {
    icon: Battery,
    title: 'All-day battery',
    description: 'Up to 6 hours of listening time with ANC on, and up to 30 hours with the charging case.'
  }
]

export default function AirPodsFeatures() {
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
            Magical new features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-apple-lightgray rounded-3xl p-8"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-apple-blue rounded-2xl mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-black mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}