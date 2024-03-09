import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import formatNumber from '@/helpers/formatNumber'
import { Order } from '@/interfaces/Order'
import { useCallback } from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { useRouter } from 'next/router'

interface Props {
  order: Order | null
}

export function OrderTable ({ order }: Props) {
  const router = useRouter()
  // Callback to calculate the total of the order
  const getTotal = useCallback(() => {
    return order?.items.reduce((acc, item) => {
      return acc + Number(item.quantity) * Number(item.price)
    }, 0)
  }, [order])

  const handlePayment = () => {
    toast.success('Payment successful')
    router.replace('/orders')
  }

  if (!order) return <div>Loading...</div>

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>SKU</TableHead>
          <TableHead className='w-[100px]'>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className='text-right'>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {order.items.map((item) => (
          <TableRow key={item.sku}>
            <TableCell className='font-medium'>{item.sku ?? '-'}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${formatNumber(item.price)}</TableCell>
            <TableCell className='text-right'>${formatNumber(Number(item.quantity) * Number(item.price))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className='text-right text-lg'>$ {formatNumber(getTotal() as number)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} />
          <TableCell className='text-right text-lg'>
            <Button onClick={handlePayment}>
              Pay
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
