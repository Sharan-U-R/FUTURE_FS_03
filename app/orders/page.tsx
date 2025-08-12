import { Metadata } from 'next'
import OrdersPage from '@/components/orders/OrdersPage'

export const metadata: Metadata = {
  title: 'Orders - Apple',
  description: 'View your order history and track shipments.',
}

export default function Orders() {
  return <OrdersPage />
}