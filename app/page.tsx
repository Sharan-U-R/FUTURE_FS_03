import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Innovation from '@/components/Innovation'
import Ecosystem from '@/components/Ecosystem'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <ProductShowcase />
        <Innovation />
        <Ecosystem />
        <Footer />
      </main>
    </PageTransition>
  )
}