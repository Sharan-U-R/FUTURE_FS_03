import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AirPodsHero from '@/components/airpods/AirPodsHero'
import AirPodsModels from '@/components/airpods/AirPodsModels'
import AirPodsFeatures from '@/components/airpods/AirPodsFeatures'

export const metadata = {
  title: 'AirPods - Apple',
  description: 'Explore AirPods Pro, AirPods, and AirPods Max. Compare models and find the perfect AirPods for you.',
}

export default function AirPodsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AirPodsHero />
      <AirPodsModels />
      <AirPodsFeatures />
      <Footer />
    </main>
  )
}