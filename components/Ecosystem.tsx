'use client'

import { motion } from 'framer-motion'
import { Smartphone, Laptop, Watch, Headphones, Tv, Home } from 'lucide-react'

const ecosystemProducts = [
  {
    icon: Smartphone,
    name: 'iPhone',
    description: 'The ultimate personal device',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop'
  },
  {
    icon: Laptop,
    name: 'Mac',
    description: 'Supercharged by Apple silicon',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop'
  },
  {
    icon: Watch,
    name: 'Apple Watch',
    description: 'Your health companion',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop'
  },
  {
    icon: Headphones,
    name: 'AirPods',
    description: 'Magical wireless experience',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop'
  },
  {
    icon: Tv,
    name: 'Apple TV',
    description: 'Entertainment reimagined',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop'
  },
  {
    icon: Home,
    name: 'HomePod',
    description: 'Immersive audio experience',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop'
  }
]

export default function Ecosystem() {
  return (
    <section className="py-20 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            The Apple Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you have an iPhone, iPad, Mac, and Apple Watch, you can do amazing things. 
            They work together seamlessly, so you can start something on one device and finish it on another.
          </p>
        </motion.div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ecosystemProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <product.icon className="w-5 h-5 text-black" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <button className="text-apple-blue hover:underline font-medium">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuity Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl lg:text-4xl font-semibold mb-6">
            Continuity Features
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Start an email on your iPhone and finish it on your Mac. Copy text on your iPad and paste it on your iPhone. 
            Answer calls and texts from any device. It all works like magic.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Universal Clipboard</h4>
              <p className="text-sm opacity-80">Copy on one device, paste on another</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold mb-2">Handoff</h4>
              <p className="text-sm opacity-80">Start on one device, finish on another</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">iPhone Mirroring</h4>
              <p className="text-sm opacity-80">Use your iPhone from your Mac</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}