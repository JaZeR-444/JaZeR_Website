# Complete Folder Structure - JaZeR Website

```
my-website/
│
├── 📄 Configuration Files
│   ├── .env.example                    # Environment variables template
│   ├── .eslintrc.js                    # ESLint configuration (legacy)
│   ├── .gitignore                      # Git ignore rules
│   ├── eslint.config.mjs               # ESLint configuration (modern)
│   ├── next.config.mjs                 # Next.js config (ESM)
│   ├── next.config.ts                  # Next.js config (TypeScript)
│   ├── next-env.d.ts                   # Next.js TypeScript declarations
│   ├── package.json                    # Dependencies and scripts
│   ├── postcss.config.js               # PostCSS config
│   ├── postcss.config.mjs              # PostCSS config (ESM)
│   ├── tailwind.config.ts              # Tailwind CSS configuration
│   └── tsconfig.json                   # TypeScript configuration
│
├── 📚 Documentation
│   ├── README.md                       # Project overview
│   ├── MIGRATION_COMPLETE.md           # Migration completion notes
│   ├── CONTENTFUL_SETUP.md             # CMS setup guide
│   ├── CONTENT_OPTIONS.md              # Content management options
│   └── STEP1_GUIDE.md                  # Getting started guide
│
├── 📁 node_modules/                    # Dependencies (auto-generated)
│   ├── .bin/                           # Binary executables
│   ├── next/                           # Next.js framework
│   ├── react/                          # React library
│   ├── tailwindcss/                    # Tailwind CSS
│   ├── contentful/                     # Contentful CMS SDK
│   └── [1000+ other packages]          # All npm dependencies
│
├── 🎨 public/                          # Static assets (served at root)
│   ├── favicon.svg                     # Site favicon
│   ├── file.svg                        # Icon asset
│   ├── globe.svg                       # Icon asset
│   ├── next.svg                        # Next.js logo
│   ├── vercel.svg                      # Vercel logo
│   ├── window.svg                      # Icon asset
│   │
│   └── images/                         # Image assets
│       ├── JaZeR Main Logo.jpg         # Main brand logo
│       ├── JaZeR Mandala—PurBlue.jpg   # Brand image
│       ├── JaZeR_Logo_OFFICIAL.gif     # Animated logo
│       ├── Cloaked God Mode Update.jpg # Brand artwork
│       ├── Exit 3—God Mode Update.jpg  # Brand artwork
│       ├── JellyOrchestra.jpg          # Brand artwork
│       ├── 2 Paths Divided.png         # Brand artwork
│       ├── Logo_Primary_Full-Color.png # Alternative logo
│       │
│       └── JaZeR BrandKit_OnSite/      # Complete brand kit
│           ├── 2 Paths Divided.png
│           ├── Cloaked God Mode Update.jpg
│           ├── Exit 3—God Mode Update.jpg
│           ├── JaZeR Mandala—PurBlue.jpg
│           ├── JellyOrchestra.jpg
│           ├── JaZeR_Logo_OFFICIAL.gif
│           ├── Logo_Primary_Full-Color.png
│           ├── Logo_Primary_Full-Color.svg
│           ├── favicon.svg
│           ├── JaZeR_Brand_Kit.pdf     # Brand guidelines PDF
│           │
│           └── 📄 Brand Documentation
│               ├── Brand Assets.md
│               ├── CSS variables for the palette.md
│               ├── Design tokens starter.md
│               ├── Gradient headline style.md
│               ├── JaZeR Brand Kit - Expanded Summary.md
│               ├── JaZeR Starting Brand Kit—ChatGPT.md
│               ├── JaZeR_Brand_Kit.md
│               └── Tailwind extension.md
│
├── 🔧 scripts/                         # Utility scripts
│   ├── generate-types.ts               # Generate TypeScript types from CMS
│   ├── migrate-content.ts              # Content migration script
│   ├── sample-content.ts               # Sample content generator
│   └── test-contentful.ts              # Test Contentful connection
│
└── 📂 src/                             # Source code
    │
    ├── 🌐 app/                         # Next.js App Router
    │   │
    │   ├── 📄 Root Files
    │   │   ├── layout.tsx              # Root layout (metadata, fonts, Schema.org)
    │   │   ├── page.tsx                # Root page (redirects to site)
    │   │   ├── globals.css             # Global styles
    │   │   ├── favicon.ico             # Favicon fallback
    │   │   ├── robots.ts               # Robots.txt generator
    │   │   └── sitemap.ts              # Sitemap.xml generator
    │   │
    │   ├── 🏠 (site)/                  # Main website pages
    │   │   ├── layout.tsx              # Site layout with header/footer
    │   │   ├── page.tsx                # Homepage
    │   │   │
    │   │   ├── about/                  # About page
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── music/                  # Music page
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── videos/                 # Videos page
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── shop/                   # Shop page
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── contact/                # Contact page
    │   │   │   └── page.tsx
    │   │   │
    │   │   └── legal/                  # Legal pages
    │   │       ├── privacy-policy/
    │   │       │   └── page.tsx
    │   │       └── terms/
    │   │           └── page.tsx
    │   │
    │   └── 🔌 api/                     # API routes
    │       ├── preview/                # CMS preview endpoints
    │       │   ├── enable/
    │       │   │   └── route.ts        # Enable preview mode
    │       │   └── disable/
    │       │       └── route.ts        # Disable preview mode
    │       │
    │       └── webhook/                # Webhook handlers
    │           └── contentful/
    │               └── route.ts        # Contentful webhook handler
    │
    ├── 🧩 components/                  # React components
    │   ├── ContactForm.tsx             # Contact form component
    │   │
    │   └── layout/                     # Layout components
    │       ├── Header.tsx              # Site header/navigation
    │       └── Footer.tsx              # Site footer
    │
    ├── 📚 lib/                         # Utility libraries
    │   ├── contentful.ts               # Contentful client setup
    │   │
    │   └── cms/                        # CMS utilities
    │       ├── preview.ts              # Preview mode helpers
    │       └── queries.ts              # CMS query functions
    │
    └── 🏷️ types/                       # TypeScript type definitions
        └── cms.d.ts                    # CMS type definitions
```

---

## 📊 File Count Summary

| Category | Count | Purpose |
|----------|-------|---------|
| **Pages** | 8 | Main website pages (home, about, music, videos, shop, contact, privacy, terms) |
| **Components** | 3 | Reusable UI components (Header, Footer, ContactForm) |
| **API Routes** | 3 | Backend endpoints (preview enable/disable, webhook) |
| **Scripts** | 4 | Utility scripts for CMS and content management |
| **Config Files** | 11 | Project configuration (Next.js, TypeScript, Tailwind, ESLint, etc.) |
| **Images** | 25+ | Brand assets, logos, and artwork |
| **Documentation** | 13+ | README, guides, and brand documentation |
| **Dependencies** | 1000+ | npm packages (in node_modules) |

---

## 🎯 Key Directories Explained

### `/src/app/`
Next.js App Router structure. Each folder represents a route:
- `(site)/` - Route group for main website (doesn't affect URL)
- Files named `page.tsx` become the page for that route
- Files named `layout.tsx` wrap all child pages
- `route.ts` files are API endpoints

### `/src/components/`
Reusable React components used across multiple pages.

### `/src/lib/`
Helper functions, utilities, and external service integrations (like Contentful CMS).

### `/public/`
Static files served directly. Files here are accessible at the root URL:
- `/favicon.svg` → `https://yourdomain.com/favicon.svg`
- `/images/logo.jpg` → `https://yourdomain.com/images/logo.jpg`

### `/scripts/`
Node.js scripts for development tasks (run with `npm run script-name`).

---

## 🚀 Important Files

### Core App Files
- **`src/app/layout.tsx`** - Root layout with SEO metadata, fonts, Schema.org
- **`src/app/(site)/layout.tsx`** - Site layout with header and footer
- **`src/app/globals.css`** - Global Tailwind CSS and custom styles

### Configuration
- **`package.json`** - Dependencies and npm scripts
- **`next.config.ts`** - Next.js framework configuration
- **`tailwind.config.ts`** - Tailwind CSS theme customization
- **`tsconfig.json`** - TypeScript compiler options

### Content Management
- **`src/lib/contentful.ts`** - Contentful CMS client
- **`src/lib/cms/queries.ts`** - Database-like queries for content
- **`.env.example`** - Template for environment variables

---

## 📝 Notes

1. **node_modules/** contains 1000+ packages - auto-generated, don't edit manually
2. **public/** is for static assets only - no processing, served as-is
3. **src/app/** uses Next.js 15 App Router conventions
4. All pages are server components by default (add `'use client'` for client components)
5. Images in brand kit folder are duplicated at root level for easier access

---

## 🔍 File Extensions

- `.tsx` - TypeScript + JSX (React components)
- `.ts` - TypeScript (logic, utilities, types)
- `.css` - Stylesheets
- `.mjs` - ES Module JavaScript
- `.js` - CommonJS JavaScript
- `.json` - Configuration data
- `.md` - Markdown documentation
- `.svg` - Scalable vector graphics

---

*Generated: November 2025*
*Project: JaZeR Official Website*
*Framework: Next.js 15 + TypeScript + Tailwind CSS*
