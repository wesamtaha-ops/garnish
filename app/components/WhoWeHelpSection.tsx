'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const itemKeys = [
  'whoWeHelp.item1',
  'whoWeHelp.item2',
  'whoWeHelp.item3',
  'whoWeHelp.item4',
] as const

export default function WhoWeHelpSection() {
  const { t, isRTL, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="who-we-help"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-white to-neutral-50 py-16 md:py-20 border-b border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5"
            style={{ backgroundColor: 'rgba(38, 90, 63, 0.1)' }}
          >
            <Users className="w-5 h-5" style={{ color: '#265a3f' }} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#265a3f' }}>
              {t('whoWeHelp.badge')}
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-3"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {t('whoWeHelp.title')}
          </h2>
          <p
            className="text-lg text-neutral-600"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {t('whoWeHelp.subtitle')}
          </p>
        </div>

        <ul
          className={`grid gap-4 sm:gap-5 md:grid-cols-2 max-w-5xl mx-auto ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700 delay-100`}
        >
          {itemKeys.map((key) => (
            <li
              key={key}
              className="flex gap-3 sm:gap-4 rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-sm"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="shrink-0 pt-0.5">
                <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#265a3f' }} />
              </div>
              <p className="text-neutral-800 leading-relaxed text-sm sm:text-base">
                {t(key)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
