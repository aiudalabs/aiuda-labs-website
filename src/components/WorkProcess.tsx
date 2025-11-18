'use client';

import { useTranslations } from 'next-intl';
import { MessageSquare, Target, Rocket, BarChart } from 'lucide-react';

export default function WorkProcess() {
  const t = useTranslations('process');

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      color: '#1E3A8A', // Blue
    },
    {
      icon: Target,
      number: '02',
      color: '#7C3AED', // Purple
    },
    {
      icon: Rocket,
      number: '03',
      color: '#FB923C', // Orange
    },
    {
      icon: BarChart,
      number: '04',
      color: '#059669', // Green
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
                )}

                <div className="relative z-10">
                  {/* Icon circle */}
                  <div
                    className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Step number */}
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-gray-200">
                      {step.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t(`steps.${index}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
