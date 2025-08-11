'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useSearch } from '@/contexts/SearchContext'

export default function SearchModal() {
  const {
    query,
    setQuery,
    results,
    isSearching,
    isSearchOpen,
    setIsSearchOpen,
    clearSearch
  } = useSearch()
  
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen])

  if (!isSearchOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={clearSearch}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="flex items-center p-4 border-b border-gray-100">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder-gray-400"
            />
            <button
              onClick={clearSearch}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isSearching ? (
              <div className="p-8 text-center">
                <div className="loading-shimmer w-8 h-8 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500">Searching...</p>
              </div>
            ) : query && results.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500 mb-2">No products found for "{query}"</p>
                <p className="text-sm text-gray-400">Try searching for iPhone, Mac, iPad, or Apple Watch</p>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={clearSearch}
                    className="flex items-center p-4 hover:bg-gray-50 transition-colors group"
                  >
                    <img
                      src={product.image || '/placeholder-product.svg'}
                      alt={product.title}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-apple-blue transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mr-2">
                          {product.category}
                        </span>
                        {product.price && (
                          <span className="text-sm font-medium text-gray-900">
                            {product.price}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-apple-blue transition-colors" />
                  </Link>
                ))}
              </div>
            ) : query === '' ? (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">Start typing to search products</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['iPhone', 'Mac', 'iPad', 'Apple Watch'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setQuery(suggestion)}
                      className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Search Footer */}
          {query && (
            <div className="border-t border-gray-100 p-3 bg-gray-50">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </span>
                <div className="flex items-center gap-4">
                  <span>Press <kbd className="px-1 py-0.5 bg-white border rounded">↵</kbd> to select</span>
                  <span>Press <kbd className="px-1 py-0.5 bg-white border rounded">Esc</kbd> to close</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}