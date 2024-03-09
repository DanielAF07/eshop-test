import Title from '@/components/common/Title'
import { OrdersTable } from '@/components/tables/OrdersTable'

const OrdersTableView = () => {
  return (
    <main className='container flex flex-col gap-12 mt-24'>
      <Title>Ordenes</Title>
      <OrdersTable />
    </main>
  )
}
export default OrdersTableView
