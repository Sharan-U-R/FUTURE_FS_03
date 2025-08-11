import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IPadHero from '@/components/ipad/IPadHero'
import IPadModels from '@/components/ipad/IPadModels'
import IPadAccessories from '@/components/ipad/IPadAccessories'

export const metadata = {
  title: 'iPad - Apple',
  description: 'Explore iPad Pro, iPad Air, iPad, and iPad mini. With Apple Pencil, Magic Keyboard, and incredible apps, iPad is unlike anything else.',
}

export default function IPadPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <IPadHero />
      <IPadModels />
      <IPadAccessories />
      <Footer />
    </main>
  )
}