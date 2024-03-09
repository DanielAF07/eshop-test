import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { RiExternalLinkLine } from 'react-icons/ri'
import { apiClient } from '@/config/axiosClient'
import { Order } from '@/interfaces/Order'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const getOrders = async () => {
  const response = await apiClient.get('/orders')
  return response.data.orders
}

export function OrdersTable () {
  const { isPending, data: orders, error } = useQuery<Order[], Error>({
    queryKey: ['orders'],
    queryFn: getOrders
  })

  if (orders === undefined) return null
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Number</TableHead>
          <TableHead>Items Count</TableHead>
          <TableHead>Fullfilment Status</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className='font-medium'>{order.number}</TableCell>
            <TableCell>{order.items.length}</TableCell>
            <TableCell className='capitalize'>{order.fulfillmentStatus.ecartapi}</TableCell>
            <TableCell className='capitalize'>{order.status.ecartapi}</TableCell>
            <TableCell className='text-right'>{order.totals.total}</TableCell>
            <TableCell className='text-right'>
              <Link className='p-1' href={`/orders/${order.id}`}>
                <RiExternalLinkLine size={24} />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
