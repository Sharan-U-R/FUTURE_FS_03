'use client'

import { motion } from 'framer-motion'
import { Truck, CreditCard, Headphones, RefreshCw } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Fast, free delivery',
    description: 'Free delivery on orders over $50. Or pick up available items at an Apple Store.'
  },
  {
    icon: CreditCard,
    title: 'Pay monthly at 0% APR',
    description: 'You can pay over time when you choose to check out with Apple Card Monthly Installments.'
  },
  {
    icon: Headphones,
    title: 'Get help buying',
    description: 'Have a question? Call a Specialist or chat online. Call 1‑800‑APL‑CARE.'
  },
  {
    icon: RefreshCw,
    title: 'Trade in with Apple',
    description: 'Get credit toward a new device when you trade in an eligible device.'
  }
]

export default function StoreServices() {
  return (
    <section className="py-16 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-black text-center mb-12"
        >
          The Apple Store difference
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-apple-blue rounded-full mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}