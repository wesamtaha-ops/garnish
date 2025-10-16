'use client'

import { useEffect, useRef, useState } from 'react'
import { Eye, Leaf, Zap, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function VisionSection() {
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

  const visionPillars = [
    {
      title: t('vision.sustainability'),
      description: 'Implementing eco-friendly practices and sustainable business models that benefit both our clients and the environment.',
      icon: Leaf,
      color: 'from-green-500 to-green-600'
    },
    {
      title: t('vision.innovation'),
      description: 'Leveraging cutting-edge technology and creative solutions to transform traditional hospitality experiences.',
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: t('vision.excellence'),
      description: 'Maintaining the highest standards in every project and continuously exceeding client expectations.',
      icon: Star,
      color: 'from-primary-500 to-primary-600'
    }
  ]

  return (
    <section id="vision" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 shadow-lg">
            <Eye className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            {t('vision.title')}
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            {t('vision.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Vision Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Vision Statement */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? 'translate-x-10' : '-translate-x-10'}`
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Our Vision Statement</h3>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                {t('vision.content')}
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                We believe that the future of hospitality lies in the perfect harmony between tradition and innovation, where technology enhances human connection rather than replacing it.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-10' : 'translate-x-10'}`
          }`}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-900">2030</div>
                  <div className="text-xs text-neutral-600 uppercase tracking-wider">Vision Year</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary-500 rounded-2xl p-4 shadow-xl text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">#1</div>
                  <div className="text-xs uppercase tracking-wider">Regional Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Our Vision Pillars</h3>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              The fundamental principles that guide our journey towards excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={pillar.title}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift ${
                    isVisible ? `animate-fade-in` : ''
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl  text-white mb-4">{pillar.title}</h4>
                  <p className="text-neutral-300 leading-relaxed">{pillar.description}</p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-neutral-400 mb-2">
                      <span>Progress</span>
                      <span>{85 + index * 5}%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${pillar.color} transition-all duration-1000 delay-1000`}
                        style={{ width: isVisible ? `${85 + index * 5}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">Ready to Shape the Future Together?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join us in our mission to transform the hospitality industry through innovation, sustainability, and excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg  hover:bg-neutral-100 transition-colors duration-300"
            >
              Start Your Journey
              <Eye className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
