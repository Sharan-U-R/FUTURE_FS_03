'use client'

import { motion } from 'framer-motion'

export default function StoreHero() {
  return (
    <section className="pt-20 pb-8 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12"
        >
          <h1 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Store. <span className="text-gray-600">The best way to buy the products you love.</span>
          </h1>
        </motion.div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Mac', icon: '💻', href: '/mac' },
            { name: 'iPhone', icon: '📱', href: '/iphone' },
            { name: 'iPad', icon: '📱', href: '/ipad' },
            { name: 'Watch', icon: '⌚', href: '/watch' }
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-medium text-black">{item.name}</div>
            </motion.a>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black rounded-3xl overflow-hidden"
          >
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop"
                  alt="iPhone 15 Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">iPhone 15 Pro</h3>
                <p className="text-gray-300 mb-4">Titanium. So strong. So light. So Pro.</p>
                <div className="flex gap-3">
                  <button className="bg-apple-blue hover:bg-blue-600 px-5 py-2.5 rounded-full font-medium transition-colors text-white text-sm">
                    Learn more
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-black px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
                    Buy
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex min-h-[280px]">
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-3 text-white">iPhone 15 Pro</h3>
                <p className="text-xl text-gray-300 mb-6">Titanium. So strong. So light. So Pro.</p>
                <div className="flex gap-4">
                  <button className="bg-apple-blue hover:bg-blue-600 px-6 py-3 rounded-full font-medium transition-colors text-white">
                    Learn more
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium transition-colors">
                    Buy
                  </button>
                </div>
              </div>
              <div className="w-48 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop"
                  alt="iPhone 15 Pro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100"
          >
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop"
                  alt="MacBook Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">MacBook Pro</h3>
                <p className="text-gray-600 mb-4">Supercharged by M3 Pro and M3 Max.</p>
                <div className="flex gap-3">
                  <button className="bg-apple-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
                    Learn more
                  </button>
                  <button className="border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
                    Buy
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex min-h-[280px]">
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-3 text-black">MacBook Pro</h3>
                <p className="text-xl text-gray-600 mb-6">Supercharged by M3 Pro and M3 Max.</p>
                <div className="flex gap-4">
                  <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Learn more
                  </button>
                  <button className="border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Buy
                  </button>
                </div>
              </div>
              <div className="w-48 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
                  alt="MacBook Pro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}