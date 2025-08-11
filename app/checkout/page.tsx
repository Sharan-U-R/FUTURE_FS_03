import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Checkout - Apple Store',
  description: 'Complete your Apple Store purchase with secure checkout.',
}

export default function CheckoutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <Header />
        <CheckoutForm />
        <Footer />
      </main>
    </PageTransition>
  )
}