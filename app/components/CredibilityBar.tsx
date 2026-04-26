'use client'

import { Fragment } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const statKeys: Array<'cred.stat1' | 'cred.stat2' | 'cred.stat3' | 'cred.stat4'> = [
  'cred.stat1',
  'cred.stat2',
  'cred.stat3',
  'cred.stat4',
]

export default function CredibilityBar() {
  const { t, isRTL } = useLanguage()

  return (
    <div
      className="relative z-30 border-b border-white/10"
      style={{ backgroundColor: '#265a3f' }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <p className="sr-only">{t('cred.barTitle')}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6 text-center text-sm sm:text-base text-white/95">
          {statKeys.map((key, i) => (
            <Fragment key={key}>
              {i > 0 && (
                <span className="text-white/40 select-none" aria-hidden>
                  |
                </span>
              )}
              <span className="font-medium leading-snug px-1">
                {t(key)}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
