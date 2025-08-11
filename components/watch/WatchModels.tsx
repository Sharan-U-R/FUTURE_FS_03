'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const models = [
  {
    name: 'Apple Watch Series 9',
    price: 'From $399',
    size: '41mm or 45mm',
    features: ['Always-On Retina display', 'S9 SiP', 'Double Tap gesture'],
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop'
  },
  {
    name: 'Apple Watch Ultra 2',
    price: 'From $799',
    size: '49mm',
    features: ['Titanium case', 'Action Button', 'Up to 36 hours battery'],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
  },
  {
    name: 'Apple Watch SE',
    price: 'From $249',
    size: '40mm or 44mm',
    features: ['Retina display', 'S8 SiP', 'Crash Detection'],
    image: '/apple-watch-se.svg'
  }
]

export default function WatchModels() {
  return (
    <section className="py-20 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-black text-center mb-16"
        >
          Which Apple Watch is right for you?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              
              <h3 className="text-xl font-semibold text-black mb-2">{model.name}</h3>
              <p className="text-2xl font-bold text-black mb-4">{model.price}</p>
              <p className="text-gray-600 mb-6">{model.size}</p>
              
              <div className="space-y-2 mb-6">
                {model.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-apple-blue rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-2">
                <AddToCartButton 
                  item={{
                    id: `watch-${index}`,
                    name: model.name,
                    price: parseInt(model.price.replace('From $', '').replace(',', '')),
                    image: model.image,
                    color: 'Default',
                    category: 'Apple Watch'
                  }}
                  className="w-full"
                />
                <button className="w-full text-apple-blue hover:underline font-medium">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}