# Font Installation Instructions

## Neue Augenblick Font Setup

To complete the font installation, you need to add the Neue Augenblick font files to the `/public/fonts/` directory:

### Required Files:
- `NeueAugenblick-Regular.woff2`
- `NeueAugenblick-Bold.woff2`

### Where to Get the Font:
Neue Augenblick is a commercial/custom font. You can obtain it from:
- The font designer/foundry
- Licensed font marketplaces
- Your design team if they have the license

### Alternative Options:

If you don't have access to Neue Augenblick, here are some similar alternatives that might work:

1. **Similar Open Source Fonts:**
   - Inter (currently used)
   - Manrope
   - Outfit
   - Space Grotesk

2. **Google Fonts Alternatives:**
   ```tsx
   import { Manrope } from 'next/font/google'
   
   const manrope = Manrope({
     subsets: ['latin'],
     variable: '--font-manrope',
   })
   ```

### Current Setup:
The code is already configured to use Neue Augenblick. Just add the font files to `/public/fonts/` and the site will automatically use them.

### Fallback:
If the font files aren't found, the site will fall back to system fonts (system-ui, sans-serif).
