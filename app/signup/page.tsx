import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignupForm from '@/components/auth/SignupForm'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Create Apple ID - Apple',
  description: 'Create your Apple ID to access all Apple services with a single account.',
}

export default function SignupPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-apple-lightgray">
        <Header />
        <SignupForm />
        <Footer />
      </main>
    </PageTransition>
  )
}