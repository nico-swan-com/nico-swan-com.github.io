import type { Accomplishment } from './types'

/**
 * Accomplishments data with icon names instead of React components.
 * Icons are resolved at render time, keeping data layer clean.
 */
export const accomplishments: Accomplishment[] = [
  {
    id: 'regulatory',
    iconName: 'Shield',
    title: 'Regulatory Compliance',
    description:
      'Expert in ABAC/RBAC authorization, approval workflows, audit trails, and financial compliance (EMI licensing, SARS VAT, FICA)'
  },
  {
    id: 'revenue',
    iconName: 'TrendingUp',
    title: 'Revenue Generation',
    description:
      'Generated $3.7M+ in revenue through support services and custom solutions at TEOCO'
  },
  {
    id: 'leadership',
    iconName: 'Users',
    title: 'Team Leadership',
    description:
      'Built and led 24/7 support operations with 34 engineers across US, India, and Australia'
  }
]
