'use client'

import { useEffect, useRef, useState } from 'react'
import { HelpCircle, CheckCircle, TrendingUp, Users, Target, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function WhyUsSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(0)
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

  const challenges = [
    {
      challenge: t('whyUs.challenge1'),
      solution: t('whyUs.solution1'),
      icon: Target,
      details: [
        'Comprehensive market research and analysis',
        'Regulatory compliance guidance',
        'Risk assessment and mitigation strategies',
        'Strategic partnership development'
      ]
    },
    {
      challenge: t('whyUs.challenge2'),
      solution: t('whyUs.solution2'),
      icon: TrendingUp,
      details: [
        'Process optimization and automation',
        'Cost reduction strategies',
        'Quality management systems',
        'Performance monitoring and analytics'
      ]
    },
    {
      challenge: t('whyUs.challenge3'),
      solution: t('whyUs.solution3'),
      icon: Users,
      details: [
        'Customized training curricula',
        'Skills assessment and development',
        'Leadership development programs',
        'Performance evaluation systems'
      ]
    },
    {
      challenge: t('whyUs.challenge4'),
      solution: t('whyUs.solution4'),
      icon: Award,
      details: [
        'Brand identity and positioning',
        'Market differentiation strategies',
        'Growth and expansion planning',
        'Customer experience optimization'
      ]
    }
  ]

  const advantages = [
    {
      title: 'Proven Track Record',
      description: '200+ successful projects across the hospitality industry',
      stat: '98%',
      statLabel: 'Success Rate'
    },
    {
      title: 'Industry Expertise',
      description: '15+ years of combined experience in F&B and hospitality',
      stat: '15+',
      statLabel: 'Years Experience'
    },
    {
      title: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations and delivering results',
      stat: '150+',
      statLabel: 'Happy Clients'
    },
    {
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions and technology integration',
      stat: '50+',
      statLabel: 'Innovations'
    }
  ]

  return (
    <section id="why-us" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
            {t('whyUs.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Common Business Challenges We Solve
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We understand the pain points that keep business owners awake at night
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((item, index) => {
              const Icon = item.icon
              const isOpen = openAccordion === index
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${
                    isVisible ? `animate-fade-in` : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl  text-neutral-900 mb-2">
                          Challenge: {item.challenge}
                        </h4>
                        <p className="text-neutral-600">
                          Our Solution: {item.solution}
                        </p>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl p-6">
                        <h5 className=" text-neutral-900 mb-4">How we deliver results:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                              <span className="text-neutral-700 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Advantages */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Why Clients Choose Us
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The competitive advantages that set us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`text-center group ${
                  isVisible ? `animate-fade-in` : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-neutral-100">
                  <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
                    {advantage.statLabel}
                  </div>
                  <h4 className="text-lg  text-neutral-900 mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-2xl font-serif leading-relaxed mb-8 italic">
                "Bro Concept transformed our restaurant operations completely. Their expertise in franchise development and staff training helped us expand from a single location to 15 franchises across the region. Their commitment to excellence is unmatched."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div className="text-left">
                  <div className="">Ahmed Al-Mansoori</div>
                  <div className="text-primary-100 text-sm">CEO, Taste of Arabia Restaurant Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of successful businesses that trust Bro Concept for their hospitality consulting needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg  text-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Success Story
            <CheckCircle className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
