import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Footer } from '../components/Footer'
import HeaderSection from '../components/HeaderSection';
export default async function Second({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'second-page');
  const m = t('langs[0]')
  const langs = [t('label'),t('enl'),t('arl'),t('trl')]
  const SocialMedia = [t('facebook'), t('instegram'), t('youtube')]
  return (
    <>
    <div className='text-center text-black w-[100vw] h-[100vh] bg-white'>
           <HeaderSection SocialMedia={SocialMedia} langs={langs}  logo={t('logo')}  />
      <Link href={`/${lng}`}>
    
        {t('back-to-home')}
      </Link>
      <Footer lng={lng}/>
      </div>
    </>
  )
}
