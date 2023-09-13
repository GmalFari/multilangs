import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/Headers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-white" >

      <Header/>
      </main>
  )
}
