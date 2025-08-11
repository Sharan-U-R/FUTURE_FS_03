'use client'

import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'

const products = [
  {
    id: 1,
    name: 'Air Max AI Runner',
    price: '$189',
    originalPrice: '$220',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 2847,
    badge: 'AI Optimized',
    features: ['Smart Cushioning', 'Gait Analysis', 'Performance Tracking']
  },
  {
    id: 2,
    name: 'Neural Flex Training',
    price: '$159',
    originalPrice: '$180',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 1923,
    badge: 'Best Seller',
    features: ['Adaptive Fit', 'Injury Prevention', 'Real-time Feedback']
  },
  {
    id: 3,
    name: 'Quantum Basketball Pro',
    price: '$199',
    originalPrice: '$240',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 3156,
    badge: 'Pro Choice',
    features: ['Court Mapping', 'Jump Analytics', 'Precision Control']
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            AI-Powered
            <span className="text-primary-600"> Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary lineup of intelligent athletic gear designed to elevate your performance to unprecedented levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.badge}
                </div>
                
                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                
                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                
                {/* Features */}
                <div className="space-y-1 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Add to Cart */}
                <AddToCartButton 
                  item={{
                    id: `nike-${product.id}`,
                    name: product.name,
                    price: parseInt(product.price.replace('$', '')),
                    originalPrice: product.originalPrice ? parseInt(product.originalPrice.replace('$', '')) : undefined,
                    image: product.image,
                    color: 'Default',
                    category: 'Athletic'
                  }}
                  className="w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  )
}