'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, setLanguage, t, isRTL } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Always show solid nav on non-home pages
  const shouldShowSolidNav = pathname !== '/' || isScrolled

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  // Helper function to create proper links
  const getNavLink = (href: string) => {
    // If we're not on home page and link is a hash, prepend with /
    if (pathname !== '/' && href.startsWith('#')) {
      return `/${href}`
    }
    return href
  }

  // Navigation structure with dropdowns
  const navStructure = [
    { 
      href: '#home', 
      label: t('nav.home'),
      type: 'link'
    },
    {
      label: t('nav.about'),
      type: 'dropdown',
      items: [
        { href: '#story', label: t('story.title') },
        { href: '#about', label: t('whoWeAre.title') },
        { href: '#values', label: t('values.title') }
      ]
    },
    { 
      href: '#services', 
      label: t('nav.services'),
      type: 'link'
    },
    { 
      href: '#projects', 
      label: t('nav.projects'),
      type: 'link'
    },
    { 
      href: '#why-garnish', 
      label: t('whyUs.title'),
      type: 'link'
    },
    { 
      href: '#contact', 
      label: t('nav.contact'),
      type: 'link'
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowSolidNav ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Hidden when at top, visible when scrolled */}
          <Link 
            href="/#home" 
            className={`flex items-center transition-all  duration-500 ${
              shouldShowSolidNav ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="relative w-40 h-20">
              <Image
                src="/logo.png"
                alt="GARNISH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navStructure.map((navItem, index) => (
              <div key={index} className="relative">
                {navItem.type === 'link' ? (
                  <Link
                    href={getNavLink(navItem.href!)}
                    className={`text-sm ${navItem.href === '#home' ? 'mr-5 ml-5' : 'mr-2 ml-2'} transition-colors duration-300 hover:text-primary-500 ${
                      shouldShowSolidNav ? 'text-neutral-700' : 'text-white'
                    }`}
                  >
                    {navItem.label}
                  </Link>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(navItem.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm  transition-colors duration-300 hover:text-primary-500 ${
                        shouldShowSolidNav ? 'text-neutral-700' : 'text-white'
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === navItem.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden transition-all duration-300 ${
                      activeDropdown === navItem.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {navItem.items?.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={getNavLink(item.href)}
                          className="block px-4 py-3 text-sm text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 transition-colors duration-200 border-b border-neutral-100 last:border-b-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-primary-500/10 ${
                shouldShowSolidNav ? 'text-neutral-700' : 'text-white'
              }`}
            >
              <Globe className="w-4 mr-2 ml-2 h-4" />
              <span className="text-sm ">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                shouldShowSolidNav ? 'text-neutral-700' : 'text-white'
              }`}
            >
              <Globe className="w-4 mr-2 ml-2 h-4" />
              <span className="text-xs">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                shouldShowSolidNav ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navStructure.map((navItem, index) => (
              <div key={index}>
                {navItem.type === 'link' ? (
                  <Link
                    href={getNavLink(navItem.href!)}
                    className="block px-4 py-2 text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {navItem.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === navItem.label ? null : navItem.label)}
                      className="flex items-center justify-between w-full px-4 py-2 text-neutral-700 hover:text-primary-500 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === navItem.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile Dropdown Items */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === navItem.label ? 'max-h-48' : 'max-h-0'
                    }`}>
                      <div className="pl-6 space-y-1">
                        {navItem.items?.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={getNavLink(item.href)}
                            className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-500 hover:bg-neutral-50 transition-colors duration-200 rounded-lg"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
