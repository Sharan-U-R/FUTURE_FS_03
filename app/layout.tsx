import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { CartProvider } from '@/contexts/CartContext'
import { SearchProvider } from '@/contexts/SearchContext'
import { AuthProvider } from '@/contexts/AuthContext'
import CartNotification from '@/components/CartNotification'
import SearchModal from '@/components/SearchModal'
import InstantLoader from '@/components/InstantLoader'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Apple Intelligence - Think Different with AI',
  description: 'Experience Apple like never before with AI-powered innovation across iPhone, Mac, iPad, and more.',
  keywords: 'Apple, iPhone, Mac, iPad, AI, Apple Intelligence, innovation, technology',
  authors: [{ name: 'Apple Inc.' }],
  creator: 'Apple Inc.',
  publisher: 'Apple Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Apple Intelligence - Think Different with AI',
    description: 'Experience Apple like never before with AI-powered innovation across iPhone, Mac, iPad, and more.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Apple',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Intelligence - Think Different with AI',
    description: 'Experience Apple like never before with AI-powered innovation across iPhone, Mac, iPad, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <AuthProvider>
          <SearchProvider>
            <CartProvider>
              <InstantLoader />
              <PerformanceMonitor />
              <SearchModal />
              <div id="root">
                {children}
                <CartNotification />
              </div>
            </CartProvider>
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  )
}