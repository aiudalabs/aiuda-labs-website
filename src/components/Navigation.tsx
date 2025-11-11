'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = useTranslations('navigation');
  const currentLocale = useLocale();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    setShowLangMenu(false);

    // For static export, use direct navigation
    if (typeof window !== 'undefined') {
      // Get the current path without locale prefix
      const pathWithoutLocale = pathname;

      // Build new URL with new locale
      const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

      // Navigate to new locale
      window.location.href = newPath;
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/aiudalabs_black.png" 
              alt="Aiuda Labs" 
              width={48} 
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="font-bold text-xl text-gray-900 font-sans">Aiuda Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('services')}
            </Link>
            <Link 
              href="/#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('about')}
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('blog', { default: 'Blog' })}
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('contact')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {locales.find(l => l.code === currentLocale)?.flag}
                </span>
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => handleLanguageChange(locale.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2 ${
                        currentLocale === locale.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{locale.flag}</span>
                      <span>{locale.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                href="/#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('services')}
              </Link>
              <Link 
                href="/#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('blog', { default: 'Blog' })}
              </Link>
              <Link 
                href="/#contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('contact')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Language</span>
                </div>
                <div className="space-y-1">
                  {locales.map((locale) => (
                    <button
                      key={locale.code}
                      onClick={() => {
                        handleLanguageChange(locale.code);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-2 py-1 text-sm rounded flex items-center space-x-2 ${
                        currentLocale === locale.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{locale.flag}</span>
                      <span>{locale.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}