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
      'Holder-of-Key request signing under FAPI 1.0 and Open Banking UK v4.0'
  },
  {
    iconName: 'Briefcase',
    value: 'Angular 8 → 18',
    label: 'Legacy admin console upgraded',
    description: 'Node 16 to 20 upgrade delivering key tech-debt KPI'
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
    label: 'New revenue at TEOCO',
    description: 'Support services on $20M project plus custom solutions'
  }
]
