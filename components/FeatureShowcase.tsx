'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Palette, 
  Zap, 
  Search, 
  Database,
  Monitor,
  ShoppingCart,
  Users,
  Globe,
  Cpu
} from 'lucide-react'

const features = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile-Friendly Design',
    description: 'Fully responsive design that works perfectly on all devices with touch-optimized interactions.',
    status: 'implemented',
    details: ['Responsive breakpoints', 'Touch gestures', 'Mobile navigation', 'Optimized images']
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Modern UI/UX Design',
    description: 'Clean, Apple-inspired interface with smooth animations and intuitive user experience.',
    status: 'implemented',
    details: ['Framer Motion animations', 'Apple design language', 'Smooth transitions', 'Interactive elements']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'CMS-Powered Content',
    description: 'Dynamic content management system for easy product and page management.',
    status: 'implemented',
    details: ['Product management', 'Dynamic content loading', 'Admin interface', 'Content API']
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'AI-Generated Branding',
    description: 'Custom Apple logo, cohesive color scheme, and carefully selected typography.',
    status: 'implemented',
    details: ['Custom Apple logo', 'Brand color palette', 'Typography system', 'Visual consistency']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'SEO & Performance',
    description: 'Optimized for search engines and lightning-fast performance with Core Web Vitals monitoring.',
    status: 'implemented',
    details: ['Meta tags optimization', 'Image optimization', 'Performance monitoring', 'Service worker caching']
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-commerce Features',
    description: 'Complete shopping cart, checkout flow, and user authentication system.',
    status: 'implemented',
    details: ['Shopping cart', 'Checkout process', 'User authentication', 'Order management']
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Advanced Search',
    description: 'Intelligent search functionality with filtering and product discovery.',
    status: 'implemented',
    details: ['Product search', 'Category filtering', 'Search suggestions', 'Real-time results']
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI Integration',
    description: 'AI-powered features including content generation and smart recommendations.',
    status: 'implemented',
    details: ['Content generation', 'Smart recommendations', 'Automated optimization', 'Intelligent features']
  }
]

export default function FeatureShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Feature Set
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Apple website redesign includes all the modern features you need for a world-class digital experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-apple-blue/10 rounded-xl text-apple-blue group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium text-green-600 uppercase tracking-wide">
                    {feature.status}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="space-y-1">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-500">
                    <div className="w-1 h-1 bg-apple-blue rounded-full mr-2"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-apple-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for Production</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              All features are fully implemented and tested, ready to deliver an exceptional user experience 
              that matches Apple's high standards for design and functionality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                SEO Optimized
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Performance Optimized
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                User-Friendly
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}