import Title from '@/components/common/Title'
import { OrderTable } from '@/components/tables/OrderTable'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/config/axiosClient'
import { Order } from '@/interfaces/Order'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FaChevronLeft } from 'react-icons/fa'

const getOrder = async (id: string | string[] | undefined) => {
  if (!id) throw new Error('No id provided')
  const response = await apiClient.get(`/orders/${id}`)
  return response.data.order
}

const OrderTableView = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: order, error } = useQuery<Order, Error>({
    queryKey: ['order', id],
    queryFn: () => getOrder(id)
  })
  return (
    <main className='container flex flex-col gap-12 mt-12'>
      <div>
        <Button onClick={() => router.back()}>
          <FaChevronLeft />
        </Button>
      </div>
      <Title>Orden {order?.number || ''}</Title>
      {order && <OrderTable order={order} />}
    </main>
  )
}
export default OrderTableView
