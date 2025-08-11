'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function InstantLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Show loading state briefly on route change
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 150) // Very short loading time since pages are prefetched

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 h-0.5 bg-apple-blue z-50 origin-left"
        />
      )}
    </AnimatePresence>
  )
}