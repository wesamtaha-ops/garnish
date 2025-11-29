'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function WhatsAppButton() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Phone number (Syria)
  const phoneNumber = '963945989890' // WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('whatsapp.defaultMessage'))}`

  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isVisible && (
        <div className={`fixed bottom-6 z-50 ${isRTL ? 'left-6' : 'right-6'}`}>
          {/* Expanded Message Tooltip */}
          {isExpanded && (
            <div 
              className={`absolute bottom-20 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-neutral-100 animate-fade-in ${
                isRTL ? 'left-0' : 'right-0'
              }`}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors duration-200"
              >
                <X className="w-4 h-4 text-neutral-600" />
              </button>
              
              <div className={`${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <h4 className="font-bold mb-2" style={{ color: '#265a3f' }}>
                  {t('whatsapp.title')}
                </h4>
                <p className="text-sm text-neutral-600 mb-3">
                  {t('whatsapp.message')}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#25D366' }}
                >
                  {t('whatsapp.startChat')}
                </a>
              </div>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-slow"
            style={{ backgroundColor: '#25D366' }}
            aria-label="Chat on WhatsApp"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#25D366' }} />
            
            {/* Icon */}
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
          </button>

          {/* Direct WhatsApp Link (Mobile Optimized) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 rounded-full"
            aria-label="Contact us on WhatsApp"
          />
        </div>
      )}
    </>
  )
}

