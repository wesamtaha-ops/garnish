# Social Media Preview Setup Guide

## ✅ What's Already Configured

Your website is **already set up** to show beautiful previews when shared on:
- **WhatsApp** ✅
- **Facebook** ✅
- **LinkedIn** ✅
- **Twitter** ✅
- **Telegram** ✅
- **iMessage** ✅

## 📱 Current Preview Configuration

### Open Graph Tags (Facebook, WhatsApp, LinkedIn)
```
Title: GARNISH - Professional F&B Consulting & Restaurant Management
Description: Leading F&B consulting firm in Syria. Expert restaurant management, operations optimization, and hospitality solutions since 2002.
Image: /logo.png (currently set)
Type: website
```

### Twitter Card Tags
```
Card Type: Large Image
Title: GARNISH - F&B Consulting Experts
Description: Professional F&B consulting and restaurant management services in Syria since 2002
Image: /logo.png
```

## 🎨 Recommended: Create Optimized Social Preview Image

For **best results**, create a custom social media preview image:

### Image Specifications:
- **Size**: 1200px × 630px (required for Facebook/LinkedIn)
- **Format**: JPG or PNG
- **File size**: Under 5MB
- **File name**: `og-image.png` or `social-preview.png`

### What to Include in the Image:
1. **GARNISH Logo** (centered or left-aligned)
2. **Tagline**: "Management • Operations • F&B Specialists"
3. **Location**: Damascus, Syria
4. **Founded**: Since 2002
5. **Background**: Your brand green (#265a3f)
6. **Text**: White or light colors for contrast

### Design Tips:
- Use **clear, large text** (readable at small sizes)
- Keep important content in the **safe zone** (center 1000×500px)
- Add your **website URL** at the bottom
- Use your **brand colors**
- Make it **visually appealing** and professional

## 📝 How to Add Your Custom Image

1. **Create your image** (1200×630px)
2. **Save it** as `public/og-image.png`
3. **Update** `app/layout.tsx`:

Change line 43 from:
```typescript
url: '/logo.png',
```

To:
```typescript
url: '/og-image.png',
```

4. Also update line 54:
```typescript
images: ['/og-image.png'],
```

## 🧪 How to Test Your Preview

### Method 1: Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://www.garnish.com`
3. Click "Debug"
4. See your preview!

### Method 2: LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Check the preview

### Method 3: Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Preview your card

### Method 4: WhatsApp (Direct Test)
1. Send the link to yourself on WhatsApp
2. WhatsApp will automatically fetch and show the preview
3. Note: First time might take a few seconds to load

## 🌟 What Users Will See When Sharing

### On WhatsApp:
```
┌─────────────────────────────┐
│ [Preview Image]             │
│                             │
│ GARNISH - Professional F&B  │
│ Consulting & Restaurant...  │
│                             │
│ Leading F&B consulting firm │
│ in Syria. Expert...         │
│                             │
│ 🔗 www.garnish.com          │
└─────────────────────────────┘
```

### On Facebook/LinkedIn:
```
┌─────────────────────────────────────┐
│                                     │
│        [Large Preview Image]        │
│             1200x630px              │
│                                     │
├─────────────────────────────────────┤
│ GARNISH - Professional F&B Consult- │
│ ing & Restaurant Management         │
│                                     │
│ Leading F&B consulting firm in      │
│ Syria. Expert restaurant manage...  │
│                                     │
│ 🔗 GARNISH.COM                      │
└─────────────────────────────────────┘
```

### On Twitter:
```
┌─────────────────────────────────┐
│     [Large Image Preview]       │
│          1200x630px             │
├─────────────────────────────────┤
│ GARNISH - F&B Consulting Experts│
│ Professional F&B consulting and │
│ restaurant management services  │
│ in Syria since 2002             │
└─────────────────────────────────┘
```

## ✨ Current Status

✅ **Open Graph tags**: Configured
✅ **Twitter Card tags**: Configured  
✅ **Structured Data**: Added
✅ **Multiple languages**: Supported (EN/AR)
✅ **Canonical URL**: Set
✅ **Image**: Using logo (can be improved with custom og-image)

## 🚀 Next Steps

1. **Create custom OG image** (1200×630px) - **Recommended**
2. **Test on social platforms** using the tools above
3. **Update image path** if you create a custom one
4. **Share and enjoy** beautiful previews! 🎉

## 📊 Preview Performance

Your previews will work on:
- ✅ WhatsApp (mobile & desktop)
- ✅ Facebook (posts, messenger, stories)
- ✅ Instagram (stories with link sticker)
- ✅ LinkedIn (posts & messages)
- ✅ Twitter/X (tweets)
- ✅ Telegram
- ✅ iMessage
- ✅ Slack
- ✅ Discord
- ✅ And more...

Everything is ready! Just create a custom 1200×630px image for the best looking previews! 🎨

