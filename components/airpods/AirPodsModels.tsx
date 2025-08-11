'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const models = [
  {
    name: 'AirPods Pro (2nd generation)',
    price: 'From $249',
    features: ['Active Noise Cancellation', 'Adaptive Transparency', 'Spatial Audio', 'Up to 6 hours listening'],
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop'
  },
  {
    name: 'AirPods (3rd generation)',
    price: 'From $179',
    features: ['Spatial Audio', 'Adaptive EQ', 'Sweat and water resistant', 'Up to 6 hours listening'],
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&h=300&fit=crop'
  },
  {
    name: 'AirPods Max',
    price: 'From $549',
    features: ['High-fidelity audio', 'Active Noise Cancellation', 'Spatial Audio', 'Up to 20 hours listening'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  }
]

export default function AirPodsModels() {
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
          Which AirPods are right for you?
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
              <p className="text-2xl font-bold text-black mb-6">{model.price}</p>
              
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
                    id: `airpods-${index}`,
                    name: model.name,
                    price: parseInt(model.price.replace('From $', '').replace(',', '')),
                    image: model.image,
                    color: 'Default',
                    category: 'AirPods'
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