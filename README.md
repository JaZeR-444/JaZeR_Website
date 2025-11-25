# JaZeR Website - Next.js 15 + Contentful

This is the modern Next.js 15 (App Router) version of the JaZeR website, converted from the original static HTML/CSS/JS site.

## Features

- **Next.js 15** with App Router
- **Contentful CMS** integration (ready for setup)
- **Tailwind CSS** with custom JaZeR brand colors
- **Responsive design** with mobile navigation
- **SEO optimized** with metadata and sitemaps
- **Contact form** with Formspree integration
- **TypeScript** for type safety

## Project Structure

```
my-website/
├── src/
│   ├── app/
│   │   ├── (site)/           # Main site routes
│   │   │   ├── layout.tsx    # Site layout with header/footer
│   │   │   ├── page.tsx      # Home page
│   │   │   ├── about/
│   │   │   ├── music/
│   │   │   ├── videos/
│   │   │   ├── shop/
│   │   │   ├── contact/
│   │   │   └── legal/
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ContactForm.tsx
│   └── public/
│       └── images/           # Static images
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── .env.example
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Contentful CMS:**
   - Follow the detailed setup guide in `CONTENTFUL_SETUP.md`
   - Create your Contentful space and get API credentials
   - Set up environment variables in `.env.local`

3. **Test Contentful connection:**
   ```bash
   npm run test-contentful
   ```

4. **Migrate sample content:**
   ```bash
   npm run migrate-content
   ```

5. **Generate TypeScript types:**
   ```bash
   npm run generate-types
   ```

4. **Migrate content to Contentful:**
   ```bash
   # Edit scripts/sample-content.ts with your actual content
   # Then run the migration
   npm run migrate-content
   ```

5. **Upload images to Contentful:**
   - Go to Contentful Media section
   - Upload images from the original `../images/` folder
   - Link images to the migrated content entries

6. **Generate TypeScript types:**
   ```bash
   npm run generate-types
   ```

7. **Run development server:**
   ```bash
   npm run dev
   ```

8. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## Contentful Content Models

### 1. Music Release
- **Title** (Short text) - Required
- **Slug** (Short text) - Required, unique
- **Release Type** (Dropdown: single, ep, album) - Required
- **Release Date** (Date & time) - Required
- **Genre** (Short text, multiple) - Required
- **Description** (Rich text) - Optional
- **Cover Art** (Media) - Required
- **Streaming Links** (JSON Object) - Optional
- **Featured** (Boolean) - Optional

### 2. Video
- **Title** (Short text) - Required
- **Slug** (Short text) - Required, unique
- **Video Type** (Dropdown: music_video, behind_the_scenes, live, other) - Required
- **Description** (Rich text) - Optional
- **YouTube ID** (Short text) - Optional
- **Vimeo ID** (Short text) - Optional
- **Thumbnail** (Media) - Required
- **Release Date** (Date & time) - Required
- **Featured** (Boolean) - Optional

### 3. Blog Post
- **Title** (Short text) - Required
- **Slug** (Short text) - Required, unique
- **Excerpt** (Short text) - Required
- **Content** (Rich text) - Required
- **Author** (Short text) - Required
- **Publish Date** (Date & time) - Required
- **Featured Image** (Media) - Optional
- **Tags** (Short text, multiple) - Optional
- **SEO Title** (Short text) - Optional
- **SEO Description** (Short text) - Optional

### 4. Page
- **Title** (Short text) - Required
- **Slug** (Short text) - Required, unique
- **Content** (Rich text) - Required
- **SEO Title** (Short text) - Optional
- **SEO Description** (Short text) - Optional
- **Featured Image** (Media) - Optional

### 5. Shop Item
- **Name** (Short text) - Required
- **Slug** (Short text) - Required, unique
- **Description** (Rich text) - Required
- **Price** (Decimal) - Required
- **Currency** (Short text) - Required
- **Images** (Media, multiple) - Required
- **Category** (Short text) - Required
- **In Stock** (Boolean) - Required
- **Featured** (Boolean) - Optional
- **External URL** (Short text) - Optional

## Contentful Setup

Create the following content models in Contentful:

- **Page**: For static pages (About, etc.)
- **Music Release**: For tracks, albums, EPs
- **Video**: For music videos and content
- **Blog Post**: For articles and updates

## Brand Colors

The design uses JaZeR's brand palette:
- Primary: `#8B5CF6` (Electric Purple)
- Secondary: `#3B82F6` (Cosmic Blue)
- Accent: `#EC4899` (Neon Pink)
- Dark: `#0B0E12` (Night Black)
- Card: `#1F2937` (Graphite)

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js 15.

## Content Migration

The migration process imports your existing content into Contentful:

1. **Edit Sample Content:**
   - Open `scripts/sample-content.ts`
   - Replace placeholder content with your actual:
     - Music releases (titles, descriptions, streaming links)
     - Videos (YouTube IDs, descriptions)
     - About page content
     - Shop items

2. **Run Migration:**
   ```bash
   npm run migrate-content
   ```

3. **Upload Media:**
   - Upload album art, video thumbnails, and product images to Contentful
   - Link images to the created entries

4. **Update Links:**
   - Replace placeholder streaming URLs with real ones
   - Update YouTube video IDs
   - Add actual product purchase links

## Next Steps

- Set up Contentful content models (already done)
- Migrate content from the original site (migration script ready)
- Add streaming platform embeds (update sample-content.ts)
- Implement blog functionality (content model ready)
- Add e-commerce integration for shop (external URLs supported)

## Original Site

The original static site is preserved in the `../files/index.html` and related assets.
