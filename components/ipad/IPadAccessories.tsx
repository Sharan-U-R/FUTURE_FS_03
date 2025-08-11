'use client'

import { motion } from 'framer-motion'

const accessories = [
  {
    name: 'Apple Pencil Pro',
    price: '$129',
    description: 'The most advanced Apple Pencil yet',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop'
  },
  {
    name: 'Magic Keyboard',
    price: '$299',
    description: 'Full-size keyboard with trackpad',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
  },
  {
    name: 'Smart Folio',
    price: '$79',
    description: 'Thin, light protection',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop'
  }
]

export default function IPadAccessories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-black text-center mb-16"
        >
          iPad accessories
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-semibold text-black mb-2">{accessory.name}</h3>
              <p className="text-gray-600 mb-4">{accessory.description}</p>
              <p className="text-xl font-bold text-black mb-6">{accessory.price}</p>
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Buy
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}