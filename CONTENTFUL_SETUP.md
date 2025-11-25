# Contentful Setup Guide

## Step 1: Create Contentful Account & Space
1. Go to [contentful.com](https://www.contentful.com) and sign up for a free account
2. Create a new space called "JaZeR Website"
3. Choose "Community tier" (free) for now

## Step 2: Get Your API Credentials
1. In your Contentful space, go to **Settings** → **API keys**
2. Click **Add API key**
3. Name it "JaZeR Website API Key"
4. Copy these values:
   - **Space ID**: Found in Settings → General settings
   - **Content Delivery API - access token**: From the API key you just created
   - **Content Preview API - access token**: Also from the API key
   - **Content Management API - access token**: Click "Generate personal token" in the API keys section

## Step 3: Set Up Environment Variables
Create a `.env.local` file in your project root with:

```bash
# Contentful
CONTENTFUL_SPACE_ID=your_actual_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
CONTENTFUL_ENVIRONMENT=master

# Next.js
NEXT_PUBLIC_SITE_URL=https://jazeratx.com
```

## Step 4: Create Content Models
In your Contentful space, go to **Content model** and create these models:

### 1. Music Release
- **Title** (Short text, required)
- **Slug** (Short text, required, unique)
- **Release Type** (Dropdown: single, ep, album - required)
- **Release Date** (Date & time, required)
- **Genre** (Short text, multiple values, required)
- **Description** (Rich text, optional)
- **Cover Art** (Media, required)
- **Streaming Links** (JSON object, optional)
- **Featured** (Boolean, optional)

### 2. Video
- **Title** (Short text, required)
- **Slug** (Short text, required, unique)
- **Video Type** (Dropdown: music_video, behind_the_scenes, live, other - required)
- **Description** (Rich text, optional)
- **YouTube ID** (Short text, optional)
- **Vimeo ID** (Short text, optional)
- **Thumbnail** (Media, required)
- **Release Date** (Date & time, required)
- **Featured** (Boolean, optional)

### 3. Page
- **Title** (Short text, required)
- **Slug** (Short text, required, unique)
- **Content** (Rich text, required)
- **SEO Title** (Short text, optional)
- **SEO Description** (Short text, optional)
- **Featured Image** (Media, optional)

### 4. Shop Item
- **Name** (Short text, required)
- **Slug** (Short text, required, unique)
- **Description** (Rich text, required)
- **Price** (Decimal, required)
- **Currency** (Short text, required)
- **Images** (Media, multiple, required)
- **Category** (Short text, required)
- **In Stock** (Boolean, required)
- **Featured** (Boolean, optional)
- **External URL** (Short text, optional)

### 5. Blog Post (Optional)
- **Title** (Short text, required)
- **Slug** (Short text, required, unique)
- **Excerpt** (Short text, required)
- **Content** (Rich text, required)
- **Author** (Short text, required)
- **Publish Date** (Date & time, required)
- **Featured Image** (Media, optional)
- **Tags** (Short text, multiple, optional)
- **SEO Title** (Short text, optional)
- **SEO Description** (Short text, optional)

## Step 5: Test Connection
Test your Contentful setup before migrating:

```bash
cd my-website
npm install
npm run test-contentful
```

This will verify your credentials and check if content models exist.

## Step 6: Run Migration
Once everything is set up correctly:

```bash
npm run migrate-content
```

This will create sample content entries that you can then edit in Contentful.

## Step 6: Upload Images
After migration, upload your images to Contentful's Media section and link them to the entries.