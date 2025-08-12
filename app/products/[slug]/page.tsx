import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProductDetail from '@/components/product/ProductDetail'

// This would typically come from your CMS or database
const getProduct = async (slug: string) => {
  // Mock product data - replace with actual CMS/API call
  const products = {
    'iphone-15-pro': {
      id: 'iphone-15-pro',
      name: 'iPhone 15 Pro',
      slug: 'iphone-15-pro',
      price: 999,
      originalPrice: 1099,
      description: 'The most advanced iPhone yet with titanium design and A17 Pro chip.',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop'
      ],
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
      storage: ['128GB', '256GB', '512GB', '1TB'],
      features: [
        'A17 Pro chip',
        'Pro camera system',
        'Titanium design',
        'Action Button'
      ],
      category: 'iPhone'
    },
    'macbook-air-m3': {
      id: 'macbook-air-m3',
      name: 'MacBook Air M3',
      slug: 'macbook-air-m3',
      price: 1099,
      description: 'Supercharged by the M3 chip, MacBook Air is up to 60% faster than the previous generation.',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop'
      ],
      colors: ['Midnight', 'Starlight', 'Silver', 'Space Gray'],
      storage: ['256GB', '512GB', '1TB', '2TB'],
      features: [
        'M3 chip',
        '13.6-inch Liquid Retina display',
        'Up to 18 hours battery life',
        'MagSafe charging'
      ],
      category: 'Mac'
    },
    'apple-watch-se': {
      id: 'apple-watch-se',
      name: 'Apple Watch SE',
      slug: 'apple-watch-se',
      price: 249,
      description: 'All the essentials to help you monitor your fitness, keep connected, track your health, and stay safe.',
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=600&fit=crop'
      ],
      colors: ['Midnight', 'Starlight', 'Silver'],
      storage: ['GPS', 'GPS + Cellular'],
      features: [
        'S8 SiP',
        'Crash Detection',
        'Sleep tracking',
        'Water resistant to 50 meters'
      ],
      category: 'Watch'
    }
  }

  return products[slug as keyof typeof products] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  return {
    title: `${product.name} - Apple`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}