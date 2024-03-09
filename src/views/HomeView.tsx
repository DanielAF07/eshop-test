import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomeView = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/orders')
  }, [])
  return (
    <div className='flex flex-col gap-12' />
  )
}
export default HomeView
