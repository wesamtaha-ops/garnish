'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function LoadingScreen() {
  const { t, isRTL } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted to true after hydration
    setIsMounted(true)
    
    // Show loading screen for minimum time
    const timer = setTimeout(() => {
      setFadeOut(true)
      
      // Remove loading screen after fade animation
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }, 1500) // Show for 1.5 seconds minimum

    return () => clearTimeout(timer)
  }, [])

  // Don't render until mounted (avoid hydration mismatch)
  if (!isMounted || !isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#265a3f' }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse opacity-20 bg-white" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-20 bg-white" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-10 bg-white" 
             style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        {/* Logo Container with Animation */}
        <div className="relative animate-fade-in-scale">
          <div className="relative w-64 h-32">
            <Image
              src="/heroLogo.png"
              alt="GARNISH"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-30 bg-white rounded-full scale-150" />
        </div>

        {/* Animated Text */}
        <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }} dir={isRTL ? 'rtl' : 'ltr'}>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            GARNISH
          </h2>
          <p className={`text-green-100 text-sm tracking-widest ${isRTL ? '' : 'uppercase'}`}>
            {t('loading.tagline')}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {/* Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>

          {/* Loading Text */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="text-white text-sm">{t('loading.text')}</span>
            <span className="flex space-x-1">
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="h-full bg-white rounded-full animate-progress-bar" />
        </div>
      </div>
    </div>
  )
}

