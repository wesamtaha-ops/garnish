# GARNISH - Corporate Website

A modern, elegant, and mobile-responsive corporate website for GARNISH, an F&B consulting firm with over 20 years of experience specializing in management, operations, and hospitality consulting since 2002.

## 🚀 Features

- **Modern Design**: Clean, minimalistic, professional design with elegant typography
- **Bilingual Support**: Full Arabic and English support with proper RTL layout
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Professional animations and transitions throughout
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized for fast loading and great user experience

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom animations
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)

## 📋 Pages & Sections

### Home Page
- **Hero Section**: GARNISH branding with professional tagline
- **Our Story**: Authentic company journey since 2002
- **Services**: Core F&B consulting offerings
- **Contact**: Contact form and business information

### Services
1. **Restaurant Management**: Complete restaurant and hotel management solutions
2. **Operations Consulting**: Operational excellence and efficiency optimization
3. **F&B Consulting**: Expert guidance for food and beverage operations
4. **Concept Development**: From concept to reality - complete project development

## 🎨 Design Theme

- **Colors**: Black, White, Gold/Bronze accents for luxury feel
- **Typography**: Professional font pairing (Inter + Playfair Display)
- **Style**: Corporate, modern hospitality/F&B consulting
- **Images**: High-quality hospitality and restaurant themed images

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd garnish-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add logo images**
   Place the following images in the `/public` directory:
   - `logo.png` - Main rectangular company logo (400x250px recommended)
   - `heroLogo.png` - Large hero section logo (800x800px recommended)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🌐 Language Support

The website supports both English and Arabic languages with:
- Dynamic language switching
- RTL (Right-to-Left) layout support for Arabic
- Translated content for all sections
- Proper font rendering for both languages

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🎯 Key Components

### Navigation
- Sticky navigation with scroll effects
- Mobile-friendly hamburger menu
- Language switcher
- Smooth scroll to sections

### Sections
- **HeroSection**: Main landing area with company branding
- **OurStorySection**: Company history and milestones
- **WhoWeAreSection**: Team introduction and statistics
- **VisionSection**: Company vision and pillars
- **ValuesSection**: Core values with interactive cards
- **ServicesSection**: Service offerings with detailed descriptions
- **WhyUsSection**: Competitive advantages with accordion
- **ContactSection**: Contact form and business information

### Features
- Smooth scroll animations
- Intersection Observer for scroll-triggered animations
- Hover effects and micro-interactions
- Professional color gradients
- Glass morphism effects

## 🔧 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Gold/Bronze color scheme
    500: '#eab308',
    600: '#ca8a04',
    // ... other shades
  }
}
```

### Content
Update translations in `app/contexts/LanguageContext.tsx`:
```javascript
const translations = {
  en: {
    // English translations
  },
  ar: {
    // Arabic translations
  }
}
```

### Images
Replace placeholder images with your own:
- Hero background: Restaurant/hospitality themed
- Section images: Company photos, team photos, etc.
- Service images: Relevant to each service offering

## 📞 Contact Information

Update contact details in:
- `app/components/ContactSection.tsx`
- `app/components/Footer.tsx`

## 🚀 Deployment

The website can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** (after running `npm run build`)

### Vercel Deployment
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with one click

## 📄 License

This project is created for Bro Concept. All rights reserved.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

Built with ❤️ for Bro Concept - Leading F&B Consulting Specialists
