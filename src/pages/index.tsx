import { Inter } from 'next/font/google'
import HomeView from '@/views/HomeView'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <HomeView />
    </main>
  )
}
