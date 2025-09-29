# Font Changes - Kalam from Google Fonts

## What Changed
- Switched from local Neue Augenblick font to Kalam from Google Fonts
- Updated `app/layout.tsx` to use `next/font/google`
- Updated `tailwind.config.ts` to use the new font variable
- Removed placeholder font files

## Kalam Font Features
- Modern, clean handwritten-style font
- Available weights: 400 (regular), 700 (bold)
- Excellent readability
- Optimized loading via Next.js font optimization
- Automatic fallbacks to system fonts

## Files Modified
1. `app/layout.tsx` - Font import and variable
2. `tailwind.config.ts` - Font family configuration

## Usage
The font is now available throughout the app via Tailwind's `font-sans` class, which is already applied to the body element.

---
*Font change completed: Neue Augenblick → Kalam*
