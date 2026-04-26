'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, BookOpen, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-x-hidden scroll-mt-20"
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/heroBG.png?"
              alt="GARNISH Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#265a3f',
              opacity: 0.9
            }}
          />
        </div>

              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                <div className="absolute left-6 top-8 h-24 w-24 rounded-full blur-xl animate-pulse sm:left-10 sm:top-10 sm:h-32 sm:w-32" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
                <div className="absolute bottom-16 right-6 h-28 w-28 rounded-full blur-2xl animate-pulse sm:bottom-20 sm:right-20 sm:h-40 sm:w-40" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)', animationDelay: '2s' }} />
                <div className="absolute top-32 right-1/4 w-20 h-20 rounded-full blur-md animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', animationDelay: '0.5s' }} />
                <div className="absolute bottom-32 left-1/4 w-28 h-28 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', animationDelay: '1.5s' }} />
                <div className="absolute top-20 right-10 w-16 h-16 rounded-full blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.09)', animationDelay: '2.5s' }} />
                <div className="absolute top-40 left-1/2 w-12 h-12 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
                <div className="absolute bottom-40 right-1/3 w-10 h-10 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }} />
                <div className="absolute top-60 left-20 w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                <div className="absolute bottom-60 right-16 w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.13)' }} />
                <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', animationDelay: '1s' }} />
                <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', animationDelay: '1.3s' }} />
                <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', animationDelay: '0.7s' }} />
                <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', animationDelay: '2.1s' }} />
                <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.10)', animationDuration: '20s' }} />
                <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>

      <div className="relative z-20 flex min-h-[100dvh] flex-1 flex-col">
        <div
          className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col justify-start pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-[calc(5rem+env(safe-area-inset-top,0px))] text-center sm:pl-6 sm:pr-6 sm:pb-4 sm:pt-20 md:pt-24 lg:pl-8 lg:pr-8"
        >
          <div
            className={`flex min-h-0 flex-1 flex-col justify-start gap-0 motion-reduce:transition-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 sm:min-h-0 sm:justify-center sm:py-1`}
          >
            <div className="-mt-0 mb-2 shrink-0 sm:mb-2 md:mb-3 lg:mb-4">
              <div
                className="relative mx-auto h-[min(9.5rem,32vw)] w-[min(22rem,calc(100vw-1.25rem))] max-w-full max-sm:max-h-[30vh] sm:h-40 sm:w-80 md:h-44 md:w-96 lg:h-40 lg:w-[20rem] xl:h-44 xl:w-[22rem] 2xl:h-48 2xl:w-96"
              >
                <Image
                  src="/heroLogo.png"
                  alt="GARNISH Hero Logo"
                  fill
                  sizes="(max-width: 640px) min(22rem, calc(100vw - 1.25rem)), (max-width: 1024px) 24rem, (max-width: 1536px) 22rem, 24rem"
                  className="object-contain object-top drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <h1 className="mb-2 max-w-[65ch] shrink-0 px-1 text-balance text-base font-bold leading-snug text-white sm:mb-2 sm:px-2 sm:text-lg md:mb-3 md:text-xl md:leading-tight lg:mb-4 lg:max-w-4xl lg:px-4 lg:text-2xl lg:leading-tight xl:text-3xl">
            {t('hero.headline')}
            </h1>

            <p className="mb-1.5 max-w-prose shrink-0 px-1 text-sm leading-relaxed text-neutral-200 sm:mb-2 sm:px-2 sm:text-base md:mb-2 md:max-w-3xl md:px-4 md:leading-relaxed lg:mx-auto lg:text-lg">
            {t('hero.subheadline')}
            </p>

            <p className="mb-3 max-w-prose shrink-0 px-1 text-xs leading-relaxed text-neutral-300 sm:mb-4 sm:text-sm md:mb-5 md:max-w-2xl md:px-4 md:text-base lg:mx-auto">
            {t('hero.supportLine')}
            </p>

            <div
              className={`mt-auto flex shrink-0 flex-col items-stretch justify-center gap-3 px-1 pt-1 sm:mt-0 sm:flex-row sm:items-center sm:gap-3 sm:px-4 lg:mt-0 lg:gap-4 lg:pt-2 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
            <Link
              href="#contact"
              className={`group flex min-h-[3rem] w-full min-w-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-3 text-sm text-white shadow-2xl transition duration-300 [touch-action:manipulation] active:scale-[0.99] hover:shadow-primary-500/25 sm:w-auto sm:min-h-0 sm:px-6 sm:py-2.5 sm:text-sm sm:hover:scale-[1.02] md:text-base lg:px-8 lg:py-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <MessageCircle className="h-5 w-5 shrink-0 sm:h-5 sm:w-5" />
              <span className="text-center font-medium">{t('hero.cta')}</span>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-hover:translate-y-0.5 sm:h-4 sm:w-4" />
            </Link>
            
            <Link
              href="#projects"
              className={`group flex min-h-[3rem] w-full min-w-0 items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md transition duration-300 [touch-action:manipulation] active:scale-[0.99] hover:border-white/30 hover:bg-white/15 sm:w-auto sm:min-h-0 sm:px-6 sm:py-2.5 sm:text-sm sm:hover:scale-[1.02] sm:hover:bg-white sm:hover:text-neutral-900 md:text-base lg:px-8 lg:py-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <BookOpen className="h-5 w-5 shrink-0" />
              <span className="text-center font-medium">{t('hero.contact')}</span>
            </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
