'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Share, Star, Check, Truck, Shield, RotateCcw } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  description: string
  image: string
  images: string[]
  colors: string[]
  storage: string[]
  features: string[]
  category: string
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0])
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedColor}-${selectedStorage}`,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      storage: selectedStorage,
      category: product.category
    })
  }

  return (
    <section className="pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-apple-lightgray rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-apple-blue' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-black mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8)</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold text-black">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-apple-blue bg-apple-blue text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                {product.category === 'Watch' ? 'Connectivity' : 'Storage'}
              </h3>
              <div className="flex gap-3">
                {product.storage.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedStorage(option)}
                    className={`px-4 py-2 rounded-full border-2 transition-colors ${
                      selectedStorage === option
                        ? 'border-apple-blue bg-apple-blue text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-apple-blue hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-full transition-colors"
              >
                Add to Bag
              </button>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-apple-blue hover:underline">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-apple-blue hover:underline">
                  <Share className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-apple-blue" />
                <div>
                  <p className="font-medium text-black">Free Delivery</p>
                  <p className="text-sm text-gray-600">On orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-apple-blue" />
                <div>
                  <p className="font-medium text-black">Free Returns</p>
                  <p className="text-sm text-gray-600">14-day return policy</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-apple-blue" />
                <div>
                  <p className="font-medium text-black">Apple Care+</p>
                  <p className="text-sm text-gray-600">Extended warranty available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}