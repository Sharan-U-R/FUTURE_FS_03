'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  'Shop and Learn': ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Accessories'],
  'Apple Wallet': ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
  'Account': ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
  'Entertainment': ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books'],
  'Apple Store': ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In'],
  'For Business': ['Apple and Business', 'Shop for Business'],
  'For Education': ['Apple and Education', 'Shop for K-12', 'Shop for College'],
  'For Healthcare': ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
  'Apple Values': ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility'],
  'About Apple': ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple']
}

export default function Footer() {
  return (
    <footer className="bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 pb-8 border-b border-gray-300"
        >
          <p className="text-sm text-gray-600 mb-4">
            Get the latest news, exclusive offers, and product updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-apple-blue transition-colors text-sm"
            />
            <button className="bg-apple-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm">
              Sign up
            </button>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {Object.entries(footerLinks).slice(0, 5).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-black text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {Object.entries(footerLinks).slice(5).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-black text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-gray-600 text-xs">
              <p className="mb-2">
                More ways to shop: <a href="#" className="text-apple-blue hover:underline">Find an Apple Store</a> or <a href="#" className="text-apple-blue hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
              </p>
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Use</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Sales and Refunds</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Legal</a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}