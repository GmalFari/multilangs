import Link from 'next/link'
import { useTranslation } from '../i18n'
export default async function Page({ params: { lng } }) {
  const {t} = await useTranslation(lng)
  return (
    <>
         <div className='text-center text-black w-[100vw] h-[100vh] bg-white'>

      <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>
        second page
        {t('to-second-page')}
      </Link>
      </div>
    </>
  )
}