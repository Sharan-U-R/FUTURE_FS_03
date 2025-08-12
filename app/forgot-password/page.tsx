import { Metadata } from 'next'
import ForgotPasswordPage from '@/components/auth/ForgotPasswordPage'

export const metadata: Metadata = {
  title: 'Forgot Password - Apple',
  description: 'Reset your Apple account password.',
}

export default function ForgotPassword() {
  return <ForgotPasswordPage />
}