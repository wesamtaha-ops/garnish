'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { 
  BookOpen, 
  Users, 
  Target, 
  Award, 
  CheckCircle, 
  Heart, 
  Users as TeamIcon,
  Shield,
  Star, 
  Lightbulb 
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function OurStorySection() {
  const { t, isRTL, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
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

  const milestones = [
    {
      year: '2002',
      title: t('story.milestone1Title'),
      description: t('story.milestone1Desc'),
      icon: BookOpen
    },
    {
      year: '2023',
      title: t('story.milestone2Title'),
      description: t('story.milestone2Desc'),
      icon: Users
    },
    {
      year: '2024',
      title: t('story.milestone3Title'),
      description: t('story.milestone3Desc'),
      icon: Award
    }
  ]

  return (
    <section id="story" ref={sectionRef} className="bg-gradient-to-br pt-32 from-neutral-50 to-white relative overflow-hidden scroll-mt-20">
      {/* Enhanced Decorative Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Background Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.04)' }} />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.03)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)', animationDelay: '2s' }} />
        
        {/* Medium Circles */}
        <div className="absolute top-32 right-1/4 w-20 h-20 rounded-full blur-md animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.035)', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 rounded-full blur-lg animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.025)', animationDelay: '1.5s' }} />
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full blur-sm animate-pulse" style={{ backgroundColor: 'rgba(38, 90, 63, 0.045)', animationDelay: '2.5s' }} />
        
        {/* Small Accent Circles */}
        <div className="absolute top-40 left-1/2 w-12 h-12 rounded-full blur-sm" style={{ backgroundColor: 'rgba(38, 90, 63, 0.06)' }} />
        <div className="absolute bottom-40 right-1/3 w-10 h-10 rounded-full blur-sm" style={{ backgroundColor: 'rgba(38, 90, 63, 0.05)' }} />
        <div className="absolute top-60 left-20 w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(38, 90, 63, 0.08)' }} />
        <div className="absolute bottom-60 right-16 w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(38, 90, 63, 0.07)' }} />
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-24 right-1/3 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(38, 90, 63, 0.10)', animationDelay: '1s' }} />
        <div className="absolute top-36 right-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(38, 90, 63, 0.09)', animationDelay: '1.3s' }} />
        <div className="absolute bottom-24 left-1/3 w-4 h-4 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(38, 90, 63, 0.08)', animationDelay: '0.7s' }} />
        <div className="absolute bottom-36 left-1/2 w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgba(38, 90, 63, 0.085)', animationDelay: '2.1s' }} />
        
        {/* Subtle Ring Elements */}
        <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(38, 90, 63, 0.06)', animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border rounded-full animate-spin" style={{ borderColor: 'rgba(38, 90, 63, 0.05)', animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center rounded-full px-8 py-3 mb-8" style={{ backgroundColor: '#265a3f' }}>
            <BookOpen className={`w-6 h-6 text-white ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-white  text-lg">
              {t('story.title')}
            </span>
          </div>
          <h2 className="text-3xl lg:text-3xl xl:text-3xl font-bold mb-8" style={{ color: '#265a3f' }}>
{t('story.journeyOfExcellence')}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {t('story.subtitle')}
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-10' : '-translate-x-10'}`
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {t('story.content')}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                {t('story.content2')}
              </p>
              
              {/* Key Highlights */}
              
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-10' : 'translate-x-10'}`
          }`}>
            <div className="relative">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl bg-neutral-200">
                {/* Next.js Image */}
                <Image
                  src="/story.png"
                  alt="GARNISH Story"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.log('Next.js Image failed to load');
                  }}
                />
                
                {/* Fallback regular img tag (uncomment if Next.js Image doesn't work) */}
                {/* 
                <img
                  src="/story.png"
                  alt="GARNISH Story"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Regular img failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
                */}
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">22+</div>
                  <div className="text-xs uppercase tracking-wider">{t('story.years')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* About Us Section */}
            <div id="about" className={`scroll-mt-24 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
        
          {/* Hero About Section */}
          <div className="relative rounded-3xl overflow-hidden mb-20" style={{ backgroundColor: '#265a3f' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-48 translate-x-48 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full translate-y-40 -translate-x-40 blur-3xl" />
            </div>

            <div className="relative z-10 p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-4 items-center">
                
                {/* Content Side */}
                <div className={`${language === 'ar' ? 'text-right lg:order-2' : 'text-left'}`} 
                     dir={language === 'ar' ? 'rtl' : 'ltr'}>
                  
                          {/* Badge */}
                          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                            <Users className={`w-5 h-5 text-green-200 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className="text-green-100 ">
                              {language === 'ar' ? 'من نحن' : 'About Us'}
                            </span>
                          </div>

                  {/* Main Title */}
                  <h3 className="text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 leading-tight">
                    {language === 'ar' ? 
                      'فريق محترف من الشباب الأكاديميين' : 
                      'Professional Team of Academic Youth'
                    }
                  </h3>

                          {/* Content */}
                          {language === 'ar' ? (
                            <div className="space-y-6">
                              <p className="text-lg text-green-100 leading-relaxed">
                                نحن طاقم أكاديمي مهني من فئة الشباب نمتلك خبرات وكفاءات قوية في شتى مجالات العمل، من الإطعام والشراب والسياحة والضيافة وصولاً إلى الإنشاء والإدارة والتسويق والمحاسبة.
                              </p>
                              <p className="text-lg text-green-100 leading-relaxed">
                                نؤمن بأن "Garnish" تعني أهمية التفاصيل التي تضيف قيمة للعمل وتدل على اكتمال الإتقان من البداية إلى النهاية، لذا وحدنا القيم والأحلام والطموحات في خدمة هذه المجموعة حتى نصل إلى الهدف الأسمى وهو جعل بلدنا رائدة في هذا المجال.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              <p className="text-lg text-green-100 leading-relaxed">
                                We are a youth, competent academic group with comprehensive experience and abilities in a variety of sectors, including food and beverage, tourism, and hospitality, as well as construction, management, marketing, and finance.
                              </p>
                              <p className="text-lg text-green-100 leading-relaxed">
                                We believe that "Garnish" refers to the importance of details that add value to the job and signify the completeness of mastery from beginning to end, therefore we combined values, desires, and ambitions to serve this group until we achieve our ultimate aim of making our country a leader in this sector.
                              </p>
                            </div>
                          )}

                          {/* Key Stats */}
                          <div className="grid grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-200 mb-2">22+</div>
                              <div className="text-green-100 text-sm uppercase tracking-wider">
{t('story.yearsExperience')}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-200 mb-2">8+</div>
                              <div className="text-green-100 text-sm uppercase tracking-wider">
                                {language === 'ar' ? 'مجالات' : 'Sectors'}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-green-200 mb-2">200+</div>
                              <div className="text-green-100 text-sm uppercase tracking-wider">
                                {language === 'ar' ? 'مشروع' : 'Projects'}
                              </div>
                            </div>
                          </div>
                </div>

                {/* Visual Side */}
                <div className={`${language === 'ar' ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                      <div className="relative w-full h-full">
                        <Image
                          src="/story.png"
                          alt="GARNISH Story"
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className={`text-sm font-bold text-neutral-900 ${isRTL ? 'mr-2 ml-2' : 'mr-2 ml-2'}`}>{t('story.since2002')}</div>
                            <div className={`text-xs text-neutral-600 ${isRTL ? 'mr-2 ml-2' : 'mr-2 ml-2'}`}>{t('story.excellenceInService')}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl" style={{ backgroundColor: '#265a3f' }}>
                              <div className="text-center text-white">
                                <div className="text-lg font-bold">G</div>
                                <div className="text-xs">GARNISH</div>
                              </div>
                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

              {/* Our Values - Redesigned with Mint Background */}
              <div id="values" className="relative py-16 mt-20 scroll-mt-20" style={{ 
                backgroundColor: 'rgb(210, 228, 214)',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
              }}>
            {/* Enhanced Decorative Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Large Background Circles */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Medium Circles */}
              <div className="absolute top-32 right-1/4 w-20 h-20 bg-white/12 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-white/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-20 right-10 w-16 h-16 bg-white/15 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s' }} />
              
              {/* Small Accent Circles */}
              <div className="absolute top-40 left-1/2 w-12 h-12 bg-white/25 rounded-full blur-sm" />
              <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-white/20 rounded-full blur-sm" />
              <div className="absolute top-60 left-20 w-8 h-8 bg-white/30 rounded-full" />
              <div className="absolute bottom-60 right-16 w-6 h-6 bg-white/25 rounded-full" />
              
              {/* Geometric Shapes for Modern Touch */}
              <div className="absolute top-16 left-1/2 w-14 h-14 bg-white/10 transform rotate-45 blur-sm animate-pulse" style={{ animationDelay: '3s' }} />
              <div className="absolute bottom-16 left-1/6 w-10 h-10 bg-white/15 transform rotate-12 blur-sm animate-pulse" style={{ animationDelay: '0.8s' }} />
              
              {/* Floating Dots Pattern */}
              <div className="absolute top-24 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-36 right-1/2 w-2 h-2 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.3s' }} />
              <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }} />
              <div className="absolute bottom-36 left-1/2 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '2.1s' }} />
              
              {/* Subtle Ring Elements */}
              <div className="absolute top-1/4 right-1/5 w-16 h-16 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute bottom-1/4 left-1/5 w-12 h-12 border border-white/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Gradient Overlay Circles */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-white/40 backdrop-blur-sm rounded-full px-8 py-3 mb-8">
                  <Heart className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'}`} style={{ color: '#265a3f' }} />
                  <span className=" text-lg" style={{ color: '#265a3f' }}>
                    {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
                  </span>
                </div>
                <h4 className="text-3xl lg:text-3xl xl:text-3xl font-bold mb-6" style={{ color: '#265a3f' }}>
                  {language === 'ar' ? 'المبادئ التي توجهنا' : 'Principles That Guide Us'}
                </h4>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#1f4e3d' }}>
                  {language === 'ar' ? 
                    'القيم الأساسية التي تشكل هويتنا وتوجه رحلتنا نحو التميز' :
                    'The fundamental values that shape our identity and guide our journey to excellence'
                  }
                </p>
              </div>

              {/* Modern Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(language === 'ar' ? [
                  { 
                    icon: Shield, 
                    title: "المصداقية والاحترام والود", 
                    description: "نبني علاقات قائمة على الثقة والاحترام المتبادل",
                    color: "from-emerald-500 to-teal-600",
                    bgColor: "bg-emerald-50"
                  },
                  { 
                    icon: Heart, 
                    title: "الالتزام والمسؤولية", 
                    description: "نتحمل المسؤولية كاملة تجاه عملائنا ومشاريعهم",
                    color: "from-rose-500 to-pink-600",
                    bgColor: "bg-rose-50"
                  },
                  { 
                    icon: TeamIcon, 
                    title: "العمل الجماعي والتكاتف", 
                    description: "القوة في الوحدة والتعاون لتحقيق أهداف مشتركة",
                    color: "from-blue-500 to-indigo-600",
                    bgColor: "bg-blue-50"
                  },
                  { 
                    icon: CheckCircle, 
                    title: "الثقة والأمان", 
                    description: "نوفر بيئة آمنة وموثوقة لجميع شركائنا",
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-50"
                  },
                  { 
                    icon: Star, 
                    title: "الشباب القادة الرياديين", 
                    description: "نستثمر في طاقات الشباب لقيادة المستقبل",
                    color: "from-amber-500 to-orange-600",
                    bgColor: "bg-amber-50"
                  },
                  { 
                    icon: Lightbulb, 
                    title: "الابتكار والحداثة", 
                    description: "نواكب أحدث التطورات ونبتكر حلولاً عصرية",
                    color: "from-cyan-500 to-teal-600",
                    bgColor: "bg-cyan-50"
                  }
                ] : [
                  { 
                    icon: Shield, 
                    title: t('values.credibilityRespect'), 
                    description: t('values.credibilityRespectDesc'),
                    color: "from-emerald-500 to-teal-600",
                    bgColor: "bg-emerald-50"
                  },
                  { 
                    icon: Heart, 
                    title: t('values.commitmentResponsibility'), 
                    description: t('values.commitmentResponsibilityDesc'),
                    color: "from-rose-500 to-pink-600",
                    bgColor: "bg-rose-50"
                  },
                  { 
                    icon: TeamIcon, 
                    title: t('values.cooperationUnity'), 
                    description: t('values.cooperationUnityDesc'),
                    color: "from-blue-500 to-indigo-600",
                    bgColor: "bg-blue-50"
                  },
                  { 
                    icon: CheckCircle, 
                    title: t('values.trustStability'), 
                    description: t('values.trustStabilityDesc'),
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-50"
                  },
                  { 
                    icon: Star, 
                    title: t('values.youthLeaders'), 
                    description: t('values.youthLeadersDesc'),
                    color: "from-amber-500 to-orange-600",
                    bgColor: "bg-amber-50"
                  },
                  { 
                    icon: Lightbulb, 
                    title: t('values.innovationModernism'), 
                    description: t('values.innovationModernismDesc'),
                    color: "from-cyan-500 to-teal-600",
                    bgColor: "bg-cyan-50"
                  }
                ]).map((value, index) => (
                  <div 
                    key={value.title} 
                    className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden ${
                      isVisible ? `animate-fade-in` : 'opacity-0'
                    }`} 
                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                  >
                    
                    {/* Subtle Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {React.createElement(value.icon, { className: "w-10 h-10", style: { color: '#265a3f', strokeWidth: '1.5' } })}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h5 className="text-lg font-bold mb-2 leading-tight transition-colors duration-300" style={{ color: '#265a3f' }}>
                        {value.title}
                      </h5>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: '#1f4e3d' }}>
                        {value.description}
                      </p>
                      {/* Decorative Element */}
                    </div>
                    
                  
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-16">
                <p className="mb-6 text-lg" style={{ color: '#1f4e3d' }}>
                  {language === 'ar' ? 
                    'هذه القيم تحدد من نحن وكيف نعمل معكم' :
                    'These values define who we are and how we work with you'
                  }
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white px-8 py-4 rounded-2xl  text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#265a3f' }}
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Connect With Us'}
                  <div className="w-5 h-5 ml-3">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
