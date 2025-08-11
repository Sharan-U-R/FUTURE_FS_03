'use client'

import { motion } from 'framer-motion'
import { Heart, Activity, Moon, Zap } from 'lucide-react'

const healthFeatures = [
  {
    icon: Heart,
    title: 'Heart health',
    description: 'Monitor your heart rate and rhythm with advanced sensors and get notifications for irregular patterns.'
  },
  {
    icon: Activity,
    title: 'Fitness tracking',
    description: 'Track workouts, close your Activity rings, and stay motivated with personalized coaching.'
  },
  {
    icon: Moon,
    title: 'Sleep tracking',
    description: 'Understand your sleep patterns and create a bedtime routine that works for you.'
  },
  {
    icon: Zap,
    title: 'Mindfulness',
    description: 'Take a moment to breathe and reflect with the Mindfulness app and guided meditations.'
  }
]

export default function WatchHealth() {
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
            Your health companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apple Watch helps you stay connected to your health with powerful sensors and innovative features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {healthFeatures.map((feature, index) => (
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