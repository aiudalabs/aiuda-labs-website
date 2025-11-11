'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Lightbulb,
  Cloud,
  Brain,
  Shield,
  Cog,
  ClipboardList,
  GitBranch,
  Database,
  Sparkles,
  Cpu,
  Workflow,
  FileCode,
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { colors } from '@/lib/colors';

type ServiceLayer = 'all' | 'strategic' | 'core' | 'delivery' | 'specialized';

interface ServiceFeature {
  title: string;
  description: string;
  aiEnhanced?: boolean;
}

export default function ServiceArchitecture() {
  const [activeLayer, setActiveLayer] = useState<ServiceLayer>('all');
  const t = useTranslations('services');

  const layers = [
    { id: 'all' as ServiceLayer, label: t('layers.all'), color: colors.neutral.gray700 },
    { id: 'strategic' as ServiceLayer, label: t('layers.strategic'), color: colors.ai.primary },
    { id: 'core' as ServiceLayer, label: t('layers.core'), color: colors.it.primary },
    { id: 'delivery' as ServiceLayer, label: t('layers.delivery'), color: colors.ayuda.primary },
    { id: 'specialized' as ServiceLayer, label: t('layers.specialized'), color: colors.ml.primary },
  ];

  const shouldShow = (layer: ServiceLayer) => {
    return activeLayer === 'all' || activeLayer === layer;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Layer Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${activeLayer === layer.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }
              `}
              style={{
                backgroundColor: activeLayer === layer.id ? layer.color : undefined,
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* LAYER 1: Strategic & Advisory */}
        {shouldShow('strategic') && (
          <div className="mb-16 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${colors.ai.primary}20` }}>
                <span className="text-xl font-bold" style={{ color: colors.ai.primary }}>1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t('strategic.title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={Lightbulb}
                title={t('strategic.digitalTransformation.title')}
                description={t('strategic.digitalTransformation.description')}
                features={t.raw('strategic.digitalTransformation.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('strategic.digitalTransformation.helpText')}
                enterpriseFocused
              />
              <ServiceCard
                icon={Brain}
                title={t('strategic.technologyStrategy.title')}
                description={t('strategic.technologyStrategy.description')}
                features={t.raw('strategic.technologyStrategy.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('strategic.technologyStrategy.helpText')}
              />
              <ServiceCard
                icon={Sparkles}
                title={t('strategic.aiReadiness.title')}
                description={t('strategic.aiReadiness.description')}
                features={t.raw('strategic.aiReadiness.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('strategic.aiReadiness.helpText')}
              />
            </div>
          </div>
        )}

        {/* LAYER 2: Core Technology Domains */}
        {shouldShow('core') && (
          <div className="mb-16 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${colors.it.primary}20` }}>
                <span className="text-xl font-bold" style={{ color: colors.it.primary }}>2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t('core.title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Cloud & Infrastructure */}
              <ServiceCard
                icon={Cloud}
                title={t('core.cloudInfrastructure.title')}
                description={t('core.cloudInfrastructure.description')}
                features={t.raw('core.cloudInfrastructure.features') as ServiceFeature[]}
                color={colors.it.primary}
                gradient={`linear-gradient(135deg, ${colors.it.primary} 0%, ${colors.ml.primary} 100%)`}
                helpText={t('core.cloudInfrastructure.helpText')}
              />

              {/* Data & AI */}
              <ServiceCard
                icon={Brain}
                title={t('core.dataAI.title')}
                description={t('core.dataAI.description')}
                features={t.raw('core.dataAI.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('core.dataAI.helpText')}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Security & Compliance */}
              <ServiceCard
                icon={Shield}
                title={t('core.securityCompliance.title')}
                description={t('core.securityCompliance.description')}
                features={t.raw('core.securityCompliance.features') as ServiceFeature[]}
                color={colors.security.primary}
                helpText={t('core.securityCompliance.helpText')}
                enterpriseFocused
              />

              {/* Platform Engineering */}
              <ServiceCard
                icon={Cog}
                title={t('core.platformEngineering.title')}
                description={t('core.platformEngineering.description')}
                features={t.raw('core.platformEngineering.features') as ServiceFeature[]}
                color={colors.ayuda.primary}
                helpText={t('core.platformEngineering.helpText')}
              />
            </div>
          </div>
        )}

        {/* LAYER 3: Delivery & Operations */}
        {shouldShow('delivery') && (
          <div className="mb-16 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${colors.ayuda.primary}20` }}>
                <span className="text-xl font-bold" style={{ color: colors.ayuda.primary }}>3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t('delivery.title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={ClipboardList}
                title={t('delivery.projectManagement.title')}
                description={t('delivery.projectManagement.description')}
                features={t.raw('delivery.projectManagement.features') as ServiceFeature[]}
                color={colors.ayuda.primary}
                helpText={t('delivery.projectManagement.helpText')}
              />
              <ServiceCard
                icon={GitBranch}
                title={t('delivery.devops.title')}
                description={t('delivery.devops.description')}
                features={t.raw('delivery.devops.features') as ServiceFeature[]}
                color={colors.ayuda.primary}
                helpText={t('delivery.devops.helpText')}
              />
              <ServiceCard
                icon={Database}
                title={t('delivery.dba.title')}
                description={t('delivery.dba.description')}
                features={t.raw('delivery.dba.features') as ServiceFeature[]}
                color={colors.data.primary}
                helpText={t('delivery.dba.helpText')}
              />
              <ServiceCard
                icon={Cog}
                title={t('delivery.managedServices.title')}
                description={t('delivery.managedServices.description')}
                features={t.raw('delivery.managedServices.features') as ServiceFeature[]}
                color={colors.ayuda.primary}
                helpText={t('delivery.managedServices.helpText')}
                enterpriseFocused
              />
            </div>
          </div>
        )}

        {/* LAYER 4: Specialized / Emerging */}
        {shouldShow('specialized') && (
          <div className="mb-16 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: `${colors.ml.primary}20` }}>
                <span className="text-xl font-bold" style={{ color: colors.ml.primary }}>4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t('specialized.title')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={Sparkles}
                title={t('specialized.generativeAI.title')}
                description={t('specialized.generativeAI.description')}
                features={t.raw('specialized.generativeAI.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('specialized.generativeAI.helpText')}
              />
              <ServiceCard
                icon={Cpu}
                title={t('specialized.agenticAI.title')}
                description={t('specialized.agenticAI.description')}
                features={t.raw('specialized.agenticAI.features') as ServiceFeature[]}
                color={colors.ml.primary}
                helpText={t('specialized.agenticAI.helpText')}
              />
              <ServiceCard
                icon={Workflow}
                title={t('specialized.processAutomation.title')}
                description={t('specialized.processAutomation.description')}
                features={t.raw('specialized.processAutomation.features') as ServiceFeature[]}
                color={colors.ml.primary}
                helpText={t('specialized.processAutomation.helpText')}
                startupFocused
              />
              <ServiceCard
                icon={FileCode}
                title={t('specialized.customAI.title')}
                description={t('specialized.customAI.description')}
                features={t.raw('specialized.customAI.features') as ServiceFeature[]}
                color={colors.ai.primary}
                helpText={t('specialized.customAI.helpText')}
              />
            </div>
          </div>
        )}

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-orange-900 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
