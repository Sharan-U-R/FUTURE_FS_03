'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const products = [
  {
    name: 'iPhone 15',
    tagline: 'Newphoria',
    description: 'A camera that captures your wildest imagination.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop',
    colors: ['#1d4ed8', '#dc2626', '#059669', '#7c3aed', '#000000'],
    price: 'From $799'
  },
  {
    name: 'Apple Watch Series 9',
    tagline: 'Smarter. Brighter. Mightier.',
    description: 'The most powerful Apple Watch yet.',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop',
    colors: ['#000000', '#c0c0c0', '#ffd700', '#ff69b4'],
    price: 'From $399'
  },
  {
    name: 'AirPods Pro',
    tagline: 'Adaptive Audio',
    description: 'Personalized listening experience like never before.',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop',
    colors: ['#ffffff'],
    price: 'From $249'
  }
]

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-4">
                  {product.name}
                </h2>
                <h3 className="text-2xl lg:text-3xl text-apple-gray mb-6">
                  {product.tagline}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Color Options */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-sm text-gray-600 mr-2">Available in:</span>
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="text-xl font-semibold text-black mb-4 sm:mb-0">
                    {product.price}
                  </div>
                  <div className="flex gap-4">
                    <AddToCartButton 
                      item={{
                        id: `showcase-${index}`,
                        name: product.name,
                        price: parseInt(product.price.replace('From $', '').replace(',', '')),
                        image: product.image,
                        color: 'Default',
                        category: product.name.includes('iPhone') ? 'iPhone' : product.name.includes('Watch') ? 'Apple Watch' : 'AirPods'
                      }}
                    />
                    <button className="text-apple-blue hover:underline font-medium">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                
                {/* Floating Feature Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  New
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}