import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IPhoneHero from '@/components/iphone/IPhoneHero'
import IPhoneModels from '@/components/iphone/IPhoneModels'
import IPhoneFeatures from '@/components/iphone/IPhoneFeatures'

export const metadata = {
  title: 'iPhone - Apple',
  description: 'Explore iPhone 15 Pro, iPhone 15, iPhone 14, and iPhone SE. Compare features and technical specifications for iPhone models.',
}

export default function IPhonePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <IPhoneHero />
      <IPhoneModels />
      <IPhoneFeatures />
      <Footer />
    </main>
  )
}