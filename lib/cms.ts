// Simple CMS-like content management system
export interface CMSContent {
  id: string
  title: string
  description: string
  image?: string
  price?: string
  features?: string[]
  category: string
  slug: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export interface CMSPage {
  id: string
  title: string
  slug: string
  metaDescription: string
  hero: {
    title: string
    subtitle: string
    image: string
    ctaText: string
    ctaLink: string
  }
  sections: CMSSection[]
  published: boolean
}

export interface CMSSection {
  id: string
  type: 'hero' | 'products' | 'features' | 'testimonials' | 'cta'
  title?: string
  content: any
  order: number
}

// Mock CMS data - in production this would come from a headless CMS
const cmsProducts: CMSContent[] = [
  {
    id: 'iphone-15-pro',
    title: 'iPhone 15 Pro',
    description: 'Titanium. So strong. So light. So Pro.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    price: 'From $999',
    features: ['A17 Pro chip', 'ProRAW', 'Action Button', '5x Telephoto camera'],
    category: 'iPhone',
    slug: 'iphone-15-pro',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'macbook-air-m3',
    title: 'MacBook Air',
    description: 'Lean. Mean. M3 machine.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
    price: 'From $1,099',
    features: ['M3 chip', '18-hour battery', 'Liquid Retina display', 'MagSafe charging'],
    category: 'Mac',
    slug: 'macbook-air-m3',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'apple-watch-series-9',
    title: 'Apple Watch Series 9',
    description: 'Smarter. Brighter. Mightier.',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop',
    price: 'From $399',
    features: ['S9 SiP', 'Double Tap gesture', 'Always-On Retina display', 'Blood Oxygen app'],
    category: 'Apple Watch',
    slug: 'apple-watch-series-9',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: 'apple-watch-se',
    title: 'Apple Watch SE',
    description: 'A great deal to love.',
    image: '/apple-watch-se.svg',
    price: 'From $249',
    features: ['S8 SiP', 'Retina display', 'Crash Detection', 'Water resistant'],
    category: 'Apple Watch',
    slug: 'apple-watch-se',
    published: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
]

const cmsPages: CMSPage[] = [
  {
    id: 'homepage',
    title: 'Apple Intelligence - Think Different with AI',
    slug: '/',
    metaDescription: 'Experience Apple like never before with AI-powered innovation across iPhone, Mac, iPad, and more.',
    hero: {
      title: 'Apple Intelligence',
      subtitle: 'Think Different with AI',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
      ctaText: 'Explore Now',
      ctaLink: '/store'
    },
    sections: [
      {
        id: 'hero-section',
        type: 'hero',
        content: {
          title: 'Apple Intelligence',
          subtitle: 'Think Different with AI',
          description: 'Experience the future of technology with AI-powered innovation across all Apple devices.'
        },
        order: 1
      },
      {
        id: 'products-section',
        type: 'products',
        title: 'Explore Our Products',
        content: {
          products: cmsProducts.filter(p => p.published).slice(0, 4)
        },
        order: 2
      }
    ],
    published: true
  }
]

// CMS API functions
export class CMS {
  static async getProducts(category?: string): Promise<CMSContent[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    
    let products = cmsProducts.filter(p => p.published)
    
    if (category) {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }
    
    return products.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  static async getProduct(slug: string): Promise<CMSContent | null> {
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return cmsProducts.find(p => p.slug === slug && p.published) || null
  }

  static async getPage(slug: string): Promise<CMSPage | null> {
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return cmsPages.find(p => p.slug === slug && p.published) || null
  }

  static async getFeaturedProducts(limit: number = 4): Promise<CMSContent[]> {
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return cmsProducts
      .filter(p => p.published)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, limit)
  }

  static async searchProducts(query: string): Promise<CMSContent[]> {
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const searchTerm = query.toLowerCase()
    
    return cmsProducts.filter(p => 
      p.published && (
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.features?.some(f => f.toLowerCase().includes(searchTerm))
      )
    )
  }

  // Admin functions (would require authentication in production)
  static async createProduct(product: Omit<CMSContent, 'id' | 'createdAt' | 'updatedAt'>): Promise<CMSContent> {
    const newProduct: CMSContent = {
      ...product,
      id: `product-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    cmsProducts.push(newProduct)
    return newProduct
  }

  static async updateProduct(id: string, updates: Partial<CMSContent>): Promise<CMSContent | null> {
    const index = cmsProducts.findIndex(p => p.id === id)
    
    if (index === -1) return null
    
    cmsProducts[index] = {
      ...cmsProducts[index],
      ...updates,
      updatedAt: new Date().toISOString()
    }
    
    return cmsProducts[index]
  }

  static async deleteProduct(id: string): Promise<boolean> {
    const index = cmsProducts.findIndex(p => p.id === id)
    
    if (index === -1) return false
    
    cmsProducts.splice(index, 1)
    return true
  }
}

export default CMS