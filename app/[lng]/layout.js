import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import HeaderSection from './components/HeaderSection';
import { useTranslation } from '../i18n'
import { Footer } from './components/Footer';
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}) {
  const {t} = await useTranslation(lng)

  const langs = [t('label'),t('enl'),t('arl'),t('trl')]
  const SocialMedia = [t('facebook'), t('instegram'), t('youtube')]
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}