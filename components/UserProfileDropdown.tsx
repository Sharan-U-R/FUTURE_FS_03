'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Settings, ShoppingBag, Heart, LogOut, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

interface UserProfileDropdownProps {
  isDarkBackground?: boolean
  isScrolled?: boolean
}

export default function UserProfileDropdown({ isDarkBackground = false, isScrolled = false }: UserProfileDropdownProps) {
  const { user, logout, isLoggedIn } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!isLoggedIn || !user) {
    return (
      <Link href="/login">
        <motion.div
          className={`p-1.5 rounded-full transition-colors duration-200 ${
            isDarkBackground && !isScrolled 
              ? 'hover:bg-white/10' 
              : 'hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className={`w-4 h-4 ${
            isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-800'
          }`} />
        </motion.div>
      </Link>
    )
  }

  const menuItems = [
    { icon: <User className="w-4 h-4" />, label: 'Profile', href: '/profile' },
    { icon: <ShoppingBag className="w-4 h-4" />, label: 'Orders', href: '/orders' },
    { icon: <Heart className="w-4 h-4" />, label: 'Wishlist', href: '/wishlist' },
    { icon: <Settings className="w-4 h-4" />, label: 'Settings', href: '/settings' },
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 p-1.5 rounded-full transition-colors duration-200 ${
          isDarkBackground && !isScrolled 
            ? 'hover:bg-white/10' 
            : 'hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=007AFF&color=fff`}
          alt={user.name}
          className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
        />
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''} ${
          isDarkBackground && !isScrolled ? 'text-white/90' : 'text-gray-600'
        }`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
          >
            {/* User Info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=007AFF&color=fff`}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Logout */}
            <div className="border-t border-gray-100 pt-1">
              <button
                onClick={() => {
                  logout()
                  setIsOpen(false)
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}