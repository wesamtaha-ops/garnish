'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Briefcase, Store, Cloud, GraduationCap, ArrowRight, CheckCircle, Target, Award, X, Lightbulb } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ServicesSection() {
  const { t, isRTL, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)
  const sectionRef = useRef<HTMLElement>(null)

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

  const openModal = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  const services = [
    {
      title: t('services.management'),
      description: t('services.managementDesc'),
      icon: Store,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        t('services.feature1'),
        t('services.feature2'),
        t('services.feature3'),
        t('services.feature4'),
        t('services.feature5')
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: t('services.operations'),
      description: t('services.operationsDesc'),
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        t('services.feature6'),
        t('services.feature7'),
        t('services.feature8'),
        t('services.feature9'),
        t('services.feature10')
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: t('services.consulting'),
      description: t('services.consultingDesc'),
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        t('services.feature11'),
        t('services.feature12'),
        t('services.feature13'),
        t('services.feature14'),
        t('services.feature15')
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: t('services.development'),
      description: t('services.developmentDesc'),
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        t('services.feature16'),
        t('services.feature17'),
        t('services.feature18'),
        t('services.feature19'),
        t('services.feature20')
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50'
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="scroll-mt-20">
      {/* Services Container with Full Width Green Background */}
      <div className="relative overflow-hidden mb-20" style={{ backgroundColor: '#265a3f' }}>
        {/* Enhanced Decorative Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
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
          
          {/* Geometric Shapes for Modern Touch */}
          <div className="absolute top-16 left-1/2 w-14 h-14 transform rotate-45 blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', animationDelay: '3s' }} />
          <div className="absolute bottom-16 left-1/6 w-10 h-10 transform rotate-12 blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', animationDelay: '0.8s' }} />
          
          {/* Floating Dots Pattern */}
          <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', animationDelay: '1s' }} />
          <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', animationDelay: '1.3s' }} />
          <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', animationDelay: '0.7s' }} />
          <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', animationDelay: '2.1s' }} />
          
          {/* Subtle Ring Elements */}
          <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.10)', animationDuration: '20s' }} />
          <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Gradient Overlay Circles */}
          <div className="absolute top-0 left-0 w-full h-32" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.04), transparent)' }} />
          <div className="absolute bottom-0 left-0 w-full h-32" style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.04), transparent)' }} />
        </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-12 lg:pb-32 relative z-10">
          {/* Section Header on Green Background */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8">
              <Briefcase className={`w-6 h-6 text-white ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <span className="text-white  text-lg">
                {t('services.title')}
              </span>
            </div>
            <h2 className="text-3xl lg:text-3xl xl:text-3xl font-bold text-white mb-8">
              {t('services.subtitle')}
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          {/* Modern Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/30 hover:border-green-200 cursor-pointer overflow-hidden ${
                  isVisible ? `animate-fade-in` : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openModal(service)}
              >
                {/* Subtle Green Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: '#265a3f' }} />
                
                        {/* Icon */}
                        <div className="relative z-10 mb-4">
                          <div className="flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                            <Icon className="w-14 h-14" style={{ color: '#265a3f', strokeWidth: '1.5' }} />
                          </div>
                        </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-green-700 transition-colors duration-300" style={{ color: '#265a3f' }}>
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Feature Count */}
                  <div className={`flex items-center justify-center mb-4 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#265a3f' }} />
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">
                      {service.features.length} {t('services.servicesCount')}
                    </span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#265a3f' }} />
                  </div>

                  {/* Click CTA - Always Visible */}
                  <div className="transition-opacity duration-300">
                    <div className={`text-sm group-hover:text-green-700 transition-colors duration-300 flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`} style={{ color: '#265a3f' }}>
                      <span>{t('services.learnMore')}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us - Professional Redesign */}
        <div id="why-garnish" className={`scroll-mt-32  transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full px-8 py-3 mb-8" style={{ backgroundColor: '#265a3f' }}>
              <Target className={`w-6 h-6 text-white ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <span className="text-white  text-lg">
                {t('whyUs.title')}
              </span>
            </div>
            <h3 className="text-3xl lg:text-3xl xl:text-3xl font-bold mb-8" style={{ color: '#265a3f' }}>
              {t('whyUs.subtitle')}
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('whyUs.description')}
            </p>
          </div>

          {/* Comparison Table Design */}
          <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden mb-16">
            {/* Table Header */}
            <div className="grid grid-cols-2">
              {/* Without GARNISH Header */}
              <div className="bg-neutral-100 p-6 text-center border-r border-neutral-200">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <Target className="w-6 h-6 text-neutral-600" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-800">
                    {t('whyUs.withoutGarnish')}
                  </h4>
                </div>
                <p className="text-neutral-600 text-sm">
                  {t('whyUs.traditionalChallenges')}
                </p>
              </div>
              
              {/* With GARNISH Header */}
              <div className="p-6 text-center text-white" style={{ backgroundColor: '#265a3f' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {t('whyUs.withGarnish')}
                  </h4>
                </div>
                <p className="text-green-100 text-sm">
                  {t('whyUs.advancedSolutions')}
                </p>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-neutral-200">
              {/* Row 1 */}
              <div className="grid grid-cols-2 hover:bg-neutral-50 transition-colors duration-300" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="p-6 border-r border-neutral-200">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-xs font-bold">×</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed ">
                      {t('whyUs.challenge1')}
                    </p>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)' }}>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#265a3f' }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="leading-relaxed " style={{ color: '#265a3f' }}>
                      {t('whyUs.solution1')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 hover:bg-neutral-50 transition-colors duration-300" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="p-6 border-r border-neutral-200">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-xs font-bold">×</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed ">
                      {t('whyUs.challenge2')}
                    </p>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)' }}>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#265a3f' }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="leading-relaxed " style={{ color: '#265a3f' }}>
                      {t('whyUs.solution2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 hover:bg-neutral-50 transition-colors duration-300" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="p-6 border-r border-neutral-200">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-xs font-bold">×</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed ">
                      {t('whyUs.challenge3')}
                    </p>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)' }}>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#265a3f' }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="leading-relaxed " style={{ color: '#265a3f' }}>
                      {t('whyUs.solution3')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 hover:bg-neutral-50 transition-colors duration-300" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <div className="p-6 border-r border-neutral-200">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-xs font-bold">×</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed ">
                      {t('whyUs.challenge4')}
                    </p>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)' }}>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#265a3f' }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="leading-relaxed " style={{ color: '#265a3f' }}>
                      {t('whyUs.solution4')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Footer with CTA */}
            <div className="p-6 text-center" style={{ backgroundColor: '#265a3f' }}>
              <p className="text-green-100 mb-4 text-lg">
                {t('whyUs.chooseBetterPath')}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white px-6 py-3 rounded-xl  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ color: '#265a3f' }}
              >
                {t('whyUs.startWithGarnish')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </a>
            </div>
          </div>

     
        </div>
      </div>

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content - Fixed Height */}
          <div className="relative bg-white rounded-3xl max-w-5xl w-full h-[85vh] shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header - Fixed Height */}
            <div className="relative h-32 flex-shrink-0">
              <div className="w-full h-full rounded-t-3xl overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-80" style={{ backgroundColor: '#265a3f' }} />
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300`}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Service Icon */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#265a3f' }}>
                  {(() => {
                    const IconComponent = selectedService.icon
                    return <IconComponent className="w-8 h-8 text-white" />
                  })()}
                </div>
              </div>
            </div>

            {/* Modal Body - Scrollable Content */}
            <div className="flex-1 p-6 pt-12 overflow-y-auto" dir={isRTL ? 'rtl' : 'ltr'}>
              {/* Title & Description */}
              <div className={`mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#265a3f' }}>{selectedService.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Features Grid - Compact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
                {selectedService.features.map((feature: any, index: any) => (
                  <div key={index} className={`flex items-center p-3 bg-neutral-50 rounded-lg ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#265a3f' }}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer - Fixed Height */}
            <div className="flex-shrink-0 border-t border-neutral-100 p-6">
              <div className={`${isRTL ? 'text-right' : 'text-center'}`}>
                <p className="text-neutral-600 mb-4 text-sm">{t('services.readyToStart')} {selectedService.title}?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className={`inline-flex items-center text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                    style={{ backgroundColor: '#265a3f' }}
                  >
                    <span>{t('services.getQuote')}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center bg-neutral-100 text-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors duration-300"
                  >
                    {t('services.close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}