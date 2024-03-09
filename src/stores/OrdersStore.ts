import { apiClient } from '@/config/axiosClient'
import { Order } from '@/interfaces/Order'
import { create } from 'zustand'

interface OrderState {
  orders: Order[],
  order: Order | null,
}

interface OrderStoreActions {
  getOrders: () => Promise<void>,
  getOrder: (id: string) => Promise<void>
}

type OrderStore = OrderState & OrderStoreActions

const INITIAL_STATE: OrderState = {
  orders: [],
  order: null
}

export const useOrdersStore = create<OrderStore>()((set) => ({
  ...INITIAL_STATE,

  getOrders: async () => {
    const response = await apiClient.get('/orders')
    set({ orders: response.data.orders })
  },
  getOrder: async (id: string) => {
    const response = await apiClient.get(`/orders/${id}`)
    set({ order: response.data.order })
  }
}))
