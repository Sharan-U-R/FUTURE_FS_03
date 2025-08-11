'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const models = [
  {
    name: 'iPad Pro',
    price: 'From $799',
    display: '11" or 12.9"',
    chip: 'M4',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop'
  },
  {
    name: 'iPad Air',
    price: 'From $599',
    display: '10.9"',
    chip: 'M2',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop'
  },
  {
    name: 'iPad',
    price: 'From $329',
    display: '10.9"',
    chip: 'A14 Bionic',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop'
  },
  {
    name: 'iPad mini',
    price: 'From $499',
    display: '8.3"',
    chip: 'A15 Bionic',
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400&h=300&fit=crop'
  }
]

export default function IPadModels() {
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
          Which iPad is right for you?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Display</span>
                  <span className="text-black font-medium">{model.display}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Chip</span>
                  <span className="text-black font-medium">{model.chip}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <AddToCartButton 
                  item={{
                    id: `ipad-${index}`,
                    name: model.name,
                    price: parseInt(model.price.replace('From $', '').replace(',', '')),
                    image: model.image,
                    color: 'Default',
                    category: 'iPad'
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