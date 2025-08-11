import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderSuccess from '@/components/checkout/OrderSuccess'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Order Confirmation - Apple Store',
  description: 'Your Apple Store order has been confirmed.',
}

export default function OrderSuccessPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <Header />
        <OrderSuccess />
        <Footer />
      </main>
    </PageTransition>
  )
}