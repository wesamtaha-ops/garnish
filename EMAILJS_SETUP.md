# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello GARNISH Team,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from your GARNISH website contact form.
```

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Configure Your Website
1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.example .env.local
   ```

2. Add your credentials to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```

3. Update `app/components/ContactSection.tsx`:
   - Replace `'YOUR_SERVICE_ID'` with `process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Replace `'YOUR_TEMPLATE_ID'` with `process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - Replace `'YOUR_PUBLIC_KEY'` with `process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Step 6: Test
1. Restart your development server
2. Fill out and submit the contact form
3. Check your email inbox for the message!

## Troubleshooting
- Make sure all environment variables are prefixed with `NEXT_PUBLIC_`
- Restart dev server after adding `.env.local`
- Check EmailJS dashboard for usage limits (200 emails/month on free plan)
- Verify template variable names match exactly

## Current Implementation
The contact form is already set up with:
- ✅ EmailJS integration
- ✅ Loading states
- ✅ Success/error messages
- ✅ Form validation
- ✅ Bilingual support (EN/AR)
- ✅ RTL support

Just add your credentials and it will work!

