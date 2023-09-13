import Link from 'next/link'
import HeaderSection from './components/HeaderSection'
import { useTranslation } from '../i18n';
import { Footer } from './components/Footer';
export default async function Page({ params: { lng } }) {
  const {t} = await useTranslation(lng)
  const langs = [t('label'),t('enl'),t('arl'),t('trl')]
  const SocialMedia = [t('facebook'), t('instegram'), t('youtube')]
 
  return (
    <>
      <HeaderSection SocialMedia={SocialMedia} langs={langs}  logo={t('logo')}  />
         <div className='text-center text-black w-[100vw] h-[100vh] bg-white'>
      <Link href={`/${lng}/second-page`}>
        go to language switcher       
      </Link>

      </div>
    </>
  )
}