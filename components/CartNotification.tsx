'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export default function CartNotification() {
  const { state } = useCart()
  const [lastItemCount, setLastItemCount] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [lastAddedItem, setLastAddedItem] = useState<any>(null)

  useEffect(() => {
    const currentItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    
    if (currentItemCount > lastItemCount && state.items.length > 0) {
      // Find the most recently added item
      const newestItem = state.items[state.items.length - 1]
      setLastAddedItem(newestItem)
      setShowNotification(true)
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }
    
    setLastItemCount(currentItemCount)
  }, [state.items, lastItemCount])

  return (
    <AnimatePresence>
      {showNotification && lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          className="fixed top-20 right-4 z-50 bg-white rounded-2xl shadow-2xl p-4 max-w-sm border border-gray-200"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-black mb-1">
                Added to bag
              </p>
              <p className="text-xs text-gray-600 truncate">
                {lastAddedItem.name}
              </p>
            </div>
            
            <button
              onClick={() => setShowNotification(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          
          <div className="flex gap-2 mt-3">
            <button 
              onClick={() => setShowNotification(false)}
              className="flex-1 text-xs bg-apple-blue text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Bag
            </button>
            <button 
              onClick={() => setShowNotification(false)}
              className="flex-1 text-xs border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}