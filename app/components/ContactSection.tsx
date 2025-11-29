'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const { t, isRTL, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // EmailJS Configuration from environment variables
      // Add your credentials to .env.local file (see EMAILJS_SETUP.md)
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: '',
          language: language,
        },
        PUBLIC_KEY
      )
      
      if (result.text === 'OK') {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
        
        // Show success message
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.callUs'),
      details: ['0945989890'],
      action: 'tel:0945989890'
    },
    {
      icon: MapPin,
      title: t('contact.visitUs'),
      details: [t('contact.locationLine1'), t('contact.locationLine2')],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: t('contact.businessHours'),
      details: [t('contact.hoursLine1'), t('contact.hoursLine2')],
      action: null
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden pt-20 pb-40 "
      style={{ backgroundColor: 'rgb(210, 228, 214)' }}
    >
      {/* Enhanced Decorative Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Background Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', animationDelay: '2s' }} />
        
        {/* Medium Circles */}
        <div className="absolute top-32 right-1/4 w-20 h-20 rounded-full blur-md animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)', animationDelay: '1.5s' }} />
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', animationDelay: '2.5s' }} />
        
        {/* Small Accent Circles */}
        <div className="absolute top-40 left-1/2 w-12 h-12 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.20)' }} />
        <div className="absolute bottom-40 right-1/3 w-10 h-10 rounded-full blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)' }} />
        <div className="absolute top-60 left-20 w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }} />
        <div className="absolute bottom-60 right-16 w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.22)' }} />
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.30)', animationDelay: '1s' }} />
        <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.28)', animationDelay: '1.3s' }} />
        <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', animationDelay: '0.7s' }} />
        <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.26)', animationDelay: '2.1s' }} />
        
        {/* Subtle Ring Elements */}
        <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.20)', animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.18)', animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-[30px] pt-0">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center rounded-full px-8 py-3 mb-8" style={{ backgroundColor: '#265a3f' }}>
            <Mail className={`w-6 h-6 text-white ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-white  text-lg">
              {t('contact.title')}
            </span>
          </div>
          <h2 className="text-3xl lg:text-3xl xl:text-3xl font-bold text-neutral-800 mb-8">
            {t('contact.startProject')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-10' : '-translate-x-10'}`
          }`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200 shadow-lg">
              <h3 className={`text-2xl font-serif font-bold text-neutral-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>{t('contact.formTitle')}</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={t('contact.namePlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={t('contact.emailPlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className={`block text-sm text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={t('contact.phonePlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={`block text-sm text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={t('contact.companyPlaceholder')}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm text-neutral-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder={t('contact.messagePlaceholder')}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                  style={{ backgroundColor: '#265a3f' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.send')}</span>
                      <Send className={`w-5 h-5 ${isRTL ? 'scale-x-[-1]' : ''}`} />
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                    <p className="text-green-700 text-sm text-center">
                      ✓ {t('contact.success')}
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                    <p className="text-red-700 text-sm text-center">
                      ✗ {t('contact.error')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-10' : 'translate-x-10'}`
          }`}>
            <div className="space-y-8">
             

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={info.title}
                      className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isVisible ? `animate-fade-in` : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                      <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#265a3f' }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                          <h4 className="text-lg text-neutral-800 mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-neutral-600">
                                {info.action && detailIndex === 0 ? (
                                  <a
                                    href={info.action}
                                    className="transition-colors duration-300 hover:underline" style={{ color: '#265a3f' }}
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

             

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
