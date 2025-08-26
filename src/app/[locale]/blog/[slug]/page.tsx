import { getBlogPost, getBlogPosts } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts and locales
export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    const locales = ['en', 'es', 'pt'];
    
    const params = [];
    for (const locale of locales) {
      for (const post of posts) {
        params.push({
          locale,
          slug: post.fields.slug,
        });
      }
    }
    
    return params;
  } catch (error) {
    console.error('Error fetching blog posts for static generation:', error);
    return [];
  }
}

// Rich text rendering options
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <ul className="mb-6 space-y-2 list-disc list-inside text-gray-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <ol className="mb-6 space-y-2 list-decimal list-inside text-gray-700">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-600 bg-gray-50 py-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
      const asset = node.data.target as any; // eslint-disable-line @typescript-eslint/no-explicit-any
      const { file, title } = asset.fields;
      const imageUrl = `https:${file.url}`;
      
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={title || 'Blog image'}
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
      );
    },
  },
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <article>
            {/* Header */}
            <header className="mb-8">
              {/* Tags */}
              {post.fields.tags && post.fields.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.fields.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.fields.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.fields.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.fields.publishedDate)}</span>
                </div>
              </div>

              {/* Featured Image */}
              {post.fields.featuredImage && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={`https:${(post.fields.featuredImage as any).fields.file.url}`} // eslint-disable-line @typescript-eslint/no-explicit-any
                    alt={(post.fields.featuredImage as any).fields.title || post.fields.title} // eslint-disable-line @typescript-eslint/no-explicit-any
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Excerpt */}
              <div className="text-xl text-gray-600 leading-relaxed mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-l-4 border-gradient-to-b from-blue-500 to-purple-500">
                {post.fields.excerpt}
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {documentToReactComponents(post.fields.content, richTextOptions)}
            </div>
          </article>

          {/* Back to Blog Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}