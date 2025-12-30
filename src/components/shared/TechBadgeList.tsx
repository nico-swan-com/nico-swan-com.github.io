import { Badge } from '@/components/ui/badge'

// =============================================================================
// Tech Badge List
// =============================================================================

interface TechBadgeListProps {
  /**
   * List of technology names to display.
   */
  technologies: string[]
  /**
   * Maximum number of badges to show before "+N" indicator.
   * @default undefined (show all)
   */
  maxItems?: number
  /**
   * Badge variant.
   * @default "outline"
   */
  variant?: 'default' | 'outline' | 'secondary' | 'destructive'
  /**
   * Additional CSS classes for each badge.
   */
  badgeClassName?: string
  /**
   * Whether to center the badges.
   * @default false
   */
  centered?: boolean
}

/**
 * Reusable technology badges list component.
 * Replaces duplicated badge lists across multiple pages.
 */
export function TechBadgeList({
  technologies,
  maxItems,
  variant = 'outline',
  badgeClassName = 'border-accent text-secondary',
  centered = false
}: TechBadgeListProps) {
  const displayTech = maxItems ? technologies.slice(0, maxItems) : technologies
  const remainingCount = maxItems ? technologies.length - maxItems : 0

  return (
    <div className={`flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>
      {displayTech.map((tech) => (
        <Badge key={tech} variant={variant} className={badgeClassName}>
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant={variant} className={badgeClassName}>
          +{remainingCount}
        </Badge>
      )}
    </div>
  )
}

// =============================================================================
// Domain Expertise List
// =============================================================================

interface DomainExpertiseItem {
  name: string
  highlight: boolean
}

interface DomainExpertiseListProps {
  /**
   * List of domain expertise items.
   */
  items: DomainExpertiseItem[]
}

/**
 * Domain expertise badges with highlight support.
 */
export function DomainExpertiseList({ items }: DomainExpertiseListProps) {
  return (
    <div className='flex flex-wrap gap-2'>
      {items.map((domain, index) => (
        <Badge
          key={index}
          variant={domain.highlight ? 'default' : 'outline'}
          className={
            domain.highlight
              ? 'bg-accent text-accent-foreground'
              : 'border-accent/50 text-secondary'
          }
        >
          {domain.name}
        </Badge>
      ))}
    </div>
  )
}
