'use client';

import { LucideIcon } from 'lucide-react';
import { colors } from '@/lib/colors';

interface ServiceFeature {
  title: string;
  description: string;
  aiEnhanced?: boolean;
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
  color: string;
  gradient?: string;
  helpText?: string; // "How does this help (ayuda)?"
  startupFocused?: boolean;
  enterpriseFocused?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  color,
  gradient,
  helpText,
  startupFocused = false,
  enterpriseFocused = false,
}: ServiceCardProps) {
  const bgGradient = gradient || `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`;

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: bgGradient }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="p-3 rounded-xl transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="w-7 h-7" style={{ color }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              {title}
            </h3>
          </div>

          {/* Audience Badge */}
          {(startupFocused || enterpriseFocused) && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: startupFocused ? `${colors.ml.primary}20` : `${colors.it.primary}20`,
                color: startupFocused ? colors.ml.primary : colors.it.primary,
              }}
            >
              {startupFocused ? 'Startup-Optimized' : 'Enterprise-Ready'}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <div className="flex-1">
                <span className="text-gray-800 font-medium">{feature.title}</span>
                {feature.description && (
                  <p className="text-sm text-gray-500 mt-0.5">{feature.description}</p>
                )}
                {feature.aiEnhanced && (
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-1 px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${colors.ai.primary}15`,
                      color: colors.ai.primary,
                    }}
                  >
                    ✨ AI-Enhanced
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Help Text - "How does this ayuda?" */}
        {helpText && (
          <div
            className="mt-6 p-4 rounded-lg border-l-4"
            style={{
              backgroundColor: `${colors.ayuda.primary}08`,
              borderColor: colors.ayuda.primary,
            }}
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold" style={{ color: colors.ayuda.primary }}>
                How this helps (ayuda):{' '}
              </span>
              {helpText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
