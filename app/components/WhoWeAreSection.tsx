'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Lightbulb, Trophy, TrendingUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function WhoWeAreSection() {
  const { t, isRTL } = useLanguage()
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

  const teamStats = [
    {
      number: '10+',
      label: t('whoWeAre.experience'),
      icon: Trophy,
      description: 'Combined team experience in hospitality industry'
    },
    {
      number: '18',
      label: t('whoWeAre.projects'),
      icon: TrendingUp,
      description: 'Successfully completed projects across the region'
    },
    {
      number: '150+',
      label: t('whoWeAre.clients'),
      icon: Users,
      description: 'Satisfied clients who trust our expertise'
    },
    {
      number: '50+',
      label: 'Innovations',
      icon: Lightbulb,
      description: 'Innovative solutions implemented for clients'
    }
  ]

  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      expertise: 'Strategic Planning & Business Development'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      expertise: 'Restaurant Operations & Management'
    },
    {
      name: 'Omar Hassan',
      position: 'Franchise Development Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      expertise: 'Franchise Systems & Market Expansion'
    },
    {
      name: 'Fatima Al-Zahra',
      position: 'Training & Development Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      expertise: 'Staff Training & Quality Assurance'
    }
  ]

  return (
    <section id="who-we-are" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
            {t('whoWeAre.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('whoWeAre.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-10' : '-translate-x-10'}`
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {t('whoWeAre.content')}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Our multidisciplinary approach combines academic rigor with practical industry experience, ensuring that every solution we provide is both theoretically sound and practically viable. We pride ourselves on staying ahead of industry trends while maintaining a deep respect for traditional hospitality values.
              </p>

              {/* Core Strengths */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className=" text-neutral-900 mb-1">Academic Excellence</h4>
                    <p className="text-neutral-600">Advanced degrees and certifications in hospitality management and business administration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className=" text-neutral-900 mb-1">Industry Experience</h4>
                    <p className="text-neutral-600">Hands-on experience across all segments of the hospitality and F&B industry</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className=" text-neutral-900 mb-1">Cultural Understanding</h4>
                    <p className="text-neutral-600">Deep knowledge of regional markets and cultural preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-10' : 'translate-x-10'}`
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={stat.label}
                    className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-neutral-100"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.number}</div>
                    <div className="text-sm  text-primary-600 mb-2 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-xs text-neutral-600">{stat.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Meet Our Leadership Team</h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to driving excellence in hospitality consulting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden border border-neutral-100 ${
                  isVisible ? `animate-fade-in` : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl  text-neutral-900 mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-neutral-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
