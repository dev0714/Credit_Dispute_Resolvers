# Credit Restoration Website Design Guidelines

## Design Approach

**Selected Framework**: Premium Financial Services Pattern (inspired by Stripe's restraint + Coinbase's trust signals + luxury financial brands' elegance)

**Core Principle**: Sophisticated professionalism that builds immediate trust while conveying transformation and financial empowerment.

---

## Typography System

**Primary Font**: Inter or DM Sans (professional, modern, highly legible)
**Accent Font**: Playfair Display or Cormorant (serif for elegance on hero headlines only)

**Hierarchy**:
- Hero Headlines: 4xl to 6xl, serif font, dramatic weight (700)
- Section Headers: 3xl to 4xl, sans-serif, semi-bold (600)
- Subheadings: xl to 2xl, medium weight (500)
- Body Text: base to lg, regular weight (400), increased line-height (1.7)
- CTAs: base to lg, semi-bold (600), uppercase tracking-wide

---

## Layout & Spacing System

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl for balanced readability
- Text-focused areas: max-w-4xl for optimal reading experience

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Vertical section spacing: py-16 (mobile) to py-32 (desktop)
- Component internal spacing: p-6 to p-12
- Element gaps: gap-4, gap-6, gap-8, gap-12
- Micro-spacing: 2 and 3 for tight groupings

**Grid Systems**:
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 lg:grid-cols-2
- Process steps: grid-cols-1 md:grid-cols-4
- Stats/metrics: grid-cols-2 lg:grid-cols-4

---

## Page Structure (7 Sections)

### 1. Hero Section (80vh minimum)
**Layout**: Two-column split on desktop (60/40), stacked on mobile
- **Left Column**: 
  - Serif headline (6xl desktop, 4xl mobile)
  - Supporting subheadline (xl to 2xl)
  - Two CTAs horizontally aligned (Primary + Secondary with icon)
  - Trust indicators below CTAs (small text with shield/check icons)
  - Spacing: gap-6 between elements, pt-20 to pt-32
- **Right Column**: Hero image with subtle overlay gradient
- **Button Treatment**: Blurred backdrop (backdrop-blur-sm bg-opacity-20) for buttons placed on images

### 2. Trust Signals Bar
**Layout**: Full-width, py-12
- Horizontal auto-scroll or grid of 4-6 logos/certifications
- Include: Years in business, clients served, success rate percentage
- Center-aligned, gap-8 to gap-12 between elements

### 3. Services Grid
**Layout**: 3-column grid (stacks to single column on mobile)
- **Card Structure**: 
  - Icon container at top (h-16 w-16)
  - Service title (2xl, semi-bold)
  - Description paragraph (lg line-height-relaxed)
  - "Learn More" link with arrow
  - Card padding: p-8 to p-10
  - Card spacing: gap-8
- **Services**: Debt Review Removal, Credit Bureau Clearance, Judgment Rescission

### 4. How It Works (Process Section)
**Layout**: 4-column horizontal stepper (stacks vertically on mobile)
- **Step Cards**:
  - Large number indicator (4xl to 5xl)
  - Step title (xl, semi-bold)
  - Brief description (base)
  - Connecting line/arrow between steps (hidden on mobile)
  - Vertical spacing: py-16 to py-24

### 5. Transformation Stories (Split Content)
**Layout**: Alternating two-column sections (image left/right alternates)
- **Structure**: 2-3 case study highlights
- **Content Column**: 
  - Client quote (2xl, italic, serif)
  - Metrics (text-4xl numbers with labels)
  - Client name/context (sm)
  - Spacing: gap-6, p-12
- **Image Column**: Portrait-oriented testimonial images
- Section spacing: py-16 between stories

### 6. Why Choose Us (Feature Highlights)
**Layout**: 2-column grid
- **Left Column**: Large feature image showing professional consultation
- **Right Column**: 
  - Section headline (3xl)
  - 4-5 feature points with check icons
  - Each point: icon + bold title + description
  - Stack with gap-4 to gap-6
  - CTA button at bottom

### 7. Final CTA Section
**Layout**: Centered content with background image overlay
- **Structure**:
  - Compelling headline (4xl to 5xl)
  - Supporting paragraph (xl)
  - Contact form (inline: Name, Email, Phone, Submit)
  - Alternative: Large primary CTA button
  - Trust reassurance text below
  - Padding: py-24 to py-32
- **Button Treatment**: Blurred backdrop for CTA on image background

---

## Component Library

### Navigation
- Fixed transparent header becoming solid on scroll
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20 to h-24
- Padding: px-6 to px-12

### Cards
- Rounded corners: rounded-xl to rounded-2xl
- Subtle borders with hover elevation
- Internal padding: p-6 to p-10
- Hover: Slight transform translateY(-2)

### Buttons
**Primary CTA**: 
- Size: px-8 py-4 (desktop), px-6 py-3 (mobile)
- Rounded: rounded-lg to rounded-xl
- Font: Semi-bold, tracking-wide

**Secondary CTA**:
- Outlined style with 2px border
- Same sizing as primary
- Icon on right (arrow-right)

**Buttons on Images**: 
- Apply backdrop-blur-sm
- Reduced background opacity (bg-opacity-20 to bg-opacity-30)
- No hover/active color changes (rely on built-in button states)

### Form Inputs
- Height: h-12 to h-14
- Padding: px-4 to px-6
- Rounded: rounded-lg
- Border: 2px solid with focus state
- Spacing between fields: gap-4

### Icons
- **Library**: Heroicons (via CDN)
- **Sizes**: h-6 w-6 (inline), h-12 w-12 to h-16 w-16 (features)
- **Common Icons**: shield-check, chart-bar-up, document-check, sparkles, arrow-right, check-circle

---

## Image Strategy & Placement

### Required Images (7 total):

**Hero Image** (Primary):
- **Description**: Professional South African businessperson reviewing financial documents with satisfaction, modern office setting, natural lighting
- **Placement**: Right 40% of hero section (full height)
- **Treatment**: Subtle gradient overlay left edge for text blending
- **Dimensions**: Portrait orientation, min 1200x1600px

**Service Context Images** (3):
- Image 1: Handshake between consultant and client, symbolizing partnership
- Image 2: Credit score improvement visualization or upward trending graph
- Image 3: Family celebrating financial milestone
- **Placement**: Integrated within service cards or as section backgrounds
- **Treatment**: Subtle opacity overlays

**Testimonial/Case Study Images** (2):
- **Description**: Authentic client photos (diverse South African professionals) or professional stock representing success
- **Placement**: Transformation stories section, alternating sides
- **Dimensions**: Square to portrait, min 800x1000px
- **Treatment**: Subtle frame or border treatment

**Why Choose Us Image** (1):
- **Description**: Professional credit consultant explaining documents to client, warm and trustworthy atmosphere
- **Placement**: Left column of Why Choose Us section
- **Dimensions**: Landscape to square, min 1000x800px

**CTA Section Background** (1):
- **Description**: Subtle bokeh of South African cityscape or abstract financial success imagery
- **Placement**: Full-width background for final CTA section
- **Treatment**: Heavy dark overlay (60-70% opacity) for text legibility

**Image Guidelines**:
- All images should feature diverse South African professionals
- Natural, authentic photography over staged corporate stock
- Warm, professional lighting
- Images convey success, relief, professionalism, partnership
- Avoid clichéd calculator/money imagery

---

## Footer

**Layout**: 4-column grid (stacks to single on mobile)
- **Column 1**: Logo + mission statement (max-w-xs)
- **Column 2**: Quick Links (Services, About, Contact)
- **Column 3**: Legal (Privacy, Terms, Compliance info)
- **Column 4**: Contact info + Social links
- **Bottom Bar**: Copyright + Regulatory disclaimers
- **Spacing**: pt-16 pb-8, gap-8 between columns

---

## Responsive Breakpoints

- Mobile: base (< 768px) - Single column, stacked layouts
- Tablet: md (768px+) - 2-column grids, increased spacing
- Desktop: lg (1024px+) - Full multi-column layouts, maximum spacing
- Wide: xl (1280px+) - Container max-widths, optimal typography scale

**Mobile Adjustments**:
- Hero: Stack image below text, reduce to 60vh
- Reduce all py spacing by 50%
- Typography: Reduce by one size scale
- Grid cards: Full width with gap-6
- Process steps: Vertical flow with connecting lines