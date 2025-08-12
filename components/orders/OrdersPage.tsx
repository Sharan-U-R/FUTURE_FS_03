'use client'

import { motion } from 'framer-motion'
import { Package, Truck, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function OrdersPage() {
  // Mock orders data
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 999,
      items: [
        {
          name: 'iPhone 15 Pro',
          color: 'Natural Titanium',
          image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 1099,
      items: [
        {
          name: 'MacBook Air M3',
          color: 'Midnight',
          image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: 'ORD-003',
      date: '2024-01-25',
      status: 'processing',
      total: 249,
      items: [
        {
          name: 'Apple Watch SE',
          color: 'Midnight',
          image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=100&h=100&fit=crop'
        }
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return <Package className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered'
      case 'shipped':
        return 'Shipped'
      case 'processing':
        return 'Processing'
      default:
        return 'Unknown'
    }
  }

  if (orders.length === 0) {
    return (
      <section className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-semibold text-black mb-4">No orders yet</h1>
            <p className="text-gray-600 mb-8">
              When you place your first order, it will appear here.
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
          <h1 className="text-3xl font-semibold text-black mb-2">Your Orders</h1>
          <p className="text-gray-600">{orders.length} orders</p>
        </motion.div>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    Order {order.id}
                  </h3>
                  <p className="text-gray-600">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  {getStatusIcon(order.status)}
                  <span className="font-medium text-black">
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.color}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                <p className="text-lg font-semibold text-black mb-2 sm:mb-0">
                  Total: ${order.total}
                </p>
                <div className="flex gap-3">
                  <button className="text-apple-blue hover:underline font-medium">
                    View Details
                  </button>
                  {order.status === 'shipped' && (
                    <button className="text-apple-blue hover:underline font-medium">
                      Track Package
                    </button>
                  )}
                  {order.status === 'delivered' && (
                    <button className="text-apple-blue hover:underline font-medium">
                      Buy Again
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}