'use client'

import { motion } from 'framer-motion'
import AddToCartButton from '@/components/AddToCartButton'

const macModels = [
  {
    name: 'MacBook Air',
    tagline: 'Lean. Mean. M3 machine.',
    price: 'From $1,099',
    chip: 'M3',
    display: '13.6" or 15.3"',
    battery: 'Up to 18 hours',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=300&fit=crop',
    colors: ['#C0C0C0', '#FFD700', '#708090', '#000080']
  },
  {
    name: 'MacBook Pro',
    tagline: 'Mind-blowing. Head-turning.',
    price: 'From $1,599',
    chip: 'M3 Pro or M3 Max',
    display: '14" or 16"',
    battery: 'Up to 22 hours',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=300&fit=crop',
    colors: ['#C0C0C0', '#2F2F2F']
  },
  {
    name: 'iMac',
    tagline: 'Makes a statement. Makes a splash.',
    price: 'From $1,299',
    chip: 'M3',
    display: '24"',
    battery: 'All-day power',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=300&fit=crop',
    colors: ['#87CEEB', '#FFB6C1', '#90EE90', '#DDA0DD', '#F0E68C', '#FFA500', '#FF6347']
  },
  {
    name: 'Mac Studio',
    tagline: 'Supercharged by M2 Max and M2 Ultra.',
    price: 'From $1,999',
    chip: 'M2 Max or M2 Ultra',
    display: 'Studio Display sold separately',
    battery: 'Desktop power',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=300&fit=crop',
    colors: ['#C0C0C0']
  }
]

export default function MacLineup() {
  return (
    <section className="py-20 bg-apple-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-6">
            Which Mac is right for you?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {macModels.map((mac, index) => (
            <motion.div
              key={mac.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={mac.image}
                alt={mac.name}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              
              <h3 className="text-xl font-semibold text-black mb-2">{mac.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{mac.tagline}</p>
              <p className="text-2xl font-bold text-black mb-6">{mac.price}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Chip</span>
                  <span className="text-black font-medium">{mac.chip}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Display</span>
                  <span className="text-black font-medium">{mac.display}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery</span>
                  <span className="text-black font-medium">{mac.battery}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 flex-wrap">
                  {mac.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <AddToCartButton 
                  item={{
                    id: `mac-${index}`,
                    name: mac.name,
                    price: parseInt(mac.price.replace('From $', '').replace(',', '')),
                    image: mac.image,
                    color: 'Default',
                    category: 'Mac'
                  }}
                  className="w-full"
                />
                <button className="w-full text-apple-blue hover:underline font-medium">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}