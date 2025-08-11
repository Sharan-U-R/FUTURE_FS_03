'use client'

import { motion } from 'framer-motion'

export default function MacHero() {
  return (
    <section className="pt-20 bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              MacBook Pro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Supercharged by M3 Pro and M3 Max.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">
                Buy from $1,599
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
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&h=600&fit=crop"
              alt="MacBook Pro"
              className="w-full max-w-5xl mx-auto h-auto rounded-2xl"
            />
            
            <motion.div
              className="absolute top-10 left-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-sm font-medium text-apple-blue">M3 Pro</div>
              <div className="text-lg font-semibold">Up to 18-core GPU</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-sm font-medium text-green-400">Battery Life</div>
              <div className="text-lg font-semibold">Up to 22 hours</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}