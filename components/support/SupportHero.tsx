'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function SupportHero() {
  return (
    <section className="pt-16 pb-12 bg-apple-lightgray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Apple Support
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get help with your Apple products and services.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for topics and issues"
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-apple-blue focus:border-transparent text-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}