import { Metadata } from 'next'
import WishlistPage from '@/components/wishlist/WishlistPage'

export const metadata: Metadata = {
  title: 'Wishlist - Apple',
  description: 'Your saved items and wishlist.',
}

export default function Wishlist() {
  return <WishlistPage />
}