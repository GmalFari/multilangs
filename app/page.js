import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default async function Home({ params: { lng } }) {
  const {t} = await useTranslation(lng)


  return (
    <main className="w-[100vw] h-[100vh] bg-white" >

      </main>
  )
}
