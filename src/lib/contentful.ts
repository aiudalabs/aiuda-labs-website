import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    featuredImage?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    author: string;
    publishedDate: string;
    tags?: string[];
  };
}

// Helper function to create URL-friendly slugs
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
  });

  // Process entries to ensure valid slugs
  const processedEntries = entries.items.map(entry => ({
    ...entry,
    fields: {
      ...entry.fields,
      slug: entry.fields.slug && typeof entry.fields.slug === 'string' && entry.fields.slug.trim() !== ''
        ? createSlug(entry.fields.slug)
        : createSlug(entry.fields.title as string)
    }
  }));

  return processedEntries as unknown as BlogPost[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // First try to get all posts and find by processed slug
  const allPosts = await getBlogPosts();
  const post = allPosts.find(post => post.fields.slug === slug);
  
  if (post) {
    return post;
  }

  return null;
}

export default client;