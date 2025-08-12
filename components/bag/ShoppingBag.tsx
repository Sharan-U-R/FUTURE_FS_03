'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Plus, Minus, X, Heart, Truck } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function ShoppingBagComponent() {
  const { state, updateQuantity, removeItem, getTotalPrice } = useCart()
  const { items } = state

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <section className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-semibold text-black mb-4">Your bag is empty.</h1>
            <p className="text-gray-600 mb-8">
              Sign in to see if you have any saved items. Or continue shopping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Sign In
                </button>
              </Link>
              <Link href="/store">
                <button className="border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Recently viewed items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold text-black mb-6">You might also like</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  id: 'rec-1',
                  name: 'AirPods Pro',
                  price: 249,
                  image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop',
                  color: 'White',
                  category: 'Audio'
                },
                {
                  id: 'rec-2',
                  name: 'Apple Watch Series 9',
                  price: 399,
                  image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop',
                  color: 'Midnight',
                  category: 'Watch'
                },
                {
                  id: 'rec-3',
                  name: 'iPad Pro',
                  price: 799,
                  image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=200&fit=crop',
                  color: 'Space Gray',
                  category: 'iPad'
                }
              ].map((item, index) => (
                <div key={item.id} className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-semibold text-black mb-2">{item.name}</h3>
                  <p className="font-semibold text-black mb-4">${item.price}</p>
                  <AddToCartButton item={item} />
                </div>
              ))}
            </div>
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
          <h1 className="text-3xl font-semibold text-black mb-2">Review your bag.</h1>
          <p className="text-gray-600">Free delivery and free returns.</p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg"
              >
                <div className="space-y-4">
                  {/* Header with title and remove button */}
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black flex-1 min-w-0 truncate">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {/* Image and details section */}
                  <div className="flex gap-4 overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="space-y-1">
                        <p className="text-gray-600 text-sm truncate">{item.color}</p>
                        {item.storage && <p className="text-gray-600 text-sm truncate">{item.storage}</p>}
                      </div>
                      
                      <div className="text-right">
                        {item.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">${item.originalPrice}</p>
                        )}
                        <p className="text-xl font-semibold text-black">${item.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity controls and total price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors flex-shrink-0"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-black w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors flex-shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-apple-blue hover:underline text-sm whitespace-nowrap">
                      <Heart className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">Save for later</span>
                    </button>
                    <button className="text-apple-blue hover:underline text-sm whitespace-nowrap">
                      Find in store
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg h-fit lg:sticky lg:top-24"
          >
            <h2 className="text-xl font-semibold text-black mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-black">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated tax</span>
                <span className="font-medium text-black">${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-black">Total</span>
                  <span className="text-lg font-semibold text-black">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-6">
              <Link href="/checkout" className="block">
                <button className="w-full bg-apple-blue hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full transition-colors text-center">
                  Check Out
                </button>
              </Link>
              
              <Link href="/store" className="block">
                <button className="w-full border-2 border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white font-semibold py-4 px-6 rounded-full transition-colors text-center">
                  Continue Shopping
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Truck className="w-4 h-4" />
              <span>Free delivery on orders over $50</span>
            </div>

            <div className="text-xs text-gray-500">
              <p className="mb-2">
                Need help? Call <span className="text-apple-blue">1-800-APL-CARE</span> or chat with us.
              </p>
              <p>
                Have questions about buying online? Visit our <Link href="/support" className="text-apple-blue hover:underline">Support page</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Add to Cart Button Component
function AddToCartButton({ item }: { item: any }) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
      category: item.category
    })
  }

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full bg-apple-blue hover:bg-blue-600 text-white py-2 rounded-full font-medium transition-colors"
    >
      Add to Bag
    </button>
  )
}