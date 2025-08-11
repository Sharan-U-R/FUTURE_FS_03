'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AddToCartButton from '@/components/AddToCartButton'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-20 bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              iPhone 15 Pro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Titanium. So strong. So light. So Pro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/iphone">
                <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                  Learn more
                </button>
              </Link>
              <AddToCartButton 
                item={{
                  id: 'hero-iphone-15-pro',
                  name: 'iPhone 15 Pro',
                  price: 999,
                  image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
                  color: 'Natural Titanium',
                  storage: '128GB',
                  category: 'iPhone'
                }}
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-20"
          >
            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop"
              alt="iPhone 15 Pro"
              className="w-full max-w-4xl mx-auto h-auto"
            />
            
            {/* Floating AI Features */}
            <motion.div
              className="absolute top-10 left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-sm font-medium text-apple-blue">Apple Intelligence</div>
              <div className="text-lg font-semibold">AI-Powered</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-sm font-medium text-green-400">A17 Pro Chip</div>
              <div className="text-lg font-semibold">3nm Process</div>
            </motion.div>
          </motion.div>

          {/* Secondary Products */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-900 rounded-3xl p-8 text-left"
            >
              <h3 className="text-3xl font-semibold mb-4">MacBook Pro</h3>
              <p className="text-gray-300 mb-6">Supercharged by M3 Pro and M3 Max.</p>
              <div className="flex gap-4">
                <button className="text-apple-blue hover:underline">Learn more</button>
                <button className="text-apple-blue hover:underline">Buy</button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
                alt="MacBook Pro"
                className="w-full h-48 object-cover rounded-2xl mt-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-900 rounded-3xl p-8 text-left"
            >
              <h3 className="text-3xl font-semibold mb-4">iPad Pro</h3>
              <p className="text-gray-300 mb-6">Unbelievably thin. Incredibly powerful.</p>
              <div className="flex gap-4">
                <Link href="/ipad" className="text-apple-blue hover:underline">Learn more</Link>
                <AddToCartButton 
                  item={{
                    id: 'hero-ipad-pro',
                    name: 'iPad Pro',
                    price: 799,
                    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
                    color: 'Space Gray',
                    category: 'iPad'
                  }}
                  size="sm"
                  variant="secondary"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
                alt="iPad Pro"
                className="w-full h-48 object-cover rounded-2xl mt-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}