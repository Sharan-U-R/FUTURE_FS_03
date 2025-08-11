'use client'

import { motion } from 'framer-motion'

export default function IPhoneHero() {
  return (
    <section className="pt-20 bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
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
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">
                Buy from $999
              </button>
              <button className="border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">
                Learn more
              </button>
            </div>
          </motion.div>

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
            
            <motion.div
              className="absolute top-10 left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-sm font-medium text-apple-blue">A17 Pro</div>
              <div className="text-lg font-semibold">Game‑changing chip</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-sm font-medium text-green-400">Action Button</div>
              <div className="text-lg font-semibold">Your shortcut to everything</div>
            </motion.div>
          </motion.div>

          {/* Color Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6">Available in four colors</h3>
            <div className="flex justify-center gap-4">
              {[
                { name: 'Natural Titanium', color: '#8A8A8A' },
                { name: 'Blue Titanium', color: '#1E3A8A' },
                { name: 'White Titanium', color: '#F8F8F8' },
                { name: 'Black Titanium', color: '#1C1C1C' }
              ].map((color, index) => (
                <motion.div
                  key={color.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center cursor-pointer group"
                >
                  <div
                    className="w-16 h-16 rounded-full border-2 border-gray-600 mb-2 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: color.color }}
                  />
                  <div className="text-sm text-gray-400">{color.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}