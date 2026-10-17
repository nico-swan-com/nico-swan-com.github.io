import type { LucideIcon } from 'lucide-react'

/**
 * Core data types for the portfolio site.
 * These types define the contract for all data sources (static, Sanity, DB).
 */

// =============================================================================
// Impact Metrics
// =============================================================================

export type IconName =
  | 'TrendingUp'
  | 'Users'
  | 'Shield'
  | 'Award'
  | 'Briefcase'
  | 'Calendar'

export interface ImpactMetric {
  iconName: IconName
  value: string
  label: string
  description?: string
}

// =============================================================================
// Testimonials
// =============================================================================

export interface Testimonial {
  id: string
  name: string
  title: string
  role: string
  relationship?: string
  date?: string
  quote: string
}

// =============================================================================
// Tech Stack
// =============================================================================

export interface TechCategory {
  category: string
  items: string[]
}

export interface DomainExpertise {
  name: string
  highlight: boolean
}

// =============================================================================
// Accomplishments
// =============================================================================

export interface Accomplishment {
  id: string
  iconName: IconName
  title: string
  description: string
}

// =============================================================================
// Icon Mapping Utility Type
// =============================================================================

export type IconMap = Record<IconName, LucideIcon>
