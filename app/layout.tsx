import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import WhatsAppButton from './components/WhatsAppButton'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'GARNISH - Professional F&B Consulting | Restaurant Management Syria',
  description: 'Leading F&B consulting firm in Syria since 2002. Expert restaurant management, operations consulting, and hospitality solutions. Transform your F&B business with 22+ years of experience.',
  keywords: 'F&B consulting Syria, restaurant management Damascus, hospitality consulting Syria, food and beverage operations, restaurant consulting services, hotel F&B management, cloud kitchen consulting, concept development Syria, GARNISH consulting Damascus',
  authors: [{ name: 'GARNISH F&B Consulting' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'GARNISH - Professional F&B Consulting & Restaurant Management',
    description: 'Leading F&B consulting firm in Syria. Expert restaurant management, operations optimization, and hospitality solutions since 2002.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SY',
    siteName: 'GARNISH F&B Consulting',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'GARNISH F&B Consulting Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GARNISH - F&B Consulting Experts',
    description: 'Professional F&B consulting and restaurant management services in Syria since 2002',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://www.garnish.com',
    languages: {
      'en-US': 'https://www.garnish.com',
      'ar-SA': 'https://www.garnish.com',
    },
  },
  category: 'Business Services',
  classification: 'Food & Beverage Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap" 
          as="style"
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Almarai';
              font-style: normal;
              font-weight: 300 800;
              font-display: swap;
              src: url('https://fonts.gstatic.com/s/almarai/v12/tsssAp1RZy0Q_Z-PgM5VuHqe.woff2') format('woff2');
              unicode-range: U+0600-06FF, U+200C-2010, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            [dir="rtl"] * {
              font-family: 'Almarai', 'Segoe UI', 'Tahoma', sans-serif !important;
              font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `
        }} />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'GARNISH F&B Consulting',
              alternateName: 'GARNISH',
              description: 'Professional hospitality and F&B consulting services specializing in restaurant management, operations consulting, and concept development.',
              url: 'https://www.garnish.com',
              logo: 'https://www.garnish.com/logo.png',
              image: 'https://www.garnish.com/heroLogo.png',
              telephone: '+963-11-123-4567',
              email: 'info@garnish.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Damascus',
                addressLocality: 'Damascus',
                addressRegion: 'Damascus Governorate',
                addressCountry: 'SY',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '33.5138',
                longitude: '36.2765',
              },
              areaServed: ['Syria', 'Middle East', 'Levant'],
              foundingDate: '2002',
              sameAs: [
                'https://www.facebook.com/garnish',
                'https://www.twitter.com/garnish',
                'https://www.instagram.com/garnish',
                'https://www.linkedin.com/company/garnish'
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '50',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday'],
                  opens: '10:00',
                  closes: '16:00',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'F&B Consulting Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Restaurant Management',
                      description: 'Complete restaurant and hotel management solutions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Operations Consulting',
                      description: 'Operational excellence and efficiency optimization',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'F&B Consulting',
                      description: 'Expert guidance for food and beverage operations',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Concept Development',
                      description: 'From concept to reality - complete project development',
                    },
                  },
                ],
              },
            }),
          }}
        />
        
        <LanguageProvider>
          <LoadingScreen />
          <WhatsAppButton />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
