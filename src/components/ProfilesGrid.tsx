'use client';

import { useTranslations } from 'next-intl';
import {
  Users,
  Code,
  FileSearch,
  TestTube,
  BarChart3,
  Database,
  Server,
  Brain,
} from 'lucide-react';

export default function ProfilesGrid() {
  const t = useTranslations('profiles');

  const profiles = [
    {
      icon: Users,
      key: 'projectManager',
      color: '#1E3A8A', // Blue
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Code,
      key: 'softwareDeveloper',
      color: '#059669', // Green
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: FileSearch,
      key: 'businessAnalyst',
      color: '#0891B2', // Cyan
      gradient: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: TestTube,
      key: 'qaEngineer',
      color: '#FB923C', // Orange
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      icon: BarChart3,
      key: 'dataAnalyst',
      color: '#7C3AED', // Purple
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: Database,
      key: 'dataEngineer',
      color: '#8B5CF6', // Violet
      gradient: 'from-violet-500 to-violet-700',
    },
    {
      icon: Server,
      key: 'dba',
      color: '#DC2626', // Red
      gradient: 'from-red-500 to-red-700',
    },
    {
      icon: Brain,
      key: 'aiml',
      color: '#6366F1', // Indigo
      gradient: 'from-indigo-500 to-indigo-700',
    },
  ];

  return (
    <section id="profiles" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:scale-105"
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Profile content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`${profile.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(`${profile.key}.description`)}
                </p>

                {/* Key skills */}
                <ul className="space-y-2">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start text-xs text-gray-500">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2"
                        style={{ backgroundColor: profile.color }}
                      />
                      {t(`${profile.key}.skills.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
