'use client'

import { motion } from 'framer-motion'
import { Camera, Cpu, Battery, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Pro camera system',
    description: 'Our most advanced camera system ever. Capture incredible detail with the 48MP Main camera.',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop'
  },
  {
    icon: Cpu,
    title: 'A17 Pro chip',
    description: 'The most powerful chip ever in a smartphone. Built on 3-nanometer technology.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  },
  {
    icon: Battery,
    title: 'All-day battery life',
    description: 'Up to 29 hours of video playback. And fast charging that gets you up to 50% in 30 minutes.',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop'
  },
  {
    icon: Shield,
    title: 'Titanium design',
    description: 'Aerospace-grade titanium. Incredibly strong. Incredibly light. Incredibly Pro.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
  }
]

export default function IPhoneFeatures() {
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
            Explore the full story
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
                  Learn more about {feature.title.toLowerCase()}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-black rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Ready to upgrade?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trade in your current iPhone and get credit toward a new one. It's good for you and the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-apple-blue hover:bg-blue-600 px-8 py-4 rounded-full font-medium transition-colors">
              Get started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-medium transition-colors">
              Learn about trade-in
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}