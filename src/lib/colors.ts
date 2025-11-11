/**
 * Aiuda Labs Design System - Color Tokens
 * Based on Strategic Marketing Framework
 *
 * Color Strategy:
 * - Blues/Grays: Traditional IT (corporate, stable, reliable)
 * - Purples/Teals: AI/Innovation (forward-thinking, cutting-edge)
 * - Orange: Help/Integration (warm, human connection, "ayuda")
 * - Gradients: AI-enhanced hybrid services
 */

export const colors = {
  // Traditional IT / Stable Services
  it: {
    primary: '#1E3A8A',      // Deep Blue - Cloud & Infrastructure
    light: '#3B82F6',        // Lighter Blue
    lighter: '#DBEAFE',      // Very light blue for backgrounds
    dark: '#1E40AF',         // Darker blue for hover states
  },

  // Security & Compliance
  security: {
    primary: '#059669',      // Green - Trust, safety
    light: '#10B981',
    lighter: '#D1FAE5',
    dark: '#047857',
  },

  // AI / Innovation
  ai: {
    primary: '#7C3AED',      // Purple - AI, GenAI
    light: '#A78BFA',
    lighter: '#EDE9FE',
    dark: '#6D28D9',
  },

  // Machine Learning / Advanced AI
  ml: {
    primary: '#06B6D4',      // Teal - ML, advanced analytics
    light: '#22D3EE',
    lighter: '#CFFAFE',
    dark: '#0891B2',
  },

  // Integration / Help (Ayuda)
  ayuda: {
    primary: '#FB923C',      // Orange - Platform Engineering, Integration, Help
    light: '#FDBA74',
    lighter: '#FED7AA',
    dark: '#F97316',
  },

  // Data Services
  data: {
    primary: '#DB2777',      // Pink/Magenta - Data Engineering
    light: '#EC4899',
    lighter: '#FCE7F3',
    dark: '#BE185D',
  },

  // Neutral / Base
  neutral: {
    white: '#FFFFFF',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
    black: '#000000',
  },
} as const;

/**
 * Gradients for AI-Enhanced Services
 * Use these for services that combine traditional IT with AI capabilities
 */
export const gradients = {
  // Traditional IT → AI (Blue to Purple)
  aiEnhanced: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',

  // AI → Help/Integration (Purple to Orange)
  aiIntegration: 'linear-gradient(135deg, #7C3AED 0%, #FB923C 100%)',

  // Cloud → AI (Blue to Teal)
  cloudAI: 'linear-gradient(135deg, #1E3A8A 0%, #06B6D4 100%)',

  // Data → AI (Pink to Purple)
  dataAI: 'linear-gradient(135deg, #DB2777 0%, #7C3AED 100%)',

  // Full spectrum (showcasing integration)
  fullSpectrum: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 50%, #FB923C 100%)',

  // Hero gradient
  hero: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',

  // Accent gradients for CTAs
  ctaPrimary: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
  ctaSecondary: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
} as const;

/**
 * Service Domain Colors
 * Maps each service domain to its primary color
 */
export const serviceDomains = {
  'cloud-infrastructure': colors.it.primary,
  'data-ai': colors.ai.primary,
  'security-compliance': colors.security.primary,
  'platform-engineering': colors.ayuda.primary,
  'project-management': colors.it.primary,
  'devops': colors.ayuda.primary,
  'database': colors.data.primary,
  'generative-ai': colors.ai.primary,
  'agentic-ai': colors.ml.primary,
  'machine-learning': colors.ml.primary,
  'data-engineering': colors.data.primary,
} as const;

/**
 * Audience-specific colors
 */
export const audienceColors = {
  startup: {
    primary: colors.ml.primary,    // Teal - agility, innovation
    accent: colors.ayuda.primary,  // Orange - help, quick wins
  },
  enterprise: {
    primary: colors.it.primary,    // Blue - stability, trust
    accent: colors.security.primary, // Green - security, compliance
  },
} as const;

/**
 * Utility function to get color by domain
 */
export function getDomainColor(domain: keyof typeof serviceDomains): string {
  return serviceDomains[domain] || colors.it.primary;
}

/**
 * Utility function to get gradient by type
 */
export function getGradient(type: keyof typeof gradients): string {
  return gradients[type];
}
