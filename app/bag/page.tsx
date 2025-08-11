import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShoppingBag from '@/components/bag/ShoppingBag'

export const metadata = {
  title: 'Bag - Apple',
  description: 'Review items in your bag and check out when you\'re ready.',
}

export default function BagPage() {
  return (
    <main className="min-h-screen bg-apple-lightgray">
      <Header />
      <ShoppingBag />
      <Footer />
    </main>
  )
}