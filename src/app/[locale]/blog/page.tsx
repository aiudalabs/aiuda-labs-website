import { getBlogPosts } from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'pt' }
  ];
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const posts = await getBlogPosts();

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
      <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and updates from the world of AI and data science
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.sys.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Featured Image */}
                {post.fields.featuredImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={`https:${(post.fields.featuredImage as any).fields.file.url}`} // eslint-disable-line @typescript-eslint/no-explicit-any
                      alt={(post.fields.featuredImage as any).fields.title || post.fields.title} // eslint-disable-line @typescript-eslint/no-explicit-any
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Tags */}
                  {post.fields.tags && post.fields.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.fields.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.fields.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.fields.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.fields.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.fields.publishedDate)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/${locale}/blog/${post.fields.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 font-medium transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No blog posts yet
                </h3>
                <p className="text-gray-600">
                  Stay tuned for our latest insights and updates!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}