import { Metadata } from 'next'
import SettingsPage from '@/components/settings/SettingsPage'

export const metadata: Metadata = {
  title: 'Settings - Apple',
  description: 'Manage your account settings and preferences.',
}

export default function Settings() {
  return <SettingsPage />
}