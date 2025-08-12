import { Metadata } from 'next'
import ProfilePage from '@/components/profile/ProfilePage'

export const metadata: Metadata = {
  title: 'Profile - Apple',
  description: 'Manage your Apple account profile and preferences.',
}

export default function Profile() {
  return <ProfilePage />
}