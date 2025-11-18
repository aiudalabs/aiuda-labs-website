'use client';

import { useTranslations } from 'next-intl';

export default function TechStack() {
  const t = useTranslations('techStack');

  const technologies = [
    { name: 'Python', category: 'languages' },
    { name: 'Node.js', category: 'languages' },
    { name: 'TypeScript', category: 'languages' },
    { name: 'Java', category: 'languages' },
    { name: 'React', category: 'frameworks' },
    { name: 'Next.js', category: 'frameworks' },
    { name: 'TensorFlow', category: 'ai' },
    { name: 'PyTorch', category: 'ai' },
    { name: 'OpenAI', category: 'ai' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Azure', category: 'cloud' },
    { name: 'GCP', category: 'cloud' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'PostgreSQL', category: 'databases' },
    { name: 'MongoDB', category: 'databases' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center"
            >
              <span className="text-sm font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
