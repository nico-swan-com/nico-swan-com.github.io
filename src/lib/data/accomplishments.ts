import type { Accomplishment } from './types'

/**
 * Accomplishments data with icon names instead of React components.
 * Icons are resolved at render time, keeping data layer clean.
 */
export const accomplishments: Accomplishment[] = [
  {
    id: 'regulatory',
    iconName: 'Shield',
    title: 'Banking rules, crypto speed',
    description:
      'BCB is a regulated crypto and payments firm. The work there is building features clients want, such as self-service API keys and new payment rails, inside the controls a licence demands: four-eyes approvals, PSD2 one-time passwords, signed requests and a 12-month audit trail.'
  },
  {
    id: 'revenue',
    iconName: 'TrendingUp',
    title: "The 'Why' Behind the Code",
    description:
      'I explain technical risk in business terms. When I proposed signed client requests, the case was simple: a 29-day bearer token is a stolen-password problem waiting to happen, and a signature is only valid once.'
  },
  {
    id: 'leadership',
    iconName: 'Users',
    title: 'Making it work without me',
    description:
      'I write the design down before I build it, as PRDs, RFCs and runbooks, so other engineers can review it, support it and change it. At BCB I revived Tech Talk Fridays, ran the team while my manager was on leave, and showed the BA team how to prototype with AI, which they now do without engineers. I cut a full laptop rebuild from 1-2 weeks to just over 2 hours and made it reproducible for anyone.'
  }
]
