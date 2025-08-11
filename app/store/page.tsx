import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StoreHero from '@/components/store/StoreHero'
import ProductGrid from '@/components/store/ProductGrid'
import DynamicProductGrid from '@/components/cms/DynamicProductGrid'
import StoreServices from '@/components/store/StoreServices'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Apple Store - Shop iPhone, Mac, iPad, Apple Watch & More',
  description: 'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
}

export default function StorePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <Header />
        <StoreHero />
        <DynamicProductGrid showTitle={false} />
        <StoreServices />
        <Footer />
      </main>
    </PageTransition>
  )
}