import {
  TrendingUp,
  Users,
  Shield,
  Award,
  Briefcase,
  Calendar
} from 'lucide-react'
import type { IconName, IconMap } from '@/lib/data/types'

/**
 * Maps icon names from data layer to actual Lucide icon components.
 * This keeps the data layer free of React components.
 */
export const iconMap: IconMap = {
  TrendingUp,
  Users,
  Shield,
  Award,
  Briefcase,
  Calendar
}

/**
 * Get icon component by name.
 * Returns the icon component for rendering.
 *
 * @example
 * const Icon = getIcon('TrendingUp')
 * return <Icon className="size-5 text-accent" />
 */
export function getIcon(name: IconName) {
  return iconMap[name]
}
