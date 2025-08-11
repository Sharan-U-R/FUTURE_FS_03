import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SupportHero from '@/components/support/SupportHero'
import SupportOptions from '@/components/support/SupportOptions'

export const metadata = {
  title: 'Apple Support',
  description: 'Get help with your Apple products. Find answers, contact support, and get service.',
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SupportHero />
      <SupportOptions />
      <Footer />
    </main>
  )
}