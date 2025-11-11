'use client';

import { useTranslations } from 'next-intl';
import { Lightbulb, Target, Globe2, Heart } from 'lucide-react';
import { colors } from '@/lib/colors';

export default function BrandStory() {
  const t = useTranslations('brandStory');

  const storyParts = [
    {
      icon: Lightbulb,
      color: colors.ai.primary,
      titleKey: 'foundingInsight.title',
      contentKey: 'foundingInsight.content',
      accentKey: 'foundingInsight.accent',
    },
    {
      icon: Target,
      color: colors.ayuda.primary,
      titleKey: 'missionEvolution.title',
      contentKey: 'missionEvolution.content',
      accentKey: 'missionEvolution.accent',
    },
    {
      icon: Globe2,
      color: colors.security.primary,
      titleKey: 'regionalCommitment.title',
      contentKey: 'regionalCommitment.content',
      accentKey: 'regionalCommitment.accent',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with AI + Ayuda Explanation */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              <span className="text-5xl font-bold" style={{ color: colors.ai.primary }}>
                AI
              </span>
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-5xl font-bold" style={{ color: colors.ayuda.primary }}>
                uda
              </span>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('header.title')}
          </h2>

          <p className="text-xl text-gray-600 mb-4">
            {t('header.subtitle')}
          </p>

          <div className="bg-gradient-to-r from-purple-50 via-orange-50 to-purple-50 p-6 rounded-2xl border-2 border-dashed border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold" style={{ color: colors.ai.primary }}>AI</span>
              {' + '}
              <span className="font-bold" style={{ color: colors.ayuda.primary }}>Ayuda</span>
              {' '}
              <span className="text-gray-600">(help in Spanish)</span>
              {' = '}
              <span className="font-semibold text-gray-900">{t('header.equation')}</span>
            </p>
          </div>
        </div>

        {/* Three-Part Story */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {storyParts.map((part, index) => {
            const Icon = part.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="p-4 rounded-full"
                    style={{ backgroundColor: `${part.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: part.color }} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t(part.titleKey)}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {t(part.contentKey)}
                </p>

                <div
                  className="mt-4 p-4 rounded-lg"
                  style={{ backgroundColor: `${part.color}10` }}
                >
                  <p className="text-sm font-semibold" style={{ color: part.color }}>
                    {t(part.accentKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-12 rounded-3xl shadow-2xl">
            <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
              &ldquo;{t('mission.quote')}&rdquo;
            </blockquote>
            <p className="text-blue-200 mt-4 text-lg">
              {t('mission.tagline')}
            </p>
          </div>
        </div>

        {/* Stats / Impact */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {(t.raw('stats') as Array<{number: string, label: string, color: string}>).map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color === 'ai' ? colors.ai.primary :
                               stat.color === 'ayuda' ? colors.ayuda.primary :
                               stat.color === 'security' ? colors.security.primary :
                               colors.it.primary }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
