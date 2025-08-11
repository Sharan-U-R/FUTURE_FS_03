'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Calendar, Download } from 'lucide-react'

export default function OrderSuccess() {
  const orderNumber = 'W123456789'
  const estimatedDelivery = 'December 15, 2024'

  return (
    <section className="pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-semibold text-black mb-4">Thank you for your order!</h1>
          <p className="text-xl text-gray-600 mb-2">Your order has been confirmed and will be shipped soon.</p>
          <p className="text-lg text-gray-500">Order #{orderNumber}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-black mb-6">Order Details</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=80&h=80&fit=crop"
                  alt="iPhone 15 Pro"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-black">iPhone 15 Pro</h3>
                  <p className="text-gray-600 text-sm">Natural Titanium, 128GB</p>
                  <p className="font-semibold text-black">$999.00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=80&h=80&fit=crop"
                  alt="AirPods Pro"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-black">AirPods Pro (2nd generation)</h3>
                  <p className="text-gray-600 text-sm">White</p>
                  <p className="font-semibold text-black">$249.00</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$1,248.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">$99.84</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$1,347.84</span>
              </div>
            </div>
          </motion.div>

          {/* Shipping & Tracking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-black mb-6">Shipping Information</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-apple-blue" />
                <div>
                  <p className="font-medium text-black">Order Confirmed</p>
                  <p className="text-sm text-gray-600">We've received your order</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-400">In Transit</p>
                  <p className="text-sm text-gray-400">Your order is being prepared</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-400">Delivered</p>
                  <p className="text-sm text-gray-400">Estimated: {estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div className="bg-apple-lightgray rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-black mb-2">Shipping Address</h3>
              <p className="text-gray-700">
                John Doe<br />
                123 Main Street<br />
                San Francisco, CA 94102<br />
                United States
              </p>
            </div>

            <button className="w-full bg-apple-blue hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
              Track Your Order
            </button>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-black mb-6">What's Next?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Get Ready</h3>
              <p className="text-gray-600 text-sm">Download the Apple Store app to track your order and get delivery updates.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Setup Help</h3>
              <p className="text-gray-600 text-sm">Need help setting up your new device? Visit our support page or schedule a session.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">AppleCare+</h3>
              <p className="text-gray-600 text-sm">Protect your investment with AppleCare+. Add coverage within 60 days of purchase.</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link href="/store">
            <button className="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Continue Shopping
            </button>
          </Link>
          <Link href="/support">
            <button className="border border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}