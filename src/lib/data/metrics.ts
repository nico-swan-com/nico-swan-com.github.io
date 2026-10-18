import type { ImpactMetric } from './types'

/**
 * Single source of truth for impact metrics.
 * Previously duplicated in 5+ files.
 */
export const impactMetrics: ImpactMetric[] = [
  {
    iconName: 'Shield',
    value: '12 Oct 2026',
    label: 'Client API signing live in production',
    description:
      'Holder-of-Key signed requests aligned with FAPI 1.0 and Open Banking UK v4.0; first clients onboarding'
  },
  {
    iconName: 'Briefcase',
    value: 'Angular 8 → 18',
    label: 'Legacy admin console upgraded',
    description:
      'Plus Node 16 to 20; delivered one of the main tech-debt KPIs at BCB'
  },
  {
    iconName: 'Users',
    value: '34',
    label: 'Engineers managed, US and India',
    description: '24/7 global support department at TEOCO'
  },
  {
    iconName: 'TrendingUp',
    value: '$3.7M',
    label: 'Revenue at TEOCO',
    description:
      '$3M support revenue on a $20M project, plus $700K from professional services'
  }
]
