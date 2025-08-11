'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, Book, Wrench, Shield } from 'lucide-react'

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Chat',
    description: 'Chat with an Apple Support representative',
    action: 'Start chat'
  },
  {
    icon: Phone,
    title: 'Call',
    description: 'Talk to an Apple Support representative',
    action: 'Call now'
  },
  {
    icon: MapPin,
    title: 'Bring in for repair',
    description: 'Find an Apple Store or Apple Authorized Service Provider',
    action: 'Find locations'
  }
]

const quickHelp = [
  {
    icon: Book,
    title: 'User guides',
    description: 'Learn how to use your Apple products'
  },
  {
    icon: Wrench,
    title: 'Repair & service',
    description: 'Get your device repaired or serviced'
  },
  {
    icon: Shield,
    title: 'AppleCare+',
    description: 'Extend your coverage and get expert support'
  }
]

export default function SupportOptions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-black text-center mb-12">
            Get personalized support
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-apple-blue rounded-full mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-black text-center mb-12">
            Quick help
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickHelp.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-apple-lightgray rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
                  <item.icon className="w-6 h-6 text-apple-blue" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-black text-center mb-12">
            Popular topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'iPhone not turning on',
              'Forgot Apple ID password',
              'Mac running slowly',
              'AirPods not connecting',
              'iPad screen not responding',
              'Apple Watch not charging',
              'iCloud storage full',
              'App Store not working'
            ].map((topic, index) => (
              <motion.button
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-300 hover:border-apple-blue rounded-xl p-4 text-left transition-colors"
              >
                <span className="text-black font-medium">{topic}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}