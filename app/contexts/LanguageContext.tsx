'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.ourStory': 'Our Story',
    'nav.of': 'of',
    
    // Hero Section
    'hero.title': 'GARNISH',
    'hero.tagline': 'Management • Operations • F&B Specialists',
    'hero.subtitle': 'Professional hospitality and F&B consulting services since 2015',
    'hero.cta': 'Learn More',
    'hero.contact': 'Contact Us',
    
    // Our Story
    'story.title': 'Our Story',
    'story.subtitle': 'A Journey Since 2015',
    'story.content': 'The founder began his journey by studying and working in tourism and hospitality since 2015, making his mark in various restaurants and hotels. Through extensive experience in the labor market, we discovered the urgent need for qualified professionals capable of advancing this field locally and regionally.',
    'story.content2': 'A year ago, we decided to expand and transform GARNISH into an integrated group of experienced youth. We provide services professionally and legally, saving customers money, time, and effort through one credible entity that turns requirements into reality.',
    'story.milestone1Title': 'Journey Begins',
    'story.milestone1Desc': 'Started studying and working in tourism and hospitality industry',
    'story.milestone2Title': 'Team Expansion',
    'story.milestone2Desc': 'Transformed GARNISH into an integrated group of experienced youth',
    'story.milestone3Title': 'Professional Services',
    'story.milestone3Desc': 'Providing comprehensive F&B consulting services professionally and legally',
    'story.journeyOfExcellence': 'Journey of Excellence Since 2015',
    'story.years': 'Years',
    'story.yearsExperience': 'Years Experience',
    'story.since2015': 'Since 2015',
    'story.excellenceInService': 'Excellence in Service',
    
    // Who We Are
    'whoWeAre.title': 'Who We Are',
    'whoWeAre.subtitle': 'A Dynamic Team of Industry Experts',
    'whoWeAre.content': 'We are a youth-driven, competent academic group of professionals with extensive experience in the hospitality and F&B industry. Our team combines fresh perspectives with proven expertise to deliver exceptional results for our clients.',
    'whoWeAre.experience': 'Years of Experience',
    'whoWeAre.projects': 'Successful Projects',
    'whoWeAre.clients': 'Happy Clients',
    
    // Vision
    'vision.title': 'Our Vision',
    'vision.subtitle': 'Leading the Future of Hospitality',
    'vision.content': 'To become the leading hospitality and F&B consulting firm in the region, known for our commitment to sustainability, innovation, and excellence. We envision a future where every dining experience is memorable and every business operation is optimized for success.',
    'vision.sustainability': 'Sustainability Focus',
    'vision.innovation': 'Innovation Driven',
    'vision.excellence': 'Excellence Committed',
    
    // Values
    'values.title': 'Our Values',
    'values.subtitle': 'The Principles That Guide Us',
    'values.credibility': 'Credibility',
    'values.credibilityDesc': 'Building trust through transparency and reliable service delivery',
    'values.respect': 'Respect',
    'values.respectDesc': 'Honoring diversity and fostering inclusive partnerships',
    'values.commitment': 'Commitment',
    'values.commitmentDesc': 'Dedicated to exceeding expectations in every project',
    'values.innovation': 'Innovation',
    'values.innovationDesc': 'Embracing creative solutions for modern challenges',
    'values.integrity': 'Integrity',
    'values.integrityDesc': 'Maintaining ethical standards in all business practices',
    'values.excellence': 'Excellence',
    'values.excellenceDesc': 'Pursuing the highest quality in everything we do',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Professional F&B Solutions',
    'services.description': 'Comprehensive consulting services tailored to your business needs',
    'services.management': 'Restaurant Management',
    'services.managementDesc': 'Complete restaurant and hotel management solutions',
    'services.operations': 'Operations Consulting',
    'services.operationsDesc': 'Operational excellence and efficiency optimization',
    'services.consulting': 'F&B Consulting',
    'services.consultingDesc': 'Expert guidance for food and beverage operations',
    'services.development': 'Concept Development',
    'services.developmentDesc': 'From concept to reality - complete project development',
    'services.learnMore': 'Learn More',
    'services.servicesCount': 'Services',
    'services.readyToStart': 'Ready to get started with',
    'services.getQuote': 'Get Quote',
    'services.close': 'Close',
    'services.feature1': 'Restaurant Management',
    'services.feature2': 'Hotel F&B Operations',
    'services.feature3': 'Staff Training & Development',
    'services.feature4': 'Quality Control Systems',
    'services.feature5': 'Customer Service Excellence',
    'services.feature6': 'Operations Optimization',
    'services.feature7': 'Process Improvement',
    'services.feature8': 'Cost Reduction Strategies',
    'services.feature9': 'Efficiency Enhancement',
    'services.feature10': 'Performance Monitoring',
    'services.feature11': 'F&B Strategy Development',
    'services.feature12': 'Menu Design & Pricing',
    'services.feature13': 'Market Analysis',
    'services.feature14': 'Brand Positioning',
    'services.feature15': 'Revenue Optimization',
    'services.feature16': 'Concept Development',
    'services.feature17': 'Project Planning',
    'services.feature18': 'Implementation Support',
    'services.feature19': 'Launch Strategy',
    'services.feature20': 'Post-Launch Optimization',
    
    // Why Us
    'whyUs.title': 'Why Choose Us',
    'whyUs.subtitle': 'We Understand Investor Challenges',
    'whyUs.description': 'We provide integrated solutions that save time, money, and effort',
    'whyUs.withoutGarnish': 'WITHOUT GARNISH',
    'whyUs.withGarnish': 'WITH GARNISH',
    'whyUs.traditionalChallenges': 'Traditional Challenges',
    'whyUs.advancedSolutions': 'Advanced Solutions',
    'whyUs.chooseBetterPath': 'Choose the Better Path for Your Project',
    'whyUs.startWithGarnish': 'Start with GARNISH',
    'whyUs.challenge1': 'Long time required for project creation and setup',
    'whyUs.solution1': 'Effective synchronization across all project aspects through diverse expertise',
    'whyUs.challenge2': 'Difficulty reorganizing when facility concept changes',
    'whyUs.solution2': 'Significant savings in capital, resources, and most importantly, time',
    'whyUs.challenge3': 'Human resources lacking proper academic and professional backgrounds',
    'whyUs.solution3': 'Comprehensive project analysis and success forecasting with extensive experience',
    'whyUs.challenge4': 'Complex details requiring extensive efforts from multiple teams',
    'whyUs.solution4': 'Commitment to privacy and high professionalism for perfect project completion',
    'whyUs.investmentTitle': 'Investment in Time & Effort',
    'whyUs.investmentDesc': 'The importance and need for "Garnish" stems from our investment in time and effort, achieving effective synchronization in all project aspects through our diverse expertise and efficiency.',
    'whyUs.yearsExperience': '10+ Years Experience',
    'whyUs.integratedSolutions': 'Integrated Solutions',
    'whyUs.highProfessionalism': 'High Professionalism',
    'whyUs.saveTimeMoney': 'Save Time & Money',
    'whyUs.costSavings': 'Cost Savings',
    'whyUs.timeSavings': 'Time Savings',
    'whyUs.successRate': 'Success Rate',
    'whyUs.support': 'Support',
    'whyUs.startProjectToday': 'Start Your Project Today',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch with Our Team',
    'contact.startProject': 'Start Your Project With Us',
    'contact.formTitle': 'Send us a Message',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.phone': 'Phone Number',
    'contact.phonePlaceholder': '0945989890',
    'contact.company': 'Company Name',
    'contact.companyPlaceholder': 'Your company name',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project and how we can help...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you for your message! We\'ll get back to you soon.',
    'contact.error': 'Failed to send message. Please try again or contact us directly.',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.addressValue': 'Damascus, Syria',
    'contact.emailUs': 'Email Us',
    'contact.callUs': 'Call Us',
    'contact.visitUs': 'Visit Us',
    'contact.businessHours': 'Business Hours',
    'contact.locationLine1': 'Damascus',
    'contact.locationLine2': 'Syria',
    'contact.hoursLine1': 'Sunday - Thursday: 8AM - 6PM',
    'contact.hoursLine2': 'Friday - Saturday: 10AM - 4PM',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Success Stories',
    'projects.description': 'Explore our portfolio of successful projects across the F&B industry',
    'projects.viewDetails': 'View Details',
    'projects.inout.title': 'Coffee Line IN&OUT',
    'projects.inout.desc': 'From concept to full operation in record time, reaching the first successful sales and securing high profits with a strong market share.',
    'projects.alazawqak.title': 'Coffee Shop "Ala Zawqak"',
    'projects.alazawqak.desc': 'An innovative coffee shop that became a marketing platform for a specialized coffee company, blending café experiences with product promotion, while training staff to boost sales efficiency.',
    'projects.cityside.title': 'City Side Mall – Facilities Management',
    'projects.cityside.desc': 'We took part from the very beginning, developing a comprehensive facilities management strategy and conducting an economic feasibility study to ensure sustainable mall operations.',
    'projects.cloudkitchen.title': 'Cloud Kitchen',
    'projects.cloudkitchen.desc': 'A professional kitchen designed to serve international organization employees with carefully planned meals, following strict hygiene standards and HACCP compliance.',
    'projects.class.title': 'Class Restaurant & Café',
    'projects.class.desc': 'We increased sales, reduced waste, and enhanced operational efficiency through quality monitoring and streamlined workflows.',
    'projects.charming.title': 'Charming Chef Training Center for Tourism & Hospitality',
    'projects.charming.desc': 'We established a professional hospitality training curriculum to equip students with practical skills for a confident entry into the job market.',
    'projects.checkin.title': 'Farrouj Check-In',
    'projects.checkin.desc': 'We launched a distinctive chicken brand with a competitive identity and an unforgettable taste.',
    'projects.iust.title': 'International University of Science & Technology',
    'projects.iust.desc': 'Opened a university restaurant serving students and staff with healthy breakfast and lunch options, operating with precision to serve over 500 students within minutes—combining speed and quality seamlessly.',
    
    // Loading Screen
    'loading.tagline': 'Management • Operations • F&B Specialists',
    'loading.text': 'Loading',
    
    // WhatsApp
    'whatsapp.title': 'Chat with us on WhatsApp',
    'whatsapp.message': 'Need help with your F&B project? We\'re here to assist you!',
    'whatsapp.startChat': 'Start Chat',
    'whatsapp.defaultMessage': 'Hello GARNISH! I would like to discuss F&B consulting services.',
    
    // Privacy Policy
    'privacy.badge': 'Privacy & Security',
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last Updated',
    'privacy.date': 'October 2024',
    'privacy.intro.title': 'Introduction',
    'privacy.intro.content': 'At GARNISH, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.',
    'privacy.collect.title': 'Information We Collect',
    'privacy.collect.content': 'We may collect the following types of information:',
    'privacy.collect.item1': 'Personal Information: Name, email address, phone number, and company details when you contact us or request our services.',
    'privacy.collect.item2': 'Usage Data: Information about how you interact with our website, including IP address, browser type, and pages visited.',
    'privacy.collect.item3': 'Communication Records: Content of messages and inquiries you send to us through our contact forms or email.',
    'privacy.use.title': 'How We Use Your Information',
    'privacy.use.content': 'We use the collected information for the following purposes:',
    'privacy.use.item1': 'To respond to your inquiries and provide requested consulting services.',
    'privacy.use.item2': 'To improve our website and service offerings based on user feedback and behavior.',
    'privacy.use.item3': 'To send you relevant updates about our services, with your consent.',
    'privacy.protection.title': 'Information Protection',
    'privacy.protection.content': 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We regularly review and update our security practices to ensure the highest level of data protection.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.content': 'You have the following rights regarding your personal data:',
    'privacy.rights.item1': 'Access and review the personal information we hold about you.',
    'privacy.rights.item2': 'Request correction of any inaccurate or incomplete information.',
    'privacy.rights.item3': 'Request deletion of your personal data, subject to legal obligations.',
    'privacy.contact.title': 'Privacy Questions?',
    'privacy.contact.content': 'If you have any questions or concerns about our privacy practices, please contact us at:',
    
    // Footer
    'footer.description': 'Leading F&B consulting firm specializing in management, operations, and franchise development.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.ourServices': 'Our Services',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.address': 'Damascus, Syria',
    'footer.privacyPolicy': 'Privacy Policy',
    
    // Additional Values (English mode)
    'values.credibilityRespect': 'Credibility, Respect & Compassion',
    'values.credibilityRespectDesc': 'Building relationships based on trust and mutual respect',
    'values.commitmentResponsibility': 'Commitment & Responsibility',
    'values.commitmentResponsibilityDesc': 'Taking full responsibility for our clients and their projects',
    'values.cooperationUnity': 'Cooperation & Unity',
    'values.cooperationUnityDesc': 'Strength in unity and collaboration for shared goals',
    'values.trustStability': 'Trust & Stability',
    'values.trustStabilityDesc': 'Providing a secure and reliable environment for all partners',
    'values.youthLeaders': 'Youth Enterprising Leaders',
    'values.youthLeadersDesc': 'Investing in youth energy to lead the future',
    'values.innovationModernism': 'Innovation & Modernism',
    'values.innovationModernismDesc': 'Keeping up with latest developments and creating modern solutions',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'اتصل بنا',
    'nav.ourStory': 'قصتنا',
    'nav.of': 'من',
    
    // Hero Section
    'hero.title': 'GARNISH',
    'hero.tagline': 'إدارة • عمليات • متخصصون في الأغذية والمشروبات',
    'hero.subtitle': 'خدمات استشارية مهنية في الضيافة والأغذية والمشروبات منذ 2015',
    'hero.cta': 'اعرف المزيد',
    'hero.contact': 'اتصل بنا',
    
    // Our Story
    'story.title': 'قصتنا',
    'story.subtitle': 'رحلة منذ 2015',
    'story.content': 'بدأ مؤسس المجموعة رحلته بدراسة والعمل في السياحة والضيافة منذ عام 2015، حيث عمل في مختلف المطاعم والفنادق وضع بصمته في هذا المجال.',
    'story.content2': 'منذ عام مضى، تم أخذ القرار بتوسيع الفريق وجعل GARNISH مجموعة متكاملة من الشباب ذوي الخبرة الواسعة في شتى المجالات.',
    'story.milestone1Title': 'بداية الرحلة',
    'story.milestone1Desc': 'بدأنا بالدراسة والعمل في صناعة السياحة والضيافة',
    'story.milestone2Title': 'توسيع الفريق',
    'story.milestone2Desc': 'تحويل GARNISH إلى مجموعة متكاملة من الشباب ذوي الخبرة',
    'story.milestone3Title': 'الخدمات الاحترافية',
    'story.milestone3Desc': 'تقديم خدمات استشارية شاملة بشكل احترافي وقانوني',
    'story.journeyOfExcellence': 'رحلة التميز منذ 2015',
    'story.years': 'سنة',
    'story.yearsExperience': 'سنة خبرة',
    'story.since2015': 'منذ 2015',
    'story.excellenceInService': 'التميز في الخدمة',
    
    // Who We Are
    'whoWeAre.title': 'من نحن',
    'whoWeAre.subtitle': 'فريق ديناميكي من خبراء الصناعة',
    'whoWeAre.content': 'نحن مجموعة أكاديمية شابة ومختصة من المهنيين ذوي الخبرة الواسعة في صناعة الضيافة والأغذية والمشروبات. يجمع فريقنا بين وجهات النظر الجديدة والخبرة المثبتة لتقديم نتائج استثنائية لعملائنا.',
    'whoWeAre.experience': 'سنوات من الخبرة',
    'whoWeAre.projects': 'مشاريع ناجحة',
    'whoWeAre.clients': 'عملاء سعداء',
    
    // Vision
    'vision.title': 'رؤيتنا',
    'vision.subtitle': 'قيادة مستقبل الضيافة',
    'vision.content': 'أن نصبح الشركة الاستشارية الرائدة في مجال الضيافة والأغذية والمشروبات في المنطقة، المعروفة بالتزامنا بالاستدامة والابتكار والتميز. نتصور مستقبلاً حيث تكون كل تجربة طعام لا تُنسى وكل عملية تجارية محسنة للنجاح.',
    'vision.sustainability': 'التركيز على الاستدامة',
    'vision.innovation': 'مدفوع بالابتكار',
    'vision.excellence': 'ملتزم بالتميز',
    
    // Values
    'values.title': 'قيمنا',
    'values.subtitle': 'المبادئ التي ترشدنا',
    'values.credibility': 'المصداقية',
    'values.credibilityDesc': 'بناء الثقة من خلال الشفافية وتقديم الخدمات الموثوقة',
    'values.respect': 'الاحترام',
    'values.respectDesc': 'تكريم التنوع وتعزيز الشراكات الشاملة',
    'values.commitment': 'الالتزام',
    'values.commitmentDesc': 'مكرسون لتجاوز التوقعات في كل مشروع',
    'values.innovation': 'الابتكار',
    'values.innovationDesc': 'احتضان الحلول الإبداعية للتحديات الحديثة',
    'values.integrity': 'النزاهة',
    'values.integrityDesc': 'الحفاظ على المعايير الأخلاقية في جميع الممارسات التجارية',
    'values.excellence': 'التميز',
    'values.excellenceDesc': 'السعي لتحقيق أعلى جودة في كل ما نقوم به',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول مهنية في الأغذية والمشروبات',
    'services.description': 'خدمات استشارية شاملة مصممة خصيصاً لاحتياجات عملك',
    'services.management': 'إدارة المطاعم',
    'services.managementDesc': 'حلول إدارة شاملة للمطاعم والفنادق',
    'services.operations': 'استشارات العمليات',
    'services.operationsDesc': 'تحسين العمليات والكفاءة',
    'services.consulting': 'استشارات الأغذية والمشروبات',
    'services.consultingDesc': 'إرشاد متخصص لعمليات الأغذية والمشروبات',
    'services.development': 'تطوير المفاهيم',
    'services.developmentDesc': 'من الفكرة إلى الواقع - تطوير شامل للمشاريع',
    'services.learnMore': 'اعرف المزيد',
    'services.servicesCount': 'خدمات',
    'services.readyToStart': 'هل أنت مستعد للبدء مع',
    'services.getQuote': 'احصل على عرض سعر',
    'services.close': 'إغلاق',
    'services.feature1': 'إدارة المطاعم',
    'services.feature2': 'عمليات الأغذية والمشروبات بالفنادق',
    'services.feature3': 'تدريب وتطوير الموظفين',
    'services.feature4': 'أنظمة مراقبة الجودة',
    'services.feature5': 'التميز في خدمة العملاء',
    'services.feature6': 'تحسين العمليات',
    'services.feature7': 'تطوير العمليات',
    'services.feature8': 'استراتيجيات تقليل التكاليف',
    'services.feature9': 'تعزيز الكفاءة',
    'services.feature10': 'مراقبة الأداء',
    'services.feature11': 'تطوير استراتيجية الأغذية والمشروبات',
    'services.feature12': 'تصميم القوائم والتسعير',
    'services.feature13': 'تحليل السوق',
    'services.feature14': 'تحديد موقع العلامة التجارية',
    'services.feature15': 'تحسين الإيرادات',
    'services.feature16': 'تطوير المفاهيم',
    'services.feature17': 'تخطيط المشاريع',
    'services.feature18': 'دعم التنفيذ',
    'services.feature19': 'استراتيجية الإطلاق',
    'services.feature20': 'التحسين بعد الإطلاق',
    
    // Why Us
    'whyUs.title': 'لماذا تختارنا',
    'whyUs.subtitle': 'نحن نفهم تحديات المستثمرين',
    'whyUs.description': 'نقدم الحلول المتكاملة التي توفر الوقت والمال والجهد',
    'whyUs.withoutGarnish': 'بدون GARNISH',
    'whyUs.withGarnish': 'مع GARNISH',
    'whyUs.traditionalChallenges': 'التحديات التقليدية',
    'whyUs.advancedSolutions': 'الحلول المتقدمة',
    'whyUs.chooseBetterPath': 'اختر الطريق الأفضل لمشروعك',
    'whyUs.startWithGarnish': 'ابدأ مع GARNISH',
    'whyUs.challenge1': 'المدة الزمنية الطويلة التي يأخذها إنشاء المشروع',
    'whyUs.solution1': 'تزامن فعال في جميع أواصر المشروع بسبب تعدد خبراتنا وكفاءتها',
    'whyUs.challenge2': 'صعوبة إعادة تنظيم الإنشاء في حال حدوث تغيير في فكرة المنشأة',
    'whyUs.solution2': 'توفير كبير لرأس المال والموارد والأهم للوقت',
    'whyUs.challenge3': 'الموارد البشرية التي لا تمتلك الخلفيات الأكاديمية والمهنية الصحيحة',
    'whyUs.solution3': 'دراسة شاملة للمشروع وفرص نجاحه بخبرة طويلة في المجال',
    'whyUs.challenge4': 'التفاصيل الدقيقة التي تحتاج جهود جبارة من فرق متعددة',
    'whyUs.solution4': 'التزام بالخصوصية والمهنية العالية لإتمام المشاريع على أكمل وجه',
    'whyUs.investmentTitle': 'استثمار في الوقت والجهد',
    'whyUs.investmentDesc': 'من هنا تنبع أهمية وحاجة "Garnish" حيث نمثل استثماراً في الوقت والجهد، ونحقق تزامناً فعالاً في جميع أواصر المشروع بسبب تعدد خبراتنا وكفاءتها.',
    'whyUs.yearsExperience': '10+ سنة خبرة',
    'whyUs.integratedSolutions': 'حلول متكاملة',
    'whyUs.highProfessionalism': 'مهنية عالية',
    'whyUs.saveTimeMoney': 'توفير الوقت والمال',
    'whyUs.costSavings': 'توفير في التكلفة',
    'whyUs.timeSavings': 'توفير في الوقت',
    'whyUs.successRate': 'معدل النجاح',
    'whyUs.support': 'الدعم',
    'whyUs.startProjectToday': 'ابدأ مشروعك اليوم',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريقنا',
    'contact.startProject': 'ابدأ مشروعك معنا',
    'contact.formTitle': 'أرسل لنا رسالة',
    'contact.name': 'الاسم الكامل',
    'contact.namePlaceholder': 'اسمك الكامل',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.emailPlaceholder': 'بريدك@الإلكتروني.com',
    'contact.phone': 'رقم الهاتف',
    'contact.phonePlaceholder': '١١ ١٢٣ ٤٥٦٧ +٩٦٣',
    'contact.company': 'اسم الشركة',
    'contact.companyPlaceholder': 'اسم شركتك',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'أخبرنا عن مشروعك وكيف يمكننا مساعدتك...',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جارٍ الإرسال...',
    'contact.success': 'شكراً على رسالتك! سنتواصل معك قريباً.',
    'contact.error': 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.addressValue': 'دمشق، سوريا',
    'contact.emailUs': 'راسلنا',
    'contact.callUs': 'اتصل بنا',
    'contact.visitUs': 'زرنا',
    'contact.businessHours': 'ساعات العمل',
    'contact.locationLine1': 'دمشق',
    'contact.locationLine2': 'سوريا',
    'contact.hoursLine1': 'الأحد - الخميس: 8 صباحاً - 6 مساءً',
    'contact.hoursLine2': 'الجمعة - السبت: 10 صباحاً - 4 مساءً',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'قصص نجاح',
    'projects.description': 'استكشف محفظتنا من المشاريع الناجحة في صناعة الأغذية والمشروبات',
    'projects.viewDetails': 'عرض التفاصيل',
    'projects.inout.title': 'كوفي لاين IN&OUT',
    'projects.inout.desc': 'من فكرة على الورق إلى تشغيل كامل خلال فترة وجيزة، وصولاً إلى أول طلب مبيعات ناجح، حيث حققنا أرباحاً عالية وحصة قوية في السوق.',
    'projects.alazawqak.title': 'كوفي شوب "ع ذوقك"',
    'projects.alazawqak.desc': 'كوفي شوب ابتكاري تحوّل إلى منصة تسويقية لشركة قهوة متخصصة، يجمع بين تجربة المقاهي وترويج منتجات المورد، مع تدريب الطاقم على رفع كفاءة المبيعات.',
    'projects.cityside.title': 'مول سيتي سايد – إدارة مرافق',
    'projects.cityside.desc': 'شاركنا منذ الخطوات الأولى، عبر وضع استراتيجية متكاملة لإدارة المرافق، ودراسة جدوى اقتصادية ضمنت تشغيل mall تجاري ناجح ومستدام.',
    'projects.cloudkitchen.title': 'المطبخ السحابي',
    'projects.cloudkitchen.desc': 'إنشاء مطبخ احترافي يقدّم وجبات مدروسة خصيصاً لموظفي المنظمات الدولية، مع التزام صارم بمعايير النظافة وتطبيق نظام HACCP العالمي.',
    'projects.class.title': 'مطعم وكافيه كلاس',
    'projects.class.desc': 'رفعنا المبيعات، خفّضنا نسب الهدر، وزدنا الكفاءة التشغيلية من خلال مراقبة الجودة وضبط سير العمل.',
    'projects.charming.title': 'مركز شارمينغ شيف للتدريب الفندقي',
    'projects.charming.desc': 'تأسيس منهج تدريبي فندقي احترافي يزوّد الطلاب بالمهارات العملية اللازمة لدخول سوق العمل بثقة وكفاءة.',
    'projects.checkin.title': 'فروج تشيك إن',
    'projects.checkin.desc': 'أطلقنا علامة تجارية مميزة في عالم الدجاج، بهوية تنافسية وطعم استثنائي لا يُنسى.',
    'projects.iust.title': 'الجامعة الدولية للعلوم والتكنولوجيا',
    'projects.iust.desc': 'افتتاح مطعم جامعي يخدم الطلاب والطاقم التدريسي بوجبات فطور وغداء صحية، مع قدرة تشغيلية لخدمة أكثر من 500 طالب خلال دقائق قليلة، بجودة وسرعة عالية.',
    
    // Loading Screen
    'loading.tagline': 'إدارة • عمليات • متخصصون في الأغذية والمشروبات',
    'loading.text': 'جارٍ التحميل',
    
    // WhatsApp
    'whatsapp.title': 'تواصل معنا عبر واتساب',
    'whatsapp.message': 'هل تحتاج مساعدة في مشروعك؟ نحن هنا لمساعدتك!',
    'whatsapp.startChat': 'ابدأ المحادثة',
    'whatsapp.defaultMessage': 'مرحباً GARNISH! أود مناقشة خدمات استشارات الأغذية والمشروبات.',
    
    // Privacy Policy
    'privacy.badge': 'الخصوصية والأمان',
    'privacy.title': 'سياسة الخصوصية',
    'privacy.lastUpdated': 'آخر تحديث',
    'privacy.date': 'أكتوبر 2024',
    'privacy.intro.title': 'مقدمة',
    'privacy.intro.content': 'في GARNISH، نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية بياناتك عند استخدام خدماتنا أو زيارة موقعنا الإلكتروني.',
    'privacy.collect.title': 'المعلومات التي نجمعها',
    'privacy.collect.content': 'قد نجمع الأنواع التالية من المعلومات:',
    'privacy.collect.item1': 'المعلومات الشخصية: الاسم وعنوان البريد الإلكتروني ورقم الهاتف وتفاصيل الشركة عند التواصل معنا أو طلب خدماتنا.',
    'privacy.collect.item2': 'بيانات الاستخدام: معلومات حول كيفية تفاعلك مع موقعنا، بما في ذلك عنوان IP ونوع المتصفح والصفحات التي تمت زيارتها.',
    'privacy.collect.item3': 'سجلات الاتصال: محتوى الرسائل والاستفسارات التي ترسلها إلينا عبر نماذج الاتصال أو البريد الإلكتروني.',
    'privacy.use.title': 'كيفية استخدام معلوماتك',
    'privacy.use.content': 'نستخدم المعلومات المجمعة للأغراض التالية:',
    'privacy.use.item1': 'للرد على استفساراتك وتقديم الخدمات الاستشارية المطلوبة.',
    'privacy.use.item2': 'لتحسين موقعنا وعروض الخدمات بناءً على ملاحظات المستخدمين وسلوكهم.',
    'privacy.use.item3': 'لإرسال تحديثات ذات صلة حول خدماتنا، بموافقتك.',
    'privacy.protection.title': 'حماية المعلومات',
    'privacy.protection.content': 'نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف. نراجع ونحدث ممارساتنا الأمنية بانتظام لضمان أعلى مستوى من حماية البيانات.',
    'privacy.rights.title': 'حقوقك',
    'privacy.rights.content': 'لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:',
    'privacy.rights.item1': 'الوصول إلى المعلومات الشخصية التي نحتفظ بها عنك ومراجعتها.',
    'privacy.rights.item2': 'طلب تصحيح أي معلومات غير دقيقة أو غير كاملة.',
    'privacy.rights.item3': 'طلب حذف بياناتك الشخصية، مع مراعاة الالتزامات القانونية.',
    'privacy.contact.title': 'أسئلة حول الخصوصية؟',
    'privacy.contact.content': 'إذا كانت لديك أي أسئلة أو مخاوف بشأن ممارسات الخصوصية لدينا، يرجى الاتصال بنا على:',
    
    // Footer
    'footer.description': 'شركة استشارية رائدة في الأغذية والمشروبات متخصصة في الإدارة والعمليات وتطوير الامتياز التجاري.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.ourServices': 'خدماتنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.allRightsReserved': 'جميع الحقوق محفوظة.',
    'footer.address': 'دمشق، سوريا',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    
    // Additional Values (Arabic mode)
    'values.credibilityRespect': 'المصداقية والاحترام والرحمة',
    'values.credibilityRespectDesc': 'بناء العلاقات على أساس الثقة والاحترام المتبادل',
    'values.commitmentResponsibility': 'الالتزام والمسؤولية',
    'values.commitmentResponsibilityDesc': 'تحمل المسؤولية الكاملة تجاه عملائنا ومشاريعهم',
    'values.cooperationUnity': 'التعاون والوحدة',
    'values.cooperationUnityDesc': 'القوة في الوحدة والتعاون لتحقيق الأهداف المشتركة',
    'values.trustStability': 'الثقة والاستقرار',
    'values.trustStabilityDesc': 'توفير بيئة آمنة وموثوقة لجميع الشركاء',
    'values.youthLeaders': 'قادة شباب مبادرون',
    'values.youthLeadersDesc': 'الاستثمار في طاقة الشباب لقيادة المستقبل',
    'values.innovationModernism': 'الابتكار والحداثة',
    'values.innovationModernismDesc': 'مواكبة أحدث التطورات وإنشاء حلول عصرية',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with 'en' for SSR to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>('en')
  const [isHydrated, setIsHydrated] = useState(false)

  // Load saved language from localStorage after hydration
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }
    setIsHydrated(true)
  }, [])

  // Save language to localStorage whenever it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  const isRTL = language === 'ar'

  useEffect(() => {
    // Set direction and language attributes
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    
    // Force font loading and application
    if (isRTL) {
      // Remove any existing font styles
      document.body.style.removeProperty('font-family')
      document.documentElement.style.removeProperty('font-family')
      
      // Add Arabic font class and inline styles
      document.body.classList.add('font-arabic', 'font-almarai')
      document.body.classList.remove('font-english', 'font-poppins')
      
      // Force Arabic font with high specificity
      document.body.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
      
      // Also set on document element
      document.documentElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
      
      // ULTRA-AGGRESSIVE targeting for core HTML elements with enhanced rendering
      // Target <a>, <span>, <p> with maximum specificity and proper Arabic rendering
      const coreElements = ['a', 'span', 'p']
      coreElements.forEach(tagName => {
        const elements = document.querySelectorAll(tagName)
        elements.forEach(element => {
          const htmlElement = element as HTMLElement
          // Set font family
          htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
          // Enhanced font rendering properties for Arabic
          htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
          htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
          htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
          htmlElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
          htmlElement.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
          htmlElement.style.setProperty('font-synthesis', 'none', 'important')
          
          // Also set CSS property directly with all properties
          const enhancedStyle = `
            font-family: "Almarai", "Segoe UI", "Tahoma", sans-serif !important;
            font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1 !important;
            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            font-variant-ligatures: common-ligatures contextual !important;
            font-synthesis: none !important;
          `
          htmlElement.setAttribute('style', (htmlElement.getAttribute('style') || '') + enhancedStyle)
        })
      })

      // Force font on ALL text elements including buttons, nav links, tags, etc.
      const allTextElements = document.querySelectorAll(`
        h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, label,
        nav, nav *, .nav, .nav *, .btn, .btn *, .tag, .tag *, .badge, .badge *,
        .inline-flex, .inline-flex *, .flex, .flex *, .navigation, .navigation *,
        .nav-link, .nav-item, .btn-primary, .btn-secondary, .button, .cta,
        [class*="text-"], [class*="font-"], [class*="btn"], [class*="nav"]
      `)
      allTextElements.forEach(element => {
        (element as HTMLElement).style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
      })
      
      // AGGRESSIVE targeting for Tailwind font classes
      const tailwindFontClasses = [
        '.font-thin', '.font-extralight', '.font-light', '.font-normal', 
        '.font-medium', '.font-semibold', '.font-bold', '.font-extrabold', '.font-black',
        '.font-sans', '.font-serif', '.font-mono', '.font-poppins',
        '.text-xs', '.text-sm', '.text-base', '.text-lg', '.text-xl', 
        '.text-2xl', '.text-3xl', '.text-4xl', '.text-5xl', '.text-6xl',
        '.text-7xl', '.text-8xl', '.text-9xl'
      ]
      
      tailwindFontClasses.forEach(className => {
        const elements = document.querySelectorAll(className)
        elements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
          htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
          htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
          htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
          htmlElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
          htmlElement.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
          htmlElement.style.setProperty('font-synthesis', 'none', 'important')
        })
      })

      // Also target by common class patterns
      const classPatterns = [
        '[class*="text-"]', '[class*="font-"]', '[class*="btn"]', '[class*="nav"]',
        '[class*="tag"]', '[class*="badge"]', '[class*="link"]', '[class*="menu"]'
      ]
      classPatterns.forEach(pattern => {
        const elements = document.querySelectorAll(pattern)
        elements.forEach(element => {
          const htmlElement = element as HTMLElement
          htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
          htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
          htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
        })
      })
    } else {
      // Remove any existing font styles
      document.body.style.removeProperty('font-family')
      document.documentElement.style.removeProperty('font-family')
      
      // Add English font class
      document.body.classList.add('font-english', 'font-poppins')
      document.body.classList.remove('font-arabic', 'font-almarai')
      
      // Set English font
      document.body.style.setProperty('font-family', "var(--font-poppins), 'Poppins', 'Segoe UI', 'Roboto', sans-serif", 'important')
      
      // Remove forced Arabic fonts from ALL elements
      const allTextElements = document.querySelectorAll(`
        h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, label,
        nav, nav *, .nav, .nav *, .btn, .btn *, .tag, .tag *, .badge, .badge *,
        .inline-flex, .inline-flex *, .flex, .flex *, .navigation, .navigation *,
        .nav-link, .nav-item, .btn-primary, .btn-secondary, .button, .cta,
        [class*="text-"], [class*="font-"], [class*="btn"], [class*="nav"]
      `)
      allTextElements.forEach(element => {
        (element as HTMLElement).style.removeProperty('font-family')
      })
      
      // Also clean up class pattern elements
      const classPatterns = [
        '[class*="text-"]', '[class*="font-"]', '[class*="btn"]', '[class*="nav"]',
        '[class*="tag"]', '[class*="badge"]', '[class*="link"]', '[class*="menu"]'
      ]
      classPatterns.forEach(pattern => {
        const elements = document.querySelectorAll(pattern)
        elements.forEach(element => {
          (element as HTMLElement).style.removeProperty('font-family')
        })
      })
    }
    
    // Ensure Almarai font is loaded before applying
    if (isRTL) {
      // Check if font is loaded
      document.fonts.ready.then(() => {
        // Force re-application after fonts are loaded
        const coreElements = ['a', 'span', 'p']
        coreElements.forEach(tagName => {
          const elements = document.querySelectorAll(tagName)
          elements.forEach(element => {
            const htmlElement = element as HTMLElement
            htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
            htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
            htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
          })
        })
      })
    }
    
    // Force a repaint to ensure font changes are applied
    document.body.offsetHeight
    
    // Set up MutationObserver to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      if (isRTL) {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement
              
              // Apply Almarai font to new elements
              element.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
              
              // ULTRA-SPECIFIC targeting for core elements in new nodes
              const coreElements = ['a', 'span', 'p']
              coreElements.forEach(tagName => {
                // Check if the element itself is one of the core elements
                if (element.tagName.toLowerCase() === tagName) {
                  const htmlElement = element as HTMLElement
                  // Apply enhanced font properties
                  htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
                  htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
                  htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
                  htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
                  htmlElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
                  htmlElement.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
                  htmlElement.style.setProperty('font-synthesis', 'none', 'important')
                  
                  const enhancedStyle = `
                    font-family: "Almarai", "Segoe UI", "Tahoma", sans-serif !important;
                    font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1 !important;
                    text-rendering: optimizeLegibility !important;
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    font-variant-ligatures: common-ligatures contextual !important;
                    font-synthesis: none !important;
                  `
                  htmlElement.setAttribute('style', (htmlElement.getAttribute('style') || '') + enhancedStyle)
                }
                
                // Find all core elements within the new element
                const coreChildren = element.querySelectorAll(tagName)
                coreChildren.forEach(child => {
                  const htmlChild = child as HTMLElement
                  // Apply enhanced font properties
                  htmlChild.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
                  htmlChild.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
                  htmlChild.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
                  htmlChild.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
                  htmlChild.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
                  htmlChild.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
                  htmlChild.style.setProperty('font-synthesis', 'none', 'important')
                  
                  const enhancedStyle = `
                    font-family: "Almarai", "Segoe UI", "Tahoma", sans-serif !important;
                    font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1 !important;
                    text-rendering: optimizeLegibility !important;
                    -webkit-font-smoothing: antialiased !important;
                    -moz-osx-font-smoothing: grayscale !important;
                    font-variant-ligatures: common-ligatures contextual !important;
                    font-synthesis: none !important;
                  `
                  htmlChild.setAttribute('style', (htmlChild.getAttribute('style') || '') + enhancedStyle)
                })
              })
              
              // Also apply to all children
              const children = element.querySelectorAll('*')
              children.forEach(child => {
                (child as HTMLElement).style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
              })
            }
          })
        })
      }
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    // Periodic check to ensure core elements maintain Almarai font
    let intervalId: NodeJS.Timeout | null = null
    if (isRTL) {
      intervalId = setInterval(() => {
        // Check core elements
        const coreElements = ['a', 'span', 'p']
        coreElements.forEach(tagName => {
          const elements = document.querySelectorAll(tagName)
          elements.forEach(element => {
            const computedStyle = window.getComputedStyle(element)
            if (!computedStyle.fontFamily.includes('Almarai')) {
              const htmlElement = element as HTMLElement
              // Apply enhanced font properties
              htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
              htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
              htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
              htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
              htmlElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
              htmlElement.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
              htmlElement.style.setProperty('font-synthesis', 'none', 'important')
            }
          })
        })
        
        // Check Tailwind font classes specifically
        const tailwindFontClasses = [
          '.font-thin', '.font-extralight', '.font-light', '.font-normal', 
          '.font-medium', '.font-semibold', '.font-bold', '.font-extrabold', '.font-black',
          '.font-sans', '.font-serif', '.font-mono', '.font-poppins',
          '.text-xs', '.text-sm', '.text-base', '.text-lg', '.text-xl', 
          '.text-2xl', '.text-3xl', '.text-4xl', '.text-5xl', '.text-6xl'
        ]
        
        tailwindFontClasses.forEach(className => {
          const elements = document.querySelectorAll(className)
          elements.forEach(element => {
            const computedStyle = window.getComputedStyle(element)
            if (!computedStyle.fontFamily.includes('Almarai')) {
              const htmlElement = element as HTMLElement
              htmlElement.style.setProperty('font-family', "'Almarai', 'Segoe UI', 'Tahoma', sans-serif", 'important')
              htmlElement.style.setProperty('font-feature-settings', "'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1", 'important')
              htmlElement.style.setProperty('text-rendering', 'optimizeLegibility', 'important')
              htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important')
              htmlElement.style.setProperty('-moz-osx-font-smoothing', 'grayscale', 'important')
              htmlElement.style.setProperty('font-variant-ligatures', 'common-ligatures contextual', 'important')
              htmlElement.style.setProperty('font-synthesis', 'none', 'important')
            }
          })
        })
      }, 1000) // Check every second
    }
    
    // Cleanup observer and interval on unmount
    return () => {
      observer.disconnect()
      if (intervalId) clearInterval(intervalId)
    }
  }, [language, isRTL])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
