'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Zap, Shield, CheckCircle } from 'lucide-react';
import { audienceColors } from '@/lib/colors';

type Audience = 'startup' | 'enterprise';

interface DualValuePropProps {
  className?: string;
}

export default function DualValueProp({ className = '' }: DualValuePropProps) {
  const [selectedAudience, setSelectedAudience] = useState<Audience>('startup');
  const t = useTranslations('valueProp');

  const audiences = [
    {
      id: 'startup' as Audience,
      icon: Zap,
      label: t('startup.label'),
    },
    {
      id: 'enterprise' as Audience,
      icon: Shield,
      label: t('enterprise.label'),
    },
  ];

  const currentColor = selectedAudience === 'startup'
    ? audienceColors.startup.primary
    : audienceColors.enterprise.primary;

  return (
    <div className={`${className}`}>
      {/* Audience Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          {audiences.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSelectedAudience(id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${selectedAudience === id
                  ? 'bg-white shadow-md text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
              style={{
                color: selectedAudience === id ? currentColor : undefined,
              }}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Value Proposition Content */}
      <div className="max-w-4xl mx-auto">
        {selectedAudience === 'startup' ? (
          <div className="text-center animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('startup.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('startup.subtitle')}
            </p>

            {/* Startup Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {(t.raw('startup.features') as Array<{title: string, description: string}>).map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                  <div className="flex justify-center mb-3">
                    <CheckCircle className="w-8 h-8" style={{ color: audienceColors.startup.primary }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Startup CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: audienceColors.startup.primary }}
              >
                {t('startup.cta')}
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('enterprise.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('enterprise.subtitle')}
            </p>

            {/* Enterprise Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {(t.raw('enterprise.features') as Array<{title: string, description: string}>).map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <div className="flex justify-center mb-3">
                    <CheckCircle className="w-8 h-8" style={{ color: audienceColors.enterprise.primary }} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: audienceColors.enterprise.primary }}
              >
                {t('enterprise.cta')}
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
