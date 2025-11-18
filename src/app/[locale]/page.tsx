import { getTranslations } from 'next-intl/server';
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ProfilesGrid from '@/components/ProfilesGrid';
import TechStack from '@/components/TechStack';
import WorkProcess from '@/components/WorkProcess';

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'pt' }
  ];
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <Navigation />

      {/* Hero Section - Simplified like Jobsity */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                {t('hero.cta.primary')}
              </a>
              <a
                href="#profiles"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Profiles - Available roles for Staff Augmentation */}
      <ProfilesGrid />

      {/* Tech Stack */}
      <TechStack />

      {/* Work Process - 4 steps */}
      <WorkProcess />

      {/* About Section - Simplified */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="max-w-2xl mx-auto space-y-6 bg-gray-50 p-8 rounded-2xl"
          >
            <input type="hidden" name="_to" value="info@aiudalabs.com" />
            <input type="hidden" name="_subject" value="New contact from Aiuda Labs website" />
            <input type="hidden" name="_next" value="https://aiudalabs.com/thank-you" />

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder={t('contact.form.company')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea
                rows={5}
                name="message"
                placeholder={t('contact.form.message')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              {t('contact.form.submit')}
            </button>
          </form>

          {/* Contact Info Below Form */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:info@aiudalabs.com" className="hover:text-blue-600">
                  info@aiudalabs.com
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+17863834947" className="hover:text-blue-600">
                  +1 786-383-4947
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <a href="https://wa.me/50763644604" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/aiudalabs_white.png"
                alt="Aiuda Labs"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg">Aiuda Labs</span>
            </div>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#services" className="hover:text-white transition-colors">{t('footer.services')}</a>
              <a href="#about" className="hover:text-white transition-colors">{t('navigation.about')}</a>
              <Link href="/blog" className="hover:text-white transition-colors">{t('navigation.blog')}</Link>
              <a href="#contact" className="hover:text-white transition-colors">{t('navigation.contact')}</a>
            </div>

            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aiudalabs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Aiuda Labs. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
