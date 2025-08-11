'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import { useSearch } from '@/contexts/SearchContext'
import { useAuth } from '@/contexts/AuthContext'
import UserProfileDropdown from '@/components/UserProfileDropdown'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const router = useRouter()
  const { getTotalItems } = useCart()
  const { setIsSearchOpen } = useSearch()
  const { isLoggedIn } = useAuth()

  // Handle scroll effect and detect dark backgrounds
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      
      // Check if we're on a page with dark background (like homepage hero)
      const heroSection = document.querySelector('section')
      if (heroSection) {
        const styles = window.getComputedStyle(heroSection)
        const bgColor = styles.backgroundColor
        setIsDarkBackground(bgColor === 'rgb(0, 0, 0)' || bgColor.includes('black') || window.scrollY < 100)
      }
    }
    
    handleScroll() // Check initial state
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Aggressive preloading for instant navigation
  useEffect(() => {
    // Preload all pages immediately
    const pagesToPreload = ['/store', '/mac', '/ipad', '/iphone', '/watch', '/airpods', '/tv', '/support', '/bag', '/login', '/checkout']
    
    pagesToPreload.forEach(page => {
      router.prefetch(page)
    })

    // Preload on hover for even faster loading
    const handleMouseEnter = (href: string) => {
      router.prefetch(href)
    }

    // Add hover prefetching to all nav links
    const navLinks = document.querySelectorAll('a[href^="/"]')
    navLinks.forEach(link => {
      const href = link.getAttribute('href')
      if (href) {
        link.addEventListener('mouseenter', () => handleMouseEnter(href))
      }
    })

    return () => {
      navLinks.forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
          link.removeEventListener('mouseenter', () => handleMouseEnter(href))
        }
      })
    }
  }, [router])

  const navItems = [
    { name: 'Store', href: '/store' },
    { name: 'Mac', href: '/mac' },
    { name: 'iPad', href: '/ipad' },
    { name: 'iPhone', href: '/iphone' },
    { name: 'Watch', href: '/watch' },
    { name: 'AirPods', href: '/airpods' },
    { name: 'TV & Home', href: '/tv' },
    { name: 'Support', href: '/support' }
  ]

  const totalItems = getTotalItems()

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm' 
        : isDarkBackground && !isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-100/30'
    }`}>
      <div className="max-w-none mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <Link href="/" className="absolute left-6">
            <motion.div 
              className="cursor-pointer flex items-center justify-center p-2 hover:bg-gray-50/30 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src="/apple-logo.png" 
                alt="Apple" 
                className="w-14 h-14 object-contain drop-shadow-sm"
                style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                prefetch={true}
                className={`text-sm font-medium transition-colors duration-200 py-3 px-3 relative group ${
                  isDarkBackground && !isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-800 hover:text-black'
                }`}
                onMouseEnter={() => router.prefetch(item.href)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-apple-blue transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="absolute right-6 flex items-center space-x-5">
            <motion.button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkBackground && !isScrolled 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className={`w-5 h-5 ${
                isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-800'
              }`} />
            </motion.button>
            
            <div className="hidden lg:block">
              <UserProfileDropdown 
                isDarkBackground={isDarkBackground} 
                isScrolled={isScrolled} 
              />
            </div>
            
            <Link href="/bag">
              <motion.div
                className={`p-2 rounded-full transition-colors duration-200 relative ${
                  isDarkBackground && !isScrolled 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className={`w-5 h-5 ${
                  isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-800'
                }`} />
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-apple-blue text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-full transition-colors duration-200 ${
                isDarkBackground && !isScrolled 
                  ? 'hover:bg-white/10' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? 
                <X className={`w-5 h-5 ${isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-800'}`} /> : 
                <Menu className={`w-5 h-5 ${isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-800'}`} />
              }
            </motion.button>
          </div>
        </div>



        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 py-4 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.href}
                      prefetch={true}
                      className="block text-base font-medium text-gray-900 hover:text-apple-blue hover:bg-gray-50 py-4 px-4 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={() => router.prefetch(item.href)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Mobile Actions */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsSearchOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center w-full p-3 text-gray-900 hover:text-apple-blue hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Search products...
                </button>
                
                {isLoggedIn ? (
                  <div className="mt-2 p-3 bg-apple-lightgray rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent('User')}&background=007AFF&color=fff`}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Welcome back!</p>
                        <p className="text-sm text-gray-600">Signed in</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full p-2 text-gray-800 hover:text-apple-blue hover:bg-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Profile
                      </Link>
                      <Link
                        href="/orders"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full p-2 text-gray-800 hover:text-apple-blue hover:bg-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <ShoppingBag className="w-4 h-4 mr-3" />
                        Orders
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center w-full p-3 text-gray-900 hover:text-apple-blue hover:bg-gray-50 rounded-lg transition-colors mt-2 font-medium"
                  >
                    <User className="w-5 h-5 mr-3" />
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}