import { OrdersTable } from '@/components/tables/OrdersTable'

const HomeView = () => {
  return (
    <div className='flex flex-col gap-12'>
      <h1 className='text-4xl font-bold '>Orden de compra</h1>
      <OrdersTable />
    </div>
  )
}
export default HomeView
