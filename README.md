# Whisppr Landing Page

A modern, accessible landing page for Whisppr - the silent SOS emergency alert app.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/kingigbozuruike/whisppr-landing-page.git
cd whisppr-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Editing Guide

### Main Copy Locations

| Section | File | Key Elements |
|---------|------|--------------|
| **Hero** | `components/Hero.tsx` | Main headline, subheading, CTA buttons |
| **How It Works** | `components/HowItWorks.tsx` | Process steps, descriptions |
| **Features** | `components/Features.tsx` | Feature cards, titles, descriptions |
| **FAQ** | `components/FAQ.tsx` | Questions, answers array |
| **Personas** | `components/Personas.tsx` | User personas list |
| **Privacy** | `components/PrivacyBanner.tsx` | Privacy features list |
| **Final CTA** | `components/FinalCTA.tsx` | Bottom section copy |
| **Footer** | `components/Footer.tsx` | Links, legal text |

### SEO & Meta Tags

- **Meta tags**: `app/layout.tsx` - Update title, description, OpenGraph data
- **Sitemap**: Add to `public/sitemap.xml` when domain is ready

### Content Update Examples

#### Updating Hero Headlines
```tsx
// components/Hero.tsx
<h1>Your New Headline Here</h1>
<p>Updated subheading copy...</p>
```

#### Adding FAQ Items
```tsx
// components/FAQ.tsx
const faqs = [
	{
		question: "New question?",
		answer: "New answer content..."
	},
	// ... existing items
]
```

#### Updating Feature Cards
```tsx
// components/Features.tsx
{
	icon: NewIcon,
	title: "New Feature",
	description: "Feature description..."
}
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (with reduced motion support)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Accessibility**: WCAG 2.1 AA compliant

## 📱 Features

- ✅ Fully responsive design
- ✅ Dark theme optimized
- ✅ Accessibility-first (WCAG 2.1 AA)
- ✅ Reduced motion support
- ✅ Interactive phone demo
- ✅ Form validation
- ✅ SEO optimized
- ✅ Type-safe with TypeScript

## 🎨 Design System

### Colors
```css
--accent: #00D2FF    /* Primary blue */
--coral: #FF6B6B     /* Danger/urgent */
--mint: #4ECDC4      /* Success/safe */
--bg: #0A0F14        /* Background */
--panel: #1a2332     /* Cards/panels */
--text: #ffffff      /* Primary text */
--text-light: #94a3b8 /* Secondary text */
```

### Typography
- **Font**: Inter (from Google Fonts)
- **Headings**: Responsive using `clamp()` for fluid sizing
- **Body**: 16px base with good contrast ratios

## 📁 Project Structure

```
├── app/
│   ├── globals.css         # Global styles & design tokens
│   ├── layout.tsx          # Root layout, SEO meta tags
│   └── page.tsx            # Main page composition
├── components/
│   ├── Hero.tsx            # Landing section
│   ├── Demo.tsx            # Interactive phone demo
│   ├── HowItWorks.tsx     # Process explanation
│   ├── Features.tsx        # Feature showcase grid
│   ├── PersonasPrivacy.tsx # User personas + privacy
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── WaitlistForm.tsx    # Email capture form
│   ├── FinalCTA.tsx        # Bottom call-to-action
│   ├── Footer.tsx          # Site footer
│   ├── Nav.tsx             # Navigation header
│   └── Motion.tsx          # Shared animation components
└── public/
    ├── og.png              # OpenGraph social image
    ├── favicon.ico         # Site favicon
    └── apple-touch-icon.png # iOS icon
```

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🚀 Deployment

The project is configured for easy deployment on Vercel, Netlify, or similar platforms. 

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js and deploy
3. Update environment variables if needed

### Environment Variables
Currently no environment variables are required for basic functionality.

## 📞 Support

For development questions or content updates, contact the development team or create an issue in the repository.

---

Built with ❤️ for Whisppr Emergency Alert App
