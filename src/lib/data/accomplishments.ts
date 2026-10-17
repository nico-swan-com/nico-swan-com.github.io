import type { Accomplishment } from './types'

/**
 * Accomplishments data with icon names instead of React components.
 * Icons are resolved at render time, keeping data layer clean.
 */
export const accomplishments: Accomplishment[] = [
  {
    id: 'regulatory',
    iconName: 'Shield',
    title: 'Bridging TradFi & DeFi',
    description:
      'Operating at the intersection of banking standards and crypto innovation. Specializing in architecting platforms that navigate complex regulatory frameworks (KYC/AML) without sacrificing speed or agility.'
  },
  {
    id: 'revenue',
    iconName: 'TrendingUp',
    title: "The 'Why' Behind the Code",
    description:
      'Speaking two languages fluently: TypeScript and Business Risk. Helping stakeholders understand why technical decisions matter to the bottom line, ensuring we build the right things for the right reasons.'
  },
  {
    id: 'leadership',
    iconName: 'Users',
    title: 'Force-Multiplier Leadership',
    description:
      'I take ownership of team and organizational standards. I proactively identify areas for improvement, propose and document changes, and champion the adoption of best practices to move the organization toward a more effective and unified standard.'
  }
]
