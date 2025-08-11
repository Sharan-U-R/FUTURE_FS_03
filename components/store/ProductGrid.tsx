'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'

const products = [
  {
    category: 'Mac',
    items: [
      { name: 'MacBook Air', price: 'From $1,099', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop', href: '/mac' },
      { name: 'MacBook Pro', price: 'From $1,599', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop', href: '/mac' },
      { name: 'iMac', price: 'From $1,299', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop', href: '/mac' },
      { name: 'Mac Studio', price: 'From $1,999', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop', href: '/mac' }
    ]
  },
  {
    category: 'iPhone',
    items: [
      { name: 'iPhone 15 Pro', price: 'From $999', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop', href: '/iphone' },
      { name: 'iPhone 15', price: 'From $799', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop', href: '/iphone' },
      { name: 'iPhone 14', price: 'From $699', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=200&fit=crop', href: '/iphone' },
      { name: 'iPhone SE', price: 'From $429', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=200&fit=crop', href: '/iphone' }
    ]
  },
  {
    category: 'iPad',
    items: [
      { name: 'iPad Pro', price: 'From $799', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop', href: '/ipad' },
      { name: 'iPad Air', price: 'From $599', image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=200&fit=crop', href: '/ipad' },
      { name: 'iPad', price: 'From $329', image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop', href: '/ipad' },
      { name: 'iPad mini', price: 'From $499', image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=300&h=200&fit=crop', href: '/ipad' }
    ]
  },
  {
    category: 'Apple Watch',
    items: [
      { name: 'Apple Watch Series 9', price: 'From $399', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop', href: '/watch' },
      { name: 'Apple Watch Ultra 2', price: 'From $799', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop', href: '/watch' },
      { name: 'Apple Watch SE', price: 'From $249', image: '/apple-watch-se.svg', href: '/watch' }
    ]
  }
]

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-black mb-8"
            >
              {category.category}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-apple-lightgray rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <Link href={product.href}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform cursor-pointer"
                      />
                      <h3 className="font-semibold text-black mb-2 cursor-pointer">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.price}</p>
                    </Link>
                    <div className="flex gap-2">
                      <Link href={product.href} className="text-apple-blue hover:underline text-sm font-medium">
                        Learn more
                      </Link>
                      <AddToCartButton 
                        item={{
                          id: `${category.category.toLowerCase()}-${index}`,
                          name: product.name,
                          price: parseInt(product.price.replace('From $', '').replace(',', '')),
                          image: product.image,
                          color: 'Default',
                          category: category.category
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
        ))}
      </div>
    </section>
  )
}