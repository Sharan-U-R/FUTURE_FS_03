import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MacHero from '@/components/mac/MacHero'
import MacLineup from '@/components/mac/MacLineup'
import MacFeatures from '@/components/mac/MacFeatures'

export const metadata = {
  title: 'Mac - Apple',
  description: 'Explore the world of Mac. Check out MacBook Pro, MacBook Air, iMac, Mac mini, Mac Studio, and Mac Pro. Visit the Apple site to learn, buy, and get support.',
}

export default function MacPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MacHero />
      <MacLineup />
      <MacFeatures />
      <Footer />
    </main>
  )
}