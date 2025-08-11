'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const models = [
  {
    name: 'iPhone 15 Pro Max',
    price: 'From $1,199',
    display: '6.7"',
    chip: 'A17 Pro',
    camera: 'Pro camera system',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    colors: ['#8A8A8A', '#1E3A8A', '#F8F8F8', '#1C1C1C'],
    features: ['Titanium design', '5x Telephoto camera', 'Action Button', 'USB-C']
  },
  {
    name: 'iPhone 15 Pro',
    price: 'From $999',
    display: '6.1"',
    chip: 'A17 Pro',
    camera: 'Pro camera system',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    colors: ['#8A8A8A', '#1E3A8A', '#F8F8F8', '#1C1C1C'],
    features: ['Titanium design', '3x Telephoto camera', 'Action Button', 'USB-C']
  },
  {
    name: 'iPhone 15 Plus',
    price: 'From $899',
    display: '6.7"',
    chip: 'A16 Bionic',
    camera: 'Advanced dual-camera system',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
    colors: ['#FFB6C1', '#87CEEB', '#90EE90', '#FFD700', '#000000'],
    features: ['Aluminum design', '2x Telephoto zoom', 'Dynamic Island', 'USB-C']
  },
  {
    name: 'iPhone 15',
    price: 'From $799',
    display: '6.1"',
    chip: 'A16 Bionic',
    camera: 'Advanced dual-camera system',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop',
    colors: ['#FFB6C1', '#87CEEB', '#90EE90', '#FFD700', '#000000'],
    features: ['Aluminum design', '2x Telephoto zoom', 'Dynamic Island', 'USB-C']
  }
]

export default function IPhoneModels() {
  return (
    <section className="py-20 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Which iPhone is right for you?
          </h2>
        </motion.div>

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
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Camera</span>
                  <span className="text-black font-medium">{model.camera}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 mb-3">
                  {model.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1 mb-6">
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
                    id: `iphone-${index}`,
                    name: model.name,
                    price: parseInt(model.price.replace('From $', '').replace(',', '')),
                    image: model.image,
                    color: 'Default',
                    category: 'iPhone'
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