import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WatchHero from '@/components/watch/WatchHero'
import WatchModels from '@/components/watch/WatchModels'
import WatchHealth from '@/components/watch/WatchHealth'

export const metadata = {
  title: 'Apple Watch - Apple',
  description: 'Explore Apple Watch Series 9, Apple Watch Ultra 2, and Apple Watch SE. Compare models and find the perfect Apple Watch for you.',
}

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WatchHero />
      <WatchModels />
      <WatchHealth />
      <Footer />
    </main>
  )
}