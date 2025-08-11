'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import CMS, { CMSContent } from '@/lib/cms'

interface DynamicProductGridProps {
  category?: string
  limit?: number
  showTitle?: boolean
}

export default function DynamicProductGrid({ 
  category, 
  limit = 8, 
  showTitle = true 
}: DynamicProductGridProps) {
  const [products, setProducts] = useState<CMSContent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const fetchedProducts = await CMS.getProducts(category)
        setProducts(fetchedProducts.slice(0, limit))
      } catch (err) {
        setError('Failed to load products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [category, limit])

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <div className="h-8 bg-gray-200 rounded-lg mb-8 w-48 loading-shimmer"></div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: limit }).map((_, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl p-6 loading-shimmer">
                <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-20"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 btn-primary"
          >
            Try Again
          </button>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">No products found{category ? ` in ${category}` : ''}.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-black mb-8"
          >
            {category || 'Featured Products'}
          </motion.h2>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-apple-lightgray rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Link href={`/products/${product.slug}`}>
                  <img
                    src={product.image || '/placeholder-product.svg'}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform cursor-pointer"
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-black mb-2 cursor-pointer">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  {product.price && (
                    <p className="text-gray-800 font-medium mb-4">{product.price}</p>
                  )}
                </Link>
                
                {product.features && product.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-white px-2 py-1 rounded-full text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Link 
                    href={`/products/${product.slug}`} 
                    className="text-apple-blue hover:underline text-sm font-medium"
                  >
                    Learn more
                  </Link>
                  <AddToCartButton 
                    item={{
                      id: product.id,
                      name: product.title,
                      price: product.price ? parseInt(product.price.replace(/[^0-9]/g, '')) : 0,
                      image: product.image || '/placeholder-product.svg',
                      color: 'Default',
                      category: product.category
                    }}
                    size="sm"
                    variant="secondary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}