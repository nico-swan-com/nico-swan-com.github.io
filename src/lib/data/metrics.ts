import type { ImpactMetric } from './types'

/**
 * Single source of truth for impact metrics.
 * Previously duplicated in 5+ files.
 */
export const impactMetrics: ImpactMetric[] = [
  {
    iconName: 'Shield',
    value: '2026',
    label: 'PKI-based client API auth released to production',
    description:
      'Holder-of-key authentication aligned with FAPI 1.0 and Open Banking UK v4.0'
  },
  {
    iconName: 'Briefcase',
    value: 'Modernised',
    label: 'Admin Console frontend and backend',
    description:
      'Angular, Node.js and NestJS brought up to current versions; delivered one of the main tech-debt KPIs at BCB'
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
