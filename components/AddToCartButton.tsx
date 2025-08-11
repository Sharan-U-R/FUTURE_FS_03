'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface AddToCartButtonProps {
  item: {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    color: string
    storage?: string
    category: string
  }
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}

export default function AddToCartButton({ 
  item, 
  className = '', 
  size = 'md',
  variant = 'primary' 
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(item)
    setIsAdded(true)
    
    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: isAdded 
      ? 'bg-green-500 hover:bg-green-600 text-white' 
      : 'bg-apple-blue hover:bg-blue-600 text-white',
    secondary: isAdded
      ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
      : 'border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white'
  }

  const baseClasses = variant === 'primary' 
    ? 'font-medium rounded-full transition-all duration-200 flex items-center justify-center gap-2'
    : 'border font-medium rounded-full transition-all duration-200 flex items-center justify-center gap-2'

  return (
    <motion.button
      onClick={handleAddToCart}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added to Bag
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </>
      )}
    </motion.button>
  )
}