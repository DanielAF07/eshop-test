import Title from '@/components/common/Title'
import AddProductModal from '@/components/modals/AddProductModal'
import { OrderTable } from '@/components/tables/OrderTable'
import { Button } from '@/components/ui/button'
import { useOrdersStore } from '@/stores/OrdersStore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const OrderTableView = () => {
  const router = useRouter()
  const { id } = router.query
  const order = useOrdersStore(state => state.order)
  const getOrder = useOrdersStore(state => state.getOrder)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    const fetch = async () => {
      try {
        await getOrder(id as string)
      } catch (error) {
        console.error('Error getting order', error)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [id])

  return (
    <main className='container flex flex-col gap-12 mt-12'>
      <div>
        <Button onClick={() => router.back()}>
          <FaChevronLeft />
        </Button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <Title>Orden {order?.number || ''}</Title>
          <div className='flex justify-end'>
            <AddProductModal />
          </div>
          <OrderTable order={order} />
        </>
      )}
    </main>
  )
}
export default OrderTableView
