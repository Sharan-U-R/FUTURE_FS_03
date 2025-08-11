'use client'

import { motion } from 'framer-motion'

export default function IPadHero() {
  return (
    <section className="pt-12 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-black">
              iPad Pro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unbelievably thin. Incredibly powerful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg">
                Buy from $799
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
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000&h=600&fit=crop"
              alt="iPad Pro"
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}