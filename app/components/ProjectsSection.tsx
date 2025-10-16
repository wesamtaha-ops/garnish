'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Award, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ProjectsSection() {
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const projects = [
    {
      id: 'inout',
      title: t('projects.inout.title'),
      description: t('projects.inout.desc'),
      image: '/projects/in-and-out.png',
      bgColor: '#ffffff',
      textColor: '#1a1a1a'
    },
    {
      id: 'alazawqak',
      title: t('projects.alazawqak.title'),
      description: t('projects.alazawqak.desc'),
      image: '/projects/3zaouak.jpg',
      bgColor: '#ffffff',
      textColor: '#1b5e20'
    },
    {
      id: 'cityside',
      title: t('projects.cityside.title'),
      description: t('projects.cityside.desc'),
      image: '/projects/citycide.jpg',
        bgColor: '#202844',
      textColor: '#ffffff'
    },
    {
      id: 'cloudkitchen',
      title: t('projects.cloudkitchen.title'),
      description: t('projects.cloudkitchen.desc'),
      image: '/projects/location.jpg',
        bgColor: '#e0e0e0',
      textColor: '#1a1a1a'
    },
    {
      id: 'class',
      title: t('projects.class.title'),
      description: t('projects.class.desc'),
      image: '/projects/class-cafe.jpeg',
        bgColor: '#ffffff',
      textColor: '#5d4037'
    },
    {
      id: 'charming',
      title: t('projects.charming.title'),
      description: t('projects.charming.desc'),
      image: '/projects/charming.jpg',
        bgColor: '#757881',
      textColor: '#ffffff'
    },
    {
      id: 'checkin',
      title: t('projects.checkin.title'),
      description: t('projects.checkin.desc'),
      image: '/projects/checkin.jpg',
        bgColor: '#a9403e',
      textColor: '#ffffff'
    },
    {
      id: 'iust',
      title: t('projects.iust.title'),
      description: t('projects.iust.desc'),
      image: '/projects/taco.jpg',
        bgColor: '#e5ddcf',
      textColor: '#8b4513'
    }
  ]

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.scrollWidth / projects.length
      const targetScroll = cardWidth * index
      
      container.scrollTo({
        left: isRTL ? -targetScroll : targetScroll,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const goToNext = () => {
    const nextIndex = currentIndex >= projects.length - 1 ? 0 : currentIndex + 1
    scrollToIndex(nextIndex)
    resetAutoPlay()
  }

  const goToPrev = () => {
    const prevIndex = currentIndex <= 0 ? projects.length - 1 : currentIndex - 1
    scrollToIndex(prevIndex)
    resetAutoPlay()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
    setIsAutoPlaying(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.scrollWidth / projects.length
      const newIndex = Math.round(container.scrollLeft / cardWidth)
      setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)))
    }
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current || isDragging) return
    const container = scrollContainerRef.current
    const cardWidth = container.scrollWidth / projects.length
    const newIndex = Math.round(container.scrollLeft / cardWidth)
    setCurrentIndex(Math.max(0, Math.min(newIndex, projects.length - 1)))
  }

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        goToNext()
      }, 4000)
    }
  }

  useEffect(() => {
    if (isAutoPlaying && isVisible && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const nextIndex = currentIndex >= projects.length - 1 ? 0 : currentIndex + 1
          const container = scrollContainerRef.current
          const cardWidth = container.scrollWidth / projects.length
          const targetScroll = cardWidth * nextIndex
          
          container.scrollTo({
            left: isRTL ? -targetScroll : targetScroll,
            behavior: 'smooth'
          })
          setCurrentIndex(nextIndex)
        }
      }, 4000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isVisible, isDragging, currentIndex, projects.length, isRTL])

  return (
    <section id="projects" ref={sectionRef} className="py-16 lg:py-20 pb-20 bg-gradient-to-br from-neutral-50 to-neutral-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center rounded-full px-6 py-2 mb-4" style={{ backgroundColor: '#265a3f' }}>
            <Award className={`w-4 h-4 text-white ${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="text-white text-sm">
              {t('projects.title')}
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4" style={{ color: '#265a3f' }}>
            {t('projects.subtitle')}
          </h2>
          <p className="text-sm lg:text-base text-neutral-600 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {/* Scrollable Card Carousel */}
        <div 
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Scrollable Cards Container */}
            <div 
              ref={scrollContainerRef}
              className={`flex gap-4 overflow-x-auto scroll-smooth pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} scrollbar-hide`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => {
                handleMouseUp()
                if (!isDragging) setIsAutoPlaying(true)
              }}
              onScroll={handleScroll}
              onMouseEnter={() => setIsAutoPlaying(false)}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-64 lg:w-72 h-[420px]"
                >
                  {/* Card with White Background - Fixed Height */}
                  <div 
                    className="group cursor-pointer bg-white rounded-xl p-4 border border-neutral-100 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
                    onClick={() => openModal(project)}
                  >
                    {/* Logo Container */}
                    <div 
                      className="relative rounded-lg overflow-hidden mb-4 flex-shrink-0"
                      style={{ backgroundColor: project.bgColor }}
                    >
                      <div className="aspect-[4/3] flex items-center justify-center p-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          draggable="false"
                        />
                      </div>
                    </div>

                    {/* Enhanced Content Area - Flex Grow */}
                    <div className="flex flex-col flex-grow">
                      {/* Title with Icon */}
                      <div className="flex items-start gap-2 mb-2">
                        <div className="w-1 h-4 rounded-full mt-0.5 flex-shrink-0" style={{ backgroundColor: '#265a3f' }} />
                        <h3 className="text-sm font-bold line-clamp-2 leading-snug flex-1" style={{ color: '#265a3f' }}>
                          {project.title}
                        </h3>
                      </div>
                      
                      {/* Description with Better Styling - Flex Grow */}
                      <div className="mb-3 pl-3 flex-grow">
                        <p className="text-xs text-neutral-500 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Footer with Badge - Pinned to Bottom */}
                      <div className="flex items-center justify-between pl-3 pt-3 border-t border-neutral-100 mt-auto">
                        <span className="text-xs text-neutral-400 uppercase tracking-wide">{t('projects.subtitle')}</span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: project.bgColor, color: project.textColor }}>
                          <span>#{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Better Spacing */}
            <button
              onClick={goToPrev}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'} z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex`}
              style={{ color: '#265a3f' }}
            >
              {isRTL ? (
                <ChevronRight className="w-6 h-6" />
              ) : (
                <ChevronLeft className="w-6 h-6" />
              )}
            </button>
            
            <button
              onClick={goToNext}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-0 -translate-x-16' : 'right-0 translate-x-16'} z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hidden lg:flex`}
              style={{ color: '#265a3f' }}
            >
              {isRTL ? (
                <ChevronLeft className="w-6 h-6" />
              ) : (
                <ChevronRight className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToIndex(index)
                  resetAutoPlay()
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6'
                    : 'w-1.5 opacity-40 hover:opacity-70'
                }`}
                style={{
                  backgroundColor: '#265a3f'
                }}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-3">
            <span className="text-xs text-neutral-500">
              {currentIndex + 1} {t('nav.of')} {projects.length}
            </span>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
              style={{ color: '#265a3f' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header with Logo */}
            <div 
              className="relative p-8 lg:p-12"
              style={{ backgroundColor: selectedProject.bgColor }}
            >
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 flex items-center justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 lg:p-12 overflow-y-auto max-h-[50vh]">
              {/* Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1.5 h-6 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#265a3f' }} />
                <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#265a3f' }}>
                  {selectedProject.title}
                </h3>
              </div>
              
              {/* Full Description */}
              <div className="pl-5">
                <p className="text-base text-neutral-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Info */}
              <div className="pl-5 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500 uppercase tracking-wider">{t('projects.subtitle')}</span>
                  <div 
                    className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: selectedProject.bgColor, color: selectedProject.textColor }}
                  >
                    Project #{String(projects.findIndex(p => p.id === selectedProject.id) + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

