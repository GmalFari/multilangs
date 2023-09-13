import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n';
export const Footer = async ({ lng }) => {

  const { t } = await useTranslation(lng, 'div');
  return (
    <div style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l} className='m-4 '>
            {index > 0 && ' or '}
            <Link className='m-4 p-4 bg-[#ddd]' href={`/${l}`}>
              {l}
            </Link>
          </span>
        );
      })}
    </div>
  );
};