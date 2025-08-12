'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingBag, X } from 'lucide-react'
import Link from 'next/link'

export default function WishlistPage() {
  // Mock wishlist data
  const wishlistItems = [
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 999,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
      color: 'Natural Titanium'
    },
    {
      id: '2',
      name: 'MacBook Air M3',
      price: 1099,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop',
      color: 'Midnight'
    }
  ]

  if (wishlistItems.length === 0) {
    return (
      <section className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-semibold text-black mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Save items you love to your wishlist and come back to them later.
            </p>
            <Link href="/store">
              <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Start Shopping
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-semibold text-black mb-2">Your Wishlist</h1>
          <p className="text-gray-600">{wishlistItems.length} items saved</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg relative"
            >
              <button className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-black mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.color}</p>
              <p className="text-xl font-semibold text-black mb-4">${item.price}</p>

              <button className="w-full bg-apple-blue hover:bg-blue-600 text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}