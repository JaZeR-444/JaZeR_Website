// Contentful content models for JaZeR website
// These are the TypeScript types that will be generated from Contentful

export interface Page {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: any; // Rich text
    seoTitle?: string;
    seoDescription?: string;
    featuredImage?: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    };
  };
}

export interface MusicRelease {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    releaseType: 'single' | 'ep' | 'album';
    releaseDate: string;
    genre: string[];
    description?: any; // Rich text
    coverArt: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    };
    streamingLinks?: {
      spotify?: string;
      appleMusic?: string;
      youtube?: string;
      soundcloud?: string;
    };
    featured: boolean;
  };
}

export interface Video {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    videoType: 'music_video' | 'behind_the_scenes' | 'live' | 'other';
    description?: any; // Rich text
    youtubeId?: string;
    vimeoId?: string;
    thumbnail: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    };
    releaseDate: string;
    featured: boolean;
  };
}

export interface BlogPost {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: any; // Rich text
    author: string;
    publishDate: string;
    featuredImage?: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    };
    tags?: string[];
    seoTitle?: string;
    seoDescription?: string;
  };
}

export interface ShopItem {
  sys: {
    id: string;
    type: 'Entry';
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    name: string;
    slug: string;
    description: any; // Rich text
    price: number;
    currency: string;
    images: Array<{
      sys: {
        id: string;
        type: 'Link';
        linkType: 'Asset';
      };
    }>;
    category: string;
    inStock: boolean;
    featured: boolean;
    externalUrl?: string; // For linking to external stores
  };
}