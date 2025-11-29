'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#story', label: t('nav.ourStory') },
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ]

  const services = [
    { href: '#services', label: t('services.management') },
    { href: '#services', label: t('services.operations') },
    { href: '#services', label: t('services.consulting') },
    { href: '#services', label: t('services.development') }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="text-white relative overflow-hidden" style={{ backgroundColor: '#265a3f' }}>
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
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', animationDelay: '1s' }} />
        <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.16)', animationDelay: '1.3s' }} />
        <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.14)', animationDelay: '0.7s' }} />
        <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', animationDelay: '2.1s' }} />
        
        {/* Subtle Ring Elements */}
        <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.10)', animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative w-40 h-20 mb-4">
                <Image
                  src="/heroLogo.png"
                  alt="GARNISH Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Phone className="w-5 h-5 text-green-200" />
                <span className="text-green-100">0945989890</span>
              </div>
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-5 h-5 text-green-200 mt-1" />
                <span className="text-green-100">{t('footer.address')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg  mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg  mb-6">{t('footer.ourServices')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg mb-6">{t('footer.followUs')}</h4>
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} mb-6`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5 text-green-100" />
                  </Link>
                )
              })}
            </div>
            
       
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © {currentYear} GARNISH. {t('footer.allRightsReserved')}
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-green-100 hover:text-white text-sm transition-colors duration-300 hover:underline cursor-pointer relative z-10"
              >
                {t('footer.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
