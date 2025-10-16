'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Play } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function HeroSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
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
          {/* Green overlay with specified color and opacity */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: '#265a3f',
              opacity: 0.9
            }}
          />
        </div>

              {/* Enhanced Decorative Background Pattern */}
              <div className="absolute inset-0 z-10 overflow-hidden">
                {/* Large Background Circles */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
                <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)', animationDelay: '2s' }} />
                
                {/* Medium Circles */}
                <div className="absolute top-32 right-1/4 w-20 h-20 rounded-full blur-md animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', animationDelay: '0.5s' }} />
                <div className="absolute bottom-32 left-1/4 w-28 h-28 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', animationDelay: '1.5s' }} />
                <div className="absolute top-20 right-10 w-16 h-16 rounded-full blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.09)', animationDelay: '2.5s' }} />
                
                {/* Small Accent Circles */}
                <div className="absolute top-40 left-1/2 w-12 h-12 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
                <div className="absolute bottom-40 right-1/3 w-10 h-10 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }} />
                <div className="absolute top-60 left-20 w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                <div className="absolute bottom-60 right-16 w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.13)' }} />
                
                {/* Floating Dots Pattern */}
                <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', animationDelay: '1s' }} />
                <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', animationDelay: '1.3s' }} />
                <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', animationDelay: '0.7s' }} />
                <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', animationDelay: '2.1s' }} />
                
                {/* Subtle Ring Elements */}
                <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.10)', animationDuration: '20s' }} />
                <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           {/* Responsive Hero Logo - Larger */}
           <div className="mb-6 md:mb-8">
             <div className="relative w-80 h-40 sm:w-96 sm:h-48 md:w-[40rem] md:h-80 lg:w-[48rem] lg:h-96 mx-auto">
               <Image
                 src="/heroLogo.png"
                 alt="GARNISH Hero Logo"
                 fill
                 className="object-contain drop-shadow-2xl"
                 priority
               />
             </div>
           </div>

          {/* Responsive Subtitle - Larger */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-200 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>

          {/* Responsive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center mb-6 md:mb-10 px-4">
            <Link
              href="#story"
              className={`group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} w-full sm:w-auto justify-center`}
            >
              <span>{t('hero.cta')}</span>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="#contact"
              className={`group bg-white/10 backdrop-blur-md text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg border-2 border-white/20 hover:bg-white hover:text-neutral-900 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} w-full sm:w-auto justify-center`}
            >
              <span>{t('hero.contact')}</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                <Play className={`w-3 h-3 sm:w-4 sm:h-4 ${isRTL ? 'mr-0.5 scale-x-[-1]' : 'ml-0.5'}`} />
              </div>
            </Link>
          </div>

         
        </div>
      </div>

    </section>
  )
}
