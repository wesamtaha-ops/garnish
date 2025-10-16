'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Shield, Mail, Calendar } from 'lucide-react'

export default function PrivacyPolicy() {
  const { t, isRTL } = useLanguage()

  // Client-side metadata update
  if (typeof document !== 'undefined') {
    document.title = 'Privacy Policy - GARNISH F&B Consulting'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full px-6 py-2 mb-6" style={{ backgroundColor: '#265a3f' }}>
              <Shield className={`w-5 h-5 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span className="text-white text-sm">{t('privacy.badge')}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#265a3f' }}>
              {t('privacy.title')}
            </h1>
            <p className="text-neutral-600 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{t('privacy.lastUpdated')}: {t('privacy.date')}</span>
            </p>
          </div>

          {/* Content */}
          <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#265a3f' }}>
                {t('privacy.intro.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('privacy.intro.content')}
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#265a3f' }}>
                {t('privacy.collect.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.collect.content')}
              </p>
              <ul className="space-y-2">
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.collect.item1')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.collect.item2')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.collect.item3')}</span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#265a3f' }}>
                {t('privacy.use.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.use.content')}
              </p>
              <ul className="space-y-2">
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.use.item1')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.use.item2')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.use.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Information Protection */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#265a3f' }}>
                {t('privacy.protection.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {t('privacy.protection.content')}
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#265a3f' }}>
                {t('privacy.rights.title')}
              </h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t('privacy.rights.content')}
              </p>
              <ul className="space-y-2">
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.rights.item1')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.rights.item2')}</span>
                </li>
                <li className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                  <span className="text-neutral-700">{t('privacy.rights.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Contact for Privacy */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#265a3f' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#265a3f' }}>
                    {t('privacy.contact.title')}
                  </h3>
                  <p className="text-neutral-700 mb-2">
                    {t('privacy.contact.content')}
                  </p>
                  <a 
                    href="mailto:privacy@garnish.com" 
                    className="text-sm font-semibold hover:underline"
                    style={{ color: '#265a3f' }}
                  >
                    privacy@garnish.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

