# Marketing Site Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS marketing leaders (Stripe, Linear, Vercel) combined with creative agency aesthetics. The design emphasizes bold typography, generous whitespace, and strategic visual impact.

**Core Principles**:
- Visual hierarchy through scale and contrast, not color
- Breathing room prioritized over filling space
- Each section serves a distinct purpose
- Mobile-first responsive design

---

## Typography System

**Font Families** (Google Fonts):
- **Headings**: Inter (weights: 700, 800)
- **Body**: Inter (weights: 400, 500, 600)

**Type Scale**:
- Hero Headline: text-6xl lg:text-7xl xl:text-8xl, font-bold, leading-tight
- Section Headers: text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl lg:text-3xl, font-semibold
- Feature Titles: text-xl lg:text-2xl, font-semibold
- Body Text: text-base lg:text-lg, font-normal
- Small Text: text-sm, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: gap-8 md:gap-12 lg:gap-16
- Card padding: p-6 md:p-8
- Button padding: px-6 py-3

**Container Strategy**:
- Full-width sections with inner max-w-7xl px-6 mx-auto
- Text content: max-w-3xl for optimal readability
- Feature grids: max-w-6xl

**Grid Patterns**:
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Testimonials: grid-cols-1 md:grid-cols-2, gap-12
- Stats: grid-cols-2 lg:grid-cols-4, gap-8

---

## Component Library

### Navigation
Sticky header with backdrop-blur, h-20, logo left, nav links center, CTA button right. Mobile: hamburger menu transforming to full-screen overlay.

### Hero Section
Full viewport impact (min-h-screen), large background image with gradient overlay, centered content with headline + subheadline + dual CTAs. Buttons have backdrop-blur-md bg-white/20 treatment.

### Feature Cards
Elevated cards with subtle shadow, rounded-2xl, p-8. Icon (h-12 w-12 from Heroicons), title, 2-3 line description. Hover: subtle lift transform.

### Social Proof Section
Logo grid showcasing client/partner brands, grayscale treatment, grid-cols-3 md:grid-cols-5, max 10 logos.

### Testimonial Cards
Portrait image (rounded-full, h-16 w-16), quote text (text-lg italic), name + title. 2-column grid on desktop.

### CTA Sections
Full-width attention blocks, py-20, centered content, contrasting from surrounding sections. Headline + supporting text + primary button.

### Footer
Multi-column layout (grid-cols-2 md:grid-cols-4): Company info, Product links, Resources, Newsletter signup form. Social icons row at bottom.

---

## Page Structure (7 Sections)

1. **Hero**: Full-screen with background image, headline, subheadline, dual CTAs
2. **Social Proof**: Client logo grid with trust indicator text
3. **Features**: 3-column grid showcasing core capabilities with icons
4. **Benefits**: 2-column alternating image-text layout (3 rows)
5. **Testimonials**: 2-column customer quotes with photos
6. **Stats**: 4-metric highlight bar with numbers + labels
7. **Final CTA**: Compelling close with primary action

---

## Images Strategy

**Hero Section**: 
Large hero image (1920x1080 minimum) - abstract tech/gradient aesthetic or relevant industry imagery with 40% dark gradient overlay for text legibility.

**Benefits Section**: 
Three supporting images (800x600) - product screenshots or lifestyle photography showing the service in action.

**Testimonial Section**: 
Customer portrait photos (400x400, rounded-full treatment).

**Social Proof**: 
Client/partner logos (SVG preferred, max-h-12).

All images should be optimized, WebP format where possible, with proper alt text for accessibility.

---

## Interactions

**Minimal Animation Budget**:
- Nav: Smooth backdrop-blur on scroll
- Cards: Subtle hover lift (translateY(-4px), transition-transform duration-300)
- Buttons: Standard opacity shift on hover
- Hero: Optional subtle parallax on scroll (no more than 0.5x speed)

**No scroll-triggered animations** - prioritize instant content accessibility.

---

## Icons
**Heroicons** (outline style) via CDN for feature cards, navigation, and UI elements. Consistent h-6 w-6 sizing throughout.