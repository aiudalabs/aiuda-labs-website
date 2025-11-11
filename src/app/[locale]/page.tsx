import { getTranslations } from 'next-intl/server';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  Cloud,
  Brain,
  Shield,
  Zap,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import DualValueProp from '@/components/DualValueProp';
import BrandStory from '@/components/BrandStory';
import ServiceArchitecture from '@/components/ServiceArchitecture';
import { colors } from '@/lib/colors';

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

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'OpenAI',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
    'PostgreSQL', 'MongoDB', 'Redis'
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section - Simplified */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* AI + Ayuda Logo/Tagline */}
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-purple-50 to-orange-50 rounded-full border border-purple-200">
              <span className="text-2xl font-bold" style={{ color: colors.ai.primary }}>
                AI
              </span>
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-2xl font-bold" style={{ color: colors.ayuda.primary }}>
                uda
              </span>
              <span className="text-sm text-gray-600 ml-2">
                = {t('hero.tagline', { default: 'AI that helps. Literally.' })}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t('hero.description')}
            </p>

            {/* Quick Value Props */}
            <div className="grid md:grid-cols-4 gap-4 mt-12 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <Cloud className="w-8 h-8 mx-auto mb-3" style={{ color: colors.it.primary }} />
                <h3 className="font-semibold text-gray-900 text-sm">Cloud & Infrastructure</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <Brain className="w-8 h-8 mx-auto mb-3" style={{ color: colors.ai.primary }} />
                <h3 className="font-semibold text-gray-900 text-sm">Data & AI</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <Shield className="w-8 h-8 mx-auto mb-3" style={{ color: colors.security.primary }} />
                <h3 className="font-semibold text-gray-900 text-sm">Security & Compliance</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <Zap className="w-8 h-8 mx-auto mb-3" style={{ color: colors.ayuda.primary }} />
                <h3 className="font-semibold text-gray-900 text-sm">Platform Engineering</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: colors.it.primary }}
              >
                {t('hero.cta.services')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 text-base font-semibold rounded-full bg-white transition-all hover:bg-gray-50"
                style={{ borderColor: colors.it.primary, color: colors.it.primary }}
              >
                {t('hero.cta.contact')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition - Toggle Startup/Enterprise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DualValueProp />
        </div>
      </section>

      {/* Brand Story - AI + Ayuda */}
      <BrandStory />

      {/* Service Architecture - 4 Layers */}
      <ServiceArchitecture />

      {/* About Section - Simplified */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                {t('about.lead')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('about.description')}
              </p>

              {/* Partnership Model CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t('about.partnership.title', { default: 'Flexible Partnership Models' })}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.ml.primary }} />
                    <span>{t('about.partnership.staffAug', { default: 'Staff Augmentation for Startups' })}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.it.primary }} />
                    <span>{t('about.partnership.managed', { default: 'Managed Services for Enterprises' })}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.ayuda.primary }} />
                    <span>{t('about.partnership.strategic', { default: 'Strategic Partnerships for Both' })}</span>
                  </li>
                </ul>
              </div>

              {/* LATAM Commitment */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {t('about.latam.title', { default: 'Serving Clients Across LATAM' })}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('about.latam.description', {
                    default: 'Bilingual teams with deep understanding of Latin American business context, cultural nuances, and regulatory requirements including LGPD and regional compliance standards.'
                  })}
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              {/* Tech Stack */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('about.techStack.title')}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-2 rounded-lg text-center text-sm text-gray-800 font-medium hover:shadow-md transition-shadow"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud Partners Placeholder */}
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-white mb-4">
                  {t('about.partners.title', { default: 'Technology Partners' })}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">AWS</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Microsoft Azure</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Google Cloud</span>
                  </div>
                </div>
                <p className="text-blue-200 text-xs mt-4 text-center">
                  {t('about.partners.note', { default: 'Certified partners delivering enterprise-grade solutions' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${colors.it.primary}20` }}
                >
                  <Mail className="w-6 h-6" style={{ color: colors.it.primary }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.email')}
                  </h3>
                  <a
                    href="mailto:info@aiudalabs.com"
                    className="hover:underline transition-colors"
                    style={{ color: colors.it.primary }}
                  >
                    info@aiudalabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${colors.it.primary}20` }}
                >
                  <Phone className="w-6 h-6" style={{ color: colors.it.primary }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.phone')}
                  </h3>
                  <a
                    href="tel:+17863834947"
                    className="hover:underline transition-colors"
                    style={{ color: colors.it.primary }}
                  >
                    +1 786-383-4947
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${colors.security.primary}20` }}
                >
                  <MessageCircle className="w-6 h-6" style={{ color: colors.security.primary }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.whatsapp')}
                  </h3>
                  <a
                    href="https://wa.me/50763644604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                    style={{ color: colors.security.primary }}
                  >
                    +507 6364-4604
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${colors.it.primary}20` }}
                >
                  <MapPin className="w-6 h-6" style={{ color: colors.it.primary }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t('contact.info.location')}
                  </h3>
                  <div className="text-gray-600">
                    <div>7901 4TH ST N STE 300</div>
                    <div>ST. PETERSBURG, FL 33702</div>
                  </div>
                </div>
              </div>

              {/* Partnership CTA */}
              <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: `${colors.ayuda.primary}10`, borderLeft: `4px solid ${colors.ayuda.primary}` }}>
                <h3 className="font-bold text-gray-900 mb-2">
                  {t('contact.partnership.title', { default: 'Let\'s Build a Partnership' })}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('contact.partnership.description', {
                    default: 'We believe in long-term strategic partnerships (acompañamiento), not one-off projects. Let\'s discuss how we can help your business grow.'
                  })}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="mt-12 lg:mt-0 space-y-6 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <input type="hidden" name="_to" value="info@aiudalabs.com" />
              <input type="hidden" name="_subject" value="New contact from Aiuda Labs website" />
              <input type="hidden" name="_next" value="https://aiudalabs.com/thank-you" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.form.name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.form.email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder={t('contact.form.company')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <select
                  name="company_size"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-gray-700"
                >
                  <option value="">{t('contact.form.companySize', { default: 'Company Size' })}</option>
                  <option value="startup">Startup (1-50)</option>
                  <option value="sme">SME (51-500)</option>
                  <option value="enterprise">Enterprise (500+)</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder={t('contact.form.message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105"
                style={{ backgroundColor: colors.it.primary }}
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/aiudalabs_white.png"
                  alt="Aiuda Labs"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <span className="font-bold text-xl font-sans">Aiuda Labs</span>
                  <p className="text-xs text-gray-400">AI that helps. Literally.</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
              <p className="text-sm text-gray-500">
                {t('footer.latam', { default: 'Serving clients across Mexico, Colombia, Argentina, Brazil, and Chile' })}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Cloud & Infrastructure</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Data & AI</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Security & Compliance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Platform Engineering</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Generative AI</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">{t('navigation.about')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('navigation.contact')}</a></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">{t('navigation.blog')}</Link></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-4">{t('footer.follow')}</h4>
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
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aiuda Labs. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
