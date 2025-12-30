import type { ImpactMetric } from './types'

/**
 * Single source of truth for impact metrics.
 * Previously duplicated in 5+ files.
 */
export const impactMetrics: ImpactMetric[] = [
  {
    iconName: 'TrendingUp',
    value: '$3.7M+',
    label: 'Revenue Generated',
    description: 'Through support services and custom solutions'
  },
  {
    iconName: 'Users',
    value: '34+',
    label: 'Engineers Led',
    description: '24/7 global teams across US, India, Australia'
  },
  {
    iconName: 'Shield',
    value: 'Compliance',
    label: 'Regulatory Expertise',
    description:
      'EMI licensing, SARS VAT, FICA verification, ABAC authorization systems'
  },
  {
    iconName: 'Award',
    value: '25+ Years',
    label: 'Industry Experience',
    description: 'Business management platforms, R&D, enterprise systems'
  }
]
