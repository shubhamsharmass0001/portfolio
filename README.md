# Apple-Style Editorial Portfolio

A high-performance personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion (framer-motion)** featuring iOS-grade spring physics, fluid typography, and Apple editorial visual language.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
# Install dependencies (if not already installed)
npm install

# Start the Turbopack development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 2. Production Build
```bash
# Type-check and build
npm run build

# Start production server
npm run start
```

---

## 🛠️ Architecture & Folder Structure

```
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx         # Site layout with accessible skip-to-content
│   │   └── page.tsx           # Single-page layout uniting all sections
│   ├── globals.css            # Apple theme, typography scaling, glass, glows
│   └── layout.tsx             # Root HTML layout with Inter font preloads & SEO
├── components/
│   ├── Navbar.tsx             # Sticky glass navbar with compact scroll & mobile drawer
│   ├── Hero.tsx               # Near-black hero, dynamic glows, terminal & iMessage chat
│   ├── StatCards.tsx          # Dark cards showcasing headline metrics
│   ├── Projects.tsx           # Alternating neutral section with case study cards
│   ├── ProjectCard.tsx        # Project card with press-to-shrink & tech chips
│   ├── ProjectSheet.tsx       # iOS-style interactive bottom sheet modal
│   ├── Process.tsx            # Connected 5-stage workflow with blue active border
│   ├── Experience.tsx         # Numbered editorial timeline with hairline borders
│   ├── Contact.tsx            # Insanely Great CTA banner, social links & Apple footer
│   └── Pressable.tsx          # Press-and-hold scale down (0.97) interaction wrapper
└── lib/
    ├── springs.ts             # Shared Apple HIG spring physics configuration
    └── useReducedMotion.ts    # Accessibility hook for prefers-reduced-motion
```

---

## 🎨 Spring Physics & Interaction Rules (`src/lib/springs.ts`)

All transitions utilize iOS spring physics rather than artificial duration curves:

- **General UI**: `damping: 32, stiffness: 280` (response 0.35s, critically damped, no bounce)
- **Repositioning / Move**: `damping: 35, stiffness: 240` (response 0.4s)
- **iOS Sheet / Drawer**: `damping: 28, stiffness: 340` (response 0.3s, rubber-banding elastic: `0.55`)
- **Flick & Throw**: `damping: 18, stiffness: 280` (settles with organic bounce)
- **Press & Hold**: `damping: 25, stiffness: 500` (~100ms scale to `0.97` on pointer-down)
- **Rotation**: `damping: 22, stiffness: 250` (damping 0.8, response 0.4s)

---

## ✏️ How to Edit Content

1. **Personal Information, Links & Bio**:
   - `src/components/Hero.tsx` — Headline, tagline, terminal commands, iMessage dialogue.
   - `src/components/Navbar.tsx` — Logo text and navigation targets.
   - `src/components/Contact.tsx` — Social URLs (GitHub, LinkedIn, Email).

2. **Key Statistics**:
   - `src/components/StatCards.tsx` — Array of numbers and labels.

3. **Projects & Case Studies**:
   - `src/components/Projects.tsx` — Add, remove, or modify `projects` entries (title, tagline, stack, Problem / Fix narrative, and links).

4. **Experience & Education**:
   - `src/components/Experience.tsx` — Update timeline items and role tags.

5. **Resume**:
   - Placed at `public/resume.pdf`. Replace with your latest PDF file anytime.
