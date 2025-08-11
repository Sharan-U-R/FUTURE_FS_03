import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoginForm from '@/components/auth/LoginForm'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Sign In - Apple',
  description: 'Sign in to your Apple ID to access your account, purchases, and more.',
}

export default function LoginPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-apple-lightgray">
        <Header />
        <LoginForm />
        <Footer />
      </main>
    </PageTransition>
  )
}