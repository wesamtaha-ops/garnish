import { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import OurStorySection from './components/OurStorySection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export const metadata: Metadata = {
  title: 'GARNISH - F&B Consulting Damascus | Restaurant Management Experts Syria',
  description: 'Transform your F&B business with GARNISH. Expert consulting in restaurant management, operations, and concept development. Serving Syria and the Middle East since 2015.',
  openGraph: {
    title: 'GARNISH - Leading F&B Consulting in Damascus, Syria',
    description: 'Professional F&B consulting services including restaurant management, operations optimization, and hospitality solutions.',
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'GARNISH F&B Consulting - Home',
            description: 'Professional F&B consulting and restaurant management services in Damascus, Syria',
            url: 'https://www.garnish.com',
            mainEntity: {
              '@type': 'Organization',
              name: 'GARNISH',
              slogan: 'Management • Operations • F&B Specialists',
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.garnish.com',
                },
              ],
            },
          }),
        }}
      />
      
      <div className="min-h-screen">
        <HeroSection />
        <OurStorySection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  )
}
