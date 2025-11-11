import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'pt' }
  ];
}

export default async function ThankYouPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'thankYou' });
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-600 mb-6">
            {t('message')}
          </p>
          <Link 
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            {t('backHome')}
          </Link>
        </div>
      </div>
    </>
  );
}